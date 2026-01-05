
import React from 'react';
import { BarChart2, TrendingUp, Lightbulb, ArrowRight, PieChart, Sparkles } from 'lucide-react';

export const AIInsights: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">AI Insights & ROI</h2>
        <p className="text-slate-500 font-medium">Deep data analytics transformed into creative action items.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm overflow-hidden relative group">
              <div className="relative z-10 space-y-8">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                       <Lightbulb size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">Why was your last campaign successful?</h3>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <p className="text-slate-500 text-sm font-medium leading-relaxed">
                          "The high-contrast minimalist visuals performed 3.2x better than editorial lifestyle shots. Your core audience (25-34) reacted most to the 'Sustainable Luxury' keyword."
                       </p>
                       <div className="flex gap-2">
                          <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded border border-green-100">+42% Engagement</span>
                          <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded border border-blue-100">88% Brand Match</span>
                       </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                       <p className="text-xs font-bold text-slate-800 mb-2">Next Suggested Action</p>
                       <p className="text-xs text-slate-500 font-medium mb-4 leading-relaxed">
                          Generate 5 more minimalist variants focusing on texture and fabric close-ups.
                       </p>
                       <button className="w-full py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-1">
                          Apply Recommendation <ArrowRight size={14} />
                       </button>
                    </div>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                 <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2"><TrendingUp size={18} className="text-blue-600" /> Conversion Lift</h4>
                 <div className="h-40 flex items-end gap-2 pb-2">
                    {[30, 50, 45, 70, 65, 90, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-blue-500/10 rounded-t-lg relative group overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 bg-blue-600 group-hover:bg-blue-700 transition-all" style={{ height: `${h}%` }} />
                      </div>
                    ))}
                 </div>
                 <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-4">7 Day Performance Delta</p>
              </div>

              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                 <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2"><PieChart size={18} className="text-purple-600" /> Sentiment Analysis</h4>
                 <div className="space-y-4">
                    {[
                      { label: 'Sophisticated', value: 72, color: 'bg-indigo-500' },
                      { label: 'Modern', value: 18, color: 'bg-blue-400' },
                      { label: 'Other', value: 10, color: 'bg-slate-200' },
                    ].map((s, i) => (
                      <div key={i} className="space-y-1">
                         <div className="flex justify-between text-[10px] font-bold text-slate-600">
                            <span>{s.label}</span>
                            <span>{s.value}%</span>
                         </div>
                         <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                            <div className={`h-full ${s.color}`} style={{ width: `${s.value}%` }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white">
              <Sparkles size={32} className="text-blue-400 mb-6" />
              <h3 className="text-lg font-bold mb-2">Predictive Score</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                 Our AI predicts your upcoming campaign will reach <span className="text-white font-bold">140k impressions</span> based on current trends.
              </p>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-[10px] font-medium text-slate-300">
                 "Add a 'Limited Edition' badge to increase clicks by 15%."
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
