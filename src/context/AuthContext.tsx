import React, { createContext, useContext, useState } from 'react';
import { User } from '../types';
import { getCurrentUser, setCurrentUser as persistCurrentUser } from '../utils/storage';

export interface AuthContextType {
  currentUser: User | null;
  isAdmin: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateCurrentUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUserState] = useState<User | null>(() => getCurrentUser());

  const login = (user: User) => {
    persistCurrentUser(user);
    setCurrentUserState(user);
  };

  const logout = () => {
    persistCurrentUser(null);
    setCurrentUserState(null);
  };

  const updateCurrentUser = (updates: Partial<User>) => {
    setCurrentUserState(prev => {
      if (!prev) return null;
      const updated = { ...prev, ...updates };
      persistCurrentUser(updated);
      return updated;
    });
  };

  const isAdmin = currentUser?.role === 'admin' || currentUser?.username?.toLowerCase() === 'admin';

  return (
    <AuthContext.Provider value={{ currentUser, isAdmin, login, logout, updateCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
