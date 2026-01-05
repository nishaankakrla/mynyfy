
import React from 'react';
import { Library, Search, Filter, Grid, List, MoreVertical, Tag, History, Download } from 'lucide-react';

export const ContentLibrary: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Content Library</h2>
          <p className="text-slate-500 font-medium">The single source of truth for your brand's visual memory.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
             <History size={18} /> History
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-slate-50 pb-8">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Search by topic, tag, or color..." />
            </div>
            <div className="flex items-center gap-4">
               <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800"><Filter size={16} /> Filters</button>
               <div className="h-6 w-[1px] bg-slate-200" />
               <div className="flex gap-2">
                  <button className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Grid size={16} /></button>
                  <button className="p-2 text-slate-400 hover:text-slate-800"><List size={16} /></button>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[1,2,3,4,5,6,7,8,9,10].map(i => (
              <div key={i} className="group relative space-y-3">
                 <div className="aspect-square bg-slate-50 rounded-[20px] border border-slate-100 overflow-hidden relative">
                    <div className="absolute top-3 left-3 z-10">
                       <span className="bg-white/90 backdrop-blur-md text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm">AI GEN</span>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                       <button className="p-2 bg-white rounded-lg text-slate-900"><Download size={14} /></button>
                       <button className="p-2 bg-white rounded-lg text-slate-900"><MoreVertical size={14} /></button>
                    </div>
                 </div>
                 <div className="px-1 space-y-1">
                    <p className="text-[10px] font-bold text-slate-800 truncate">summer_linen_editorial_{i}.jpg</p>
                    <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400">
                       <Tag size={10} /> #summer #linen
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};
