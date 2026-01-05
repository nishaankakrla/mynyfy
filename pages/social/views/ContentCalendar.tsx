
import React from 'react';
import { ChevronLeft, ChevronRight, Filter, Search, Instagram, Facebook, Twitter, Plus } from 'lucide-react';

export const ContentCalendar: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Content Calendar</h2>
          <p className="text-slate-500 font-medium">Plan your brand's story across all platforms.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white border border-slate-200 rounded-xl flex items-center p-1">
             {['Month', 'Week', 'Day'].map(view => (
               <button key={view} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${view === 'Week' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>
                 {view}
               </button>
             ))}
          </div>
          <button className="bg-slate-900 text-white px-5 py-3 rounded-2xl font-bold shadow-lg flex items-center gap-2">
            <Plus size={18} /> Schedule Post
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
           <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200"><ChevronLeft size={20} /></button>
              <h3 className="font-bold text-slate-800">June 12 - 18, 2024</h3>
              <button className="p-2 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200"><ChevronRight size={20} /></button>
           </div>
           <div className="flex items-center gap-3">
              <button className="p-2 text-slate-400 hover:text-slate-800"><Search size={18} /></button>
              <button className="p-2 text-slate-400 hover:text-slate-800"><Filter size={18} /></button>
           </div>
        </div>

        <div className="grid grid-cols-7 border-b border-slate-50">
           {days.map(day => (
             <div key={day} className="py-4 text-center border-r border-slate-50 last:border-0 bg-slate-50/30">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{day}</span>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-7 min-h-[600px]">
           {[1,2,3,4,5,6,7].map(i => (
             <div key={i} className="border-r border-slate-50 last:border-0 p-4 space-y-4 relative group hover:bg-blue-50/20 transition-colors">
                <span className="text-xs font-bold text-slate-300 group-hover:text-blue-400 transition-colors">1{i} Jun</span>
                
                {/* Mock Posts */}
                {i % 2 === 0 && (
                  <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-100 shadow-sm space-y-2 cursor-pointer hover:scale-[1.02] transition-transform">
                     <div className="flex items-center justify-between">
                        <Instagram size={12} className="text-indigo-600" />
                        <span className="text-[8px] font-bold text-indigo-400">10:00 AM</span>
                     </div>
                     <p className="text-[10px] font-bold text-indigo-900 truncate">Beach Vibes Reel</p>
                  </div>
                )}
                
                {i % 3 === 0 && (
                  <div className="p-2 rounded-xl bg-blue-50 border border-blue-100 shadow-sm space-y-2 cursor-pointer hover:scale-[1.02] transition-transform">
                     <div className="flex items-center justify-between">
                        <Facebook size={12} className="text-blue-600" />
                        <span className="text-[8px] font-bold text-blue-400">02:30 PM</span>
                     </div>
                     <p className="text-[10px] font-bold text-blue-900 truncate">Sale Banner</p>
                  </div>
                )}

                <button className="absolute inset-x-4 bottom-4 py-2 border border-dashed border-slate-200 rounded-lg text-slate-300 opacity-0 group-hover:opacity-100 hover:border-blue-400 hover:text-blue-600 transition-all">
                  <Plus size={14} className="mx-auto" />
                </button>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
