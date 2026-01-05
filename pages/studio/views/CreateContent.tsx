
import React from 'react';
import { Camera, Clapperboard, Layers, Megaphone, Stars, ArrowRight, Zap } from 'lucide-react';

const FORMATS = [
  { id: 'post', label: 'Standard Post', desc: 'High-quality static or single image posts.', icon: Camera, color: 'text-blue-600 bg-blue-50' },
  { id: 'video', label: 'Story / Reel', desc: 'Engaging vertical short-form video content.', icon: Clapperboard, color: 'text-purple-600 bg-purple-50' },
  { id: 'carousel', label: 'Carousel', desc: 'Educational or product-focused multi-slides.', icon: Layers, color: 'text-indigo-600 bg-indigo-50' },
  { id: 'ad', label: 'Ad Creative', desc: 'Direct-response layouts optimized for clicks.', icon: Megaphone, color: 'text-orange-600 bg-orange-50' },
];

export const CreateContent: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">What are we building today?</h1>
        <p className="text-slate-500 font-medium text-lg">Select a format to begin the guided AI generation process.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FORMATS.map((f) => (
          <button 
            key={f.id}
            className="group bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 hover:border-blue-100 transition-all text-left flex flex-col items-start"
          >
            <div className={`p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform ${f.color}`}>
              <f.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{f.label}</h3>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed">{f.desc}</p>
            <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm">
              Start Building <ArrowRight size={16} />
            </div>
          </button>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[40px] p-12 text-white flex flex-col md:flex-row items-center justify-between overflow-hidden relative group">
        <div className="relative z-10 max-w-md space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">
            <Stars size={14} /> Seasonal Special
          </div>
          <h2 className="text-3xl font-bold leading-tight">Generate a Full "Spring Look" Campaign</h2>
          <p className="text-slate-400 font-medium leading-relaxed">
            Let the AI handle 12 posts across all formats based on your new product drops.
          </p>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all">
            Unlock Campaign Builder <Zap size={18} />
          </button>
        </div>
        <div className="mt-12 md:mt-0 relative z-10">
          <div className="w-48 h-48 bg-blue-600 rounded-[40px] rotate-12 flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:rotate-6 transition-transform duration-700">
            <Layers size={64} className="text-white" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
