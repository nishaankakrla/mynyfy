
import React from 'react';
import { UserCheck, MessageSquare, Clock, ArrowRight, UserPlus, Check, X, ShieldAlert } from 'lucide-react';

export const ApprovalsWorkflow: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Approvals & Workflow</h2>
          <p className="text-slate-500 font-medium">Enforce brand safety with mandatory approval chains.</p>
        </div>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2">
           <UserPlus size={18} /> Manage Team
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
           <div className="bg-blue-50 p-6 rounded-[24px] border border-blue-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <Clock size={24} className="text-blue-600" />
                 <div>
                    <h4 className="text-sm font-bold text-blue-900">3 Posts Pending Approval</h4>
                    <p className="text-xs text-blue-700 font-medium">Scheduled for this evening. Action required within 4 hours.</p>
                 </div>
              </div>
              <button className="text-blue-600 font-bold text-xs bg-white px-4 py-2 rounded-xl border border-blue-100 shadow-sm">
                 Fast-track Review
              </button>
           </div>

           {[
             { title: 'June Editorial Carousel', platform: 'Instagram', author: 'Marketer Jane', status: 'Pending', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200' },
             { title: 'Eco-Luxury Thread', platform: 'Twitter', author: 'Content Bot', status: 'Needs Review', img: '' },
           ].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start group hover:border-blue-100 transition-all">
                <div className="w-full md:w-32 aspect-square bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shrink-0 flex items-center justify-center">
                   {item.img ? (
                     <img src={item.img} className="w-full h-full object-cover" />
                   ) : (
                     <ShieldAlert size={32} className="text-slate-200" />
                   )}
                </div>
                <div className="flex-1 space-y-6">
                   <div className="flex items-center justify-between">
                      <div>
                         <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{item.platform} Post</span>
                         <h3 className="text-xl font-bold text-slate-800 mt-1">{item.title}</h3>
                         <p className="text-xs text-slate-400 font-medium mt-1">Submitted by {item.author} • Just now</p>
                      </div>
                      <div className="flex gap-2">
                         <button className="p-2.5 bg-green-50 text-green-600 rounded-xl border border-green-100 hover:bg-green-100 transition-colors">
                            <Check size={18} />
                         </button>
                         <button className="p-2.5 bg-red-50 text-red-500 rounded-xl border border-red-100 hover:bg-red-100 transition-colors">
                            <X size={18} />
                         </button>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                      <button className="text-xs font-bold text-slate-500 flex items-center gap-2 hover:text-slate-800 transition-colors">
                         <MessageSquare size={16} /> Add Feedback
                      </button>
                      <button className="text-xs font-bold text-blue-600 flex items-center gap-2">
                         Full Preview <ArrowRight size={14} />
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="space-y-6">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <UserCheck size={18} className="text-green-600" /> Approval Roles
              </h3>
              <div className="space-y-4">
                 {[
                   { role: 'Owner', user: 'You', status: 'Active' },
                   { role: 'Admin', user: 'Jane Doe', status: 'Online' },
                   { role: 'Client', user: 'Lumiere HQ', status: 'Awaiting Access' },
                 ].map((u, i) => (
                   <div key={i} className="flex items-center justify-between text-xs font-bold">
                      <div>
                         <p className="text-slate-400 text-[10px] uppercase">{u.role}</p>
                         <p className="text-slate-800">{u.user}</p>
                      </div>
                      <span className="text-[8px] text-green-500 uppercase tracking-widest">{u.status}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden">
              <ShieldAlert size={32} className="text-orange-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Safety Lock</h3>
              <p className="text-slate-400 text-[10px] leading-relaxed mb-6 font-medium">
                Mandatory approvals are active for all Instagram and Facebook production posts. Posts cannot be published without 1 Owner signature.
              </p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/10 transition-all">
                Update Rules
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
