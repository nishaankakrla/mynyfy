
import React from 'react';
import { Bell, Mail, Smartphone, Zap, AlertCircle } from 'lucide-react';

export const NotificationSettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Notifications</h2>
        <p className="text-slate-500 font-medium">Control the volume and delivery channels of system signals.</p>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
           <h3 className="font-bold text-slate-800">Event Triggers</h3>
           <div className="flex gap-10 pr-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><Bell size={12} /> In-App</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><Mail size={12} /> Email</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><Smartphone size={12} /> Push</span>
           </div>
        </div>
        
        <div className="divide-y divide-slate-50">
           {[
             { title: 'Failed Scheduled Post', desc: 'Critical alerts when publishing fails.', icon: AlertCircle, channels: [true, true, true] },
             { title: 'New Multi-Platform Order', desc: 'Real-time sales notifications.', icon: Zap, channels: [true, false, true] },
             { title: 'Daily AI Insight', desc: 'Morning strategy digest from AI.', icon: Bell, channels: [true, true, false] },
             { title: 'Team Approval Requested', desc: 'Alerts when your review is needed.', icon: Bell, channels: [true, true, true] },
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
                   {row.channels.map((active, j) => (
                     <div key={j} className={`w-12 h-6 rounded-full relative cursor-pointer ${active ? 'bg-blue-600' : 'bg-slate-200'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${active ? 'right-1' : 'left-1'}`} />
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
