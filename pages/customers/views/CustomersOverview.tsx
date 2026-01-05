
import React from 'react';
import { TrendingUp, Users, MessageCircle, DollarSign, Target, ArrowUpRight, ArrowDownRight, Zap, UserCheck, Star } from 'lucide-react';

export const CustomersOverview: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Audience Snapshot</h1>
          <p className="text-slate-500 font-medium">Unified relationship intelligence across 14 platforms.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white border border-slate-100 rounded-xl flex items-center gap-2 shadow-sm">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Real-time Identity Sync</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          label="Total Profiles" 
          value="42,812" 
          change="+8.4%" 
          icon={Users} 
          trend="up"
          context="Leads & Customers"
        />
        <MetricCard 
          label="Active Conversations" 
          value="1,240" 
          change="+12.5%" 
          icon={MessageCircle} 
          trend="up"
          context="DMs & WhatsApp"
        />
        <MetricCard 
          label="Repeat Buyers" 
          value="24%" 
          change="+1.2%" 
          icon={Star} 
          trend="up"
          context="LTV Health: Good"
        />
        <MetricCard 
          label="Avg Customer Value" 
          value="$342" 
          change="-2.1%" 
          icon={DollarSign} 
          trend="down"
          context="Social segments only"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-8 flex items-center gap-2">
            <Target size={18} className="text-blue-600" /> Lifecycle Distribution
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
             {[
               { label: 'New Leads', count: '14.2k', share: 45, color: 'bg-blue-500' },
               { label: 'Engaged', count: '8.4k', share: 28, color: 'bg-indigo-500' },
               { label: 'Customers', count: '12.1k', share: 22, color: 'bg-green-500' },
               { label: 'At Risk', count: '840', share: 5, color: 'bg-orange-500' },
             ].map((s, i) => (
               <div key={i} className="space-y-4 p-6 bg-slate-50/50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all cursor-pointer">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
                  <h4 className="text-2xl font-bold text-slate-900">{s.count}</h4>
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} transition-all duration-1000`} style={{ width: `${s.share}%` }} />
                  </div>
               </div>
             ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <Zap size={32} className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Retention Opportunity</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              342 customers haven't purchased in <span className="text-white font-bold">90 days</span> but still engage with your Stories.
            </p>
            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2 hover:bg-blue-500 transition-all">
              Launch Win-back Flow <ArrowUpRight size={18} />
            </button>
          </div>
          <Users size={240} className="absolute -bottom-20 -right-20 text-white/5 rotate-12" />
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
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
        {change}
      </span>
    </div>
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
    <p className="text-[10px] text-slate-400 mt-2 italic truncate">{context}</p>
  </div>
);
