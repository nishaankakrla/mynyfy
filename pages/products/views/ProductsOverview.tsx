
import React from 'react';
import { TrendingUp, ShoppingBag, DollarSign, Target, ArrowUpRight, Zap, ArrowRight, MousePointer2 } from 'lucide-react';

export const ProductsOverview: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Revenue Dashboard</h1>
          <p className="text-slate-500 font-medium">Tracking the performance of 124 sellable primitives.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100 flex items-center gap-1">
            <Zap size={12} fill="currentColor" /> Real-time Attribution
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          label="Social Revenue" 
          value="$42,840" 
          change="+18.4%" 
          icon={DollarSign} 
          trend="up"
          context="Directly attributed to posts & DMs"
        />
        <MetricCard 
          label="Conversion Rate" 
          value="4.2%" 
          change="+0.8%" 
          icon={Target} 
          trend="up"
          context="Avg. across 12 channels"
        />
        <MetricCard 
          label="Active Distribution" 
          value="89" 
          change="Stable" 
          icon={ShoppingBag} 
          trend="neutral"
          context="Products used in active flows"
        />
        <MetricCard 
          label="Avg Order Value" 
          value="$124" 
          change="-2.1%" 
          icon={TrendingUp} 
          trend="down"
          context="Social-only customer segment"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <TrendingUp size={18} className="text-blue-600" /> Top Performing Products
            </h3>
            <button className="text-xs font-bold text-blue-600 hover:underline">Full Analytics</button>
          </div>
          <div className="space-y-6">
            {[
              { name: 'Oversized Silk Blazer', revenue: '$14,200', conversion: '6.2%', platform: 'Instagram' },
              { name: 'Minimalist Chelsea Boots', revenue: '$9,840', conversion: '5.4%', platform: 'TikTok' },
              { name: 'Linen Collection Subscription', revenue: '$4,120', conversion: '3.1%', platform: 'WhatsApp' },
            ].map((prod, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <ShoppingBag size={20} className="text-slate-400 group-hover:text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{prod.name}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{prod.platform} Core</p>
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Revenue</p>
                    <p className="text-sm font-bold text-slate-900">{prod.revenue}</p>
                  </div>
                  <div className="text-right w-20">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Conv.</p>
                    <p className="text-sm font-bold text-green-600">{prod.conversion}</p>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-blue-600"><ArrowRight size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
            <h3 className="text-xl font-bold mb-2">Social ROI Gap</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              34 products have <span className="text-white font-bold">zero activity</span> in the last 7 days. AI recommends adding them to your "Evergreen" rotation.
            </p>
            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2 hover:bg-blue-500 transition-all">
              Automate Promotion <Zap size={18} />
            </button>
            <Zap className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
          </div>

          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <MousePointer2 size={18} className="text-blue-600" /> Attribution Summary
            </h3>
            <div className="space-y-4">
              {[
                { channel: 'Instagram DM', share: 45 },
                { channel: 'Social Posts', share: 32 },
                { channel: 'Link in Bio', share: 15 },
                { channel: 'WhatsApp', share: 8 },
              ].map((c, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold text-slate-600">
                    <span>{c.channel}</span>
                    <span>{c.share}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${c.share}%` }} />
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
