
import React from 'react';
import { Flag, Calendar, Target, Plus, Zap, ArrowRight, Share2, Layers } from 'lucide-react';

export const CampaignBuilder: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Campaign Builder</h2>
          <p className="text-slate-500 font-medium">Create content ecosystems, not just single posts.</p>
        </div>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2">
          <Plus size={18} /> New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-white rounded-[28px] border border-slate-100 p-8 shadow-sm space-y-8">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Active Campaigns</h3>
              <div className="space-y-4">
                {[
                  { name: 'Summer Launch', progress: 85, color: 'bg-blue-500' },
                  { name: 'Sustainability Week', progress: 40, color: 'bg-green-500' },
                  { name: 'Flash Sale (Friday)', progress: 0, color: 'bg-slate-200' },
                ].map((c, i) => (
                  <div key={i} className="space-y-2 group cursor-pointer">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{c.name}</span>
                      <span className="text-slate-400">{c.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                       <div className={`h-full ${c.color} transition-all duration-1000`} style={{ width: `${c.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 bg-slate-50 text-slate-400 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors">
                Archive
              </button>
           </div>
        </div>

        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 max-w-lg space-y-6">
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <Flag size={32} />
                 </div>
                 <h2 className="text-3xl font-bold text-slate-900 leading-tight">Generate a 7-day Multi-Asset Campaign in 60 seconds.</h2>
                 <p className="text-slate-500 font-medium leading-relaxed">
                   Select your goal, brand keywords, and dates. AI will blueprint the posts, stories, and ads needed to drive your ROI.
                 </p>
                 <div className="grid grid-cols-3 gap-4 pb-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                       <Target size={14} className="text-blue-500" /> Conversion
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                       <Share2 size={14} className="text-blue-500" /> Awareness
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                       <Calendar size={14} className="text-blue-500" /> Evergreen
                    </div>
                 </div>
                 <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 flex items-center gap-3 hover:bg-blue-700 transition-all">
                    Start Campaign Blueprint <Zap size={20} />
                 </button>
              </div>
              <div className="absolute top-0 right-0 h-full w-1/3 flex items-center justify-center bg-slate-50 group-hover:bg-blue-50 transition-colors pointer-events-none">
                 <Layers size={200} className="text-slate-100 group-hover:text-blue-100 transition-colors rotate-12" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
