
import React from 'react';
import { Cpu, RotateCcw, Zap, Target, ShieldAlert, Code } from 'lucide-react';

export const AdvancedSettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">System Controls</h2>
        <p className="text-slate-500 font-medium">Expose underlying OS mechanisms and experimental capabilities.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                 <Zap className="w-5 h-5 text-blue-600" /> Beta Feature Access
              </h3>
              <div className="space-y-4">
                 {[
                   { label: 'Predictive Multi-Variant Gen', desc: 'Allow AI to create 50+ variants for every draft.', status: 'Inactive' },
                   { label: 'Conversational Voice AI (Beta)', desc: 'Enable WhatsApp voice-note intelligence.', status: 'Inactive' },
                   { label: 'Blockchain Attribution Shield', desc: 'Immutable order hashing for high-value sales.', status: 'Inactive' },
                 ].map((feat, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-blue-200 transition-all">
                       <div className="space-y-1">
                          <p className="text-sm font-bold text-slate-800">{feat.label}</p>
                          <p className="text-xs text-slate-400 font-medium">{feat.desc}</p>
                       </div>
                       <button className="px-6 py-2 bg-white border border-slate-200 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-600 hover:text-white transition-all">Join Waitlist</button>
                    </div>
                 ))}
              </div>
           </section>

           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                 <RotateCcw className="w-5 h-5 text-indigo-600" /> Historical Reprocessing
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                 If you've updated your attribution models or brand kit, you can force the system to re-analyze historical data. 
                 <span className="text-orange-500 font-bold block mt-2">Warning: This may change legacy analytics dashboards.</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <button className="bg-slate-900 text-white p-6 rounded-2xl font-bold text-sm text-left shadow-xl shadow-blue-900/10 hover:bg-blue-600 transition-all">
                    Re-analyze Orders <p className="text-[10px] opacity-40 font-medium mt-1 uppercase tracking-widest">Last 90 Days</p>
                 </button>
                 <button className="bg-slate-50 border border-slate-100 p-6 rounded-2xl font-bold text-sm text-left text-slate-400 hover:bg-slate-100 transition-all">
                    Sync Identity Cache <p className="text-[10px] opacity-40 font-medium mt-1 uppercase tracking-widest">Last 30 Days</p>
                 </button>
              </div>
           </section>
        </div>

        <div className="space-y-6">
           <div className="bg-blue-50 rounded-[32px] p-8 border border-blue-100 text-center space-y-4">
              <Cpu size={32} className="text-blue-600 mx-auto" />
              <h3 className="font-bold text-blue-900">System Verbosity</h3>
              <p className="text-blue-700/60 text-[10px] font-medium leading-relaxed">Toggle detailed debug logs for edge functions and API hooks. High performance impact.</p>
              <div className="w-full flex items-center justify-between bg-white/50 p-3 rounded-xl">
                 <span className="text-xs font-bold text-slate-500">Debug Mode</span>
                 <div className="w-8 h-4 bg-slate-200 rounded-full" />
              </div>
           </div>

           <div className="p-8 bg-slate-900 rounded-[32px] text-white space-y-4">
              <ShieldAlert size={32} className="text-orange-400" />
              <h3 className="font-bold">Dangerous Mode</h3>
              <p className="text-[10px] text-slate-400 leading-relaxed">Only used for system resets and factory defaults. High risk of data loss.</p>
              <button className="w-full py-4 bg-white/10 border border-white/10 text-white rounded-xl font-bold text-[10px] hover:bg-red-600 hover:border-red-600 transition-all uppercase tracking-widest">Unlock Admin Panel</button>
           </div>
        </div>
      </div>
    </div>
  );
};
