
import React from 'react';
import { Store, Palette, Globe, Target, ShieldCheck, History } from 'lucide-react';

export const BrandSettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Workspace & Brand DNA</h2>
        <p className="text-slate-500 font-medium">Define how your brand is perceived and automated by the CommerceOS engine.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <section className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-8">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                 <Store className="w-5 h-5 text-blue-600" /> Business Identity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Brand Name</label>
                    <input className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700" defaultValue="Lumière Fashion" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Industry Core</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none">
                       <option>Luxury Editorial</option>
                       <option>Streetwear & Hype</option>
                       <option>Sustainable Basics</option>
                    </select>
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Brand Mission (AI Context)</label>
                 <textarea className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm font-medium min-h-[100px] outline-none" defaultValue="Providing Italian-crafted minimalism for the modern professional with a focus on sustainability and high-texture visuals." />
              </div>
           </section>

           <section className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                 <h3 className="text-lg font-bold">Workspace Audit</h3>
                 <p className="text-slate-400 text-xs leading-relaxed">
                    Last workspace-wide change was 2h ago by <span className="text-white font-bold">Marcello R.</span> (Changed: Brand Voice tone to 'Sophisticated').
                 </p>
                 <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl text-xs font-bold border border-white/10 transition-all flex items-center justify-center gap-2">
                    <History size={14} /> Full Change Log
                 </button>
              </div>
              <ShieldCheck className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
           </section>
        </div>

        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
           <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Palette className="w-5 h-5 text-indigo-600" /> Global Brand Kit
           </h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Primary Ink', color: '#0F172A' },
                { label: 'Core Accent', color: '#3B82F6' },
                { label: 'Lite Blue', color: '#EAF3FF' },
                { label: 'Editorial White', color: '#FFFFFF' },
              ].map(c => (
                <div key={c.label} className="space-y-3">
                   <div className="h-20 rounded-2xl border border-slate-100 shadow-inner group cursor-pointer relative overflow-hidden" style={{ backgroundColor: c.color }}>
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{c.label}</p>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};
