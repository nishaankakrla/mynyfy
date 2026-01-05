
import React from 'react';
import { Fingerprint, TrendingUp, DollarSign, Target, ArrowRight, Zap, PieChart, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const RetentionInsights: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Retention & LTV</h2>
        <p className="text-slate-500 font-medium">Measuring the health of your long-term relationships.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
                 <div className="max-w-md space-y-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                       <Fingerprint size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">Relationship ROI</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                       Your "Repeat Buyer" segment has grown <span className="text-blue-600 font-bold">12%</span> this quarter. Customers acquired via WhatsApp have <span className="text-green-600 font-bold">22% higher LTV</span>.
                    </p>
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-slate-800 transition-all flex items-center gap-2">
                       Full Value Report <ArrowRight size={18} />
                    </button>
                 </div>
                 <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 text-center">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Avg LTV</p>
                       <p className="text-3xl font-black text-slate-900">$842</p>
                       <p className="text-[10px] text-green-600 font-bold mt-2 flex items-center justify-center gap-1">
                          <ArrowUpRight size={12} /> +12%
                       </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 text-center">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Retention Rate</p>
                       <p className="text-3xl font-black text-slate-900">42%</p>
                       <p className="text-[10px] text-green-600 font-bold mt-2 flex items-center justify-center gap-1">
                          <ArrowUpRight size={12} /> +2.1%
                       </p>
                    </div>
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                 <h4 className="font-bold text-slate-800 mb-8 flex items-center gap-2"><PieChart size={18} className="text-purple-600" /> Revenue by Acquisition</h4>
                 <div className="space-y-6">
                    {[
                      { source: 'Instagram DM', share: 45, value: '$124k' },
                      { source: 'Website Direct', share: 30, value: '$82k' },
                      { source: 'WhatsApp Flows', share: 20, value: '$54k' },
                      { source: 'Facebook Ads', share: 5, value: '$12k' },
                    ].map((s, i) => (
                      <div key={i} className="space-y-2">
                         <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                            <span>{s.source}</span>
                            <span className="text-slate-900">{s.value}</span>
                         </div>
                         <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500" style={{ width: `${s.share}%` }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                 <h4 className="font-bold text-slate-800 mb-8 flex items-center gap-2"><Target size={18} className="text-blue-600" /> Purchase Frequency</h4>
                 <div className="space-y-8">
                    <div className="relative pl-10 border-l-2 border-dashed border-slate-100 pb-8">
                       <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px] font-black">1</div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">First Purchase</p>
                       <p className="text-lg font-bold text-slate-800">12,100 <span className="text-xs text-slate-400 font-medium">Profiles</span></p>
                    </div>
                    <div className="relative pl-10 border-l-2 border-dashed border-slate-100 pb-8">
                       <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[8px] font-black">2</div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Second Purchase</p>
                       <p className="text-lg font-bold text-slate-800">2,840 <span className="text-xs text-slate-400 font-medium">Landed (23% Repat)</span></p>
                    </div>
                    <div className="relative pl-10">
                       <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[8px] font-black">3</div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Advocate Status</p>
                       <p className="text-lg font-bold text-green-600">421 <span className="text-xs text-slate-400 font-medium">Profiles (> 5 Purchases)</span></p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group text-center">
              <Zap size={48} className="text-blue-400 mx-auto mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Predictive Churn</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                 AI identified <span className="text-white font-bold">142 VIPs</span> at high risk of churning based on 30-day interaction silence.
              </p>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-blue-500 transition-all">
                Rescue Segments
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <ShieldCheck size={18} className="text-green-600" /> Retention Health
              </h3>
              <div className="space-y-4">
                 {[
                   { label: 'Unsubscribe Rate', val: '0.4%', status: 'Safe' },
                   { label: 'DM Block Rate', val: '0.1%', status: 'Safe' },
                   { label: 'Email Bounce', val: '1.2%', status: 'Safe' },
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
