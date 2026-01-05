
import React from 'react';
import { Lock, FileText, Globe, Download, Trash2, ShieldCheck, Activity } from 'lucide-react';

export const PrivacySettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Data & Privacy</h2>
        <p className="text-slate-500 font-medium">Govern your customer data responsibly and meet global compliance standards.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-10">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                 <Globe className="w-5 h-5 text-blue-600" /> Compliance Frameworks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { label: 'GDPR (EU) Shield', status: 'Enabled', text: 'Auto-anonymize data after 24 months of inactivity.' },
                   { label: 'CCPA (California)', status: 'Enabled', text: 'Support "Do Not Sell" requests automatically.' },
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

           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    <Activity className="w-5 h-5 text-indigo-600" /> Subject Access Requests (SAR)
                 </h3>
                 <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-bold">0 PENDING</span>
              </div>
              <div className="p-12 text-center space-y-4 border border-slate-50 rounded-2xl border-dashed">
                 <FileText size={40} className="text-slate-200 mx-auto" />
                 <p className="text-sm font-bold text-slate-800">No active data deletion or export requests.</p>
                 <p className="text-xs text-slate-400 font-medium max-w-xs mx-auto">Verified requests from customers will appear here for your signature.</p>
              </div>
           </section>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white text-center space-y-6 group overflow-hidden relative">
              <Download size={40} className="text-blue-400 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg">Export Workspace Data</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Download an archive of all brand assets, customers, and order history in CSV/JSON format.</p>
              <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold text-xs shadow-xl active:scale-95 transition-all">Prepare Bundle</button>
           </div>

           <div className="bg-red-50 rounded-[32px] p-8 border border-red-100 text-center space-y-4">
              <Trash2 size={32} className="text-red-600 mx-auto" />
              <h3 className="font-bold text-red-900">Workspace Deletion</h3>
              <p className="text-red-700/60 text-[10px] font-medium leading-relaxed uppercase tracking-tighter">Permanently destroy this brand and all associated data.</p>
              <button className="w-full py-3 bg-red-600 text-white rounded-xl font-bold text-[10px] shadow-lg shadow-red-200">DELETE WORKSPACE</button>
           </div>
        </div>
      </div>
    </div>
  );
};
