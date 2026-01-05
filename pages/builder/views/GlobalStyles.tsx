
import React from 'react';
import { Palette, Type, Square, Layout, RefreshCcw } from 'lucide-react';

export const GlobalStyles: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Color Palette</h3>
            </div>
            <button className="text-slate-400 hover:text-blue-600 transition-colors">
              <RefreshCcw className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: 'Primary', color: '#0F172A', name: 'Ink Blue' },
              { label: 'Secondary', color: '#3B82F6', name: 'Core Blue' },
              { label: 'Accent', color: '#EAF3FF', name: 'Lite Wash' },
              { label: 'Surface', color: '#FFFFFF', name: 'White Silk' },
            ].map((c) => (
              <div key={c.label} className="space-y-3 group cursor-pointer">
                <div 
                  className="aspect-square rounded-[20px] shadow-inner border border-slate-100 flex items-end p-3 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: c.color }}
                >
                  <span className={`text-[10px] font-mono font-bold ${c.label === 'Surface' || c.label === 'Accent' ? 'text-slate-400' : 'text-white/40'}`}>
                    {c.color}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">{c.label}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{c.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Type className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Typography Scale</h3>
          </div>
          
          <div className="space-y-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Heading Primary</p>
              <h1 className="text-3xl font-bold text-slate-900 font-serif">Inter Display Bold</h1>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Body Text</p>
              <p className="text-base text-slate-600 leading-relaxed">Modern sans-serif optimized for fashion editorial reading.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
           <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
             <Square className="w-4 h-4 text-blue-600" /> Elements & Radius
           </h3>
           <div className="space-y-6">
             <div>
               <label className="text-xs font-bold text-slate-500 block mb-3">Button Radius: 16px</label>
               <input type="range" className="w-full accent-blue-600" defaultValue={60} />
             </div>
             <div>
               <label className="text-xs font-bold text-slate-500 block mb-3">Card Shadow: Soft</label>
               <div className="grid grid-cols-3 gap-2">
                 <button className="h-10 rounded-lg border border-slate-200 hover:border-blue-600 transition-all text-[10px] font-bold">None</button>
                 <button className="h-10 rounded-lg border-2 border-blue-600 bg-blue-50 text-blue-600 text-[10px] font-bold shadow-sm">Soft</button>
                 <button className="h-10 rounded-lg border border-slate-200 hover:border-blue-600 transition-all text-[10px] font-bold shadow-xl">Deep</button>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-blue-600 rounded-[32px] p-8 text-white relative overflow-hidden group">
          <h3 className="text-lg font-bold mb-2">Style Guardian</h3>
          <p className="text-blue-100 text-sm leading-relaxed mb-6">
            Changes here will sync across all 12 templates and 4 pages instantly.
          </p>
          <button className="w-full bg-white text-blue-600 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-900/20 group-hover:scale-[1.02] transition-transform">
            Apply Global Changes
          </button>
        </div>
      </div>
    </div>
  );
};
