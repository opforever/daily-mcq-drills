import { MCQ, OptionKey, Subject } from '../types';

export interface ParsedDrillResult {
  success: boolean;
  error?: string;
  drillData?: {
    dayNumber?: number;
    drillNumber?: number;
    title?: string;
    chapter?: string;
    subject?: Subject;
    questions: MCQ[];
  };
}

/**
 * Super-resilient parser for Google AI Studio outputs.
 * Handles:
 * 1. Valid JSON.
 * 2. JSON with unescaped LaTeX backslashes (\vec, \alpha, \omega, \frac, etc.).
 * 3. JSON with raw newlines inside string literals (common when copying wrapped text).
 * 4. Trailing commas or missing quotes.
 * 5. Fallback Regex object extraction (extracts fields directly from JSON-like text).
 * 6. Plaintext numbered MCQ lists (1. Question... A)... B)... Answer: ...).
 */
export function parseDailyDrillInput(rawInput: string, defaultSubject: Subject = 'physics'): ParsedDrillResult {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return { success: false, error: 'Input is empty. Please paste your MCQs.' };
  }

  // Strip Markdown code fences ```json ... ``` if present
  let cleanInput = trimmed;
  if (cleanInput.startsWith('```')) {
    cleanInput = cleanInput.replace(/^```[a-zA-Z]*\s*\n?/, '').replace(/\n?```\s*$/, '').trim();
  }

  // Attempt 1: Direct JSON.parse
  try {
    const parsed = JSON.parse(cleanInput);
    const res = parseJsonObject(parsed, defaultSubject);
    if (res.success && res.drillData && res.drillData.questions.length > 0) {
      return res;
    }
  } catch {
    // Continue to repair
  }

  // Attempt 2: Repaired JSON
  // Fix raw newlines inside strings and unescaped backslashes
  try {
    const repairedJson = repairJsonString(cleanInput);
    const parsed = JSON.parse(repairedJson);
    const res = parseJsonObject(parsed, defaultSubject);
    if (res.success && res.drillData && res.drillData.questions.length > 0) {
      return res;
    }
  } catch {
    // Continue to regex extractor
  }

  // Attempt 3: Robust Regex Object Extractor
  // Directly extracts JSON-like questions even if there are syntax errors or broken quotes
  const regexResult = extractQuestionsWithRegex(cleanInput, defaultSubject);
  if (regexResult.success && regexResult.drillData && regexResult.drillData.questions.length > 0) {
    return regexResult;
  }

  // Attempt 4: Plain text numbered parser (e.g. 1. Question... A)... Answer: ...)
  return parsePlainTextMCQs(trimmed, defaultSubject);
}

/**
 * Repairs broken JSON from LLMs:
 * 1. Escapes lone backslashes so LaTeX commands (\vec, \alpha, \omega, \theta) don't break JSON.parse.
 * 2. Replaces raw newlines inside string literals with spaces.
 * 3. Removes trailing commas before } and ].
 */
function repairJsonString(jsonStr: string): string {
  let result = '';
  let inString = false;
  let isEscaped = false;

  for (let i = 0; i < jsonStr.length; i++) {
    const char = jsonStr[i];

    if (inString) {
      if (isEscaped) {
        // Character following a backslash
        isEscaped = false;
        // In JSON, valid escapes are: ", \, /, b, f, n, r, t, u
        // If it's a LaTeX command like \vec, \alpha, \omega, \frac, \circ, \Delta:
        // double-escape it so JSON.parse keeps the backslash for KaTeX!
        if (['"', '\\', '/', 'b', 'f', 'n', 'r', 't', 'u'].includes(char)) {
          // If followed by typical LaTeX letters like \text, \theta, \times, \tau, \tan:
          // In JSON \t is tab, but here it's meant to be LaTeX \text!
          const nextFour = jsonStr.slice(i, i + 4);
          if (char === 't' && /^[a-zA-Z]/.test(jsonStr[i + 1] || '')) {
            result += '\\' + char; // double escape \text, \theta, etc.
          } else {
            result += char;
          }
        } else {
          // Invalid JSON escape, e.g. \v, \a, \o, \f, \d -> turn into \\v, \\a, etc.
          result += '\\' + char;
        }
      } else if (char === '\\') {
        isEscaped = true;
        result += '\\';
      } else if (char === '"') {
        inString = false;
        result += '"';
      } else if (char === '\n' || char === '\r') {
        // Raw newline inside string! Replace with a space so JSON doesn't throw Bad control character
        result += ' ';
      } else {
        result += char;
      }
    } else {
      if (char === '"') {
        inString = true;
        result += '"';
      } else {
        result += char;
      }
    }
  }

  // Remove trailing commas before } or ]
  result = result.replace(/,\s*([}\]])/g, '$1');

  return result;
}

/**
 * Fallback regex extractor that scans the raw text for question blocks.
 * Works even if JSON is severely malformed.
 */
function extractQuestionsWithRegex(rawText: string, defaultSubject: Subject): ParsedDrillResult {
  // Extract top-level metadata if present
  let dayNumber: number | undefined;
  let drillNumber: number | undefined;
  let title: string | undefined;
  let chapter: string | undefined;
  let subject: Subject = defaultSubject;

  const dayMatch = rawText.match(/"dayNumber"\s*:\s*(\d+)/i) || rawText.match(/"day"\s*:\s*(\d+)/i);
  if (dayMatch) dayNumber = parseInt(dayMatch[1]);

  const drillMatch = rawText.match(/"drillNumber"\s*:\s*(\d+)/i);
  if (drillMatch) drillNumber = parseInt(drillMatch[1]);

  const titleMatch = rawText.match(/"title"\s*:\s*"([^"]+)"/i);
  if (titleMatch) title = titleMatch[1].replace(/\\"/g, '"');

  const chapterMatch = rawText.match(/"chapter"\s*:\s*"([^"]+)"/i);
  if (chapterMatch) chapter = chapterMatch[1].replace(/\\"/g, '"');

  const subjectMatch = rawText.match(/"subject"\s*:\s*"([^"]+)"/i);
  if (subjectMatch && ['physics', 'chemistry', 'biology'].includes(subjectMatch[1].toLowerCase())) {
    subject = subjectMatch[1].toLowerCase() as Subject;
  }

  // Split or match questions by "question": or "id":
  const questions: MCQ[] = [];

  // Match question patterns: "question": "..."
  // We can look for { ... "question": ... "options": ... "correctAnswer": ... "explanation": ... }
  // Split roughly on { "id": or { "question":
  const questionBlocks = rawText.split(/(?=\{\s*(?:"id"|"question")\s*:)/g);

  for (let i = 0; i < questionBlocks.length; i++) {
    const block = questionBlocks[i];
    if (!block.includes('"question"') && !block.includes('"options"')) continue;

    // Extract question statement
    const qMatch = block.match(/"question"\s*:\s*"([\s\S]*?)(?<!\\)"/);
    if (!qMatch) continue;
    const questionText = cleanStringLiteral(qMatch[1]);

    // Extract options
    const optA = block.match(/"A"\s*:\s*"([\s\S]*?)(?<!\\)"/);
    const optB = block.match(/"B"\s*:\s*"([\s\S]*?)(?<!\\)"/);
    const optC = block.match(/"C"\s*:\s*"([\s\S]*?)(?<!\\)"/);
    const optD = block.match(/"D"\s*:\s*"([\s\S]*?)(?<!\\)"/);

    const options = {
      A: optA ? cleanStringLiteral(optA[1]) : '',
      B: optB ? cleanStringLiteral(optB[1]) : '',
      C: optC ? cleanStringLiteral(optC[1]) : '',
      D: optD ? cleanStringLiteral(optD[1]) : ''
    };

    // Extract correct answer
    const ansMatch = block.match(/"correctAnswer"\s*:\s*"([A-D])"/i) || block.match(/"answer"\s*:\s*"([A-D])"/i);
    const correctAnswer: OptionKey = ansMatch ? (ansMatch[1].toUpperCase() as OptionKey) : 'A';

    // Extract explanation
    const expMatch = block.match(/"explanation"\s*:\s*"([\s\S]*?)(?<!\\)"/);
    const explanation = expMatch ? cleanStringLiteral(expMatch[1]) : 'Refer to FBISE textbook.';

    // Extract id
    const idMatch = block.match(/"id"\s*:\s*"([^"]+)"/);
    const id = idMatch ? idMatch[1] : `q-${questions.length + 1}-${Date.now()}`;

    if (questionText && (options.A || options.B)) {
      questions.push({
        id,
        question: questionText,
        options,
        correctAnswer,
        explanation
      });
    }
  }

  if (questions.length === 0) {
    return {
      success: false,
      error: 'Could not detect questions in the pasted text. Please verify formatting.'
    };
  }

  return {
    success: true,
    drillData: {
      dayNumber: dayNumber || 1,
      drillNumber: drillNumber || dayNumber || 1,
      title: title || 'Daily MCQ Drill',
      chapter: chapter || 'General Syllabus',
      subject,
      questions
    }
  };
}

function cleanStringLiteral(str: string): string {
  return str
    .replace(/\\n/g, ' ')
    .replace(/\\"/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseJsonObject(parsed: any, defaultSubject: Subject): ParsedDrillResult {
  let questionsArray: any[] = [];
  let dayNumber: number | undefined;
  let drillNumber: number | undefined;
  let title: string | undefined;
  let chapter: string | undefined;
  let subject: Subject = defaultSubject;

  if (Array.isArray(parsed)) {
    questionsArray = parsed;
  } else if (typeof parsed === 'object' && parsed !== null) {
    if (Array.isArray(parsed.questions)) {
      questionsArray = parsed.questions;
    } else if (Array.isArray(parsed.mcqs)) {
      questionsArray = parsed.mcqs;
    }
    dayNumber = parsed.dayNumber || parsed.day || parsed.drillNumber;
    drillNumber = parsed.drillNumber || parsed.dayNumber;
    title = parsed.title || parsed.topic;
    chapter = parsed.chapter || parsed.unit;
    if (parsed.subject && ['physics', 'chemistry', 'biology'].includes(parsed.subject.toLowerCase())) {
      subject = parsed.subject.toLowerCase() as Subject;
    }
  }

  if (questionsArray.length === 0) {
    return {
      success: false,
      error: 'Could not find a valid questions array in the JSON.'
    };
  }

  const validQuestions: MCQ[] = [];

  for (let i = 0; i < questionsArray.length; i++) {
    const q = questionsArray[i];
    const questionText = q.question || q.prompt || q.text || `Question ${i + 1}`;

    let options: { A: string; B: string; C: string; D: string } = {
      A: '',
      B: '',
      C: '',
      D: ''
    };

    if (q.options && typeof q.options === 'object') {
      if (Array.isArray(q.options)) {
        options.A = String(q.options[0] || '').replace(/^[A-Da-d][\)\.\:\-]\s*/, '').trim();
        options.B = String(q.options[1] || '').replace(/^[A-Da-d][\)\.\:\-]\s*/, '').trim();
        options.C = String(q.options[2] || '').replace(/^[A-Da-d][\)\.\:\-]\s*/, '').trim();
        options.D = String(q.options[3] || '').replace(/^[A-Da-d][\)\.\:\-]\s*/, '').trim();
      } else {
        options.A = String(q.options.A || q.options.a || '').trim();
        options.B = String(q.options.B || q.options.b || '').trim();
        options.C = String(q.options.C || q.options.c || '').trim();
        options.D = String(q.options.D || q.options.d || '').trim();
      }
    }

    let rawAns = String(q.correctAnswer || q.answer || q.key || q.correct || 'A').toUpperCase().trim();
    let correctAnswer: OptionKey = 'A';
    if (['A', 'B', 'C', 'D'].includes(rawAns)) {
      correctAnswer = rawAns as OptionKey;
    } else {
      const match = rawAns.match(/\b([A-D])\b/);
      if (match) correctAnswer = match[1] as OptionKey;
    }

    const explanation = q.explanation || q.reason || q.solution || 'Refer to FBISE textbook.';

    validQuestions.push({
      id: q.id || `q-${i + 1}-${Date.now()}`,
      question: questionText,
      options,
      correctAnswer,
      explanation
    });
  }

  return {
    success: true,
    drillData: {
      dayNumber,
      drillNumber,
      title,
      chapter,
      subject,
      questions: validQuestions
    }
  };
}

function parsePlainTextMCQs(text: string, defaultSubject: Subject): ParsedDrillResult {
  const lines = text.split('\n');
  const questions: MCQ[] = [];

  let currentQuestion: Partial<MCQ> | null = null;
  let currentOptions: Record<OptionKey, string> = { A: '', B: '', C: '', D: '' };
  let currentExplanation = '';
  let inExplanation = false;

  const saveCurrentQuestion = () => {
    if (currentQuestion && currentQuestion.question) {
      questions.push({
        id: `parsed-${questions.length + 1}-${Date.now()}`,
        question: currentQuestion.question.trim(),
        options: { ...currentOptions },
        correctAnswer: (currentQuestion.correctAnswer || 'A') as OptionKey,
        explanation: currentExplanation.trim() || 'Refer to FBISE textbook for in-depth discussion.'
      });
    }
    currentQuestion = null;
    currentOptions = { A: '', B: '', C: '', D: '' };
    currentExplanation = '';
    inExplanation = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();
    if (!line) continue;

    const qMatch = line.match(/^(\d+)[\.\)\:\-]\s+(.*)$/) || line.match(/^[Qq](?:uestion)?\s*(\d+)[\.\:\-]\s*(.*)$/);
    if (qMatch) {
      saveCurrentQuestion();
      currentQuestion = {
        question: qMatch[2] || line,
        correctAnswer: 'A'
      };
      continue;
    }

    const optMatch = line.match(/^[\(\[]?([A-Da-d])[\)\]\.\:\-]\s*(.*)$/);
    if (optMatch && currentQuestion) {
      inExplanation = false;
      const key = optMatch[1].toUpperCase() as OptionKey;
      currentOptions[key] = optMatch[2].trim();
      continue;
    }

    const ansMatch = line.match(/^(?:Answer|Ans|Key|Correct(?:\s*Option)?)\s*[\:\=\-]\s*[\(\[]?([A-Da-d])[\)\]]?/i);
    if (ansMatch && currentQuestion) {
      currentQuestion.correctAnswer = ansMatch[1].toUpperCase() as OptionKey;
      continue;
    }

    const expMatch = line.match(/^(?:Explanation|Reason|Solution)\s*[\:\=\-]\s*(.*)$/i);
    if (expMatch && currentQuestion) {
      inExplanation = true;
      currentExplanation = expMatch[1] ? expMatch[1] + ' ' : '';
      continue;
    }

    if (inExplanation) {
      currentExplanation += line + ' ';
    } else if (currentQuestion && !currentOptions.A) {
      currentQuestion.question += ' ' + line;
    }
  }

  saveCurrentQuestion();

  if (questions.length === 0) {
    return {
      success: false,
      error: 'Could not extract MCQs. Make sure questions start with "1. " and options start with "A) ", "B) ", etc.'
    };
  }

  return {
    success: true,
    drillData: {
      subject: defaultSubject,
      questions
    }
  };
}
