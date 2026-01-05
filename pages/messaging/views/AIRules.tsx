
import React from 'react';
import { Bot, Sliders, MessageSquare, ShieldCheck, Zap, History, Sparkles } from 'lucide-react';

export const AIRules: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">AI Reply Engine</h2>
        <p className="text-slate-500 font-medium">Configure the intelligence that powers your conversations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-10">
              <div className="flex items-center justify-between">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2"><Sliders size={18} className="text-blue-600" /> Behavioral Settings</h3>
                 <Sparkles size={18} className="text-blue-400" />
              </div>

              <div className="space-y-8">
                 <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                       <span>Polite & Safe</span>
                       <span>Aggressive & Sales-Focused</span>
                    </div>
                    <input type="range" className="w-full accent-blue-600" defaultValue={40} />
                    <p className="text-[10px] text-slate-400 italic">Current: Conversational but persistent on closing appointments.</p>
                 </div>

                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <label className="text-xs font-bold text-slate-500 block mb-3">Response Tone</label>
                       <select className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3 text-sm font-bold text-slate-700 outline-none">
                          <option>Luxury Minimalist</option>
                          <option>Streetwear Hype</option>
                          <option>Classic Professional</option>
                       </select>
                    </div>
                    <div>
                       <label className="text-xs font-bold text-slate-500 block mb-3">Emoji Intensity</label>
                       <select className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3 text-sm font-bold text-slate-700 outline-none">
                          <option>Minimal (1 per msg)</option>
                          <option>Vibrant (2-3 per msg)</option>
                          <option>None (Pure Text)</option>
                       </select>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2"><ShieldCheck size={18} className="text-green-600" /> Intent Guard</h3>
                 <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-[8px] font-bold">ACTIVE</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                 CommerceOS AI identifies customer intent (Buy, Inquiry, Complaint) before replying.
              </p>
              <div className="space-y-4">
                 {['Purchase Intent', 'Refund Request', 'General Greetings', 'Product Availability'].map((intent, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-700">
                       {intent}
                       <div className="w-8 h-4 bg-blue-600 rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full" />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white">
              <History size={32} className="text-blue-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Explainability Log</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Audit exactly why AI chose a specific response for a customer. Transparency is safety.
              </p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/10 transition-all">
                View Decision History
              </button>
           </div>

           <div className="bg-blue-50 rounded-[32px] p-8 border border-blue-100">
              <Zap size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-blue-900 mb-2">Handoff Threshold</h3>
              <p className="text-blue-700/60 text-xs leading-relaxed mb-6">
                Transfer to a human agent when AI confidence falls below 85% or sentiment turns negative.
              </p>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-200">
                 Manage Escalation
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
