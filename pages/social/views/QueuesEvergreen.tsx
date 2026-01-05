
import React from 'react';
import { Repeat, Play, Pause, Plus, MoreVertical, LayoutGrid, Clock, RefreshCcw, ArrowRight } from 'lucide-react';

export const QueuesEvergreen: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Queues & Evergreen</h2>
          <p className="text-slate-500 font-medium">Automate your content flow with category-based smart queues.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2">
           <Plus size={18} /> New Queue
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Luxury Quotes', platform: 'Instagram', items: 24, status: 'Active', color: 'bg-purple-50 text-purple-600' },
                { name: 'Brand Story', platform: 'Facebook', items: 12, status: 'Active', color: 'bg-blue-50 text-blue-600' },
                { name: 'Flash Sales', platform: 'Twitter', items: 0, status: 'Paused', color: 'bg-slate-50 text-slate-400' },
                { name: 'Testimonials', platform: 'Multi-platform', items: 18, status: 'Active', color: 'bg-green-50 text-green-600' },
              ].map((q, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-blue-100 transition-all relative">
                   <div className="absolute top-6 right-6">
                      <button className="p-2 text-slate-300 hover:text-slate-800 transition-colors"><MoreVertical size={18} /></button>
                   </div>
                   <div className="flex items-center gap-4 mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${q.color}`}>
                         <Repeat size={28} />
                      </div>
                      <div>
                         <h3 className="text-lg font-bold text-slate-800">{q.name}</h3>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{q.platform}</p>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-bold">
                         <span className="text-slate-500">{q.items} Posts in Queue</span>
                         <span className={q.status === 'Active' ? 'text-green-600' : 'text-slate-400'}>{q.status}</span>
                      </div>
                      <div className="flex gap-2 pt-4 border-t border-slate-50">
                         <button className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl font-bold text-[10px] flex items-center justify-center gap-2">
                           <LayoutGrid size={14} /> View Items
                         </button>
                         <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-100 transition-colors">
                            {q.status === 'Active' ? <Pause size={14} /> : <Play size={14} />}
                         </button>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white">
              <RefreshCcw size={32} className="text-blue-400 mb-6" />
              <h3 className="text-lg font-bold mb-2">Evergreen Recycling</h3>
              <p className="text-slate-400 text-[10px] leading-relaxed mb-6 font-medium">
                Our AI identifies top-performing evergreen content and automatically pushes it back to the bottom of the queue to maximize lifetime reach.
              </p>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 text-[10px] font-bold">
                 <span>Enable Smart Recycling</span>
                 <div className="w-8 h-4 bg-blue-500 rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full" />
                 </div>
              </div>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <Clock size={18} className="text-blue-600" /> Queue Slots
              </h3>
              <div className="space-y-4">
                 {[
                   { time: '09:00 AM', day: 'Weekdays' },
                   { time: '01:00 PM', day: 'Daily' },
                   { time: '08:00 PM', day: 'Weekends' },
                 ].map((slot, i) => (
                   <div key={i} className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                      <span>{slot.day}</span>
                      <span className="text-slate-800">{slot.time}</span>
                   </div>
                 ))}
              </div>
              <button className="w-full text-blue-600 font-bold text-[10px] mt-6 flex items-center justify-center gap-1">
                Edit Slots <ArrowRight size={12} />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
