
import React from 'react';
import { 
  Activity, 
  Link2, 
  Zap, 
  Workflow, 
  FileText, 
  Bot, 
  UserCheck, 
  CreditCard, 
  Target, 
  Gavel, 
  ShieldAlert, 
  ScrollText, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export type MessagingTab = 
  | 'overview' 
  | 'connections' 
  | 'triggers' 
  | 'flows' 
  | 'templates' 
  | 'ai-rules' 
  | 'handoff' 
  | 'payments' 
  | 'leads' 
  | 'rules' 
  | 'safety' 
  | 'logs' 
  | 'settings';

interface TabConfig {
  id: MessagingTab;
  label: string;
  icon: React.ElementType;
}

const TABS: TabConfig[] = [
  { id: 'overview', label: 'Overview', icon: Activity },
  { id: 'connections', label: 'Connections', icon: Link2 },
  { id: 'triggers', label: 'Entry Triggers', icon: Zap },
  { id: 'flows', label: 'Automation Flows', icon: Workflow },
  { id: 'templates', label: 'Message Templates', icon: FileText },
  { id: 'ai-rules', label: 'AI Replies & Rules', icon: Bot },
  { id: 'handoff', label: 'Human Handoff', icon: UserCheck },
  { id: 'payments', label: 'Payments & Bookings', icon: CreditCard },
  { id: 'leads', label: 'Lead Qualification', icon: Target },
  { id: 'rules', label: 'Conversation Rules', icon: Gavel },
  { id: 'safety', label: 'Safety & Limits', icon: ShieldAlert },
  { id: 'logs', label: 'Logs & History', icon: ScrollText },
  { id: 'settings', label: 'Auto-DM Settings', icon: Settings },
];

interface MessagingSidebarProps {
  activeTab: MessagingTab;
  onTabChange: (tab: MessagingTab) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

export const MessagingSidebar: React.FC<MessagingSidebarProps> = ({ 
  activeTab, 
  onTabChange, 
  isCollapsed, 
  onToggle 
}) => {
  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} flex flex-col border-r border-slate-100 bg-white min-h-[calc(100vh-80px)] sticky top-20 transition-all duration-300 group`}>
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6 px-2">
          {!isCollapsed && <h3 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Conversational OS</h3>}
          <button 
            onClick={onToggle}
            className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors ml-auto"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        <nav className="space-y-1 flex-1 overflow-y-auto no-scrollbar pb-6">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                  }
                  ${isCollapsed ? 'justify-center' : ''}
                `}
              >
                <Icon size={18} className={`${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                {!isCollapsed && <span className="text-sm font-semibold truncate">{tab.label}</span>}
                
                {isCollapsed && (
                  <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[100] shadow-xl">
                    {tab.label}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        <div className={`mt-auto pt-4 border-t border-slate-50 ${isCollapsed ? 'items-center' : ''}`}>
          <div className={`bg-blue-600 rounded-2xl p-4 text-white relative overflow-hidden transition-all ${isCollapsed ? 'p-2' : ''}`}>
            {!isCollapsed ? (
              <div className="relative z-10 flex items-center justify-between">
                <div>
                   <p className="text-[10px] font-bold opacity-60 uppercase mb-1">Health Score</p>
                   <p className="text-lg font-bold">98%</p>
                </div>
                <Activity size={20} className="opacity-40" />
              </div>
            ) : (
              <Activity size={20} className="mx-auto" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
