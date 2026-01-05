
import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  History, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  Activity,
  MessageSquare,
  ShieldCheck,
  Target
} from 'lucide-react';
import { CopilotOverview } from './views/CopilotOverview';
import { CopilotWorkspace } from './views/CopilotWorkspace';
import { CopilotHistory } from './views/CopilotHistory';
import { CopilotSettings } from './views/CopilotSettings';

export type CopilotTab = 'overview' | 'workspace' | 'history' | 'settings';

export const AICopilotModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CopilotTab>('workspace');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview': return <CopilotOverview />;
      case 'workspace': return <CopilotWorkspace />;
      case 'history': return <CopilotHistory />;
      case 'settings': return <CopilotSettings />;
      default: return <CopilotWorkspace />;
    }
  };

  return (
    <div className="-m-8 flex min-h-[calc(100vh-80px)] overflow-hidden bg-slate-50/30">
      {/* Secondary Sidebar */}
      <div className={`${isCollapsed ? 'w-20' : 'w-64'} flex flex-col border-r border-slate-100 bg-white min-h-[calc(100vh-80px)] sticky top-20 transition-all duration-300 group z-10 shadow-sm`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6 px-2">
            {!isCollapsed && <h3 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Operating Partner</h3>}
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors ml-auto"
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>

          <nav className="space-y-1 flex-1">
            <SidebarItem 
              id="workspace" 
              label="Live Interface" 
              icon={Bot} 
              active={activeTab === 'workspace'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('workspace')} 
            />
            <SidebarItem 
              id="overview" 
              label="AI Insights Hub" 
              icon={Activity} 
              active={activeTab === 'overview'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('overview')} 
            />
            <SidebarItem 
              id="history" 
              label="Action History" 
              icon={History} 
              active={activeTab === 'history'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('history')} 
            />
            <SidebarItem 
              id="settings" 
              label="AI Governance" 
              icon={Settings} 
              active={activeTab === 'settings'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('settings')} 
            />
          </nav>

          <div className={`mt-auto pt-6 border-t border-slate-50 ${isCollapsed ? 'items-center px-0' : 'px-2'}`}>
            {!isCollapsed ? (
              <div className="bg-blue-600 rounded-2xl p-4 text-white relative overflow-hidden group shadow-lg shadow-blue-200">
                <p className="text-[10px] font-bold opacity-60 uppercase mb-1">Intelligence Level</p>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-black">Maximized</span>
                  <ShieldCheck size={14} className="opacity-60" />
                </div>
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-white w-full" />
                </div>
                <Sparkles size={64} className="absolute -bottom-4 -right-4 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-200">
                <Zap size={18} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className={`h-full ${activeTab === 'workspace' ? '' : 'p-10'} animate-in fade-in slide-in-from-right-2 duration-300`}>
          <div className={`${activeTab === 'workspace' ? 'h-full' : 'max-w-6xl mx-auto pb-20'}`}>
            {renderActiveView()}
          </div>
        </div>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  id: string;
  label: string;
  icon: React.ElementType;
  active: boolean;
  isCollapsed: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, active, isCollapsed, onClick }) => (
  <button
    onClick={onClick}
    className={`
      w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative
      ${active 
        ? 'bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100 font-bold' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
      }
      ${isCollapsed ? 'justify-center' : ''}
    `}
  >
    <Icon size={18} className={`${active ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
    {!isCollapsed && <span className="text-sm truncate">{label}</span>}
    {isCollapsed && (
      <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl">
        {label}
      </div>
    )}
  </button>
);
