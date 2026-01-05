
import React, { useState } from 'react';
import { 
  User, 
  ShieldLock, 
  Sliders, 
  Activity, 
  Link2, 
  Bell, 
  Fingerprint, 
  Lock, 
  ChevronLeft, 
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { PersonalInformation } from './views/PersonalInformation';
import { AccountSecurity } from './views/AccountSecurity';
import { UserPreferences } from './views/UserPreferences';
import { UserActivity } from './views/UserActivity';
import { ConnectedLogins } from './views/ConnectedLogins';
import { PersonalNotifications } from './views/PersonalNotifications';
import { AccessSummary } from './views/AccessSummary';
import { DataPrivacy } from './views/DataPrivacy';

export type ProfileSection = 
  | 'identity' 
  | 'security' 
  | 'preferences' 
  | 'activity' 
  | 'logins' 
  | 'notifications' 
  | 'access' 
  | 'privacy';

export const ProfileModule: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ProfileSection>('identity');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'identity': return <PersonalInformation />;
      case 'security': return <AccountSecurity />;
      case 'preferences': return <UserPreferences />;
      case 'activity': return <UserActivity />;
      case 'logins': return <ConnectedLogins />;
      case 'notifications': return <PersonalNotifications />;
      case 'access': return <AccessSummary />;
      case 'privacy': return <DataPrivacy />;
      default: return <PersonalInformation />;
    }
  };

  return (
    <div className="-m-8 flex min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Secondary Sidebar (Navigation within Profile) */}
      <div className={`${isCollapsed ? 'w-20' : 'w-64'} flex flex-col border-r border-slate-100 bg-white min-h-[calc(100vh-80px)] sticky top-20 transition-all duration-300 group z-10`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6 px-2">
            {!isCollapsed && <h3 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Personal Hub</h3>}
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors ml-auto"
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>

          <nav className="space-y-1 flex-1">
            <SidebarItem 
              id="identity" 
              label="Identity" 
              icon={User} 
              active={activeSection === 'identity'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveSection('identity')} 
            />
            <SidebarItem 
              id="security" 
              label="Security" 
              icon={Lock} 
              active={activeSection === 'security'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveSection('security')} 
            />
            <SidebarItem 
              id="preferences" 
              label="Preferences" 
              icon={Sliders} 
              active={activeSection === 'preferences'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveSection('preferences')} 
            />
            <SidebarItem 
              id="activity" 
              label="Activity Log" 
              icon={Activity} 
              active={activeSection === 'activity'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveSection('activity')} 
            />
            <SidebarItem 
              id="logins" 
              label="Logins" 
              icon={Link2} 
              active={activeSection === 'logins'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveSection('logins')} 
            />
            <SidebarItem 
              id="notifications" 
              label="Notifications" 
              icon={Bell} 
              active={activeSection === 'notifications'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveSection('notifications')} 
            />
            <SidebarItem 
              id="access" 
              label="Access & Roles" 
              icon={UserCheck} 
              active={activeSection === 'access'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveSection('access')} 
            />
            <SidebarItem 
              id="privacy" 
              label="Data & Privacy" 
              icon={Fingerprint} 
              active={activeSection === 'privacy'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveSection('privacy')} 
            />
          </nav>

          <div className={`mt-auto pt-6 border-t border-slate-50 ${isCollapsed ? 'items-center px-0' : 'px-2'}`}>
            {!isCollapsed ? (
              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Account Health</p>
                <div className="flex items-center justify-between mb-1">
                   <span className="text-[10px] text-slate-500 font-medium">Security Score</span>
                   <span className="text-[10px] text-green-600 font-bold">Excellent</span>
                </div>
                <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                   <div className="h-full bg-green-500 w-[92%]" />
                </div>
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mx-auto">
                <UserCheck size={18} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50/30 custom-scrollbar">
        <div className="p-10 animate-in fade-in slide-in-from-right-2 duration-300">
          <div className="max-w-4xl mx-auto pb-20">
            {renderActiveSection()}
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
