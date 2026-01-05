
import React from 'react';
import { Workflow, Play, Edit3, MoreVertical, Search, Plus, CreditCard, ShoppingBag, UserPlus } from 'lucide-react';

export const AutomationFlows: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Automation Engine</h2>
          <p className="text-slate-500 font-medium">Design flows that turn interactions into transactions.</p>
        </div>
        <div className="flex gap-3">
           <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className="bg-white border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64 transition-all" placeholder="Search flows..." />
           </div>
           <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg flex items-center gap-2">
              <Plus size={18} /> Design New Flow
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          { name: 'Summer Collection Drop', type: 'Sales', revenue: '$12.4k', status: 'Live', icon: ShoppingBag, color: 'bg-blue-50 text-blue-600' },
          { name: 'VIP Lead Qualify', type: 'Qualification', revenue: '450 Leads', status: 'Live', icon: UserPlus, color: 'bg-indigo-50 text-indigo-600' },
          { name: 'Friday Flash Payment', type: 'Payment', revenue: '$3.1k', status: 'Live', icon: CreditCard, color: 'bg-green-50 text-green-600' },
          { name: 'Shipping Inquiry Bot', type: 'Support', revenue: 'N/A', status: 'Draft', icon: Workflow, color: 'bg-slate-50 text-slate-400' },
        ].map((flow, i) => (
          <div key={i} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-blue-100 transition-all">
             <div className="flex items-center gap-6 flex-1">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${flow.color}`}>
                   <flow.icon size={28} />
                </div>
                <div>
                   <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-800 text-lg">{flow.name}</h3>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest ${flow.status === 'Live' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                        {flow.status}
                      </span>
                   </div>
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{flow.type} Workflow</p>
                </div>
             </div>

             <div className="flex items-center gap-12 text-right">
                <div className="hidden lg:block">
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Revenue Impact</p>
                   <p className="text-lg font-bold text-slate-900">{flow.revenue}</p>
                </div>
                <div className="flex items-center gap-3">
                   <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all">
                      <Edit3 size={18} />
                   </button>
                   <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-50 hover:text-slate-800 transition-all">
                      <MoreVertical size={18} />
                   </button>
                   <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg">
                      <Play size={14} /> Run Analytics
                   </button>
                </div>
             </div>
          </div>
        ))}
      </div>
      
      <div className="bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200 p-16 text-center space-y-4">
         <Workflow size={48} className="text-slate-300 mx-auto" />
         <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Expand your funnels</h3>
         <p className="text-slate-500 max-w-sm mx-auto">Explore pre-built automation templates for abandoned cart recovery and pre-order management.</p>
         <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-700 transition-all">
           Browse Flow Library
         </button>
      </div>
    </div>
  );
};
