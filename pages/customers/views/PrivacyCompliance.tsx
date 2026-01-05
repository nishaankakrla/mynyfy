
import React from 'react';
import { ShieldCheck, Lock, EyeOff, FileText, Download, Trash2, Activity, Globe, CheckCircle2 } from 'lucide-react';

export const PrivacyCompliance: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Privacy & Consent</h2>
        <p className="text-slate-500 font-medium">Protecting your customers and your brand ecosystem.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2"><Globe size={18} className="text-blue-600" /> Global Consent Status</h3>
                 <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold border border-green-100">AUDITED TODAY</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                   { label: 'GDPR (EU)', status: 'Compliant', coverage: 100 },
                   { label: 'CCPA (US)', status: 'Compliant', coverage: 100 },
                   { label: 'WhatsApp Terms', status: 'Healthy', coverage: 98 },
                 ].map((c, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-[24px] border border-slate-100 space-y-4">
                       <div className="flex items-center justify-between">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{c.label}</p>
                          <CheckCircle2 size={14} className="text-green-500" />
                       </div>
                       <h4 className="text-xl font-bold text-slate-800">{c.status}</h4>
                       <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500" style={{ width: `${c.coverage}%` }} />
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <Activity size={18} className="text-blue-600" /> Subject Access Requests (SARs)
                 </h3>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active: 0</span>
              </div>
              <div className="p-20 text-center space-y-4">
                 <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                    <FileText size={32} />
                 </div>
                 <h4 className="text-lg font-bold text-slate-800">No pending data requests.</h4>
                 <p className="text-slate-500 max-w-xs mx-auto text-sm leading-relaxed">When customers request their data or account deletion, they will appear here for verification.</p>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <Lock size={32} className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Vault Encryption</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                 All customer PII (Personally Identifiable Information) is encrypted at rest using CommerceOS AES-256 Vault.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-xs shadow-xl transition-all hover:bg-blue-500">
                Manage Keys
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <EyeOff size={18} className="text-red-500" /> Suppression
              </h3>
              <div className="space-y-4">
                 <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500 uppercase tracking-widest">Global Opt-outs</span>
                    <span className="text-slate-900">412</span>
                 </div>
                 <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500 uppercase tracking-widest">Blacklisted</span>
                    <span className="text-slate-900">12</span>
                 </div>
                 <button className="w-full mt-4 py-3 bg-red-50 text-red-600 rounded-xl font-bold text-[10px] border border-red-100 flex items-center justify-center gap-2 hover:bg-red-100 transition-all">
                    <Trash2 size={12} /> Manage Blocklist
                 </button>
              </div>
           </div>

           <div className="p-6 bg-blue-50 rounded-[32px] border border-blue-100 text-center">
              <Download size={32} className="text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-blue-900 mb-2">Compliance Export</h3>
              <p className="text-blue-700/60 text-[10px] font-medium leading-relaxed">Download a full audit log for legal or insurance review.</p>
           </div>
        </div>
      </div>
    </div>
  );
};
