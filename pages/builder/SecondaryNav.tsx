
import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Layout, 
  Sparkles, 
  FileText, 
  Layers, 
  Palette, 
  Type, 
  Image, 
  Search, 
  Zap, 
  Rocket,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export type BuilderTab = 
  | 'overview' 
  | 'setup' 
  | 'pages' 
  | 'blocks' 
  | 'styles' 
  | 'content' 
  | 'media' 
  | 'seo' 
  | 'integrations' 
  | 'publish';

interface TabConfig {
  id: BuilderTab;
  label: string;
  icon: React.ElementType;
  status: 'complete' | 'incomplete' | 'warning';
}

const TABS: TabConfig[] = [
  { id: 'overview', label: 'Overview', icon: Layout, status: 'complete' },
  { id: 'setup', label: 'Setup Wizard', icon: Sparkles, status: 'complete' },
  { id: 'pages', label: 'Pages', icon: FileText, status: 'incomplete' },
  { id: 'blocks', label: 'Sections', icon: Layers, status: 'incomplete' },
  { id: 'styles', label: 'Global Styles', icon: Palette, status: 'incomplete' },
  { id: 'content', label: 'Content', icon: Type, status: 'incomplete' },
  { id: 'media', label: 'Media', icon: Image, status: 'complete' },
  { id: 'seo', label: 'SEO', icon: Search, status: 'warning' },
  { id: 'integrations', label: 'Integrations', icon: Zap, status: 'incomplete' },
  { id: 'publish', label: 'Publish', icon: Rocket, status: 'incomplete' },
];

interface SecondaryNavProps {
  activeTab: BuilderTab;
  onTabChange: (tab: BuilderTab) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

export const SecondaryNav: React.FC<SecondaryNavProps> = ({ 
  activeTab, 
  onTabChange, 
  isCollapsed, 
  onToggle 
}) => {
  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} flex flex-col border-r border-slate-100 bg-white min-h-[calc(100vh-80px)] sticky top-20 transition-all duration-300 group`}>
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6 px-2">
          {!isCollapsed && <h3 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Builder Tools</h3>}
          <button 
            onClick={onToggle}
            className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors ml-auto"
            title={isCollapsed ? "Expand" : "Collapse"}
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        <nav className="space-y-1 flex-1 overflow-y-auto no-scrollbar">
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
                
                {!isCollapsed && (
                  <div className="ml-auto flex items-center">
                    {tab.status === 'complete' ? (
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-green-500'}`} />
                    ) : tab.status === 'warning' ? (
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.5)]" />
                    ) : (
                      <Circle className="w-1.5 h-1.5 text-slate-200" />
                    )}
                  </div>
                )}

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
          {!isCollapsed ? (
            <div className="bg-slate-50 rounded-2xl p-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Build Stats</p>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-slate-500 font-medium">Readiness</span>
                <span className="text-[10px] text-slate-900 font-bold">85%</span>
              </div>
              <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[85%]" />
              </div>
            </div>
          ) : (
             <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 font-bold text-[10px]">
               85%
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
