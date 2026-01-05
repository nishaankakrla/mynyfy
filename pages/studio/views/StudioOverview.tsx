
import React from 'react';
import { Sparkles, Calendar, ArrowRight, Play, Clock, CheckCircle } from 'lucide-react';

export const StudioOverview: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">AI Command Center</h1>
          <p className="text-slate-500 font-medium">Your brand's creative pulse is steady. Here's what needs attention.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all flex items-center gap-2">
          <Sparkles size={18} /> New AI Generation
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm overflow-hidden relative group cursor-pointer hover:shadow-xl hover:shadow-blue-50 transition-all">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-4">
                <Sparkles size={12} /> Today's Best Opportunity
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Summer Solstice Flash Sale</h2>
              <p className="text-slate-500 max-w-md leading-relaxed mb-8">
                The weather trends show a 40% uptick in "Linen Shorts" searches. We can generate a 3-post carousel with high-urgency captions.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                  Generate Posts <ArrowRight size={18} />
                </button>
                <button className="text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">Dismiss</button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[28px] border border-slate-100 p-6 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center justify-between">
                Drafts in Progress
                <span className="text-xs text-blue-600 font-bold">4 active</span>
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Beach Lookbook #3', time: 'Edited 2h ago', status: 'Generating' },
                  { name: 'Linen Shorts Ad', time: 'Edited 5h ago', status: 'Ready' },
                ].map((draft, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                        <Clock size={18} className="text-slate-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{draft.name}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{draft.time}</p>
                      </div>
                    </div>
                    <button className="p-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[28px] border border-slate-100 p-6 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center justify-between">
                AI Consistency Score
                <span className="text-xs text-green-600 font-bold">Excellent</span>
              </h3>
              <div className="flex items-center justify-center py-4">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                    <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="276" strokeDashoffset="28" className="text-blue-500" />
                  </svg>
                  <span className="absolute text-2xl font-bold text-slate-800 tracking-tighter">94%</span>
                </div>
              </div>
              <p className="text-[10px] text-center text-slate-400 font-medium px-4 leading-relaxed">
                Your visual tone is highly consistent across Instagram and Facebook.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <Calendar className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-2">Content Pipeline</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                You have 12 assets scheduled for the next 7 days. AI handles the peak engagement timing.
              </p>
              <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-bold text-sm hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                View Calendar <ArrowRight size={16} />
              </button>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
          </div>

          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Recently Published</h3>
            <div className="space-y-6">
              {[
                { title: 'New Arrivals Story', channel: 'Instagram', date: 'Yesterday' },
                { title: 'Eco-Cotton Post', channel: 'Facebook', date: '2 days ago' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-blue-50 transition-colors shrink-0 flex items-center justify-center">
                    <CheckCircle size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.channel} • {item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
