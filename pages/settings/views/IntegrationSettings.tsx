
import React from 'react';
import { Puzzle, Globe, Code, Plus, MoreVertical, Terminal, Key } from 'lucide-react';

export const IntegrationSettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Apps & API</h2>
          <p className="text-slate-500 font-medium">Extend CommerceOS by connecting third-party logic and custom hooks.</p>
        </div>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-slate-800 transition-all">
           <Code size={18} /> API Documentation
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                 <h3 className="font-bold text-slate-800 flex items-center gap-3"><Key size={20} className="text-blue-600" /> Active API Keys</h3>
                 <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md flex items-center gap-2"><Plus size={14} /> New Key</button>
              </div>
              <div className="space-y-4">
                 {[
                   { label: 'Production: CRM Sync', key: 'pk_live_****************', usage: 'High', status: 'Active' },
                   { label: 'Dev: Local Test', key: 'pk_test_****************', usage: 'None', status: 'Inactive' },
                 ].map((k, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group">
                       <div className="flex items-center gap-6">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-all shadow-sm">
                             <Terminal size={18} />
                          </div>
                          <div>
                             <p className="text-sm font-bold text-slate-800">{k.label}</p>
                             <p className="text-xs font-mono text-slate-400 mt-1">{k.key}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-8">
                          <div className="text-right">
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Usage</p>
                             <p className="text-xs font-bold text-slate-700">{k.usage}</p>
                          </div>
                          <button className="p-2 text-slate-300 hover:text-red-500 transition-colors"><MoreVertical size={18} /></button>
                       </div>
                    </div>
                 ))}
              </div>
           </section>

           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                 <Globe className="w-5 h-5 text-indigo-600" /> Webhooks
              </h3>
              <div className="divide-y divide-slate-50">
                 {[
                   { event: 'order.completed', url: 'https://api.brand.com/v1/hooks', status: 'Ready' },
                   { event: 'lead.qualified', url: 'https://hooks.zapier.com/123/abc', status: 'Active' },
                 ].map((w, i) => (
                    <div key={i} className="py-6 flex items-center justify-between group">
                       <div className="space-y-1">
                          <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{w.event}</p>
                          <p className="text-xs text-slate-400 font-medium truncate max-w-md">{w.url}</p>
                       </div>
                       <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold border border-green-100">{w.status}</span>
                    </div>
                 ))}
              </div>
           </section>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-950 rounded-[32px] p-8 text-white group overflow-hidden relative">
              <Puzzle size={32} className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Native Marketplace</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">Connect officially supported apps like Slack, Shopify, and Klaviyo in one click.</p>
              <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold text-xs shadow-xl transition-all hover:bg-blue-50">Browse Marketplace</button>
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
           </div>
        </div>
      </div>
    </div>
  );
};
