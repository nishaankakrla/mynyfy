
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Bell, ChevronDown, Bot, LogOut } from 'lucide-react';

interface HeaderProps {
  isCollapsed: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isCollapsed }) => {
  const { user, brand, signOut } = useAuth();

  return (
    <header 
      className={`h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 fixed top-0 right-0 z-20 flex items-center justify-between px-8 transition-all duration-300 ${
        isCollapsed ? 'left-20' : 'left-72'
      }`}
    >
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-2 rounded-[12px] hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
            {brand?.logo_url ? (
              <img src={brand.logo_url} alt={brand.name} className="w-full h-full object-contain" />
            ) : (
              <span className="text-blue-600 text-xs font-bold">{brand?.name?.substring(0,2).toUpperCase() || 'CO'}</span>
            )}
          </div>
          <span className="font-semibold text-slate-700">{brand?.name || 'My Brand'}</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-400 rounded-full cursor-not-allowed opacity-60 transition-all border border-slate-100">
          <Bot className="w-4 h-4" />
          <span className="text-sm font-medium">AI Copilot</span>
        </button>

        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>

          <div className="flex items-center gap-3 group relative">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-800">{user?.email.split('@')[0]}</p>
              <p className="text-xs text-slate-500">Store Owner</p>
            </div>
            <button className="w-10 h-10 rounded-[12px] bg-slate-100 overflow-hidden border border-slate-200 group-hover:border-blue-300 transition-colors">
              <img src={user?.avatar_url || `https://ui-avatars.com/api/?name=${user?.email}&background=3B82F6&color=fff`} alt="Avatar" className="w-full h-full object-cover" />
            </button>

            <div className="absolute right-0 top-full pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
              <div className="bg-white rounded-[16px] shadow-xl border border-slate-100 w-48 py-2">
                <button 
                  onClick={signOut}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
