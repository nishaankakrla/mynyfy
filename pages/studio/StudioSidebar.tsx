
import React from 'react';
import { 
  Layout, 
  PlusCircle, 
  Image, 
  Type, 
  Clapperboard, 
  Flag, 
  Split, 
  Zap, 
  Library, 
  CheckSquare, 
  BarChart2, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export type StudioTab = 
  | 'overview' 
  | 'create' 
  | 'images' 
  | 'copy' 
  | 'templates' 
  | 'campaigns' 
  | 'variants' 
  | 'automation' 
  | 'library' 
  | 'approvals' 
  | 'insights' 
  | 'settings';

interface TabConfig {
  id: StudioTab;
  label: string;
  icon: React.ElementType;
}

const TABS: TabConfig[] = [
  { id: 'overview', label: 'Studio Overview', icon: Layout },
  { id: 'create', label: 'Create Content', icon: PlusCircle },
  { id: 'images', label: 'Image Generator', icon: Image },
  { id: 'copy', label: 'Caption & Copy', icon: Type },
  { id: 'templates', label: 'Brand Templates', icon: Clapperboard },
  { id: 'campaigns', label: 'Campaign Builder', icon: Flag },
  { id: 'variants', label: 'Variations & A/B', icon: Split },
  { id: 'automation', label: 'Automation Rules', icon: Zap },
  { id: 'library', label: 'Content Library', icon: Library },
  { id: 'approvals', label: 'Approvals & Feedback', icon: CheckSquare },
  { id: 'insights', label: 'AI Insights', icon: BarChart2 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

interface StudioSidebarProps {
  activeTab: StudioTab;
  onTabChange: (tab: StudioTab) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

export const StudioSidebar: React.FC<StudioSidebarProps> = ({ 
  activeTab, 
  onTabChange, 
  isCollapsed, 
  onToggle 
}) => {
  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} flex flex-col border-r border-slate-100 bg-white min-h-[calc(100vh-80px)] sticky top-20 transition-all duration-300 group`}>
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6 px-2">
          {!isCollapsed && <h3 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">AI Content Studio</h3>}
          <button 
            onClick={onToggle}
            className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors ml-auto"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        <nav className="space-y-1 flex-1">
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
                    ? 'bg-blue-50 text-blue-600 shadow-sm' 
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

        <div className={`mt-auto pt-6 border-t border-slate-50 ${isCollapsed ? 'items-center' : ''}`}>
          <div className={`bg-blue-600 rounded-2xl p-4 text-white relative overflow-hidden ${isCollapsed ? 'p-2' : ''}`}>
            {!isCollapsed ? (
              <div className="relative z-10">
                <p className="text-[10px] font-bold opacity-60 uppercase mb-1">AI Credits</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold">1,240</span>
                  <span className="text-xs opacity-60">/ 5,000</span>
                </div>
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
