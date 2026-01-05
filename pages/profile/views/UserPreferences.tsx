
import React from 'react';
import { Sliders, Globe, Clock, Sun, Layout, Zap, MousePointer2 } from 'lucide-react';

export const UserPreferences: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Experience & Experience</h2>
        <p className="text-slate-500 font-medium">Fine-tune your personal productivity and visual preferences.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-10">
           <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <Sun className="w-6 h-6 text-blue-600" /> Interface Theme
           </h3>
           <div className="grid grid-cols-3 gap-6">
              {['Light Mode', 'Dark Mode', 'System Sync'].map(mode => (
                 <button key={mode} className={`p-6 rounded-[24px] border-2 transition-all flex flex-col items-center gap-4 group ${mode === 'Light Mode' ? 'border-blue-600 bg-blue-50/30' : 'border-slate-50 bg-slate-50/50 hover:border-slate-200'}`}>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${mode === 'Light Mode' ? 'bg-white text-blue-600' : 'bg-slate-200 text-slate-400 group-hover:bg-white transition-colors'}`}>
                       {mode === 'Light Mode' ? <Sun size={24} /> : <Layout size={24} />}
                    </div>
                    <span className={`text-xs font-bold ${mode === 'Light Mode' ? 'text-blue-600' : 'text-slate-500'}`}>{mode}</span>
                 </button>
              ))}
           </div>
        </section>

        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
           <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Layout className="w-6 h-6 text-indigo-600" /> Product Shortcuts
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Default Landing Tab</label>
                 <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700">
                    <option>Executive Dashboard</option>
                    <option>AI Content Studio</option>
                    <option>Order Management</option>
                 </select>
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sidebar Interaction</label>
                 <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Hover to Expand</span>
                    <div className="w-8 h-4 bg-slate-200 rounded-full relative">
                       <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                 <Zap className="w-6 h-6 text-orange-500" /> AI Assistance Level
              </h3>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">User Personalization</span>
           </div>
           <div className="space-y-8">
              <div className="space-y-4">
                 <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                    <span>Silent (No tooltips)</span>
                    <span>Proactive (Suggested actions)</span>
                 </div>
                 <input type="range" className="w-full accent-blue-600" defaultValue={70} />
              </div>
           </div>
        </section>

        <div className="flex justify-end gap-3">
           <button className="px-6 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 transition-all">Reset Defaults</button>
           <button className="px-10 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">Save Preferences</button>
        </div>
      </div>
    </div>
  );
};
