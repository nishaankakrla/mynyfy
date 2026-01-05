
import React from 'react';
import { ShieldCheck, Zap, MessageSquare, Sliders, History, Target, Cpu } from 'lucide-react';

export const CopilotSettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Copilot Governance</h2>
        <p className="text-slate-500 font-medium">Fine-tune the weights, behaviors, and safety guardrails of your Operating Partner.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <section className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm space-y-10">
              <div className="flex items-center justify-between">
                 <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    <Sliders className="w-5 h-5 text-blue-600" /> Behavioral Engine
                 </h3>
                 <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold border border-blue-100">NEURAL CORE V4.2</span>
              </div>

              <div className="space-y-10">
                 <div className="space-y-6">
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-sm font-bold text-slate-800">Proactivity level</p>
                          <p className="text-xs text-slate-400 font-medium">How often should Copilot surface suggestions without being asked?</p>
                       </div>
                       <span className="text-blue-600 font-bold text-sm">60% Balanced</span>
                    </div>
                    <input type="range" className="w-full accent-blue-600" defaultValue={60} />
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Explanation Depth</label>
                       <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none">
                          <option>Deep Dive (Data + Assumptions)</option>
                          <option>Standard (Logic only)</option>
                          <option>Concise (Result only)</option>
                       </select>
                    </div>
                    <div className="space-y-3">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Confirmation Mode</label>
                       <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none">
                          <option>Strict (Review every detail)</option>
                          <option>Optimistic (Confirm core only)</option>
                          <option>Auto-Pilot (Select tasks only)</option>
                       </select>
                    </div>
                 </div>
              </div>
           </section>

           <section className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-green-600" /> Action Boundaries
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                 Define which systems Copilot is allowed to touch without explicit Owner sign-off. Restricted actions will always require a confirmation.
              </p>
              <div className="space-y-4">
                 {[
                   { label: 'Create Content Drafts', status: 'Allowed' },
                   { label: 'Suggest Schedule Changes', status: 'Allowed' },
                   { label: 'Modify Billing or Plan', status: 'Always Gated' },
                   { label: 'Delete Workspace Data', status: 'Always Gated' },
                   { label: 'Export PII (Customers)', status: 'Restricted (Admin)' },
                 ].map((rule, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold text-slate-700">
                       {rule.label}
                       <span className={`text-[8px] uppercase tracking-widest px-2 py-0.5 rounded ${rule.status === 'Allowed' ? 'bg-green-100 text-green-600' : rule.status === 'Always Gated' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-400'}`}>
                          {rule.status}
                       </span>
                    </div>
                 ))}
              </div>
           </section>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <Cpu size={32} className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Cognitive Purge</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                 Clear Copilot's memory for this workspace. This will reset all learned preferences and brand patterns.
              </p>
              <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-xs shadow-xl active:scale-95 transition-all">
                Reset Memory (Permanent)
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <Target size={18} className="text-blue-600" /> Focus Alignment
              </h3>
              <div className="space-y-4">
                 {[
                   { label: 'Aggressive Growth', active: true },
                   { label: 'Profit Retention', active: false },
                   { label: 'Safety & Stability', active: false },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between text-[10px] font-bold">
                      <span className="text-slate-400 uppercase tracking-widest">{item.label}</span>
                      <div className={`w-8 h-4 rounded-full relative cursor-pointer ${item.active ? 'bg-blue-600' : 'bg-slate-200'}`}>
                         <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${item.active ? 'right-0.5' : 'left-0.5'}`} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
