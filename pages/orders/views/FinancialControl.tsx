
import React from 'react';
import { CreditCard, DollarSign, RotateCcw, ShieldAlert, TrendingUp, ArrowRight, Zap, Target } from 'lucide-react';

export const FinancialControl: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Financial Intelligence</h2>
        <p className="text-slate-500 font-medium">Tracking every cent from the first click to the final payout.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="space-y-6">
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                       <DollarSign size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Payout Velocity</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                       Your funds are settling <span className="text-green-600 font-bold">2.4 days faster</span> this month due to your high fulfillment rating.
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="text-center">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Available</p>
                          <p className="text-2xl font-bold text-slate-900">$14,210</p>
                       </div>
                       <div className="w-[1px] h-10 bg-slate-100 mx-2" />
                       <div className="text-center">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pending</p>
                          <p className="text-2xl font-bold text-slate-400">$8,450</p>
                       </div>
                    </div>
                 </div>
                 <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 space-y-6">
                    <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                       <Target size={18} className="text-blue-600" /> Platform Fee Analysis
                    </h4>
                    <div className="space-y-4">
                       {[
                         { label: 'Gateway Fees', value: '2.9% + 30c', total: '$3,120' },
                         { label: 'CommerceOS Comm.', value: '0.5%', total: '$622' },
                         { label: 'Social Platform Tax', value: 'None', total: '$0' },
                       ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between text-xs">
                            <span className="text-slate-500 font-medium">{item.label}</span>
                            <span className="text-slate-900 font-bold">{item.total}</span>
                         </div>
                       ))}
                    </div>
                    <button className="w-full py-3 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-xs shadow-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                       Download Statement <ArrowRight size={14} />
                    </button>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                 <h4 className="font-bold text-slate-800 mb-8 flex items-center gap-2">
                    <RotateCcw size={18} className="text-orange-500" /> Refund Intelligence
                 </h4>
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <p className="text-sm font-bold text-slate-600">Refund Rate</p>
                       <p className="text-xl font-bold text-slate-900">4.1%</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Primary Reasons</p>
                       {[
                         { reason: 'Size/Fit Issues', share: 65 },
                         { reason: 'Shipping Delay', share: 20 },
                         { reason: 'Change of Mind', share: 15 },
                       ].map((r, i) => (
                         <div key={i} className="space-y-2">
                            <div className="flex justify-between text-[10px] font-bold text-slate-500">
                               <span>{r.reason}</span>
                               <span>{r.share}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                               <div className="h-full bg-orange-400" style={{ width: `${r.share}%` }} />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                 <h4 className="font-bold text-slate-800 mb-8 flex items-center gap-2">
                    <ShieldAlert size={18} className="text-red-500" /> Dispute Control
                 </h4>
                 <div className="space-y-6">
                    <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                       <p className="text-xs font-bold text-red-900 mb-1">1 Open Dispute</p>
                       <p className="text-[10px] text-red-700 font-medium leading-relaxed">Evidence submission required by <span className="font-bold underline">June 24</span>.</p>
                       <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg text-[10px] font-bold shadow-lg">Submit Proof</button>
                    </div>
                    <div className="pt-4 border-t border-slate-50">
                       <div className="flex items-center justify-between text-xs font-bold mb-3">
                          <span className="text-slate-500 uppercase tracking-widest">Dispute Win Rate</span>
                          <span className="text-green-600">92%</span>
                       </div>
                       <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
                          CommerceOS automatically archives all DM histories to provide bulletproof evidence for social sales.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <Zap size={32} className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-2">ROI Calculator</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                Your <span className="text-white font-bold">Ad Spend ($4.2k)</span> generated <span className="text-white font-bold">$124k</span> in gross social revenue.
              </p>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                 <p className="text-3xl font-black text-white">29.5x</p>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Blended ROAS</p>
              </div>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <CreditCard size={18} className="text-blue-600" /> Gateway Health
              </h3>
              <div className="space-y-4">
                 {[
                   { label: 'Stripe API', status: 'Stable', color: 'text-green-600' },
                   { label: 'PayPal Sync', status: 'Warning', color: 'text-orange-500' },
                   { label: 'Crypto Node', status: 'Offline', color: 'text-slate-300' },
                 ].map((gw, i) => (
                   <div key={i} className="flex items-center justify-between text-[10px] font-bold">
                      <span className="text-slate-500 uppercase tracking-widest">{gw.label}</span>
                      <span className={gw.color}>{gw.status}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
