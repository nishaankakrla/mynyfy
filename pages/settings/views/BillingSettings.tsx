
import React from 'react';
import { CreditCard, Zap, Download, Target, ShieldCheck, ArrowRight } from 'lucide-react';

export const BillingSettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Plans & Billing</h2>
        <p className="text-slate-500 font-medium">Manage your subscription, usage limits, and financial history.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <section className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
                 <div className="max-w-xs space-y-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                       <Zap size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">Agency Pro Plan</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                       Your workspace is currently scaling with the <span className="text-blue-600 font-bold">Unlimited Platform</span> tier. Next bill: <span className="font-bold text-slate-900">$249.00</span> on June 28.
                    </p>
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-slate-800 transition-all flex items-center gap-2">
                       Change Plan <ArrowRight size={18} />
                    </button>
                 </div>
                 <div className="flex-1 space-y-8">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Workspace Usage</h4>
                    <div className="space-y-6">
                       {[
                         { label: 'AI Credits', used: 1240, limit: 5000, color: 'bg-blue-500' },
                         { label: 'Connected Profiles', used: 12, limit: 25, color: 'bg-indigo-500' },
                         { label: 'Orders (Monthly)', used: 842, limit: 1000, color: 'bg-orange-500' },
                       ].map((item, i) => (
                          <div key={i} className="space-y-2">
                             <div className="flex justify-between text-xs font-bold">
                                <span className="text-slate-700">{item.label}</span>
                                <span className="text-slate-400">{item.used} / {item.limit}</span>
                             </div>
                             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: `${(item.used/item.limit)*100}%` }} />
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none" />
           </section>

           <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-8">Billing History</h3>
              <div className="space-y-4">
                 {[
                   { date: 'May 28, 2024', amount: '$249.00', id: 'INV-8412' },
                   { date: 'Apr 28, 2024', amount: '$249.00', id: 'INV-8210' },
                 ].map((inv, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <div className="p-2.5 bg-white rounded-xl text-slate-400 border border-slate-100"><Download size={16} /></div>
                          <div>
                             <p className="text-sm font-bold text-slate-800">{inv.id}</p>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{inv.date}</p>
                          </div>
                       </div>
                       <span className="text-sm font-bold text-slate-900">{inv.amount}</span>
                    </div>
                 ))}
              </div>
           </section>
        </div>

        <div className="space-y-6">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2"><CreditCard size={18} className="text-blue-600" /> Default Payment</h3>
              <div className="p-6 bg-slate-900 rounded-2xl text-white space-y-6 relative overflow-hidden">
                 <div className="flex justify-between items-start relative z-10">
                    <CreditCard size={24} className="text-blue-400" />
                    <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Business Credit</span>
                 </div>
                 <p className="text-lg font-mono relative z-10">•••• •••• •••• 8412</p>
                 <div className="flex justify-between items-end relative z-10">
                    <span className="text-[10px] font-bold opacity-60 uppercase">Exp: 12/28</span>
                    <button className="text-[10px] font-bold underline">Update</button>
                 </div>
                 <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/20 rounded-full blur-2xl" />
              </div>
           </div>

           <div className="bg-green-50 rounded-[32px] p-8 border border-green-100 text-center space-y-4">
              <Target size={32} className="text-green-600 mx-auto" />
              <h3 className="font-bold text-green-900">Custom Enterprise</h3>
              <p className="text-green-700/60 text-xs font-medium">Need more than 1M monthly orders or white-labeled reports?</p>
              <button className="w-full py-3 bg-green-600 text-white rounded-xl font-bold text-xs shadow-lg">Talk to Success Team</button>
           </div>
        </div>
      </div>
    </div>
  );
};
