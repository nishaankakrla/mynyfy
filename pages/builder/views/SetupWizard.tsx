
import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Bot } from 'lucide-react';

export const SetupWizard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
          <Bot className="w-4 h-4" /> AI Guided Onboarding
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Let's refine your brand's digital core.</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          We've generated the base. Now, tell us a bit more to sharpen the conversion logic.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {[
          { step: 1, title: 'Brand Personality', desc: 'Is your brand Avant-Garde, Minimalist, or Rugged?', status: 'completed' },
          { step: 2, title: 'Core Product Category', desc: 'Define your main profit driver (e.g. Footwear, Outerwear).', status: 'current' },
          { step: 3, title: 'Visual DNA', desc: 'Confirm your typography and primary color palettes.', status: 'pending' },
          { step: 4, title: 'Final AI Review', desc: 'Generate your 5-page draft with unique editorial copy.', status: 'pending' },
        ].map((s) => (
          <div 
            key={s.step} 
            className={`
              p-8 rounded-[32px] border transition-all flex items-center justify-between group
              ${s.status === 'completed' ? 'bg-slate-50 border-slate-100 opacity-60' : s.status === 'current' ? 'bg-white border-blue-200 shadow-xl shadow-blue-50 ring-1 ring-blue-100' : 'bg-white border-slate-100'}
            `}
          >
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl ${s.status === 'completed' ? 'bg-green-100 text-green-600' : s.status === 'current' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {s.status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : s.step}
              </div>
              <div>
                <h3 className={`text-xl font-bold ${s.status === 'current' ? 'text-slate-900' : 'text-slate-800'}`}>{s.title}</h3>
                <p className="text-slate-500 font-medium">{s.desc}</p>
              </div>
            </div>
            
            {s.status === 'current' && (
              <button className="bg-blue-600 text-white px-8 py-4 rounded-[16px] font-bold shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                Continue <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[40px] p-12 text-white flex items-center justify-between overflow-hidden relative">
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
             <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-blue-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-indigo-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-500"></div>
             </div>
             <span className="text-sm font-medium text-slate-400">Trusted by 2,000+ fashion founders</span>
          </div>
          <h2 className="text-3xl font-bold leading-tight">Short on time?<br/>Let AI finish the details.</h2>
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-[16px] font-bold shadow-lg flex items-center gap-2 transition-all">
            <Sparkles className="w-5 h-5" /> Auto-Generate Remaining Steps
          </button>
        </div>
        <Sparkles className="absolute -bottom-10 -right-10 w-64 h-64 text-blue-400/10 rotate-12" />
      </div>
    </div>
  );
};
