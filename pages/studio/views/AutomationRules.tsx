
import React from 'react';
import { Zap, Play, Settings, Plus, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export const AutomationRules: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Automation Rules</h2>
          <p className="text-slate-500 font-medium">Define the logic that keeps your brand alive while you sleep.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2">
          <Plus size={18} /> Create Rule
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {[
          { title: 'High Performance Repost', trigger: 'Engagement > 8% on Instagram', action: 'Generate Reels variant and schedule for 48h later.', status: 'Active' },
          { title: 'New Product Hype', trigger: 'New inventory item detected in Shopify', action: 'Create Ad creative + 3 Story variants automatically.', status: 'Active' },
          { title: 'Seasonal Greeting', trigger: 'Global Festival Detected', action: 'Generate brand-consistent holiday post.', status: 'Draft' },
        ].map((rule, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-100 transition-all group">
            <div className="flex gap-6 items-start">
               <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                  <Zap size={24} />
               </div>
               <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-800">{rule.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-bold">
                     <span className="text-slate-400 uppercase tracking-widest">Trigger:</span>
                     <span className="text-slate-700">{rule.trigger}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold">
                     <span className="text-blue-600 uppercase tracking-widest">Action:</span>
                     <span className="text-slate-700">{rule.action}</span>
                  </div>
               </div>
            </div>
            
            <div className="flex items-center gap-4 border-t md:border-t-0 pt-4 md:pt-0">
               <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold ${rule.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                  {rule.status}
               </span>
               <div className="flex gap-1">
                 <button className="p-2 text-slate-400 hover:text-slate-800 rounded-lg transition-colors"><Settings size={16} /></button>
                 <button className="p-2 text-slate-400 hover:text-blue-600 rounded-lg transition-colors"><Play size={16} /></button>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 p-12 flex flex-col items-center justify-center text-center space-y-6">
         <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
            <ShieldCheck size={40} />
         </div>
         <div className="max-w-md space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">Guardian Mode Active</h3>
            <p className="text-slate-500 font-medium">
               All automated posts are passed through a final brand-safety AI audit before publishing.
            </p>
         </div>
         <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-700 transition-all">
            Review Safety Log
         </button>
      </div>
    </div>
  );
};
