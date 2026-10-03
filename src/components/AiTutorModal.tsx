import React, { useState, useEffect, useRef } from 'react';
import { User, Subject, Drill } from '../types';
import { LatexRenderer } from '../utils/latexRenderer';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User as UserIcon, 
  Trash2, 
  RefreshCw, 
  HelpCircle, 
  BookOpen, 
  Lightbulb, 
  Maximize2, 
  Minimize2,
  Atom,
  FlaskConical,
  Dna,
  Key,
  Info,
  Zap,
  Target,
  GraduationCap
} from 'lucide-react';

export interface AiChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export type ExplanationDepth = 'short' | 'mid' | 'full';

interface AiTutorModalProps {
  currentUser: User;
  activeSubject: Subject;
  activeDrill?: Drill | null;
  onClose: () => void;
}

const depthOptions: { id: ExplanationDepth; label: string; shortLabel: string; desc: string; icon: any; activeClass: string }[] = [
  { 
    id: 'short', 
    label: 'Quick Fact', 
    shortLabel: 'Short',
    desc: 'Core formula & definition (~200 tokens)', 
    icon: Zap, 
    activeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm shadow-amber-500/10'
  },
  { 
    id: 'mid', 
    label: 'Standard Concept', 
    shortLabel: 'Mid',
    desc: 'Balanced step-by-step logic (~600 tokens)', 
    icon: Target, 
    activeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm shadow-cyan-500/10'
  },
  { 
    id: 'full', 
    label: 'Full Mastery', 
    shortLabel: 'Full Concept',
    desc: 'Full derivations, tables & mnemonics (~1500 tokens)', 
    icon: GraduationCap, 
    activeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm shadow-emerald-500/10'
  }
];

export const AiTutorModal: React.FC<AiTutorModalProps> = ({
  currentUser,
  activeSubject: initialSubject,
  activeDrill,
  onClose
}) => {
  // Current active subject in the AI Tutor (can switch between Physics, Chemistry, Biology)
  const [selectedSubject, setSelectedSubject] = useState<Subject>(initialSubject);
  const [depth, setDepth] = useState<ExplanationDepth>('mid');
  const [includeMnemonic, setIncludeMnemonic] = useState<boolean>(true);
  const [includeExamTraps, setIncludeExamTraps] = useState<boolean>(true);
  const [showKeyHelp, setShowKeyHelp] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getInitialWelcomeMessage = (subj: Subject): AiChatMessage => {
    const firstName = currentUser.fullName?.split(' ')[0] || currentUser.username;
    const subjectName = subj.charAt(0).toUpperCase() + subj.slice(1);
    
    let subjectDetail = '';
    if (subj === 'physics') {
      subjectDetail = 'Vectors, Circular Motion, Work-Energy Theorem, Fluid Dynamics & Oscillations.';
    } else if (subj === 'chemistry') {
      subjectDetail = 'Chemical Equilibrium ($K_c$, $K_p$), Gas Laws ($PV=nRT$), Atomic Structure, Thermochemistry & Reaction Kinetics.';
    } else {
      subjectDetail = 'Cell Structure, Biological Molecules, Enzymes, Bioenergetics (Glycolysis, Krebs) & Kingdom Animalia.';
    }

    return {
      id: `welcome_${subj}_1`,
      role: 'assistant',
      content: `👋 **Assalam-o-Alaikum, ${firstName}!**\n\nI am your dedicated **${subjectName} AI Tutor** (powered by GPT 120B) for FBISE 1st Year.\n\n📚 **Topic Focus:** ${subjectDetail}\n\n${
        activeDrill && activeDrill.subject === subj
          ? `I see you are currently practicing **${activeDrill.title}** (${activeDrill.chapter}). Ask me for formula derivations or conceptual reasoning anytime!`
          : `Ask me any conceptual doubt, textbook numerical, or MCQ pitfall to get started.`
      }`,
      timestamp: Date.now()
    };
  };

  // State to hold messages per subject (Pure in-memory, resets on page refresh)
  const [subjectMessages, setSubjectMessages] = useState<Record<Subject, AiChatMessage[]>>(() => {
    // Clear any legacy sessionStorage keys from earlier versions
    try {
      ['physics', 'chemistry', 'biology'].forEach(s => {
        sessionStorage.removeItem(`kips_ai_temp_chat_${currentUser.username.toLowerCase()}_${s}`);
        sessionStorage.removeItem(`kips_ai_temp_chat_${currentUser.username.toLowerCase()}`);
      });
    } catch {}

    return {
      physics: [getInitialWelcomeMessage('physics')],
      chemistry: [getInitialWelcomeMessage('chemistry')],
      biology: [getInitialWelcomeMessage('biology')]
    };
  });

  // Current messages for active selected subject
  const currentMessages = subjectMessages[selectedSubject] || [];

  // Auto-scroll to bottom smoothly when new message arrives or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentMessages.length, isLoading]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: AiChatMessage = {
      id: `msg_u_${Date.now()}`,
      role: 'user',
      content: textToSend.trim(),
      timestamp: Date.now()
    };

    const updatedCurrentList = [...currentMessages, userMsg];
    
    setSubjectMessages(prev => ({
      ...prev,
      [selectedSubject]: updatedCurrentList
    }));

    if (!customPrompt) setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedCurrentList.filter(m => !m.id.startsWith('welcome_')),
          userContext: {
            username: currentUser.username,
            fullName: currentUser.fullName,
            role: currentUser.role,
            college: currentUser.college,
            activeSubject: selectedSubject,
            responseDepth: depth,
            includeMnemonic,
            includeExamTraps,
            activeDrill: activeDrill && activeDrill.subject === selectedSubject ? {
              dayNumber: activeDrill.dayNumber,
              title: activeDrill.title,
              chapter: activeDrill.chapter
            } : null
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const assistantMsg: AiChatMessage = {
        id: `msg_a_${Date.now()}`,
        role: 'assistant',
        content: data.content || 'I could not generate an answer. Please try again.',
        timestamp: Date.now()
      };

      setSubjectMessages(prev => ({
        ...prev,
        [selectedSubject]: [...prev[selectedSubject], assistantMsg]
      }));
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMsg: AiChatMessage = {
        id: `msg_err_${Date.now()}`,
        role: 'assistant',
        content: `⚠️ **Connection Error:** Could not contact the AI Tutor service. Please ensure your internet connection is active and \`GROQ_API_KEY\` is configured.`,
        timestamp: Date.now()
      };
      setSubjectMessages(prev => ({
        ...prev,
        [selectedSubject]: [...prev[selectedSubject], errorMsg]
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const [clearedToast, setClearedToast] = useState(false);

  const handleClearCurrentChat = () => {
    const resetList = [getInitialWelcomeMessage(selectedSubject)];
    setSubjectMessages(prev => ({
      ...prev,
      [selectedSubject]: resetList
    }));
    setClearedToast(true);
    setTimeout(() => setClearedToast(false), 2000);
  };

  // Subject quick prompt suggestions
  const subjectSuggestions: Record<Subject, string[]> = {
    physics: [
      'Explain centripetal vs tangential acceleration',
      'Derive Work-Energy Theorem for FBISE',
      'Mnemonic for right-hand cross product',
      'How to solve projectile numericals easily?'
    ],
    chemistry: [
      'Explain Le Chatelier’s Principle with examples',
      'Difference between Real vs Ideal gases ($PV=nRT$)',
      'How to balance redox reactions by ion-electron method?',
      'Bohr’s Atomic Model radius derivation steps'
    ],
    biology: [
      'Explain Fluid Mosaic Model with key points',
      'Steps of Glycolysis and ATP net calculation',
      'Difference between Lytic vs Lysogenic cycle',
      'Competitive vs Non-competitive enzyme inhibition'
    ]
  };

  const suggestions = subjectSuggestions[selectedSubject] || subjectSuggestions.physics;

  const subjectsConfig = [
    { id: 'physics' as Subject, name: 'Physics', icon: Atom, color: 'text-cyan-400', activeBg: 'bg-cyan-950/80 border-cyan-500/50 text-cyan-300' },
    { id: 'chemistry' as Subject, name: 'Chemistry', icon: FlaskConical, color: 'text-emerald-400', activeBg: 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300' },
    { id: 'biology' as Subject, name: 'Biology', icon: Dna, color: 'text-rose-400', activeBg: 'bg-rose-950/80 border-rose-500/50 text-rose-300' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center bg-black/80 sm:p-4 backdrop-blur-sm animate-fadeIn overflow-hidden">
      {/* Main Responsive Chat Modal Container */}
      <div 
        className={`flex flex-col w-full bg-slate-900 border-t sm:border border-cyan-500/30 rounded-t-2xl sm:rounded-2xl shadow-2xl transition-all duration-200 overflow-hidden ${
          isExpanded 
            ? 'h-[100dvh] sm:h-[90vh] sm:max-w-4xl' 
            : 'h-[100dvh] sm:h-[650px] max-h-[100dvh] sm:max-h-[85vh] sm:max-w-2xl'
        }`}
      >
        {/* Top Header */}
        <div className="shrink-0 flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-3.5 py-2.5 sm:px-5 sm:py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 shadow-md shadow-cyan-500/20 text-white ring-1 ring-cyan-400/30">
              <Sparkles className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-cyan-200 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <span>KIPS AI Tutor</span>
                  <span className="rounded bg-cyan-950/90 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-cyan-300 border border-cyan-500/30">
                    GPT 120B
                  </span>
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-400">
                <span>FBISE 1st Year</span>
                <span>•</span>
                <span className="text-emerald-400">Separate Subject Sessions</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* Key Help Button */}
            <button
              onClick={() => setShowKeyHelp(!showKeyHelp)}
              title="Groq API Key Setup Info"
              className="flex items-center gap-1 rounded-lg border border-amber-500/30 bg-amber-950/40 px-2 py-1 text-[11px] font-semibold text-amber-300 hover:border-amber-400 hover:bg-amber-900/60 transition"
            >
              <Key className="h-3 w-3" />
              <span className="hidden xs:inline">API Key</span>
            </button>
            <button
              onClick={handleClearCurrentChat}
              title={`Clear ${selectedSubject} temporary chat`}
              className="relative rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-rose-400 transition cursor-pointer"
            >
              <Trash2 className="h-4 w-4" />
              {clearedToast && (
                <span className="absolute -bottom-7 right-0 whitespace-nowrap rounded bg-rose-950 border border-rose-500/40 px-1.5 py-0.5 text-[10px] font-bold text-rose-300 shadow-lg animate-fadeIn z-50">
                  Cleared!
                </span>
              )}
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Collapse' : 'Expand'}
              className="hidden sm:block rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition cursor-pointer"
            >
              {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={onClose}
              title="Close chat"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* API Key Instructions Drawer / Alert if toggled */}
        {showKeyHelp && (
          <div className="shrink-0 border-b border-amber-500/30 bg-amber-950/90 p-3 text-xs text-amber-100 animate-fadeIn">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-amber-300 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <div className="font-bold text-amber-200">How to configure your Groq API Key:</div>
                  <ol className="list-decimal list-inside space-y-0.5 text-[11px] text-amber-200/90 leading-normal">
                    <li>Get your free key from <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer" className="underline font-bold text-white">console.groq.com</a>.</li>
                    <li>In AI Studio: Open the <strong>Secrets panel</strong> & add <code className="bg-black/40 px-1 py-0.5 rounded text-amber-300 font-mono">GROQ_API_KEY</code> with your <code className="bg-black/40 px-1 py-0.5 rounded text-amber-300 font-mono">gsk_...</code> key.</li>
                    <li>If running locally: Add <code className="bg-black/40 px-1 py-0.5 rounded text-amber-300 font-mono">GROQ_API_KEY="gsk_..."</code> in your <code className="bg-black/40 px-1 py-0.5 rounded text-amber-300 font-mono">.env</code> file.</li>
                  </ol>
                </div>
              </div>
              <button 
                onClick={() => setShowKeyHelp(false)}
                className="text-amber-400 hover:text-white p-1"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Dedicated Subject Selector & Explanation Depth Control */}
        <div className="shrink-0 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-950/80 px-3 py-1.5">
          {/* Subject Switcher */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mr-0.5">Subject:</span>
            {subjectsConfig.map(sub => {
              const IconComp = sub.icon;
              const isSelected = selectedSubject === sub.id;
              const msgCount = subjectMessages[sub.id]?.filter(m => !m.id.startsWith('welcome_')).length || 0;
              return (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                    isSelected 
                      ? sub.activeBg 
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <IconComp className={`h-3.5 w-3.5 ${sub.color}`} />
                  <span>{sub.name}</span>
                  {msgCount > 0 && (
                    <span className="rounded-full bg-slate-800 px-1.5 py-0.2 text-[9px] text-slate-300">
                      {msgCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Controls: Depth Selector + Mnemonic & Exam Trap Toggles */}
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Depth / Detail Mode Selector (Short, Mid, Full Concept) */}
            <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-lg p-0.5 shadow-inner">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 px-1 hidden sm:inline">Depth:</span>
              {depthOptions.map(opt => {
                const Icon = opt.icon;
                const isCurrent = depth === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setDepth(opt.id)}
                    title={opt.desc}
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium transition cursor-pointer ${
                      isCurrent
                        ? opt.activeClass
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <Icon className="h-3 w-3 shrink-0" />
                    <span className="hidden md:inline">{opt.label}</span>
                    <span className="md:hidden">{opt.shortLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Optional Feature Toggles: Mnemonics & Exam Traps */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIncludeMnemonic(prev => !prev)}
                title={includeMnemonic ? "Mnemonic memory aids enabled" : "Mnemonic memory aids disabled"}
                className={`flex items-center gap-1 rounded-lg border px-2 py-0.5 text-[11px] font-medium transition cursor-pointer ${
                  includeMnemonic
                    ? 'border-amber-500/40 bg-amber-950/40 text-amber-300 shadow-sm shadow-amber-500/10'
                    : 'border-slate-800 bg-slate-900/60 text-slate-500 line-through decoration-slate-600'
                }`}
              >
                <Lightbulb className={`h-3 w-3 ${includeMnemonic ? 'text-amber-400' : 'text-slate-500'}`} />
                <span>Mnemonic</span>
              </button>

              <button
                type="button"
                onClick={() => setIncludeExamTraps(prev => !prev)}
                title={includeExamTraps ? "FBISE Exam Trap callouts enabled" : "FBISE Exam Trap callouts disabled"}
                className={`flex items-center gap-1 rounded-lg border px-2 py-0.5 text-[11px] font-medium transition cursor-pointer ${
                  includeExamTraps
                    ? 'border-rose-500/40 bg-rose-950/40 text-rose-300 shadow-sm shadow-rose-500/10'
                    : 'border-slate-800 bg-slate-900/60 text-slate-500 line-through decoration-slate-600'
                }`}
              >
                <span className="text-[10px]">🚨</span>
                <span>Exam Traps</span>
              </button>
            </div>
          </div>
        </div>

        {/* Active Context Banner */}
        {activeDrill && activeDrill.subject === selectedSubject && (
          <div className="shrink-0 flex items-center gap-2 border-b border-cyan-900/30 bg-cyan-950/30 px-3.5 py-1.5 text-xs text-cyan-300">
            <BookOpen className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
            <span className="truncate text-[11px]">
              <strong>Active Quiz:</strong> Day {activeDrill.dayNumber} — {activeDrill.title} ({activeDrill.chapter})
            </span>
          </div>
        )}

        {/* Message Thread Container - Uses flex-1 min-h-0 with overscroll-contain so mobile keyboard doesn't push initial message out */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-3 sm:p-4 space-y-3.5 text-xs sm:text-sm"
        >
          {currentMessages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div 
                key={msg.id} 
                className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-600 to-blue-700 text-white shadow ring-1 ring-white/10 mt-0.5">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <div 
                  className={`relative max-w-[88%] sm:max-w-[80%] rounded-2xl px-3.5 py-2.5 shadow-sm leading-relaxed ${
                    isUser 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-none' 
                      : 'border border-slate-800 bg-slate-950/90 text-slate-200 rounded-tl-none'
                  }`}
                >
                  <div className="prose prose-invert max-w-none text-xs sm:text-sm space-y-1">
                    <LatexRenderer content={msg.content} />
                  </div>
                  <div className={`mt-1 text-[10px] text-right ${isUser ? 'text-blue-200' : 'text-slate-500'}`}>
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                {isUser && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300 ring-1 ring-white/10 mt-0.5">
                    <UserIcon className="h-4 w-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-2.5 justify-start items-center">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-700 text-white shadow ring-1 ring-white/10">
                <Bot className="h-4 w-4" />
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-xs text-slate-400 flex items-center gap-2">
                <RefreshCw className="h-3.5 w-3.5 animate-spin text-cyan-400" />
                <span>KIPS AI Tutor ({selectedSubject}) is reasoning with GPT 120B...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Topic Suggestions */}
        <div className="shrink-0 border-t border-slate-800/80 bg-slate-950/60 px-3 py-1.5">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 flex items-center gap-1 shrink-0 mr-1">
              <Lightbulb className="h-3 w-3 text-amber-400" />
              Ask:
            </span>
            {suggestions.map((sug, i) => (
              <button
                key={i}
                disabled={isLoading}
                onClick={() => handleSendMessage(sug)}
                className="shrink-0 rounded-full border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[11px] text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-300 transition cursor-pointer"
              >
                {sug}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form Area */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }} 
          className="shrink-0 border-t border-slate-800 bg-slate-950 p-2.5 sm:p-3.5"
        >
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onFocus={() => {
                // Smooth scroll down slightly without jumping initial top content
                setTimeout(() => {
                  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 250);
              }}
              placeholder={`Ask a question in ${selectedSubject}...`}
              disabled={isLoading}
              className="flex-1 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20 transition ${
                !inputMessage.trim() || isLoading 
                  ? 'opacity-40 cursor-not-allowed' 
                  : 'hover:from-blue-500 hover:to-cyan-500 cursor-pointer'
              }`}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-1.5 flex items-center justify-between text-[9px] sm:text-[10px] text-slate-500 px-1">
            <span>Separate {selectedSubject} session • Mode: <strong className="text-cyan-400 font-semibold">{depthOptions.find(d => d.id === depth)?.label}</strong></span>
            <span>KaTeX Math & Tables supported</span>
          </div>
        </form>
      </div>
    </div>
  );
};
