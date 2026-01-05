
import React from 'react';
import { Zap, Clock, ShieldAlert, BarChart3, RotateCcw } from 'lucide-react';

export const AutomationSettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Automation Governance</h2>
        <p className="text-slate-500 font-medium">Establish the guardrails for your brand's automated behaviors.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-8">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                 <Clock className="w-5 h-5 text-blue-600" /> Quiet Hours & Scheduling
              </h3>
              <div className="space-y-6">
                 <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                       <p className="text-sm font-bold text-slate-800">Global Quiet Hours</p>
                       <p className="text-xs text-slate-500">Pause all Auto-DMs during specific windows.</p>
                    </div>
                    <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                       <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-6 opacity-50 pointer-events-none">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Start Time</label>
                       <input type="time" className="w-full bg-white border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold" defaultValue="22:00" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">End Time</label>
                       <input type="time" className="w-full bg-white border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold" defaultValue="08:00" />
                    </div>
                 </div>
              </div>
           </section>

           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-8">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                 <ShieldAlert className="w-5 h-5 text-orange-500" /> Platform Safety Limits
              </h3>
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between items-center mb-3">
                       <label className="text-xs font-bold text-slate-500">Max Auto-DMs per hour (Instagram)</label>
                       <span className="text-blue-600 font-bold text-xs">25 / 100 Safe</span>
                    </div>
                    <input type="range" className="w-full accent-blue-600" defaultValue={25} />
                 </div>
                 <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-100 rounded-2xl text-orange-700 text-xs font-medium leading-relaxed">
                    <ShieldAlert size={16} className="shrink-0" />
                    Our AI suggests keeping this below 50 to maintain perfect account standing.
                 </div>
              </div>
           </section>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white text-center space-y-6 group">
              <Zap size={48} className="text-blue-400 mx-auto group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold">Emergency Kill-Switch</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Immediately pause ALL automated content and DMs across all linked platforms.</p>
              <button className="w-full py-4 bg-red-600 text-white rounded-2xl font-bold text-xs shadow-xl active:scale-95 transition-all">HAZARD: HALT SYSTEM</button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <RotateCcw size={18} className="text-blue-600" /> Fail-safe Logic
              </h3>
              <div className="space-y-4">
                 <p className="text-xs text-slate-500 leading-relaxed font-medium">When a post fails to publish:</p>
                 <div className="space-y-2">
                    <button className="w-full text-left p-3 rounded-xl bg-blue-50 border border-blue-200 text-[10px] font-bold text-blue-600">Retry 3x, then alert team</button>
                    <button className="w-full text-left p-3 rounded-xl border border-slate-100 text-[10px] font-bold text-slate-500 hover:bg-slate-50">Move to recovery zone</button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
