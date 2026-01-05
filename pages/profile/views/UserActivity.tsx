
import React from 'react';
import { Activity, Search, Filter, History, ShoppingBag, Sparkles, UserCheck, MessageSquare } from 'lucide-react';

export const UserActivity: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Your Activity</h2>
          <p className="text-slate-500 font-medium">A transparent log of every action you've taken within the OS.</p>
        </div>
        <div className="relative w-64">
           <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
           <input className="w-full bg-white border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none" placeholder="Search activity..." />
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
           <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <History size={18} className="text-blue-600" /> Action Stream
           </h3>
           <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-all flex items-center gap-2">
              <Filter size={14} /> Filter Logic
           </button>
        </div>

        <div className="divide-y divide-slate-50">
           {[
             { action: 'Approved "Summer Lookbook #3" Reel', context: 'Studio: Lumière Fashion', time: '10m ago', icon: UserCheck, color: 'text-green-600 bg-green-50' },
             { action: 'Generated 3 caption variants for FB', context: 'AI Studio', time: '2h ago', icon: Sparkles, color: 'text-blue-600 bg-blue-50' },
             { action: 'Modified shipping trigger "PRICE"', context: 'Auto-DM: Settings', time: '5h ago', icon: MessageSquare, color: 'text-indigo-600 bg-indigo-50' },
             { action: 'Updated pricing for Silk Blazer', context: 'Catalog: Physical', time: 'Yesterday', icon: ShoppingBag, color: 'text-orange-600 bg-orange-50' },
           ].map((item, i) => (
             <div key={i} className="p-8 flex items-center justify-between group hover:bg-slate-50/50 transition-all">
                <div className="flex items-center gap-6">
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-white group-hover:scale-110 transition-transform ${item.color}`}>
                      <item.icon size={20} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-slate-800 leading-snug">{item.action}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-widest">{item.context}</p>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-sm font-bold text-slate-900">{item.time}</p>
                   <p className="text-[10px] text-slate-300 font-bold uppercase mt-1">Grounded Audit</p>
                </div>
             </div>
           ))}
        </div>

        <div className="p-10 text-center bg-slate-50/50 border-t border-slate-50">
           <button className="text-blue-600 font-bold text-sm hover:underline">Load past 30 days of activity</button>
        </div>
      </div>
    </div>
  );
};
