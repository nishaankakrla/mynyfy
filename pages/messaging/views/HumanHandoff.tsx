
import React from 'react';
import { UserCheck, MessageCircle, Clock, ArrowRight, UserPlus, Phone, History, MoreHorizontal } from 'lucide-react';

export const HumanHandoff: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Human Handoff Inbox</h2>
          <p className="text-slate-500 font-medium">When AI reaches its limit, your expertise takes over.</p>
        </div>
        <div className="flex gap-3">
           <button className="bg-white border border-slate-100 text-slate-600 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm flex items-center gap-2 hover:bg-slate-50 transition-all">
              <History size={18} /> Past Takeovers
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
           <div className="bg-slate-50 p-4 border border-slate-100 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Requests: 2</span>
                 <div className="h-4 w-[1px] bg-slate-200" />
                 <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Avg SLA: 4m 12s</span>
              </div>
           </div>

           {[
             { user: 'Marcello Rossi', plat: 'Instagram', time: 'Just now', reason: 'High Sentiment / Negative', text: "I'm extremely frustrated with the shipping delay..." },
             { user: 'Sarah Jenks', plat: 'WhatsApp', time: '8m ago', reason: 'Direct Pricing Request', text: "I'd like a custom quote for 12 bridesmaids dresses." },
           ].map((conv, i) => (
             <div key={i} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm group hover:border-blue-100 transition-all flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 font-bold">
                   {conv.user.substring(0,2).toUpperCase()}
                </div>
                <div className="flex-1 space-y-4">
                   <div className="flex items-center justify-between">
                      <div>
                         <h3 className="text-lg font-bold text-slate-800">{conv.user}</h3>
                         <p className="text-xs text-slate-400 font-medium">{conv.plat} • {conv.time}</p>
                      </div>
                      <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold border border-red-100 uppercase tracking-widest">
                         {conv.reason}
                      </span>
                   </div>
                   <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm font-medium text-slate-600 italic">"{conv.text}"</p>
                   </div>
                   <div className="flex items-center gap-3">
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                         Take Over Conversation <ArrowRight size={14} />
                      </button>
                      <button className="p-3 text-slate-400 hover:bg-slate-50 rounded-xl transition-all"><UserPlus size={18} /></button>
                      <button className="p-3 text-slate-400 hover:bg-slate-50 rounded-xl transition-all"><MoreHorizontal size={18} /></button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="space-y-6">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6">Team Online</h3>
              <div className="space-y-4">
                 {[
                   { name: 'Admin (You)', status: 'Online', color: 'bg-green-500' },
                   { name: 'Support Marc', status: 'Offline', color: 'bg-slate-300' },
                   { name: 'Sales Jane', status: 'Online', color: 'bg-green-500' },
                 ].map((tm, i) => (
                   <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className={`w-2 h-2 rounded-full ${tm.color}`} />
                         <span className="text-xs font-bold text-slate-700">{tm.name}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{tm.status}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-slate-900 rounded-[32px] p-8 text-white text-center">
              <Phone size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Manual Escalation</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Directly notify a team member to jump into a specific conversation via mobile push.
              </p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/10 transition-all">
                Configure Notifications
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
