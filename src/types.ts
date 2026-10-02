export type Subject = 'physics' | 'chemistry' | 'biology';

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
}

export interface User {
  username: string;
  role: 'admin' | 'student';
  fullName?: string;
  college?: string;
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
