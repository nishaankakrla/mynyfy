
import React from 'react';
import { Target, Plus, Users, Zap, MoreVertical, Search, MousePointer2, ArrowRight } from 'lucide-react';

export const AudienceSegments: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Smart Segments</h2>
          <p className="text-slate-500 font-medium">Dynamic groups that update automatically based on behavior.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg flex items-center gap-2">
           <Plus size={18} /> Create Segment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'High Value Milanese', criteria: 'Purchased > 2x, Location: Milan', count: '1,240', status: 'Dynamic', icon: Users, color: 'bg-blue-50 text-blue-600' },
                { name: 'Linen Collection Leads', criteria: 'Interacted with #Linen campaign', count: '8,420', status: 'Dynamic', icon: Target, color: 'bg-indigo-50 text-indigo-600' },
                { name: 'Active WhatsApp Chatters', criteria: 'WA Message in last 48h', count: '450', status: 'Dynamic', icon: Zap, color: 'bg-green-50 text-green-600' },
                { name: 'VIP Preview Invitees', criteria: 'Manual Selection', count: '100', status: 'Static', icon: MousePointer2, color: 'bg-slate-50 text-slate-400' },
              ].map((seg, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-blue-100 transition-all relative">
                   <div className="absolute top-6 right-6 flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest ${seg.status === 'Dynamic' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                        {seg.status}
                      </span>
                      <button className="p-2 text-slate-300 hover:text-slate-800 transition-colors"><MoreVertical size={18} /></button>
                   </div>
                   <div className="flex items-center gap-4 mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${seg.color}`}>
                         <seg.icon size={28} />
                      </div>
                      <div>
                         <h3 className="text-lg font-bold text-slate-800">{seg.name}</h3>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{seg.count} Profiles</p>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                         <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Rule Engine</p>
                         <p className="text-xs font-bold text-slate-700 truncate">{seg.criteria}</p>
                      </div>
                      <div className="flex gap-2 pt-4 border-t border-slate-50">
                         <button className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl font-bold text-[10px] flex items-center justify-center gap-2">
                           View Profiles
                         </button>
                         <button className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                            <Zap size={14} />
                         </button>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <Zap size={32} className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Automated Tagging</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                 CommerceOS AI identifies "Gift Buyers" vs "Self-Shoppers" based on DM sentiment and shipping patterns.
              </p>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2 hover:bg-blue-500 transition-all">
                Enable Smart Tags <ArrowRight size={18} />
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                 {['VIP', 'Milan-HQ', 'Summer24', 'Lead-Qualified', 'High-LTV', 'Influencer', 'Store-Pickup'].map(t => (
                   <span key={t} className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-bold border border-slate-100 hover:border-blue-200 transition-all cursor-pointer">
                      #{t}
                   </span>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
