
import React from 'react';
import { Zap, Plus, MessageSquare, Instagram, Repeat, Search, Clock, ShieldCheck } from 'lucide-react';

export const EntryTriggers: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Entry Triggers</h2>
          <p className="text-slate-500 font-medium">Define the precise moment your brand begins speaking.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg flex items-center gap-2">
           <Plus size={18} /> New Trigger
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Keyword: "PRICE"', type: 'Inbound DM', platform: 'Instagram', status: 'Live', active_flows: 1 },
                { name: 'Comment: Any on Ad #12', type: 'Public Comment', platform: 'Facebook', status: 'Live', active_flows: 2 },
                { name: 'WhatsApp: "HELP"', type: 'Inbound MSG', platform: 'WhatsApp', status: 'Paused', active_flows: 1 },
                { name: 'Story Reply', type: 'Story Interaction', platform: 'Instagram', status: 'Live', active_flows: 1 },
              ].map((trig, i) => (
                <div key={i} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm hover:border-blue-100 transition-all group relative">
                   <div className="absolute top-6 right-6">
                      <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest ${trig.status === 'Live' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                         {trig.status}
                      </span>
                   </div>
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                         <Zap size={24} />
                      </div>
                      <div>
                         <h3 className="font-bold text-slate-800">{trig.name}</h3>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{trig.platform}</p>
                      </div>
                   </div>
                   <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                         <Repeat size={14} className="text-blue-400" />
                         <span className="text-xs font-bold text-slate-700">{trig.active_flows} Flows Connected</span>
                      </div>
                      <button className="text-blue-600 font-bold text-xs">Configure</button>
                   </div>
                </div>
              ))}
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm flex items-center justify-between overflow-hidden relative group">
              <div className="relative z-10 max-w-sm space-y-4">
                 <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Keyword Multi-trigger</h3>
                 <p className="text-slate-500 font-medium leading-relaxed">
                    Capture common misspellings or related terms (e.g., "cost", "how much", "$") into a single entry point.
                 </p>
                 <button className="text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 hover:bg-blue-100 transition-all">
                    Enable Intelligent Matching
                 </button>
              </div>
              <div className="w-48 h-48 bg-slate-50 rounded-full flex items-center justify-center text-slate-100 absolute -right-10 group-hover:scale-110 transition-transform">
                 <Search size={120} />
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white">
              <Clock size={32} className="text-blue-400 mb-6" />
              <h3 className="text-lg font-bold mb-2">Trigger Cooling</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Prevent spam by setting a cooldown period (default: 24h) before the same trigger can fire for the same user.
              </p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/10 transition-all">
                Adjust Cooldowns
              </button>
           </div>

           <div className="bg-blue-50 rounded-[32px] p-8 border border-blue-100">
              <ShieldCheck size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-blue-900 mb-2">Verified Only</h3>
              <p className="text-blue-700/60 text-xs leading-relaxed mb-6">
                Prioritize conversations triggered by verified accounts or influencers.
              </p>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-200">
                 Enable VIP Filtering
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
