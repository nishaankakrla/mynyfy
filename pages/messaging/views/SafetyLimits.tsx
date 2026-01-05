
import React from 'react';
import { ShieldAlert, Activity, AlertCircle, BarChart3, Lock, Zap } from 'lucide-react';

export const SafetyLimits: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Safety & Limits</h2>
        <p className="text-slate-500 font-medium">Protect your brand reputation and platform standing.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2"><ShieldAlert size={20} className="text-orange-500" /> Active Rate Limits</h3>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Constraints</span>
              </div>
              
              <div className="space-y-6">
                 {[
                   { plat: 'Instagram', label: 'Max DM per Hour', used: 12, limit: 100, status: 'Safe' },
                   { plat: 'WhatsApp', label: 'Inbound Conversations', used: 450, limit: 1000, status: 'Safe' },
                   { plat: 'Instagram', label: 'Total Messages (24h)', used: 840, limit: 1000, status: 'Warning' },
                 ].map((limit, i) => (
                   <div key={i} className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold">
                         <div className="flex items-center gap-2">
                            <span className="text-slate-400 uppercase tracking-widest">{limit.plat}</span>
                            <span className="text-slate-700">{limit.label}</span>
                         </div>
                         <span className={limit.status === 'Safe' ? 'text-green-600' : 'text-orange-500'}>
                            {limit.used} / {limit.limit}
                         </span>
                      </div>
                      <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                         <div className={`h-full transition-all duration-1000 ${limit.status === 'Safe' ? 'bg-blue-500' : 'bg-orange-500'}`} style={{ width: `${(limit.used/limit.limit)*100}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-slate-900 rounded-[32px] p-10 text-white relative overflow-hidden group">
              <div className="relative z-10 max-w-md space-y-6">
                 <Lock size={40} className="text-blue-400" />
                 <h2 className="text-2xl font-bold tracking-tight">Shadow-ban Detection</h2>
                 <p className="text-slate-400 leading-relaxed font-medium">
                    CommerceOS monitors reach and engagement anomalies. If we detect risk, we automatically throttle automation to 20% capacity.
                 </p>
                 <button className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold text-sm shadow-xl flex items-center gap-2">
                    Run Risk Audit <Activity size={18} />
                 </button>
              </div>
              <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <AlertCircle size={18} className="text-orange-500" /> Guardian Rules
              </h3>
              <div className="space-y-4">
                 {[
                   'Never double-message',
                   '30s Delay between DMs',
                   'Night mode active (Local)',
                   'Auto-block spam intent'
                 ].map((rule, i) => (
                   <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      {rule}
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-blue-50 rounded-[32px] p-8 border border-blue-100 text-center">
              <Zap size={32} className="text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-blue-900 mb-2">Emergency Switch</h3>
              <p className="text-blue-700/60 text-xs font-medium mb-6 leading-relaxed">Kill all automation immediately for this workspace.</p>
              <button className="w-full py-4 bg-red-600 text-white rounded-xl font-bold text-xs shadow-lg shadow-red-200 active:scale-95 transition-all">
                 Emergency Halt
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
