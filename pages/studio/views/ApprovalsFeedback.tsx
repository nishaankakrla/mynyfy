
import React from 'react';
import { CheckSquare, MessageCircle, User, Clock, ArrowRight, Check, X } from 'lucide-react';

export const ApprovalsFeedback: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Approvals & Feedback</h2>
          <p className="text-slate-500 font-medium">Keep your team aligned. Review and approve AI drafts safely.</p>
        </div>
        <div className="flex gap-3">
           <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2">
              Share Preview Link <ArrowRight size={18} />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
           {[
             { title: 'Summer Sale Carousel', author: 'AI Generated', date: 'Just now', type: 'Creative', comments: 2 },
             { title: 'Linen Shorts Ad Copy', author: 'Marketer Jane', date: '2h ago', type: 'Copy', comments: 0 },
           ].map((item, i) => (
             <div key={i} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm flex flex-col md:flex-row gap-8 hover:border-blue-100 transition-all group">
                <div className="w-full md:w-32 aspect-square bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center shrink-0">
                   <Clock size={32} className="text-slate-200" />
                </div>
                <div className="flex-1 space-y-4">
                   <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{item.type} Approval Required</span>
                        <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                      </div>
                      <div className="text-right">
                         <p className="text-[10px] text-slate-400 font-bold uppercase">{item.date}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center"><User size={12} className="text-slate-400" /></div>
                      <span className="text-xs text-slate-600 font-medium">{item.author} requested your review.</span>
                   </div>
                   <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                      <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-blue-700 transition-all">
                        <Check size={14} /> Approve
                      </button>
                      <button className="bg-white border border-slate-100 text-slate-600 px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all">
                        <X size={14} /> Request Changes
                      </button>
                      <button className="p-2.5 text-slate-400 hover:bg-slate-50 rounded-xl transition-all relative">
                         <MessageCircle size={18} />
                         {item.comments > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-white" />}
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="space-y-6">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6">Approval Stats</h3>
              <div className="space-y-4">
                 <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500">Avg. Approval Time</span>
                    <span className="text-slate-900">4.2h</span>
                 </div>
                 <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500">Rejection Rate</span>
                    <span className="text-slate-900">12%</span>
                 </div>
                 <div className="pt-4 border-t border-slate-50">
                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed uppercase mb-2">Team Sentiment</p>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 w-[88%]" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
