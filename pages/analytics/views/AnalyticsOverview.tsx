
import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Target, ArrowUpRight, ArrowDownRight, Zap, Filter, Calendar } from 'lucide-react';

export const AnalyticsOverview: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Executive Summary</h1>
          <p className="text-slate-500 font-medium">Cross-platform intelligence for the last 30 days.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white border border-slate-200 rounded-xl flex items-center p-1 shadow-sm">
             <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold transition-all">Last 30 Days</button>
             <button className="px-4 py-2 text-slate-500 hover:text-slate-800 rounded-lg text-xs font-bold transition-all">Last Quarter</button>
          </div>
          <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-blue-600 shadow-sm transition-all">
             <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard label="Total Reach" value="1.2M" change="+14.2%" trend="up" icon={Target} color="text-blue-600 bg-blue-50" />
        <MetricCard label="Avg. Engagement" value="4.8%" change="+0.8%" trend="up" icon={TrendingUp} color="text-purple-600 bg-purple-50" />
        <MetricCard label="New Followers" value="12,400" change="-2.1%" trend="down" icon={Users} color="text-indigo-600 bg-indigo-50" />
        <MetricCard label="Social ROI" value="$124.5k" change="+24.5%" trend="up" icon={DollarSign} color="text-green-600 bg-green-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
               <TrendingUp size={18} className="text-blue-600" /> Reach Trends
            </h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                <div className="w-2 h-2 rounded-full bg-blue-600" /> Instagram
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                <div className="w-2 h-2 rounded-full bg-indigo-400" /> Facebook
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end gap-3 pb-4">
            {[40, 60, 45, 80, 55, 90, 75, 40, 60, 45, 80, 55, 90, 75].map((h, i) => (
              <div key={i} className="flex-1 space-y-1">
                 <div className="h-full bg-blue-50 rounded-t-lg relative overflow-hidden group">
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-600 group-hover:bg-blue-700 transition-all" style={{ height: `${h}%` }} />
                 </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-2">
            {['Jun 1', 'Jun 10', 'Jun 20', 'Jun 30'].map(label => (
              <span key={label} className="text-[10px] font-bold text-slate-400 uppercase">{label}</span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                 <Zap size={32} className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
                 <h3 className="text-lg font-bold mb-2">Performance Gap</h3>
                 <p className="text-slate-400 text-xs leading-relaxed mb-8">
                    Your Twitter (X) engagement is <span className="text-white font-bold">34% below</span> your industry benchmark.
                 </p>
                 <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-xs shadow-xl shadow-blue-900/40 hover:bg-blue-500 transition-all">
                    Generate Strategy Review
                 </button>
              </div>
              <BarChart3 className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6">Top Channels</h3>
              <div className="space-y-6">
                 {[
                   { name: 'Instagram', value: 58, color: 'bg-blue-600' },
                   { name: 'TikTok', value: 22, color: 'bg-indigo-500' },
                   { name: 'Facebook', value: 15, color: 'bg-indigo-300' },
                   { name: 'WhatsApp', value: 5, color: 'bg-slate-200' },
                 ].map((c, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-slate-600">
                         <span>{c.name}</span>
                         <span>{c.value}% Contribution</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                         <div className={`h-full ${c.color}`} style={{ width: `${c.value}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ label, value, change, trend, icon: Icon, color }: any) => (
  <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
    <div className="flex items-center justify-between mb-6">
       <div className={`p-3 rounded-2xl ${color}`}>
          <Icon size={20} />
       </div>
       <span className={`text-xs font-black flex items-center gap-1 ${trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
          {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {change}
       </span>
    </div>
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
    <h3 className="text-3xl font-black text-slate-900 tracking-tight">{value}</h3>
  </div>
);
