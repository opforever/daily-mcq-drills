import React, { createContext, useContext, useState } from 'react';
import { Drill, Subject, UserAttempt, MistakeItem, InProgressDrillSession } from '../types';

export interface DrillContextType {
  drills: Drill[];
  setDrills: React.Dispatch<React.SetStateAction<Drill[]>>;
  currentSubject: Subject;
  setCurrentSubject: (subject: Subject) => void;
  activeDrill: Drill | null;
  setActiveDrill: (drill: Drill | null) => void;
  userAttempts: UserAttempt[];
  setUserAttempts: React.Dispatch<React.SetStateAction<UserAttempt[]>>;
  mistakes: Record<string, MistakeItem>;
  setMistakes: React.Dispatch<React.SetStateAction<Record<string, MistakeItem>>>;
  activeSessions: Record<string, InProgressDrillSession>;
  setActiveSessions: React.Dispatch<React.SetStateAction<Record<string, InProgressDrillSession>>>;
  scorecardData: { drill: Drill; attempt: UserAttempt } | null;
  setScorecardData: (data: { drill: Drill; attempt: UserAttempt } | null) => void;
  isCloudConnected: boolean;
  setIsCloudConnected: (connected: boolean) => void;
}

const DrillContext = createContext<DrillContextType | undefined>(undefined);

export const DrillProvider: React.FC<{
  children: React.ReactNode;
  initialDrills?: Drill[];
}> = ({ children, initialDrills = [] }) => {
  const [drills, setDrills] = useState<Drill[]>(initialDrills);
  const [currentSubject, setCurrentSubject] = useState<Subject>('biology');
  const [activeDrill, setActiveDrill] = useState<Drill | null>(null);
  const [userAttempts, setUserAttempts] = useState<UserAttempt[]>([]);
  const [mistakes, setMistakes] = useState<Record<string, MistakeItem>>({});
  const [activeSessions, setActiveSessions] = useState<Record<string, InProgressDrillSession>>({});
  const [scorecardData, setScorecardData] = useState<{ drill: Drill; attempt: UserAttempt } | null>(null);
  const [isCloudConnected, setIsCloudConnected] = useState<boolean>(true);

  return (
    <DrillContext.Provider
      value={{
        drills,
        setDrills,
        currentSubject,
        setCurrentSubject,
        activeDrill,
        setActiveDrill,
        userAttempts,
        setUserAttempts,
        mistakes,
        setMistakes,
        activeSessions,
        setActiveSessions,
        scorecardData,
        setScorecardData,
        isCloudConnected,
        setIsCloudConnected
      }}
    >
      {children}
    </DrillContext.Provider>
  );
};

export const useDrill = (): DrillContextType => {
  const context = useContext(DrillContext);
  if (!context) {
    throw new Error('useDrill must be used within a DrillProvider');
  }
  return context;
};
