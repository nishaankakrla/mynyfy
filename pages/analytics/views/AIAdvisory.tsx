
import React from 'react';
import { Sparkles, ArrowRight, Zap, Target, TrendingUp, Lightbulb, Bot, MessageCircle } from 'lucide-react';

export const AIAdvisory: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">AI Insights & Advisory</h2>
        <p className="text-slate-500 font-medium">Data-driven actions. No assumptions, just growth strategy.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 space-y-10">
                 <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                       <Lightbulb size={32} />
                    </div>
                    <div>
                       <h3 className="text-2xl font-bold text-slate-900">Next Action: Double down on "Texture Editorial"</h3>
                       <p className="text-slate-500 font-medium">Confidence: <span className="text-blue-600 font-bold">94%</span></p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                       <p className="text-slate-600 leading-relaxed font-medium">
                          "Assets focusing on fabric close-ups and textures are outperforming lifestyle shots by <span className="text-green-600 font-bold">2.4x</span>. Your Milan-based audience segment interacts with these 80% more than other formats."
                       </p>
                       <div className="flex gap-3">
                          <span className="bg-green-50 text-green-600 text-[10px] font-bold px-3 py-1.5 rounded-full border border-green-100">Recommended Priority</span>
                          <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1.5 rounded-full border border-blue-100">Low Cost / High Reach</span>
                       </div>
                    </div>
                    <div className="bg-slate-900 rounded-[32px] p-8 text-white space-y-6 relative overflow-hidden">
                       <div className="relative z-10">
                          <h4 className="text-lg font-bold mb-4">Execute Now</h4>
                          <p className="text-slate-400 text-xs leading-relaxed mb-6 font-medium">
                             Generate 5 new Reels using the "Minimalist Fabric" template and schedule for 6:40 PM Monday.
                          </p>
                          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-xs shadow-xl flex items-center justify-center gap-2 hover:bg-blue-500 transition-all">
                             Launch AI Content Studio <ArrowRight size={14} />
                          </button>
                       </div>
                       <Sparkles className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
                    </div>
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-transparent pointer-events-none" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Format Pivot', text: 'Reduce static posts by 30%. Increase Reels frequency to 4x weekly for maximum reach lift.', icon: TrendingUp, color: 'text-purple-600 bg-purple-50' },
                { title: 'Audience Insight', text: '72% of new buyers found you via WhatsApp. AI recommends a "WhatsApp First" Friday drop.', icon: MessageCircle, color: 'text-green-600 bg-green-50' },
              ].map((insight, i) => (
                <div key={i} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-6 group hover:border-blue-100 transition-all">
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${insight.color}`}>
                      <insight.icon size={24} />
                   </div>
                   <h4 className="text-xl font-bold text-slate-800">{insight.title}</h4>
                   <p className="text-sm text-slate-500 font-medium leading-relaxed">{insight.text}</p>
                   <button className="text-blue-600 font-bold text-xs flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      Learn why <ArrowRight size={14} />
                   </button>
                </div>
              ))}
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-50 rounded-[32px] border border-slate-100 p-8 text-center space-y-4">
              <Bot size={48} className="text-blue-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">Strategy Engine</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                 AI analyzed 2.4k data points today to refine your publishing engine.
              </p>
              <div className="pt-4 space-y-3">
                 <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-slate-400 uppercase">Analysis Depth</span>
                    <span className="text-green-600">Max</span>
                 </div>
                 <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-slate-400 uppercase">Decision Quality</span>
                    <span className="text-blue-600">Excellent</span>
                 </div>
              </div>
           </div>

           <div className="bg-blue-600 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <Target size={32} className="text-blue-200 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">ROI Goal: $250k</h3>
              <p className="text-blue-100 text-xs leading-relaxed mb-6 font-medium">
                 You are currently at 42% of your monthly social revenue goal. AI suggests 3 aggressive flash sales to bridge the gap.
              </p>
              <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-xs shadow-lg">
                 See Goal Path
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
