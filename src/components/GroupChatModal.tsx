import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  MessageSquare, 
  Send, 
  Trash2, 
  X, 
  ShieldCheck, 
  Sparkles, 
  Atom, 
  FlaskConical, 
  Dna, 
  Clock, 
  HelpCircle,
  Hash
} from 'lucide-react';
import { ChatMessage, Subject, User } from '../types';
import { 
  subscribeToCloudChatMessages, 
  sendChatMessageToCloud, 
  deleteChatMessageFromCloud 
} from '../utils/firebase';
import { LatexRenderer } from '../utils/latexRenderer';

interface GroupChatModalProps {
  currentUser: User;
  onClose: () => void;
  initialSubject?: Subject;
}

const quickSymbols = [
  { label: 'π', val: '$\\pi$' },
  { label: 'α', val: '$\\alpha$' },
  { label: 'β', val: '$\\beta$' },
  { label: 'θ', val: '$\\theta$' },
  { label: 'Δ', val: '$\\Delta$' },
  { label: 'λ', val: '$\\lambda$' },
  { label: 'Ω', val: '$\\Omega$' },
  { label: 'x²', val: '$x^2$' },
  { label: 'a/b', val: '$\\frac{a}{b}$' },
  { label: 'H₂O', val: '$\\text{H}_2\\text{O}$' }
];

interface ChatInputFormProps {
  currentUser: User;
  initialTag: Subject | 'general';
  onSendMessage: (text: string, tag: Subject | 'general') => Promise<void>;
}

/**
 * Isolated ChatInputForm prevents typing keystrokes from re-rendering the message list & KaTeX formulas
 */
const ChatInputForm: React.FC<ChatInputFormProps> = React.memo(({
  currentUser,
  initialTag,
  onSendMessage
}) => {
  const [inputText, setInputText] = useState('');
  const [selectedTag, setSelectedTag] = useState<Subject | 'general'>(initialTag);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputText.trim();
    if (!text || isSending) return;

    setIsSending(true);
    try {
      await onSendMessage(text, selectedTag);
      setInputText('');
    } finally {
      setIsSending(false);
    }
  };

  const handleInsertSymbol = (sym: string) => {
    setInputText(prev => prev + sym);
  };

  return (
    <>
      {/* Quick Math Symbols Bar */}
      <div className="flex items-center gap-1 overflow-x-auto border-t border-slate-800/80 bg-slate-950/70 px-3 py-1.5 text-xs">
        <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap mr-1">Insert Math:</span>
        {quickSymbols.map(s => (
          <button
            key={s.label}
            type="button"
            onClick={() => handleInsertSymbol(s.val)}
            className="rounded bg-slate-800 hover:bg-slate-700 px-1.5 py-0.5 text-[11px] font-mono text-cyan-300 transition whitespace-nowrap cursor-pointer"
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Input & Form */}
      <form onSubmit={handleSubmit} className="border-t border-slate-800 bg-slate-900/90 p-3 sm:p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 text-[11px]">Subject Tag:</span>
            {(['physics', 'chemistry', 'biology', 'general'] as const).map(tag => (
              <button
                type="button"
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-md px-2 py-0.5 text-[11px] font-semibold capitalize transition cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-cyan-600 text-white shadow'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <span className="text-[11px] text-slate-500">
            Logged in as <strong className="text-slate-300">{currentUser.fullName || currentUser.username}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask a question or explain an MCQ... (e.g. In Day 2 Physics, why is $v = r\omega$?)"
            className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isSending}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold text-white shadow-md transition ${
              inputText.trim() && !isSending
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 cursor-pointer'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
            }`}
          >
            <Send className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
      </form>
    </>
  );
});
ChatInputForm.displayName = 'ChatInputForm';

export const GroupChatModal: React.FC<GroupChatModalProps> = ({
  currentUser,
  onClose,
  initialSubject
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [filterSubject, setFilterSubject] = useState<Subject | 'all' | 'general'>('all');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Subscribe to real-time chat messages
  useEffect(() => {
    const unsub = subscribeToCloudChatMessages((msgs) => {
      setMessages(msgs);
    }, 45); // Limit to last 45 messages to keep reads minimal!
    return () => unsub();
  }, []);

  // Auto-scroll to bottom on message updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, filterSubject]);

  const handleSendMessage = useCallback(async (text: string, tag: Subject | 'general') => {
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      senderUsername: currentUser.username,
      senderFullName: currentUser.fullName || currentUser.username,
      senderRole: currentUser.role,
      text,
      timestamp: Date.now(),
      subjectTag: tag
    };

    await sendChatMessageToCloud(newMsg);
  }, [currentUser]);

  const handleDeleteMessage = useCallback(async (msgId: string) => {
    await deleteChatMessageFromCloud(msgId);
  }, []);

  // Filter messages
  const filteredMessages = useMemo(() => {
    return messages.filter(m => {
      if (filterSubject === 'all') return true;
      return m.subjectTag === filterSubject;
    });
  }, [messages, filterSubject]);

  const getTagBadge = (tag?: Subject | 'general') => {
    switch (tag) {
      case 'physics':
        return <span className="rounded bg-cyan-950/80 border border-cyan-800/40 px-1.5 py-0.5 text-[10px] font-semibold text-cyan-400">Physics</span>;
      case 'chemistry':
        return <span className="rounded bg-amber-950/80 border border-amber-800/40 px-1.5 py-0.5 text-[10px] font-semibold text-amber-400">Chemistry</span>;
      case 'biology':
        return <span className="rounded bg-emerald-950/80 border border-emerald-800/40 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">Biology</span>;
      default:
        return <span className="rounded bg-slate-800 border border-slate-700 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400">General</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4 backdrop-blur-sm overflow-hidden">
      <div className="relative flex flex-col h-[92vh] sm:h-[85vh] w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white shadow-md">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white sm:text-lg">
                  KIPS Student Discussion & Doubts
                </h2>
                <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  Live Cloud
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Ask questions, share explanations & solve confusing MCQs together
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto border-b border-slate-800/80 bg-slate-950/50 px-4 py-2 text-xs">
          <span className="text-[11px] font-medium text-slate-500 mr-1">Filter:</span>
          {(['all', 'physics', 'chemistry', 'biology', 'general'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilterSubject(tab)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold capitalize transition ${
                filterSubject === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
          <span className="ml-auto hidden sm:inline text-[11px] text-slate-500">
            LaTeX Supported ($F=ma$)
          </span>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredMessages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center p-6 text-slate-500">
              <MessageSquare className="h-10 w-10 text-slate-600 mb-2 opacity-50" />
              <p className="text-sm font-semibold text-slate-400">No discussion messages yet</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm">
                Have a doubt about today's drill or need clarification on a formula? Send the first message below!
              </p>
            </div>
          ) : (
            filteredMessages.map((msg) => {
              const isMe = msg.senderUsername.toLowerCase() === currentUser.username.toLowerCase();
              const isAdmin = msg.senderRole === 'admin';
              const canDelete = currentUser.role === 'admin' || isMe;

              return (
                <div
                  key={msg.id}
                  className={`group flex items-start gap-2.5 ${isMe ? 'flex-row-reverse' : ''}`}
                >
                  {/* Avatar */}
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white shadow-sm ${
                    isAdmin 
                      ? 'bg-gradient-to-tr from-amber-500 to-rose-500 ring-2 ring-amber-400/40' 
                      : isMe 
                        ? 'bg-blue-600' 
                        : 'bg-slate-700'
                  }`}>
                    {isAdmin ? '★' : msg.senderFullName.slice(0, 1).toUpperCase()}
                  </div>

                  {/* Message Bubble Container */}
                  <div className={`flex flex-col max-w-[82%] sm:max-w-[75%] ${isMe ? 'items-end' : 'items-start'}`}>
                    {/* Sender Meta */}
                    <div className="flex items-center gap-1.5 mb-1 px-1">
                      <span className="text-xs font-bold text-slate-300">
                        {msg.senderFullName}
                      </span>
                      {isAdmin && (
                        <span className="flex items-center gap-0.5 rounded bg-amber-500/20 border border-amber-500/40 px-1 py-0.2 text-[9px] font-extrabold text-amber-300">
                          <ShieldCheck className="h-2.5 w-2.5" />
                          ADMIN
                        </span>
                      )}
                      {getTagBadge(msg.subjectTag)}
                      <span className="text-[10px] text-slate-500">
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className={`relative rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${
                      isMe
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tr-sm'
                        : isAdmin
                          ? 'bg-slate-800/90 border border-amber-500/30 text-slate-100 rounded-tl-sm'
                          : 'bg-slate-800 border border-slate-700/70 text-slate-200 rounded-tl-sm'
                    }`}>
                      <LatexRenderer content={msg.text} />

                      {/* Admin Delete Action */}
                      {canDelete && (
                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          title="Delete message"
                          className="opacity-0 group-hover:opacity-100 absolute -top-2 -right-2 rounded-full bg-slate-900 border border-rose-500/40 p-1 text-rose-400 hover:text-rose-200 transition shadow"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Isolated Chat Input Form (Zero re-renders of message list during typing) */}
        <ChatInputForm
          currentUser={currentUser}
          initialTag={initialSubject || 'general'}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};
