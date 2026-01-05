
import React from 'react';
import { ShieldCheck, Lock, Smartphone, Key, History, AlertTriangle } from 'lucide-react';

export const SecuritySettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Security & Governance</h2>
        <p className="text-slate-500 font-medium">Protect your brand assets and team identities with enterprise-grade controls.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                 <Lock className="w-5 h-5 text-blue-600" /> Account Hardening
              </h3>
              <div className="space-y-6">
                 <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 group">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                          <Smartphone size={24} />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-slate-800">Two-Factor Authentication (2FA)</p>
                          <p className="text-xs text-slate-400 font-medium leading-relaxed">Add an extra layer of security via Authenticator app or SMS.</p>
                       </div>
                    </div>
                    <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-100">Enable Now</button>
                 </div>

                 <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 group">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 shadow-sm group-hover:scale-110 transition-transform">
                          <Key size={24} />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-slate-800">Manage Password</p>
                          <p className="text-xs text-slate-400 font-medium leading-relaxed">Last updated 4 months ago. AI recommends updating every 6 months.</p>
                       </div>
                    </div>
                    <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all">Reset</button>
                 </div>
              </div>
           </section>

           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    <History className="w-5 h-5 text-indigo-600" /> Security Audit Log
                 </h3>
                 <button className="text-xs font-bold text-blue-600 hover:underline">Export Logs</button>
              </div>
              <div className="divide-y divide-slate-50">
                 {[
                   { event: 'New Login', details: 'Chrome 124, Rome IT', time: '2m ago', severity: 'Info' },
                   { event: '2FA Enrollment', details: 'Setup initiated', time: '4h ago', severity: 'High' },
                   { event: 'Token Refresh', details: 'Instagram API Hook', time: 'Yesterday', severity: 'Info' },
                 ].map((log, i) => (
                    <div key={i} className="py-5 flex items-center justify-between group">
                       <div className="flex items-center gap-4">
                          <div className={`w-1.5 h-1.5 rounded-full ${log.severity === 'High' ? 'bg-orange-500' : 'bg-green-500'}`} />
                          <div>
                             <p className="text-sm font-bold text-slate-800">{log.event}</p>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{log.details}</p>
                          </div>
                       </div>
                       <span className="text-[10px] font-bold text-slate-300">{log.time}</span>
                    </div>
                 ))}
              </div>
           </section>
        </div>

        <div className="space-y-6">
           <div className="bg-orange-50 rounded-[32px] p-8 border border-orange-100 flex flex-col items-center text-center space-y-4">
              <AlertTriangle size={32} className="text-orange-600" />
              <h3 className="font-bold text-orange-900">Session Guard</h3>
              <p className="text-orange-700/60 text-[10px] font-medium leading-relaxed">Kill all active sessions and force logout for all team members globally.</p>
              <button className="w-full py-4 bg-orange-600 text-white rounded-xl font-bold text-xs shadow-lg shadow-orange-200">Force Global Logout</button>
           </div>
           
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2"><ShieldCheck size={18} className="text-green-600" /> Compliant Storage</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4">
                 CommerceOS data is encrypted at rest (AES-256) and in transit (TLS 1.3).
              </p>
              <button className="w-full py-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest">Download Trust Kit</button>
           </div>
        </div>
      </div>
    </div>
  );
};
