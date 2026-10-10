import React, { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import {
  Atom,
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  Cpu,
  Dna,
  FlaskConical,
  Layers3,
  LoaderCircle,
  Search,
  X
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import chapterIndex from '../../export/01-chapters-index.json';

type LibraryTab = 'notes' | 'mcqs' | 'flashcards' | 'past-paper-questions';

interface Chapter {
  _id: string;
  slug: string;
  title: string;
  order: number;
}

interface SubjectChapters {
  subject: string;
  chapters: Chapter[];
}

interface Topic {
  _id: string;
  slug: string;
  title: string;
  orderInChapter: number;
}

interface LibraryRecord {
  _id: string;
  subjectSlug: string;
  chapterSlug?: string;
  chapterTitle?: string;
  topicSlug?: string;
  topicTitle?: string;
  sectionLabel?: string;
  title?: string;
  summary?: string;
  mdxBody?: string;
  stem?: string;
  options?: { key: string; text: string }[];
  correctKey?: string;
  explanation?: string;
  prompt?: string;
  answer?: string;
  year?: number;
  session?: string;
  marks?: number;
  modelAnswer?: string;
  keyPoints?: string[];
}

const tabs: { id: LibraryTab; label: string; Icon: LucideIcon }[] = [
  { id: 'notes', label: 'Notes', Icon: BookOpen },
  { id: 'mcqs', label: 'MCQs', Icon: CircleHelp },
  { id: 'flashcards', label: 'Flashcards', Icon: Layers3 },
  { id: 'past-paper-questions', label: 'Past papers', Icon: ClipboardList }
];

const subjectIcons: Record<string, LucideIcon> = {
  biology: Dna,
  chemistry: FlaskConical,
  physics: Atom,
  maths: Calculator,
  computer: Cpu
};

function gradeFromSlug(slug: string) {
  return slug.match(/-(\d+)$/)?.[1] ?? '';
}

function subjectName(slug: string) {
  return slug.replace(/-\d+$/, '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function cleanMdx(body: string) {
  return body
    .replace(/<InlineNoteTag\b[^>]*\blabel="([^"]*)"[^>]*\/>/g, '**Related note: $1**')
    .replace(/<CaptionedImage\b[^>]*\balt="([^"]*)"[^>]*\bcaption="([^"]*)"[^>]*\/>/g, '> $2 ($1)');
}

function MarkdownContent({ source }: { source: string }) {
  return (
    <div className="study-markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
        {cleanMdx(source)}
      </ReactMarkdown>
    </div>
  );
}

function getAssetUrl(subject: string, chapter: Chapter, resource: string) {
  const orderPrefix = String(chapter.order).padStart(2, '0');
  return `/export/01-subjects/${subject}/ch-${orderPrefix}-${chapter.slug}/${resource}.json`;
}

function searchText(record: LibraryRecord) {
  return [record.title, record.topicTitle, record.summary, record.mdxBody, record.stem,
    record.explanation, record.prompt, record.answer, record.modelAnswer]
    .filter(Boolean).join(' ').toLocaleLowerCase();
}

export function StudyLibrary() {
  const index = chapterIndex as SubjectChapters[];
  const grades = useMemo(() => Array.from(new Set(index.map(item => gradeFromSlug(item.subject)))).filter(Boolean).sort(), [index]);
  const [grade, setGrade] = useState('11');
  const subjectsForGrade = useMemo(() => index.filter(item => gradeFromSlug(item.subject) === grade), [grade, index]);
  const [subject, setSubject] = useState('biology-11');
  const validSubject = subjectsForGrade.some(item => item.subject === subject) ? subject : subjectsForGrade[0]?.subject ?? '';
  const selectedSubject = index.find(item => item.subject === validSubject);
  const chapters = selectedSubject?.chapters ?? [];
  const [chapterSlug, setChapterSlug] = useState(chapters[0]?.slug ?? '');
  const selectedChapter = chapters.find(item => item.slug === chapterSlug) ?? chapters[0];

  const [tab, setTab] = useState<LibraryTab>('notes');
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTopicSlug, setSelectedTopicSlug] = useState('');
  const [records, setRecords] = useState<LibraryRecord[]>([]);
  const [query, setQuery] = useState('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [revealedIds, setRevealedIds] = useState<Set<string>>(() => new Set());
  const [topicsLoading, setTopicsLoading] = useState(false);
  const [recordsLoading, setRecordsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (validSubject !== subject) setSubject(validSubject);
    const nextChapter = index.find(item => item.subject === validSubject)?.chapters[0]?.slug ?? '';
    if (!chapters.some(item => item.slug === chapterSlug)) setChapterSlug(nextChapter);
  }, [chapterSlug, chapters, index, subject, validSubject]);

  useEffect(() => {
    if (!validSubject || !selectedChapter) return;
    const controller = new AbortController();
    setTopics([]);
    setRecords([]);
    setSelectedTopicSlug('');
    setQuery('');
    setAnswers({});
    setRevealedIds(new Set());
    setError('');
    setTopicsLoading(true);

    const url = getAssetUrl(validSubject, selectedChapter, 'topics');
    if (!url) {
      setError('The topic index for this chapter is unavailable.');
      setTopicsLoading(false);
      return () => controller.abort();
    }

    fetch(url, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error(`Topics could not be loaded (${response.status}).`);
        return response.json() as Promise<Topic[]>;
      })
      .then(data => {
        const ordered = [...data].sort((left, right) => left.orderInChapter - right.orderInChapter);
        setTopics(ordered);
        setSelectedTopicSlug(ordered[0]?.slug ?? '');
      })
      .catch(loadError => {
        if (loadError.name !== 'AbortError') setError(loadError.message || 'Topics could not be loaded.');
      })
      .finally(() => {
        if (!controller.signal.aborted) setTopicsLoading(false);
      });

    return () => controller.abort();
  }, [validSubject, selectedChapter?.slug]);

  useEffect(() => {
    if (!validSubject || !selectedChapter) return;
    const controller = new AbortController();
    setRecords([]);
    setRecordsLoading(true);
    setError('');
    setPage(0);
    const url = getAssetUrl(validSubject, selectedChapter, tab);

    if (!url) {
      setRecordsLoading(false);
      return () => controller.abort();
    }

    fetch(url, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error(`${tabs.find(item => item.id === tab)?.label ?? 'Materials'} could not be loaded (${response.status}).`);
        return response.json() as Promise<LibraryRecord[]>;
      })
      .then(data => setRecords(data))
      .catch(loadError => {
        if (loadError.name !== 'AbortError') setError(loadError.message || 'Study materials could not be loaded.');
      })
      .finally(() => {
        if (!controller.signal.aborted) setRecordsLoading(false);
      });

    return () => controller.abort();
  }, [validSubject, selectedChapter?.slug, tab]);

  const selectedTopic = topics.find(item => item.slug === selectedTopicSlug) ?? topics[0];
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const visibleRecords = useMemo(() => records.filter(record => {
    if (!normalizedQuery && selectedTopic && record.topicSlug !== selectedTopic.slug) return false;
    return !normalizedQuery || searchText(record).includes(normalizedQuery);
  }), [records, selectedTopic, normalizedQuery]);

  const visibleTopics = useMemo(() => {
    if (!normalizedQuery || tab !== 'notes') return topics;
    const noteMatches = new Set(records.filter(record => searchText(record).includes(normalizedQuery)).map(record => record.topicSlug));
    return topics.filter(topic => topic.title.toLocaleLowerCase().includes(normalizedQuery) || noteMatches.has(topic.slug));
  }, [normalizedQuery, records, tab, topics]);

  const activeNote = visibleRecords.find(record => record.topicSlug === selectedTopic?.slug) ?? visibleRecords[0];
  const pageSize = 8;
  const pageCount = Math.ceil(visibleRecords.length / pageSize);
  const pageRecords = visibleRecords.slice(page * pageSize, (page + 1) * pageSize);

  const selectGrade = (nextGrade: string) => {
    const nextSubject = index.find(item => gradeFromSlug(item.subject) === nextGrade);
    setGrade(nextGrade);
    setSubject(nextSubject?.subject ?? '');
    setChapterSlug(nextSubject?.chapters[0]?.slug ?? '');
    setQuery('');
  };

  const selectSubject = (nextSubject: string) => {
    const nextChapter = index.find(item => item.subject === nextSubject)?.chapters[0]?.slug ?? '';
    setSubject(nextSubject);
    setChapterSlug(nextChapter);
    setQuery('');
  };

  const selectChapter = (nextChapter: string) => {
    setChapterSlug(nextChapter);
    setQuery('');
  };

  const toggleReveal = (id: string) => {
    setRevealedIds(previous => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="study-library" aria-label="Study library">
      <aside className="study-sidebar">
        <div className="study-sidebar-brand">
          <span className="study-brand-mark"><BookOpen aria-hidden="true" /></span>
          <span><strong>Study library</strong><small>FBISE notes & practice</small></span>
        </div>

        <label className="study-grade-select">
          <span>YOUR GRADE</span>
          <span className="study-grade-control">
            <select value={grade} onChange={event => selectGrade(event.target.value)} aria-label="Select grade">
              {grades.map(item => <option value={item} key={item}>Grade {item}</option>)}
            </select>
            <ChevronDown aria-hidden="true" />
          </span>
        </label>

        <div className="study-side-section">
          <h2>Subjects</h2>
          <div className="study-subject-list">
            {subjectsForGrade.map(item => {
              const name = subjectName(item.subject);
              const Icon = subjectIcons[item.subject.replace(/-\d+$/, '')] ?? BookOpen;
              return (
                <button type="button" key={item.subject} onClick={() => selectSubject(item.subject)} className={`study-subject-button ${validSubject === item.subject ? 'is-active' : ''}`}>
                  <Icon aria-hidden="true" />
                  <span>{name}</span>
                  <small>{item.chapters.length}</small>
                </button>
              );
            })}
          </div>
        </div>

        <div className="study-side-section study-chapter-section">
          <div className="study-side-heading"><h2>Chapters</h2><span>{chapters.length}</span></div>
          <nav className="study-chapter-list" aria-label="Chapters">
            {chapters.map((item, index) => (
              <button type="button" key={item.slug} onClick={() => selectChapter(item.slug)} className={`study-chapter-button ${selectedChapter?.slug === item.slug ? 'is-active' : ''}`}>
                <span className="study-chapter-number">{index + 1}</span>
                <span className="study-chapter-title">{item.title}</span>
                {selectedChapter?.slug === item.slug && <ChevronRight aria-hidden="true" />}
              </button>
            ))}
          </nav>
        </div>
        <div className="study-sidebar-foot">Content from your exported course library</div>
      </aside>

      <main className="study-workspace">
        <header className="study-workspace-header">
          <div className="study-breadcrumb"><span>Grade {grade}</span><ChevronRight aria-hidden="true" /><span>{subjectName(validSubject)}</span><ChevronRight aria-hidden="true" /><strong>{selectedChapter?.title ?? 'Select a chapter'}</strong></div>
          <label className="study-search study-chapter-search">
            <Search aria-hidden="true" />
            <input value={query} onChange={event => { setQuery(event.target.value); setPage(0); }} placeholder="Search this chapter" aria-label="Search selected chapter" />
            {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X aria-hidden="true" /></button>}
          </label>
        </header>

        <div className="study-workspace-content">
          <div className="study-chapter-intro">
            <div>
              <span className="study-course-label">{subjectName(validSubject)} · GRADE {grade}</span>
              <h1>{selectedChapter?.title ?? 'Choose a chapter'}</h1>
              <p>{topics.length} topics <span>·</span> Choose a topic to open its study material</p>
            </div>
            {selectedTopic && <div className="study-topic-position">TOPIC {topics.indexOf(selectedTopic) + 1} OF {topics.length}</div>}
          </div>

          <nav className="study-resource-tabs" aria-label="Chapter resources">
            {tabs.map(({ id, label, Icon }) => (
              <button type="button" key={id} onClick={() => { setTab(id); setPage(0); }} className={tab === id ? 'is-active' : ''} aria-current={tab === id ? 'page' : undefined}>
                <Icon aria-hidden="true" /><span>{label}</span>
              </button>
            ))}
          </nav>

          <div className="study-content-grid">
            <aside className="study-topic-panel" aria-label="Topics in this chapter">
              <div className="study-topic-panel-heading"><span>TOPICS</span><span>{visibleTopics.length}</span></div>
              {topicsLoading ? <div className="study-side-loading"><LoaderCircle className="study-spinner" /> Loading topics</div> : visibleTopics.length === 0 ? (
                <div className="study-no-topics">No topics match your search.</div>
              ) : visibleTopics.map((item, index) => (
                <button type="button" key={item.slug} onClick={() => { setSelectedTopicSlug(item.slug); setQuery(''); setPage(0); }} className={`study-topic-button ${selectedTopic?.slug === item.slug && !query ? 'is-active' : ''}`}>
                  <span className="study-topic-number">{index + 1}</span><span>{item.title}</span>
                </button>
              ))}
            </aside>

            <section className="study-resource-panel" aria-live="polite">
              {selectedTopic && <div className="study-selected-topic"><span>{selectedTopic.title}</span>{query && <small>Search results in this chapter</small>}</div>}
              {error ? <div className="study-state study-error" role="alert">{error}</div> : recordsLoading || topicsLoading ? (
                <div className="study-state"><LoaderCircle className="study-spinner" aria-hidden="true" /><span>Loading {tabs.find(item => item.id === tab)?.label.toLowerCase()}…</span></div>
              ) : visibleRecords.length === 0 ? (
                <div className="study-state"><Search aria-hidden="true" /><strong>{query ? 'No results in this chapter' : 'No material for this topic yet'}</strong><span>{query ? 'Try another search phrase.' : 'Choose another topic or resource.'}</span></div>
              ) : tab === 'notes' ? (
                <article className="study-article">
                  <div className="study-article-meta"><span>{subjectName(validSubject)} · Grade {grade}</span><span>{selectedChapter?.title}</span></div>
                  <h2>{activeNote?.title || activeNote?.topicTitle || selectedTopic?.title}</h2>
                  {activeNote?.summary && <p className="study-summary">{activeNote.summary}</p>}
                  {activeNote?.mdxBody && <MarkdownContent source={activeNote.mdxBody} />}
                  {!activeNote?.mdxBody && <p className="study-muted-message">No written notes are available for this topic yet.</p>}
                </article>
              ) : (
                <div className="study-question-list">
                  {pageRecords.map((record, index) => {
                    const revealed = revealedIds.has(record._id);
                    return (
                      <article className="study-practice-item" key={record._id}>
                        <div className="study-practice-meta">
                          <span><MarkdownContent source={record.sectionLabel || record.topicTitle || selectedTopic?.title || ''} /></span>
                          {tab === 'past-paper-questions' ? <span>{record.year ? `${record.year} · ` : ''}{record.session || 'Board exam'}{record.marks ? ` · ${record.marks} marks` : ''}</span> : <span>Question {page * pageSize + index + 1}</span>}
                        </div>
                        <div className="study-question-title"><MarkdownContent source={record.stem || record.prompt || ''} /></div>
                        {tab === 'mcqs' && <>
                          <div className="study-options">
                            {record.options?.map(option => {
                              const correct = revealed && record.correctKey === option.key;
                              const selected = answers[record._id] === option.key;
                              const incorrect = revealed && selected && !correct;
                              return <button key={option.key} type="button" disabled={revealed} onClick={() => {
                                setAnswers(previous => ({ ...previous, [record._id]: option.key }));
                                setRevealedIds(previous => new Set(previous).add(record._id));
                              }} className={`study-option ${selected ? 'is-selected' : ''} ${correct ? 'is-correct' : ''} ${incorrect ? 'is-incorrect' : ''}`}>
                                <span className="study-option-key">{correct ? <Check aria-hidden="true" /> : option.key}</span>
                                <span className="study-option-copy"><MarkdownContent source={option.text} /></span>
                              </button>;
                            })}
                          </div>
                          {revealed && <div className={`study-explanation ${answers[record._id] === record.correctKey ? 'is-correct' : 'is-incorrect'}`}>
                            <strong>{answers[record._id] === record.correctKey ? 'Correct' : `Answer: ${record.correctKey}`}</strong>
                            {record.explanation && <MarkdownContent source={record.explanation} />}
                          </div>}
                        </>}
                        {tab === 'flashcards' && <>
                          {revealed ? <div className="study-flash-answer"><span>ANSWER</span><MarkdownContent source={record.answer || ''} /></div> : <button type="button" className="study-reveal" onClick={() => toggleReveal(record._id)}>Reveal answer</button>}
                        </>}
                        {tab === 'past-paper-questions' && <>
                          {record.keyPoints && <div className="study-key-points">{record.keyPoints.map(point => <div className="study-key-point" key={point}><MarkdownContent source={point} /></div>)}</div>}
                          {revealed ? <div className="study-flash-answer"><span>MODEL ANSWER</span><MarkdownContent source={record.modelAnswer || 'No model answer is available for this question.'} /></div> : <button type="button" className="study-reveal" onClick={() => toggleReveal(record._id)}>Show model answer</button>}
                        </>}
                      </article>
                    );
                  })}
                  {pageCount > 1 && <div className="study-pagination">
                    <button type="button" onClick={() => setPage(value => Math.max(0, value - 1))} disabled={page === 0}><ChevronLeft aria-hidden="true" /> Previous</button>
                    <span>{page + 1} / {pageCount}</span>
                    <button type="button" onClick={() => setPage(value => Math.min(pageCount - 1, value + 1))} disabled={page + 1 === pageCount}>Next <ChevronRight aria-hidden="true" /></button>
                  </div>}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </section>
  );
}