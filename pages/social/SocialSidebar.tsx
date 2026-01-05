
import React from 'react';
import { 
  Layout, 
  Calendar, 
  PlusCircle, 
  Repeat, 
  Flag, 
  ShieldCheck, 
  UserCheck, 
  Layers, 
  AlertCircle, 
  Zap, 
  ScrollText, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export type SocialTab = 
  | 'overview' 
  | 'calendar' 
  | 'create' 
  | 'queues' 
  | 'campaigns' 
  | 'rules' 
  | 'approvals' 
  | 'bulk' 
  | 'failed' 
  | 'reschedule' 
  | 'logs' 
  | 'settings';

interface TabConfig {
  id: SocialTab;
  label: string;
  icon: React.ElementType;
}

const TABS: TabConfig[] = [
  { id: 'overview', label: 'Scheduler Overview', icon: Layout },
  { id: 'calendar', label: 'Content Calendar', icon: Calendar },
  { id: 'create', label: 'Create & Schedule', icon: PlusCircle },
  { id: 'queues', label: 'Queues & Evergreen', icon: Repeat },
  { id: 'campaigns', label: 'Campaign Scheduling', icon: Flag },
  { id: 'rules', label: 'Platform Rules', icon: ShieldCheck },
  { id: 'approvals', label: 'Approvals & Workflow', icon: UserCheck },
  { id: 'bulk', label: 'Bulk Actions', icon: Layers },
  { id: 'failed', label: 'Failed & Draft Posts', icon: AlertCircle },
  { id: 'reschedule', label: 'Auto-Rescheduling', icon: Zap },
  { id: 'logs', label: 'Publishing Logs', icon: ScrollText },
  { id: 'settings', label: 'Scheduler Settings', icon: Settings },
];

interface SocialSidebarProps {
  activeTab: SocialTab;
  onTabChange: (tab: SocialTab) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

export const SocialSidebar: React.FC<SocialSidebarProps> = ({ 
  activeTab, 
  onTabChange, 
  isCollapsed, 
  onToggle 
}) => {
  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} flex flex-col border-r border-slate-100 bg-white min-h-[calc(100vh-80px)] sticky top-20 transition-all duration-300 group`}>
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6 px-2">
          {!isCollapsed && <h3 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Social Engine</h3>}
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
                   <p className="text-[10px] font-bold opacity-60 uppercase mb-1">Queue Status</p>
                   <p className="text-lg font-bold">Healthy</p>
                </div>
                <Zap size={20} className="opacity-40" />
              </div>
            ) : (
              <Zap size={20} className="mx-auto" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
