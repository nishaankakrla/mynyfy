
import React from 'react';
import { 
  User, 
  Store, 
  Link2, 
  Zap, 
  Sparkles, 
  Bell, 
  Users, 
  Puzzle, 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  Cpu,
  ChevronLeft,
  ChevronRight,
  Search
} from 'lucide-react';

export type SettingsTab = 
  | 'account' 
  | 'brand' 
  | 'platforms' 
  | 'automation' 
  | 'ai' 
  | 'notifications' 
  | 'team' 
  | 'integrations' 
  | 'billing' 
  | 'security' 
  | 'privacy' 
  | 'advanced';

interface NavItem {
  id: SettingsTab;
  label: string;
  icon: React.ElementType;
}

const SECTIONS: { title: string; items: NavItem[] }[] = [
  {
    title: 'Identity',
    items: [
      { id: 'account', label: 'Account', icon: User },
      { id: 'brand', label: 'Brand & Workspace', icon: Store },
    ]
  },
  {
    title: 'Governance',
    items: [
      { id: 'platforms', label: 'Platform Sync', icon: Link2 },
      { id: 'automation', label: 'Automation Rules', icon: Zap },
      { id: 'ai', label: 'AI & Intelligence', icon: Sparkles },
    ]
  },
  {
    title: 'Operations',
    items: [
      { id: 'notifications', label: 'Notifications', icon: Bell },
      { id: 'team', label: 'Team & Access', icon: Users },
      { id: 'integrations', label: 'Apps & API', icon: Puzzle },
      { id: 'billing', label: 'Plans & Billing', icon: CreditCard },
    ]
  },
  {
    title: 'Trust & System',
    items: [
      { id: 'security', label: 'Security', icon: ShieldCheck },
      { id: 'privacy', label: 'Data & Privacy', icon: Lock },
      { id: 'advanced', label: 'Advanced', icon: Cpu },
    ]
  }
];

interface SettingsSidebarProps {
  activeTab: SettingsTab;
  onTabChange: (tab: SettingsTab) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ 
  activeTab, 
  onTabChange, 
  isCollapsed, 
  onToggle 
}) => {
  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-72'} flex flex-col border-r border-slate-100 bg-white min-h-[calc(100vh-80px)] sticky top-20 transition-all duration-300 group`}>
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6 px-2">
          {!isCollapsed && <h3 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Settings OS</h3>}
          <button 
            onClick={onToggle}
            className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors ml-auto"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {!isCollapsed && (
          <div className="px-2 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search settings..." 
                className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-9 pr-4 py-2 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        )}

        <nav className="space-y-8 flex-1 overflow-y-auto no-scrollbar">
          {SECTIONS.map((section) => (
            <div key={section.title} className="space-y-1">
              {!isCollapsed && <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{section.title}</p>}
              {section.items.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onTabChange(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative
                      ${isActive 
                        ? 'bg-blue-50 text-blue-600 font-bold shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                      }
                      ${isCollapsed ? 'justify-center' : ''}
                    `}
                  >
                    <item.icon size={18} className={`${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                    {!isCollapsed && <span className="text-sm truncate">{item.label}</span>}
                    
                    {isCollapsed && (
                      <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[100] shadow-xl">
                        {item.label}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
