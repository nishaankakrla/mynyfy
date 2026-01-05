
import React from 'react';
import { Link2, Mail, Globe, ShieldCheck, Trash2, Plus } from 'lucide-react';

export const ConnectedLogins: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Connected Logins</h2>
        <p className="text-slate-500 font-medium">Manage how you access the platform across different providers.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-8">
           <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-800">Primary Methods</h3>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Audited Today</span>
           </div>

           {[
             { name: 'Email & Password', detail: 'marcello@lumiere.it', type: 'Primary', icon: Mail, color: 'text-blue-600 bg-blue-50' },
             { name: 'Google Workspace', detail: 'm.rossi@gmail.com', type: 'SSO Enabled', icon: Globe, color: 'text-red-600 bg-red-50' },
           ].map((method, i) => (
             <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-6">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${method.color}`}>
                      <method.icon size={28} />
                   </div>
                   <div>
                      <div className="flex items-center gap-2 mb-1">
                         <h4 className="font-bold text-slate-800">{method.name}</h4>
                         <span className="px-2 py-0.5 rounded bg-white text-[8px] font-black text-slate-400 uppercase tracking-tighter border border-slate-100">{method.type}</span>
                      </div>
                      <p className="text-xs text-slate-400 font-medium">{method.detail}</p>
                   </div>
                </div>
                <button className="text-[10px] font-bold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-widest">Remove</button>
             </div>
           ))}

           <button className="w-full py-4 border-2 border-dashed border-slate-100 rounded-2xl text-slate-400 font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-200 transition-all">
              <Plus size={16} /> Connect another method
           </button>
        </section>

        <div className="bg-indigo-950 rounded-[32px] p-10 text-white relative overflow-hidden group">
           <div className="relative z-10 space-y-6">
              <ShieldCheck size={40} className="text-blue-400" />
              <h3 className="text-2xl font-bold tracking-tight">Identity Synchronization</h3>
              <p className="text-indigo-200 leading-relaxed font-medium max-w-sm">
                 Connecting multiple logins ensures you never lose access to your mission-critical workspaces during platform outages.
              </p>
           </div>
           <Link2 className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
        </div>
      </div>
    </div>
  );
};
