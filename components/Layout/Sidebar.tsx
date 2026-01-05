import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Globe, 
  Calendar, 
  Sparkles, 
  Package, 
  ShoppingCart, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Settings, 
  PanelLeftClose, 
  PanelLeftOpen, 
  UserCircle, 
  Cpu,
  Zap
} from 'lucide-react';

interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

const coreNav: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/app/dashboard' },
];

const growthNav: NavItem[] = [
  { icon: Globe, label: 'Website Builder', path: '/app/builder' },
  { icon: Sparkles, label: 'AI Content Studio', path: '/app/ai-studio' },
  { icon: Calendar, label: 'Social Scheduler', path: '/app/social' },
  { icon: MessageSquare, label: 'Auto DM & WhatsApp', path: '/app/messaging' },
];

const commerceNav: NavItem[] = [
  { icon: Package, label: 'Products', path: '/app/products' },
  { icon: ShoppingCart, label: 'Orders', path: '/app/orders' },
  { icon: Users, label: 'Customers', path: '/app/customers' },
];

const intelligenceNav: NavItem[] = [
  { icon: BarChart3, label: 'Analytics', path: '/app/analytics' },
  { icon: Cpu, label: 'AI Copilot', path: '/app/copilot' },
];

const systemNav: NavItem[] = [
  { icon: UserCircle, label: 'Profile', path: '/app/profile' },
  { icon: Settings, label: 'Settings', path: '/app/settings' },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const renderNavLink = (item: NavItem, isHighlighted: boolean = false) => (
    <NavLink
      key={item.label}
      to={item.path}
      className={({ isActive }) => `
        flex items-center gap-3 py-2.5 rounded-xl transition-all duration-200 group relative
        ${isCollapsed ? 'justify-center px-0' : 'px-4'}
        ${isActive 
          ? 'bg-[#3B82F6] text-white shadow-lg shadow-blue-200 font-semibold' 
          : isHighlighted 
            ? 'text-blue-700 hover:bg-white hover:text-blue-600'
            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
        }
      `}
    >
      {({ isActive }) => (
        <>
          <item.icon className={`w-5 h-5 shrink-0 ${isActive ? '' : 'group-hover:scale-110 transition-transform'}`} />
          {!isCollapsed && (
            <span className="whitespace-nowrap animate-in fade-in duration-300 text-sm">
              {item.label}
            </span>
          )}
          
          {isCollapsed && (
            <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl">
              {item.label}
            </div>
          )}
        </>
      )}
    </NavLink>
  );

  return (
    <div 
      className={`bg-white h-screen fixed left-0 top-0 border-r border-slate-100 flex flex-col transition-all duration-300 z-30 ${
        isCollapsed ? 'w-20 px-3' : 'w-72 px-6'
      } py-6`}
    >
      <div className={`flex items-center justify-between mb-10 transition-all ${isCollapsed ? 'px-2' : 'px-4'}`}>
        {!isCollapsed && (
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight animate-in fade-in slide-in-from-left-2">
            CommerceOS
          </h1>
        )}
        <button 
          onClick={onToggle}
          className={`p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-slate-50 transition-colors ${isCollapsed ? 'mx-auto' : ''}`}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
        </button>
      </div>
      
      <nav className="flex-1 space-y-8 overflow-y-auto custom-scrollbar overflow-x-hidden pb-10 pr-1">
        {/* Core */}
        <div className="space-y-1">
          {coreNav.map(item => renderNavLink(item))}
        </div>

        {/* Growth Highlighted Group */}
        <div className="space-y-2">
          {!isCollapsed && (
            <div className="px-4 flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest opacity-80">Growth Suite</span>
              <Zap className="w-3 h-3 text-blue-400 fill-blue-400" />
            </div>
          )}
          <div className={`${!isCollapsed ? 'bg-blue-50/50 p-2 rounded-[24px] border border-blue-100/50 space-y-1' : 'space-y-1'}`}>
            {growthNav.map(item => renderNavLink(item, true))}
          </div>
        </div>

        {/* Commerce */}
        <div className="space-y-1">
          {!isCollapsed && (
            <span className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 opacity-70">
              Commerce
            </span>
          )}
          {commerceNav.map(item => renderNavLink(item))}
        </div>

        {/* Intelligence */}
        <div className="space-y-1">
          {!isCollapsed && (
            <span className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 opacity-70">
              Intelligence
            </span>
          )}
          {intelligenceNav.map(item => renderNavLink(item))}
        </div>

        {/* System */}
        <div className="space-y-1 pt-4 border-t border-slate-50">
          {systemNav.map(item => renderNavLink(item))}
        </div>
      </nav>

      <div className={`mt-auto pt-6 border-t border-slate-50 ${isCollapsed ? 'px-0' : ''}`}>
        <div className={`bg-slate-50 rounded-2xl p-3 flex items-center border border-slate-100 ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold uppercase shrink-0 text-sm">
            OS
          </div>
          {!isCollapsed && (
            <div className="flex-1 truncate animate-in fade-in">
              <p className="text-sm font-bold text-slate-800 truncate">Support Hub</p>
              <p className="text-[10px] font-medium text-slate-500 uppercase tracking-tighter">Documentation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};