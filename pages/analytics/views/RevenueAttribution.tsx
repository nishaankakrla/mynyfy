
import React from 'react';
import { DollarSign, Target, TrendingUp, ArrowRight, Zap, PieChart, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const RevenueAttribution: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Revenue & Attribution</h2>
        <p className="text-slate-500 font-medium">The money truth: How social content drives your bank balance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm relative group overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
                 <div className="max-w-md space-y-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                       <DollarSign size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">Social ROI Overview</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                       Your conversational funnels are driving <span className="text-blue-600 font-bold">45% higher AOV</span> than direct web traffic. Conversions are up <span className="text-green-600 font-bold">12%</span> this week.
                    </p>
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl flex items-center gap-2 hover:bg-slate-800 transition-all">
                       Full Attribution Report <ArrowRight size={18} />
                    </button>
                 </div>
                 <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="p-6 bg-slate-50 rounded-[28px] border border-slate-100 text-center space-y-1">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gross Revenue</p>
                       <p className="text-3xl font-black text-slate-900">$124,500</p>
                       <p className="text-[10px] text-green-600 font-bold flex items-center justify-center gap-1"><ArrowUpRight size={12} /> +12%</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-[28px] border border-slate-100 text-center space-y-1">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AOV (Social)</p>
                       <p className="text-3xl font-black text-slate-900">$148.20</p>
                       <p className="text-[10px] text-green-600 font-bold flex items-center justify-center gap-1"><ArrowUpRight size={12} /> +8.2%</p>
                    </div>
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                 <h4 className="font-bold text-slate-800 mb-8 flex items-center gap-2"><PieChart size={18} className="text-purple-600" /> Revenue by Platform</h4>
                 <div className="space-y-6">
                    {[
                      { name: 'Instagram Shop / DM', value: 58, rev: '$72,100' },
                      { name: 'Facebook Catalog', value: 22, rev: '$27,400' },
                      { name: 'TikTok Direct Link', value: 15, rev: '$18,600' },
                      { name: 'WhatsApp Sales', value: 5, rev: '$6,400' },
                    ].map((p, i) => (
                      <div key={i} className="space-y-2">
                         <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                            <span>{p.name}</span>
                            <span className="text-slate-900">{p.rev}</span>
                         </div>
                         <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600" style={{ width: `${p.value}%` }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                 <h4 className="font-bold text-slate-800 mb-8 flex items-center gap-2"><Target size={18} className="text-blue-600" /> Conversion Funnel</h4>
                 <div className="space-y-8">
                    <div className="relative pl-10 border-l-2 border-dashed border-slate-100 pb-8">
                       <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px] font-black">1</div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Impressions</p>
                       <p className="text-lg font-bold text-slate-800">1.2M <span className="text-xs text-slate-400 font-medium">Views</span></p>
                    </div>
                    <div className="relative pl-10 border-l-2 border-dashed border-slate-100 pb-8">
                       <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[8px] font-black">2</div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Social Clicks</p>
                       <p className="text-lg font-bold text-slate-800">84.2k <span className="text-xs text-slate-400 font-medium">Landed</span></p>
                    </div>
                    <div className="relative pl-10">
                       <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[8px] font-black">3</div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Orders Completed</p>
                       <p className="text-lg font-bold text-green-600">842 <span className="text-xs text-slate-400 font-medium">Orders (1.2% Conv.)</span></p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <Zap size={32} className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Predictive LTV</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                 Customers acquired via DM have a <span className="text-white font-bold">22% higher lifetime value</span>. AI recommends focusing on WhatsApp retention.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-xs shadow-xl transition-all hover:bg-blue-500">
                 View Retention Strategy
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <ShieldCheck size={18} className="text-green-600" /> Attribution Model
              </h3>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed mb-6 italic">
                CommerceOS currently uses <span className="text-slate-800 font-bold">Linear 7-Day Click Attribution</span>.
              </p>
              <div className="space-y-4">
                 {[
                   { label: 'Confidence Score', val: '92%', status: 'Safe' },
                   { label: 'Unmatched Traffic', val: '4%', status: 'Safe' },
                   { label: 'Pixel Integrity', val: '100%', status: 'Safe' },
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
