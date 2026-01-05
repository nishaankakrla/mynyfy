
import React from 'react';
import { Fingerprint, Download, Trash2, ShieldCheck, Activity, Globe, Lock } from 'lucide-react';

export const DataPrivacy: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Your Data & Privacy</h2>
        <p className="text-slate-500 font-medium">Control your personal information and exercise your digital rights.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    <Download className="w-6 h-6 text-blue-600" /> Data Portability
                 </h3>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">GDPR COMPLIANT</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                 You can request an archive of all personal information we store about your identity, activities, and metadata. This process takes up to 24 hours.
              </p>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl flex items-center gap-2 hover:bg-slate-800 transition-all">
                 Request Personal Data Export <Download size={18} />
              </button>
           </section>

           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-indigo-600" /> Regional Compliance
                 </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   { label: 'Right to be forgotten', text: 'Auto-delete user logs after 36 months of inactivity.' },
                   { label: 'Processing Consent', text: 'You allow CommerceOS to process activity for AI suggestions.' },
                 ].map((c, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                       <div className="flex items-center justify-between">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{c.label}</p>
                          <div className="w-8 h-4 bg-green-500 rounded-full relative">
                             <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                          </div>
                       </div>
                       <p className="text-xs text-slate-600 font-medium leading-relaxed">{c.text}</p>
                    </div>
                 ))}
              </div>
           </section>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white group overflow-hidden relative text-center">
              <Lock size={40} className="text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg">Encryption Guard</h3>
              <p className="text-slate-400 text-[10px] leading-relaxed">Your PII is encrypted at rest (AES-256) and strictly scoped to your User ID.</p>
           </div>

           <div className="bg-red-50 rounded-[32px] p-8 border border-red-100 text-center space-y-4">
              <Trash2 size={32} className="text-red-600 mx-auto" />
              <h3 className="font-bold text-red-900">Account Deletion</h3>
              <p className="text-red-700/60 text-[10px] font-medium leading-relaxed uppercase tracking-tighter">Permanently delete your profile and personal access logs.</p>
              <button className="w-full py-3 bg-red-600 text-white rounded-xl font-bold text-[10px] shadow-lg shadow-red-200">DELETE MY ACCOUNT</button>
           </div>
        </div>
      </div>
    </div>
  );
};
