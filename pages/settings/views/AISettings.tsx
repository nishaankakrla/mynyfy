
import React from 'react';
import { Sparkles, Sliders, MessageSquare, Bot, AlertCircle, History } from 'lucide-react';

export const AISettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Intelligence & Tuning</h2>
        <p className="text-slate-500 font-medium">Fine-tune the weights and behaviors of the CommerceOS AI engine.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <section className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm space-y-10">
              <div className="flex items-center justify-between">
                 <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    <Sliders className="w-5 h-5 text-blue-600" /> Generation Parameters
                 </h3>
                 <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold border border-blue-100">PRO MODEL ACTIVE</span>
              </div>

              <div className="space-y-10">
                 <div className="space-y-6">
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-sm font-bold text-slate-800">Creativity Weight (Temperature)</p>
                          <p className="text-xs text-slate-400 font-medium">Balance between brand safety and avant-garde content.</p>
                       </div>
                       <span className="text-blue-600 font-bold text-sm">40% Conservative</span>
                    </div>
                    <input type="range" className="w-full accent-blue-600" defaultValue={40} />
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Emoji Personality</label>
                       <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700">
                          <option>Minimalist (Rare)</option>
                          <option>Hype (2-3 per post)</option>
                          <option>Zero (Professional)</option>
                       </select>
                    </div>
                    <div className="space-y-3">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Confidence Threshold</label>
                       <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700">
                          <option>High (90%+ only)</option>
                          <option>Balanced (75%+)</option>
                          <option>Experimental (All)</option>
                       </select>
                    </div>
                 </div>
              </div>
           </section>

           <section className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                 <MessageSquare className="w-5 h-5 text-indigo-600" /> AI Brand Voice Memory
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                 The AI analyzes your past 100 successful posts to build a custom "Voice Profile". Update this profile manually below to force specific patterns.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 border-dashed text-center cursor-pointer hover:bg-slate-100 transition-all">
                 <p className="text-xs font-bold text-slate-400 uppercase mb-2">Voice Blueprint</p>
                 <p className="text-sm font-medium text-slate-600 italic">"Sophisticated, brief, high-usage of 'editorial', never mentions pricing in initial captions..."</p>
                 <button className="mt-4 text-xs font-bold text-blue-600">Re-learn from Instagram Feed</button>
              </div>
           </section>
        </div>

        <div className="space-y-6">
           <div className="bg-indigo-950 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <Sparkles size={32} className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Predictive Autopilot</h3>
              <p className="text-indigo-200 text-xs leading-relaxed mb-8">
                 Allow AI to automatically schedule and publish content when confidence scores reach your set threshold.
              </p>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 text-xs font-bold">
                 <span>Enable Autopilot</span>
                 <div className="w-8 h-4 bg-slate-600 rounded-full relative">
                    <div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full" />
                 </div>
              </div>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <History size={18} className="text-blue-600" /> Explainability
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium mb-6">
                 Include AI reasoning in draft notes to help the team understand creative choices.
              </p>
              <div className="w-full flex items-center justify-between">
                 <span className="text-xs font-bold text-slate-700">Detailed logs</span>
                 <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
