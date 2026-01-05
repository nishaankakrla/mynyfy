
import React from 'react';
import { TrendingUp, ShoppingBag, CreditCard, DollarSign, Target, ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react';

export const OrdersOverview: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Order Health</h1>
          <p className="text-slate-500 font-medium">Unified transaction intelligence for <span className="text-blue-600">Lumière Fashion</span>.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white border border-slate-100 rounded-xl flex items-center gap-2 shadow-sm">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Attribution Engine Active</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          label="Gross Revenue" 
          value="$124,500" 
          change="+14.2%" 
          icon={DollarSign} 
          trend="up"
          context="Directly attributed to social"
        />
        <MetricCard 
          label="Order Volume" 
          value="842" 
          change="+8.4%" 
          icon={ShoppingBag} 
          trend="up"
          context="Avg. 120 orders / day"
        />
        <MetricCard 
          label="Failed Payments" 
          value="14" 
          change="-2.1%" 
          icon={CreditCard} 
          trend="down"
          context="24h recovery active"
        />
        <MetricCard 
          label="AOV (Social)" 
          value="$148" 
          change="+12.5%" 
          icon={TrendingUp} 
          trend="up"
          context="22% higher than direct"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-8 flex items-center gap-2">
            <Zap size={18} className="text-blue-600" /> Revenue Attribution Source
          </h3>
          <div className="space-y-6">
            {[
              { source: 'Instagram DM Flow: Summer Launch', share: 42, revenue: '$52,290', trend: 'up' },
              { source: 'WhatsApp: Direct Payment Link', share: 28, revenue: '$34,860', trend: 'up' },
              { source: 'Facebook Reel: Eco-Linen', share: 15, revenue: '$18,675', trend: 'down' },
              { source: 'Other (Organic Social)', share: 15, revenue: '$18,675', trend: 'neutral' },
            ].map((s, i) => (
              <div key={i} className="space-y-2 group cursor-pointer hover:bg-slate-50 p-4 rounded-2xl transition-all">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                  <span>{s.source}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-900">{s.revenue}</span>
                    <span className={s.trend === 'up' ? 'text-green-500' : s.trend === 'down' ? 'text-red-500' : 'text-slate-400'}>
                      {s.trend === 'up' ? <ArrowUpRight size={12} /> : s.trend === 'down' ? <ArrowDownRight size={12} /> : null}
                    </span>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 group-hover:bg-blue-600 transition-colors" style={{ width: `${s.share}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Churn Risk: Payments</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              12 failed renewals detected for <span className="text-white font-bold">Luxe Collective Subscription</span>.
            </p>
            <div className="space-y-4 mb-8">
               <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                 <span className="text-slate-400">Recovery Sent</span>
                 <span className="text-green-400 font-bold">8 / 12</span>
               </div>
               <div className="flex items-center justify-between text-xs">
                 <span className="text-slate-400">Estimated Rescue</span>
                 <span className="text-blue-400 font-bold">$1,240.00</span>
               </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2 hover:bg-blue-500 transition-all">
              Launch Recovery Bot <Zap size={18} />
            </button>
          </div>
          <Zap size={240} className="absolute -bottom-20 -right-20 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-1000" />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ label, value, change, icon: Icon, trend, context }: any) => (
  <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
        <Icon size={18} />
      </div>
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${trend === 'up' ? 'bg-green-50 text-green-600' : trend === 'down' ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-500'}`}>
        {change}
      </span>
    </div>
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
    <p className="text-[10px] text-slate-400 mt-2 italic truncate">{context}</p>
  </div>
);
