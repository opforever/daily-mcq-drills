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
  Dna
} from 'lucide-react';

export interface AiChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

interface AiTutorModalProps {
  currentUser: User;
  activeSubject: Subject;
  activeDrill?: Drill | null;
  onClose: () => void;
}

export const AiTutorModal: React.FC<AiTutorModalProps> = ({
  currentUser,
  activeSubject,
  activeDrill,
  onClose
}) => {
  const sessionKey = `kips_ai_temp_chat_${currentUser.username.toLowerCase()}`;
  
  // Load session messages from sessionStorage (temporary, resets on browser refresh/close)
  const [messages, setMessages] = useState<AiChatMessage[]>(() => {
    try {
      const stored = sessionStorage.getItem(sessionKey);
      if (stored) return JSON.parse(stored);
    } catch {}
    
    // Initial welcome message tailored to current student
    const firstName = currentUser.fullName?.split(' ')[0] || currentUser.username;
    const subjectTitle = activeSubject.charAt(0).toUpperCase() + activeSubject.slice(1);
    
    return [
      {
        id: 'welcome_1',
        role: 'assistant',
        content: `👋 **Assalam-o-Alaikum, ${firstName}!**\n\nI am your **KIPS FBISE 1st Year AI Tutor** (powered by Qwen 27B). I specialize in **${subjectTitle}**, Federal Board syllabus, textbook derivations, numericals, and MCQ tips.\n\n${
          activeDrill 
            ? `I see you are currently practicing **${activeDrill.title}** (${activeDrill.chapter}). Feel free to ask me to explain any concept or tricky formula!` 
            : `Ask me anything from **Class 11 ${subjectTitle}** or click a quick prompt below to begin.`
        }`,
        timestamp: Date.now()
      }
    ];
  });

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(sessionKey, JSON.stringify(messages));
    } catch {}
  }, [messages, sessionKey]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: AiChatMessage = {
      id: `msg_u_${Date.now()}`,
      role: 'user',
      content: textToSend.trim(),
      timestamp: Date.now()
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    if (!customPrompt) setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.filter(m => m.id !== 'welcome_1'),
          userContext: {
            username: currentUser.username,
            fullName: currentUser.fullName,
            role: currentUser.role,
            college: currentUser.college,
            activeSubject,
            activeDrill: activeDrill ? {
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

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMsg: AiChatMessage = {
        id: `msg_err_${Date.now()}`,
        role: 'assistant',
        content: `⚠️ **Connection Error:** Could not contact the AI Tutor service. Please ensure your internet connection is active and \`GROQ_API_KEY\` is configured in server environment.`,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    if (confirm('Clear current temporary chat conversation?')) {
      const firstName = currentUser.fullName?.split(' ')[0] || currentUser.username;
      const subjectTitle = activeSubject.charAt(0).toUpperCase() + activeSubject.slice(1);
      const resetMessages: AiChatMessage[] = [
        {
          id: `welcome_${Date.now()}`,
          role: 'assistant',
          content: `Chat session reset. What topic in **FBISE 1st Year ${subjectTitle}** shall we master next, **${firstName}**?`,
          timestamp: Date.now()
        }
      ];
      setMessages(resetMessages);
      sessionStorage.removeItem(sessionKey);
    }
  };

  // Subject quick prompt suggestions
  const subjectSuggestions: Record<Subject, string[]> = {
    physics: [
      'Explain centripetal vs tangential acceleration',
      'Derive Work-Energy Theorem for FBISE',
      'Mnemonic for right-hand vector cross product',
      'How to solve numericals on projectile motion?'
    ],
    chemistry: [
      'Explain Le Chatelier’s Principle with examples',
      'Differences between Real and Ideal gases ($PV=nRT$)',
      'How to balance redox reactions by ion-electron method?',
      'Explain Bohr’s Atomic Model radius derivation'
    ],
    biology: [
      'Explain Fluid Mosaic Model with key diagrams points',
      'Steps of Glycolysis and ATP net yield',
      'Differences between Lytic vs Lysogenic cycle',
      'Explain competitive vs non-competitive enzyme inhibition'
    ]
  };

  const suggestions = subjectSuggestions[activeSubject] || subjectSuggestions.physics;

  const subjectIcon = activeSubject === 'physics' 
    ? Atom 
    : activeSubject === 'chemistry' 
    ? FlaskConical 
    : Dna;

  const SubjectIconComp = subjectIcon;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center bg-black/75 p-0 sm:p-4 backdrop-blur-sm animate-fadeIn">
      {/* Main Chat Container */}
      <div 
        className={`flex flex-col rounded-t-3xl sm:rounded-2xl border border-cyan-500/30 bg-slate-900 shadow-2xl transition-all duration-200 overflow-hidden w-full ${
          isExpanded 
            ? 'h-[95vh] sm:h-[90vh] sm:max-w-4xl' 
            : 'h-[85vh] sm:h-[650px] sm:max-w-2xl'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 shadow-md shadow-cyan-500/20 text-white ring-1 ring-cyan-400/30">
              <Sparkles className="h-4.5 w-4.5 text-cyan-200 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                  <span>KIPS AI Tutor</span>
                  <span className="rounded bg-cyan-950/80 px-1.5 py-0.5 text-[10px] font-bold text-cyan-300 border border-cyan-500/30">
                    Qwen 27B
                  </span>
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <SubjectIconComp className="h-3 w-3 text-cyan-400" />
                <span className="capitalize">{activeSubject}</span>
                <span>•</span>
                <span>FBISE 1st Year</span>
                <span>•</span>
                <span className="text-emerald-400">Temporary Session</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleClearChat}
              title="Clear temporary chat session"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-rose-400 transition"
            >
              <Trash2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Collapse' : 'Expand'}
              className="hidden sm:block rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
            >
              {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={onClose}
              title="Close chat"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Active Context Bar */}
        {activeDrill && (
          <div className="flex items-center gap-2 border-b border-cyan-900/30 bg-cyan-950/30 px-4 py-1.5 text-xs text-cyan-300">
            <BookOpen className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
            <span className="truncate">
              <strong>Active Context:</strong> Day {activeDrill.dayNumber} — {activeDrill.title} ({activeDrill.chapter})
            </span>
          </div>
        )}

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3.5 text-xs sm:text-sm">
          {messages.map((msg) => {
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
                  className={`relative max-w-[85%] sm:max-w-[78%] rounded-2xl px-3.5 py-2.5 shadow-sm leading-relaxed ${
                    isUser 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-none' 
                      : 'border border-slate-800 bg-slate-950/80 text-slate-200 rounded-tl-none'
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
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-xs text-slate-400 flex items-center gap-2">
                <RefreshCw className="h-3.5 w-3.5 animate-spin text-cyan-400" />
                <span>KIPS AI Tutor is reasoning with Qwen 27B...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Topic Suggestions */}
        <div className="border-t border-slate-800/80 bg-slate-950/60 px-3 py-2">
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

        {/* Input Area */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }} 
          className="border-t border-slate-800 bg-slate-950 p-3 sm:p-4"
        >
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={`Ask a question in ${activeSubject} (e.g. "Derive Bernoulli's equation")...`}
              disabled={isLoading}
              className="flex-1 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20 transition ${
                !inputMessage.trim() || isLoading 
                  ? 'opacity-40 cursor-not-allowed' 
                  : 'hover:from-blue-500 hover:to-cyan-500 cursor-pointer'
              }`}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 px-1">
            <span>Session is temporary & private to @{currentUser.username}. Clears on refresh.</span>
            <span>LaTeX Math & Diagrams supported</span>
          </div>
        </form>
      </div>
    </div>
  );
};
