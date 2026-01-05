
import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  Fingerprint, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Search,
  Filter,
  Download,
  Plus
} from 'lucide-react';
import { CustomersOverview } from './views/CustomersOverview';
import { CustomersList } from './views/CustomersList';
import { AudienceSegments } from './views/AudienceSegments';
import { RetentionInsights } from './views/RetentionInsights';
import { PrivacyCompliance } from './views/PrivacyCompliance';

export type CustomersTab = 'overview' | 'list' | 'segments' | 'retention' | 'privacy';

export const CustomersModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CustomersTab>('overview');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview': return <CustomersOverview />;
      case 'list': return <CustomersList />;
      case 'segments': return <AudienceSegments />;
      case 'retention': return <RetentionInsights />;
      case 'privacy': return <PrivacyCompliance />;
      default: return <CustomersOverview />;
    }
  };

  return (
    <div className="-m-8 flex min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Secondary Sidebar */}
      <div className={`${isCollapsed ? 'w-20' : 'w-64'} flex flex-col border-r border-slate-100 bg-white min-h-[calc(100vh-80px)] sticky top-20 transition-all duration-300 group z-10`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6 px-2">
            {!isCollapsed && <h3 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Relationship OS</h3>}
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors ml-auto"
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>

          <nav className="space-y-1 flex-1">
            <SidebarItem 
              id="overview" 
              label="Audience Snapshot" 
              icon={TrendingUp} 
              active={activeTab === 'overview'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('overview')} 
            />
            <SidebarItem 
              id="list" 
              label="Unified Profiles" 
              icon={Users} 
              active={activeTab === 'list'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('list')} 
            />
            <SidebarItem 
              id="segments" 
              label="Smart Segments" 
              icon={Target} 
              active={activeTab === 'segments'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('segments')} 
            />
            <SidebarItem 
              id="retention" 
              label="Value & Retention" 
              icon={Fingerprint} 
              active={activeTab === 'retention'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('retention')} 
            />
            <SidebarItem 
              id="privacy" 
              label="Privacy & Consent" 
              icon={ShieldCheck} 
              active={activeTab === 'privacy'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('privacy')} 
            />
          </nav>

          <div className={`mt-auto pt-6 border-t border-slate-50 ${isCollapsed ? 'items-center px-0' : 'px-2'}`}>
            {!isCollapsed ? (
              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Sync Integrity</p>
                <div className="flex items-center justify-between mb-1">
                   <span className="text-[10px] text-slate-500 font-medium">Mapped Identities</span>
                   <span className="text-[10px] text-slate-900 font-bold">12,402</span>
                </div>
                <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 w-[94%]" />
                </div>
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mx-auto">
                <UserPlus size={18} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50/30 custom-scrollbar">
        <div className="p-10 animate-in fade-in slide-in-from-right-2 duration-300">
          <div className="max-w-6xl mx-auto pb-20">
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
