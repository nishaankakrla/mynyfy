
import React from 'react';
import { Bell, Mail, Smartphone, AtSign, Zap, MessageSquare } from 'lucide-react';

export const PersonalNotifications: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Your Signal Center</h2>
        <p className="text-slate-500 font-medium">Control the volume and delivery of alerts directed specifically to you.</p>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
           <h3 className="font-bold text-slate-800">Individual Triggers</h3>
           <div className="flex gap-10 pr-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><Bell size={12} /> In-App</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><Mail size={12} /> Email</span>
           </div>
        </div>
        
        <div className="divide-y divide-slate-50">
           {[
             { title: 'Direct Mentions', desc: 'When a teammate tags you in content or a conversation.', icon: AtSign, active: [true, true] },
             { title: 'Task Assignments', desc: 'Critical alerts when workflows are assigned to you.', icon: Zap, active: [true, true] },
             { title: 'Approval Requests', desc: 'Notifications for creative signatures required.', icon: Bell, active: [true, false] },
             { title: 'Conversation Handoffs', desc: 'When AI transfers a DM thread to your manual inbox.', icon: MessageSquare, active: [true, true] },
           ].map((row, i) => (
             <div key={i} className="p-8 flex items-center justify-between group hover:bg-slate-50/50 transition-all">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-blue-600 transition-all">
                      <row.icon size={20} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-slate-800">{row.title}</p>
                      <p className="text-xs text-slate-400 font-medium">{row.desc}</p>
                   </div>
                </div>
                <div className="flex gap-10 pr-4">
                   {row.active.map((on, j) => (
                     <div key={j} className={`w-12 h-6 rounded-full relative cursor-pointer ${on ? 'bg-blue-600' : 'bg-slate-200'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${on ? 'right-1' : 'left-1'}`} />
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
