
import React from 'react';
import { Lock, Smartphone, Key, History, AlertTriangle, Monitor, Globe, ShieldCheck } from 'lucide-react';

export const AccountSecurity: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Account Protection</h2>
        <p className="text-slate-500 font-medium">Securing your individual identity and administrative access.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-10">
           <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                 <Smartphone className="w-6 h-6 text-blue-600" /> Two-Factor Authentication (2FA)
              </h3>
              <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold border border-orange-100">STRONGLY RECOMMENDED</span>
           </div>

           <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-blue-100 transition-all">
              <div className="flex items-center gap-6">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <ShieldCheck size={32} />
                 </div>
                 <div>
                    <p className="text-sm font-bold text-slate-800">Authenticator App</p>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">Use apps like Google Authenticator or 1Password to generate codes.</p>
                 </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold text-xs shadow-lg">Enable 2FA</button>
           </div>
        </section>

        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
           <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Monitor className="w-6 h-6 text-indigo-600" /> Active Sessions
           </h3>
           <div className="space-y-6">
              {[
                { device: 'MacBook Pro 16"', location: 'Milan, Italy', status: 'Current Session', icon: Monitor, time: 'Active now' },
                { device: 'iPhone 15 Pro', location: 'Milan, Italy', status: 'Mobile App', icon: Smartphone, time: '2h ago' },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                         <session.icon size={24} />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-800">{session.device}</p>
                         <p className="text-xs text-slate-400 font-medium flex items-center gap-2">
                            <Globe size={12} /> {session.location} • {session.time}
                         </p>
                      </div>
                   </div>
                   {i === 0 ? (
                      <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Active</span>
                   ) : (
                      <button className="text-[10px] font-bold text-red-500 hover:underline uppercase tracking-widest">Revoke</button>
                   )}
                </div>
              ))}
              <button className="w-full mt-4 py-3 bg-red-50 text-red-600 rounded-xl font-bold text-xs border border-red-100 hover:bg-red-100 transition-all flex items-center justify-center gap-2">
                 <AlertTriangle size={16} /> Sign out from all devices
              </button>
           </div>
        </section>

        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                 <History className="w-6 h-6 text-slate-600" /> Security History
              </h3>
              <button className="text-xs font-bold text-blue-600 hover:underline">Download Audit Log</button>
           </div>
           <div className="divide-y divide-slate-50">
              {[
                { action: 'Password changed', time: '4 months ago', severity: 'High' },
                { action: 'New login detected from Milan, IT', time: '2 days ago', severity: 'Info' },
                { action: 'Authenticator enabled', time: '1 year ago', severity: 'High' },
              ].map((log, i) => (
                <div key={i} className="py-5 flex items-center justify-between group">
                   <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${log.severity === 'High' ? 'bg-orange-500' : 'bg-green-500'}`} />
                      <p className="text-sm font-bold text-slate-800">{log.action}</p>
                   </div>
                   <span className="text-[10px] font-bold text-slate-300">{log.time}</span>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};
