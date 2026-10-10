export type Subject = 'physics' | 'chemistry' | 'biology' | 'computer' | 'maths';

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface MCQ {
  id: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: OptionKey;
  explanation: string;
  marks?: number;
}

export interface Drill {
  id: string;
  subject: Subject;
  dayNumber: number;
  drillNumber: number;
  title: string;
  chapter: string;
  date: string;
  totalMarks: number;
  questions: MCQ[];
  createdAt: number;
  aiHints?: Record<string, string>; // key: `${questionId}_${depth}`
}

export interface User {
  username: string;
  role: 'admin' | 'student';
  fullName?: string;
  college?: string;
  email?: string;
  createdAt: number;
}

export interface UserAttempt {
  id: string;
  drillId: string;
  username: string;
  subject: Subject;
  score: number;
  totalQuestions: number;
  answers: Record<string, OptionKey>;
  completedAt: number;
  timeSpentSeconds: number;
}

export interface LeaderboardUser {
  username: string;
  fullName: string;
  role: 'admin' | 'student';
  drillsCompleted: number;
  totalScore: number;
  totalPossibleMarks: number;
  accuracyPercentage: number;
  currentStreak: number;
  lastActive: number;
  subjectBreakdown: {
    physics: { completed: number; score: number; total: number };
    chemistry: { completed: number; score: number; total: number };
    biology: { completed: number; score: number; total: number };
    computer: { completed: number; score: number; total: number };
    maths: { completed: number; score: number; total: number };
  };
}

export interface ChatMessage {
  id: string;
  senderUsername: string;
  senderFullName: string;
  senderRole: 'admin' | 'student';
  text: string;
  timestamp: number;
  subjectTag?: Subject | 'general';
  drillReference?: string;
}

export interface FirebaseUsageEstimates {
  estimatedSessionReads: number;
  estimatedSessionWrites: number;
  totalDrillsCount: number;
  totalAttemptsCount: number;
  totalMessagesCount: number;
  totalUsersCount: number;
  estimatedStoredKb: number;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  author: string;
  timestamp: number;
  priority?: 'normal' | 'important' | 'alert';
  isActive: boolean;
}

export interface InProgressDrillSession {
  drillId: string;
  currentIndex: number;
  selectedAnswers: Record<string, OptionKey>;
  showExplanation: Record<string, boolean>;
  expandedExplanations: Record<string, boolean>;
  elapsedSeconds: number;
  lastUpdated: number;
}

export interface MistakeItem {
  id: string; // `${drillId}__${questionId}`
  drillId: string;
  drillTitle: string;
  drillDay: number;
  subject: Subject;
  chapter: string;
  question: MCQ;
  userAnswer?: OptionKey;
  addedAt: number;
  reviewCount: number;
  isMastered: boolean;
  isBookmarked?: boolean;
  lastPracticedAt?: number;
}

export interface MistakeVaultData {
  username: string;
  updatedAt: number;
  items: Record<string, MistakeItem>;
}

export interface SyllabusDayItem {
  dayNumber: number;
  date: string;
  unitNumber?: number;
  unitTitle?: string;
  topic: string;
  subtopics?: string[];
  coreFocus?: string;
  isCompleted?: boolean;
}

export interface SyllabusUnit {
  unitNumber: number;
  unitTitle: string;
  totalDays: number;
  coreFocus?: string;
  days: SyllabusDayItem[];
}

export interface SubjectSyllabus {
  id: string;
  subject: Subject;
  title: string;
  totalStudyDays: number;
  startDate?: string;
  endDate?: string;
  note?: string;
  units: SyllabusUnit[];
  allDays: SyllabusDayItem[];
  uploadedAt: number;
  uploadedBy?: string;
}

export type ThemeId = 
  | 'midnight-cyan'
  | 'emerald-nebula'
  | 'cyberpunk-violet'
  | 'sunset-amber'
  | 'tokyo-neon'
  | 'nordic-frost'
  | 'monochrome-matrix'
  | 'deep-amethyst'
  | 'crimson-abyss'
  | 'coffee-espresso';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  category: 'Cyber & Neon' | 'Deep Space' | 'Nature & Warmth' | 'Minimalist';
  previewColors: {
    bg: string;
    card: string;
    accent: string;
    secondary: string;
    text: string;
  };
  accentName: string;
  glowColor: string;
}


