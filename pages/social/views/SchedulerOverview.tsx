
import React from 'react';
import { Calendar, AlertCircle, CheckCircle, Clock, ArrowRight, Instagram, Facebook, Twitter, Link2 } from 'lucide-react';

export const SchedulerOverview: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Social Command Center</h1>
          <p className="text-slate-500 font-medium">Your brand's publishing heartbeat is synchronized.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
            <Link2 size={18} /> Platform Connections
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2">
            <Instagram size={18} /> Connect Instagram
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
           <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Calendar size={18} className="text-blue-600" /> Posting Today
              </h3>
              <span className="text-xs font-bold text-slate-400 uppercase">4 Posts</span>
           </div>
           <div className="space-y-4">
              {[
                { time: '10:00 AM', platform: 'Instagram', title: 'Summer Lookbook Story' },
                { time: '12:30 PM', platform: 'Facebook', title: 'Flash Sale Reminder' },
                { time: '04:00 PM', platform: 'Twitter', title: 'Sustainability Thread' },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all group cursor-pointer">
                   <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                      <Clock size={18} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-slate-800">{p.title}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{p.platform} • {p.time}</p>
                   </div>
                </div>
              ))}
           </div>
           <button className="w-full text-blue-600 font-bold text-xs pt-4 border-t border-slate-50 flex items-center justify-center gap-2">
              View Calendar <ArrowRight size={14} />
           </button>
        </div>

        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
           <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <AlertCircle size={18} className="text-orange-500" /> Attention Needed
              </h3>
              <span className="text-xs font-bold text-orange-500 uppercase">2 Alerts</span>
           </div>
           <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100 flex gap-4">
                 <AlertCircle size={20} className="text-orange-600 shrink-0" />
                 <div>
                    <p className="text-sm font-bold text-orange-900">Post Failed</p>
                    <p className="text-xs text-orange-700 font-medium">Meta API token expired for @ateliernoir.</p>
                    <button className="text-[10px] font-bold text-orange-600 underline mt-2">Re-authorize</button>
                 </div>
              </div>
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex gap-4">
                 <Clock size={20} className="text-blue-600 shrink-0" />
                 <div>
                    <p className="text-sm font-bold text-blue-900">Pending Approval</p>
                    <p className="text-xs text-blue-700 font-medium">3 posts in "Summer Collection" campaign.</p>
                    <button className="text-[10px] font-bold text-blue-600 underline mt-2">Review Now</button>
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-[32px] text-white space-y-8 relative overflow-hidden group">
           <div className="relative z-10">
              <CheckCircle size={40} className="text-green-500 mb-6" />
              <h3 className="text-xl font-bold mb-2">Publishing Health</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                 124 posts successfully published this month with 0% downtime across all connected platforms.
              </p>
              <div className="grid grid-cols-3 gap-4">
                 <div className="text-center">
                    <p className="text-lg font-bold">98%</p>
                    <p className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Success</p>
                 </div>
                 <div className="text-center">
                    <p className="text-lg font-bold">12k</p>
                    <p className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Reach</p>
                 </div>
                 <div className="text-center">
                    <p className="text-lg font-bold">452</p>
                    <p className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Engagements</p>
                 </div>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
        </div>
      </div>
    </div>
  );
};
