
import React from 'react';
import { Activity, CreditCard, MessageCircle, TrendingUp, AlertCircle, Play, Pause, ArrowRight } from 'lucide-react';

export const MessagingOverview: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Automation Command Center</h1>
          <p className="text-slate-500 font-medium">Your brand's conversational engine is performing optimally.</p>
        </div>
        <div className="flex gap-3">
           <button className="bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all">
             <Pause size={18} /> Emergency Pause
           </button>
           <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2">
             <Play size={18} /> Resume All
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Messages Sent Today', value: '4,210', change: '+12%', icon: MessageCircle, color: 'text-blue-600 bg-blue-50' },
          { label: 'Attributed Revenue', value: '$8,420.00', change: '+24%', icon: CreditCard, color: 'text-green-600 bg-green-50' },
          { label: 'Active Automations', value: '14', change: 'Stable', icon: Activity, color: 'text-indigo-600 bg-indigo-50' },
          { label: 'Conversion Rate', value: '18.4%', change: '+3.2%', icon: TrendingUp, color: 'text-orange-600 bg-orange-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
               <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon size={20} />
               </div>
               <span className={`text-[10px] font-bold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-slate-400'}`}>
                 {stat.change}
               </span>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm flex items-center justify-between group cursor-pointer hover:border-blue-100 transition-all">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <TrendingUp size={32} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-slate-900">Conversion Opportunity</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                       72 users asked about "Spring Delivery" in the last 2h. AI recommends triggering the Shipping FAQ flow.
                    </p>
                 </div>
              </div>
              <button className="p-4 bg-slate-900 text-white rounded-2xl shadow-xl">
                 <ArrowRight size={20} />
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm overflow-hidden relative min-h-[300px] flex items-center justify-center text-center">
              <div className="relative z-10 space-y-4">
                 <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600">
                    <TrendingUp size={40} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Revenue attributed to DMs</h3>
                 <p className="text-slate-500 max-w-sm mx-auto">Detailed financial breakdown of your conversational funnels will appear here.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none" />
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <AlertCircle className="w-10 h-10 text-orange-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Platform Health</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Your Instagram DM API token expires in 4 days. Re-authorize now to prevent automation downtime.
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold text-sm transition-all shadow-xl shadow-orange-950/40">
                Fix Connection Now
              </button>
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <Activity size={18} className="text-blue-600" /> Live Risk Monitor
              </h3>
              <div className="space-y-4">
                 {[
                   { label: 'Rate Limiting', status: 'Safe', color: 'text-green-600' },
                   { label: 'Token Status', status: 'Warning', color: 'text-orange-500' },
                   { label: 'Spam Signals', status: 'None', color: 'text-green-600' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between text-xs font-bold border-b border-slate-50 pb-3 last:border-0">
                      <span className="text-slate-500">{item.label}</span>
                      <span className={item.color}>{item.status}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
