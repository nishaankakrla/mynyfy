
import React from 'react';
import { Split, TrendingUp, BarChart3, ArrowRight, Zap, Target } from 'lucide-react';

export const VariationsAB: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Variations & A/B Engine</h2>
        <p className="text-slate-500 font-medium">Never settle for one draft. Let AI optimize for the highest confidence.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <Split size={20} className="text-blue-600" /> Active Experiments
                 </h3>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">3 Running</span>
              </div>
              
              <div className="space-y-6">
                 {[
                   { name: 'Summer Sale CTA Test', platforms: 'Meta Ads', winner: 'Variant B', confidence: 92 },
                   { name: 'Linen Collection Hook', platforms: 'Instagram', winner: 'None yet', confidence: 45 },
                 ].map((test, i) => (
                   <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-center justify-between">
                      <div className="space-y-1">
                         <h4 className="font-bold text-slate-800">{test.name}</h4>
                         <p className="text-xs text-slate-400 font-medium">{test.platforms}</p>
                      </div>
                      <div className="text-right space-y-1">
                         <div className="flex items-center gap-2 justify-end">
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Winner: {test.winner}</span>
                            <TrendingUp size={14} className="text-green-500" />
                         </div>
                         <div className="h-1 w-32 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500" style={{ width: `${test.confidence}%` }} />
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-indigo-900 rounded-[32px] p-12 text-white relative overflow-hidden">
              <div className="relative z-10 max-w-md space-y-6">
                 <h2 className="text-2xl font-bold tracking-tight">Let AI Predict the Winner</h2>
                 <p className="text-indigo-200 leading-relaxed font-medium">
                   Our predictive engine can analyze 50+ variants and tell you which one will convert best before you spend a single dollar.
                 </p>
                 <button className="bg-white text-indigo-950 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all">
                    Run Pre-Campaign Audit <Zap size={18} />
                 </button>
              </div>
              <BarChart3 size={240} className="absolute -bottom-20 -right-20 text-white/5 rotate-12" />
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6">Optimization Checklist</h3>
              <div className="space-y-4">
                 {[
                   { label: 'Copy Tone Variant', status: 'done' },
                   { label: 'Color Contrast Test', status: 'done' },
                   { label: 'CTA Placement', status: 'pending' },
                   { label: 'Dynamic Backgrounds', status: 'pending' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between text-xs font-bold">
                      <span className={item.status === 'done' ? 'text-slate-400' : 'text-slate-700'}>{item.label}</span>
                      <span className={item.status === 'done' ? 'text-green-500' : 'text-blue-600'}>
                         {item.status === 'done' ? '✓' : 'Run AI'}
                      </span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm text-center">
              <Target size={32} className="text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-800 mb-2">Confidence Threshold</h3>
              <p className="text-sm text-slate-500 mb-6 font-medium">Auto-publish only when AI reaches 90% confidence.</p>
              <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors">
                 Configure Autopilot
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
