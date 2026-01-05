
import React, { createContext, useContext, useState } from 'react';
import { User, Brand, AuthState } from '../types';

interface AuthContextType extends AuthState {
  signOut: () => Promise<void>;
  refreshBrand: (brandId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock data for development
const MOCK_USER: User = {
  id: 'dev-user-123',
  email: 'founder@commerceos.ai',
  avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

const MOCK_BRAND: Brand = {
  id: 'dev-brand-123',
  name: 'Lumière Fashion',
  owner_id: 'dev-user-123'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user] = useState<User | null>(MOCK_USER);
  const [brand] = useState<Brand | null>(MOCK_BRAND);
  const [loading] = useState(false);

  const signOut = async () => {
    console.log('Mock sign out triggered');
  };

  const refreshBrand = async (brandId: string) => {
    console.log('Mock refresh brand triggered for:', brandId);
  };

  return (
    <AuthContext.Provider value={{ user, brand, loading, signOut, refreshBrand }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
