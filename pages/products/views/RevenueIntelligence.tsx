
import React from 'react';
import { TrendingUp, Target, BarChart3, CreditCard, PieChart, ArrowRight, Zap, ArrowUpRight } from 'lucide-react';

export const RevenueIntelligence: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Revenue Intelligence</h2>
        <p className="text-slate-500 font-medium">Advanced attribution modeling for every dollar earned via social.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm overflow-hidden relative group">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                 <div className="space-y-6 max-w-md">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                       <BarChart3 size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">Social Commerce ROI</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                       Your conversational funnels are driving <span className="text-blue-600 font-bold">45% higher AOV</span> than direct web traffic.
                    </p>
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-slate-800 transition-all flex items-center gap-2">
                       Deep Dive Report <ArrowRight size={18} />
                    </button>
                 </div>
                 <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 text-center">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Last 30 Days</p>
                       <p className="text-2xl font-bold text-slate-900">$124,500</p>
                       <p className="text-[10px] text-green-600 font-bold mt-2 flex items-center justify-center gap-1">
                          <ArrowUpRight size={12} /> +12%
                       </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 text-center">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Attributed Conv.</p>
                       <p className="text-2xl font-bold text-slate-900">4,210</p>
                       <p className="text-[10px] text-green-600 font-bold mt-2 flex items-center justify-center gap-1">
                          <ArrowUpRight size={12} /> +8%
                       </p>
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
                      { channel: 'Instagram Shop / DM', share: 58, rev: '$72,100' },
                      { channel: 'Facebook Catalog', share: 22, rev: '$27,400' },
                      { channel: 'TikTok Ads', share: 15, rev: '$18,600' },
                      { channel: 'WhatsApp Direct', share: 5, rev: '$6,400' },
                    ].map((p, i) => (
                      <div key={i} className="space-y-2">
                         <div className="flex justify-between text-[10px] font-bold text-slate-600">
                            <span>{p.channel}</span>
                            <span className="text-slate-900">{p.rev}</span>
                         </div>
                         <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600" style={{ width: `${p.share}%` }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                 <h4 className="font-bold text-slate-800 mb-8 flex items-center gap-2"><Target size={18} className="text-blue-600" /> Conversational Funnels</h4>
                 <div className="space-y-8">
                    <div className="relative pl-10 border-l-2 border-dashed border-slate-100 pb-8">
                       <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white">
                          <span className="text-[8px] font-bold">1</span>
                       </div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ad Clicks / Comments</p>
                       <p className="text-sm font-bold text-slate-800">12,400 Inbound</p>
                    </div>
                    <div className="relative pl-10 border-l-2 border-dashed border-slate-100 pb-8">
                       <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                          <span className="text-[8px] font-bold">2</span>
                       </div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">AI DM Responses</p>
                       <p className="text-sm font-bold text-slate-800">8,200 Interactive</p>
                    </div>
                    <div className="relative pl-10">
                       <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
                          <span className="text-[8px] font-bold">3</span>
                       </div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Successful Checkout</p>
                       <p className="text-sm font-bold text-green-600">421 Orders (3.4% Funnel Conv.)</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-indigo-900 rounded-[32px] p-8 text-white text-center group">
              <Zap size={32} className="text-blue-400 mx-auto mb-4 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Predictive LTV</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                Customers acquired via DM have a <span className="text-white font-bold">22% higher lifetime value</span> than standard web shoppers.
              </p>
              <button className="w-full py-4 bg-white text-indigo-950 rounded-2xl font-bold text-xs shadow-xl transition-all hover:bg-blue-50">
                 Export LTV Analysis
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <CreditCard size={18} className="text-blue-600" /> Attribution Health
              </h3>
              <div className="space-y-4">
                 {[
                   { label: 'Pixel Match Rate', val: '99%', status: 'Safe' },
                   { label: 'CAPI Integrity', val: '94%', status: 'Safe' },
                   { label: 'UTM Consistency', val: '100%', status: 'Safe' },
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
