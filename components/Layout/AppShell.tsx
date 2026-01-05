
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#F8FAFC]">
      <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
      <div 
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? 'ml-20' : 'ml-72'
        }`}
      >
        <Header isCollapsed={isCollapsed} />
        <main className="mt-20 p-8 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
