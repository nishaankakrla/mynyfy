
import React from 'react';
import { Activity, Sparkles, Zap, Target, TrendingUp, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

export const CopilotOverview: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Intelligence Hub</h1>
          <p className="text-slate-500 font-medium">Real-time optimization vectors for <span className="text-blue-600">Lumière Fashion</span>.</p>
        </div>
        <div className="bg-white px-4 py-2 border border-slate-100 rounded-xl flex items-center gap-2 shadow-sm">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Cognitive Core Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <InsightMetric label="Actions Proposed" value="12" change="+3" trend="up" icon={Zap} />
        <InsightMetric label="Confidence Score" value="94%" change="Max" trend="neutral" icon={Target} />
        <InsightMetric label="Attributed Growth" value="12.4%" change="+2.1%" trend="up" icon={TrendingUp} />
        <InsightMetric label="Risk Prevention" value="100%" change="Stable" trend="neutral" icon={ShieldCheck} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                       <Sparkles size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">Priority Recommendation</h3>
                 </div>
                 <h2 className="text-3xl font-bold text-slate-900 leading-tight">Sync "Milan Editorial" to Friday's peak window.</h2>
                 <p className="text-slate-500 font-medium leading-relaxed max-w-lg">
                    I detected a 24% engagement lift for minimalist content between 6 PM and 8 PM CET. Moving your draft forward will capture 4k additional impressions.
                 </p>
                 <div className="flex items-center gap-4 pt-4">
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-all">
                       Execute Adjustment <Zap size={18} />
                    </button>
                    <button className="px-6 py-4 rounded-2xl font-bold text-slate-500 hover:bg-slate-50 transition-all">Details</button>
                 </div>
              </div>
              <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-blue-50/30 to-transparent pointer-events-none" />
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <Activity size={18} className="text-blue-600" /> Cognitive Focus
              </h3>
              <div className="space-y-6">
                 {[
                   { label: 'Revenue Recovery', weight: 85, color: 'bg-green-500' },
                   { label: 'Audience Retargeting', weight: 42, color: 'bg-blue-500' },
                   { label: 'Asset Generation', weight: 65, color: 'bg-indigo-500' },
                   { label: 'Risk Mitigation', weight: 100, color: 'bg-slate-900' },
                 ].map((focus, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                         <span>{focus.label}</span>
                         <span>{focus.weight}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                         <div className={`h-full ${focus.color}`} style={{ width: `${focus.weight}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <MessageCircle size={32} className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Automated Memory</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                 Copilot has learned your brand's preference for <span className="text-white font-bold">"Short-form minimalist captions"</span>. 88% of future drafts will follow this pattern.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-xs shadow-xl transition-all hover:bg-blue-500">
                Manage AI Preferences
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6">Recent Cognitive Wins</h3>
              <div className="space-y-4">
                 {[
                   { label: 'Bot-Spam Blocked', time: '2h ago', icon: ShieldCheck, color: 'text-green-600' },
                   { label: 'Low ROI Ad Flagged', time: '5h ago', icon: Activity, color: 'text-orange-500' },
                   { label: 'LTV Segment Created', time: 'Yesterday', icon: Target, color: 'text-blue-600' },
                 ].map((win, i) => (
                   <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-blue-100 transition-all">
                         <win.icon size={18} className={win.color} />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-800">{win.label}</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{win.time}</p>
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

const InsightMetric = ({ label, value, change, trend, icon: Icon }: any) => (
  <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
        <Icon size={18} />
      </div>
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-500'}`}>
        {change}
      </span>
    </div>
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    <h3 className="text-2xl font-black text-slate-900 mt-1">{value}</h3>
  </div>
);
