
import React from 'react';
import { Users, Globe, Clock, Activity, ArrowUpRight, TrendingUp, PieChart, Target } from 'lucide-react';

export const AudienceInsights: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Audience Patterns</h2>
        <p className="text-slate-500 font-medium">Decoding who your fans are and when they want to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-8 flex items-center gap-2"><Clock size={18} className="text-blue-600" /> Active Windows (EST)</h3>
              <div className="grid grid-cols-7 gap-2">
                 {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <div key={day} className="space-y-4">
                       <span className="text-[10px] font-black text-slate-400 uppercase block text-center">{day}</span>
                       <div className="flex flex-col gap-1">
                          {[...Array(12)].map((_, i) => {
                             const intensity = Math.random() * 100;
                             return (
                                <div 
                                   key={i} 
                                   className="h-4 rounded-md transition-all hover:scale-105" 
                                   style={{ backgroundColor: intensity > 70 ? '#3B82F6' : intensity > 40 ? '#93C5FD' : '#EFF6FF' }}
                                   title={`${intensity.toFixed(0)}% Activity`}
                                />
                             )
                          })}
                       </div>
                    </div>
                 ))}
              </div>
              <div className="mt-8 flex justify-center gap-10">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                    <div className="w-3 h-3 rounded bg-[#EFF6FF]" /> Low
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                    <div className="w-3 h-3 rounded bg-[#93C5FD]" /> Medium
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                    <div className="w-3 h-3 rounded bg-[#3B82F6]" /> Peak
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                 <h4 className="font-bold text-slate-800 mb-8 flex items-center gap-2"><Users size={18} className="text-indigo-600" /> Demographics</h4>
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                          <span>Women (25-34)</span>
                          <span>62%</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500" style={{ width: '62%' }} />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                          <span>Men (25-34)</span>
                          <span>24%</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-400" style={{ width: '24%' }} />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                          <span>Other Segments</span>
                          <span>14%</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-200" style={{ width: '14%' }} />
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                 <h4 className="font-bold text-slate-800 mb-8 flex items-center gap-2"><Globe size={18} className="text-green-600" /> Top Locations</h4>
                 <div className="space-y-4">
                    {[
                      { city: 'Milan, Italy', value: 28 },
                      { city: 'Paris, France', value: 22 },
                      { city: 'New York, USA', value: 18 },
                      { city: 'London, UK', value: 12 },
                    ].map((loc, i) => (
                       <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
                          <span className="text-xs font-bold text-slate-700">{loc.city}</span>
                          <span className="text-xs font-black text-blue-600">{loc.value}%</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-indigo-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <TrendingUp size={32} className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Growth Forecast</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                 Based on current engagement velocity, you are on track to reach <span className="text-white font-bold">150k followers</span> by August.
              </p>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                 <p className="text-2xl font-black text-white">+840 followers</p>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Daily Avg.</p>
              </div>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <Target size={18} className="text-blue-600" /> Segment Quality
              </h3>
              <div className="space-y-4">
                 {[
                   { label: 'Real Followers', val: '94%', status: 'Safe' },
                   { label: 'Engaged Subset', val: '42%', status: 'Safe' },
                   { label: 'Bot Activity', val: '1.2%', status: 'Safe' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between text-[10px] font-bold">
                      <span className="text-slate-400 uppercase tracking-widest">{item.label}</span>
                      <span className="text-slate-900">{item.val}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
