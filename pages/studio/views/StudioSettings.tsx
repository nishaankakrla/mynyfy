
import React from 'react';
import { Settings, Shield, Zap, Globe, MessageSquare, History } from 'lucide-react';

export const StudioSettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Studio Intelligence Settings</h2>
        <p className="text-slate-500 font-medium">Fine-tune how AI understands and represents your brand.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-8 flex items-center gap-2"><Shield size={18} className="text-blue-600" /> Brand Safety Rules</h3>
              <div className="space-y-6">
                 <div>
                    <label className="text-xs font-bold text-slate-500 block mb-3 uppercase tracking-widest">Banned Words & Keywords</label>
                    <textarea className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500" placeholder="cheap, discount (luxury tone only)..." />
                 </div>
                 <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="space-y-1">
                       <p className="text-sm font-bold text-slate-800">Strict Brand Kit Enforcement</p>
                       <p className="text-xs text-slate-500 font-medium">AI will never deviate from your hex codes or fonts.</p>
                    </div>
                    <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                       <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-8 flex items-center gap-2"><Zap size={18} className="text-orange-500" /> Generation Aggressiveness</h3>
              <div className="space-y-8">
                 <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold">
                       <span className="text-slate-500">Conservative (On-Brand)</span>
                       <span className="text-slate-900">Avant-Garde (Creative)</span>
                    </div>
                    <input type="range" className="w-full accent-blue-600" defaultValue={30} />
                    <p className="text-[10px] text-slate-400 font-medium italic">Current setting: Focus on strict consistency and high-conversion layouts.</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6">Language Defaults</h3>
              <div className="space-y-4">
                 <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500">Primary Language</span>
                    <span className="text-blue-600">English (US)</span>
                 </div>
                 <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500">Secondary Output</span>
                    <span className="text-slate-400">Not set</span>
                 </div>
              </div>
           </div>

           <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 flex flex-col items-center justify-center text-center">
              <History size={32} className="text-slate-300 mb-4" />
              <h4 className="text-lg font-bold text-slate-800 mb-2">Audit Logs</h4>
              <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">View all setting changes and their impact on AI performance.</p>
              <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold shadow-sm hover:bg-slate-100 transition-all">
                 View Full Audit
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
