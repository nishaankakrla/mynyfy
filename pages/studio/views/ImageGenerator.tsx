
import React from 'react';
import { Image as ImageIcon, Sparkles, Sliders, Layout, Upload, Download, Maximize2 } from 'lucide-react';

export const ImageGenerator: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">AI Visual Engine</h2>
          <p className="text-slate-500 font-medium">Generate high-end fashion visuals rooted in your brand kit.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
            <Upload size={18} /> Upload Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-[28px] border border-slate-100 p-6 shadow-sm space-y-6">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Prompt</label>
              <textarea 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none min-h-[120px]"
                placeholder="A model wearing a black oversized blazer in a minimalist concrete studio, cinematic lighting..."
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Aspect Ratio</label>
              <div className="grid grid-cols-3 gap-2">
                {['1:1', '4:5', '9:16'].map(ratio => (
                  <button key={ratio} className={`py-2 rounded-xl text-xs font-bold border transition-all ${ratio === '4:5' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-100 text-slate-500'}`}>
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-50">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-600 flex items-center gap-2">
                  <Sliders size={14} /> Brand Strength
                </span>
                <span className="text-blue-600 font-bold">80%</span>
              </div>
              <input type="range" className="w-full accent-blue-600" />
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-100 flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
              <Sparkles size={18} /> Generate Visual
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-[32px] border border-slate-100 p-10 min-h-[500px] flex items-center justify-center relative group">
            <div className="text-center space-y-4 max-w-sm">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-blue-600">
                <ImageIcon size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Your vision starts here.</h3>
              <p className="text-slate-500 leading-relaxed">
                Describe the scene or upload a product photo to create a studio-quality lifestyle shot instantly.
              </p>
            </div>
            
            {/* Mock generated grid (hidden until gen) */}
            <div className="absolute inset-8 grid grid-cols-2 gap-4 hidden group-hover:grid animate-in fade-in duration-1000 pointer-events-none">
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden relative">
                   <div className="absolute top-4 right-4 flex gap-2">
                      <button className="p-2 bg-white/90 backdrop-blur-md rounded-lg text-slate-800"><Download size={14} /></button>
                      <button className="p-2 bg-white/90 backdrop-blur-md rounded-lg text-slate-800"><Maximize2 size={14} /></button>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="aspect-square bg-slate-100 rounded-2xl border border-slate-200 border-dashed flex flex-col items-center justify-center text-slate-300">
                  <Layout size={20} className="mb-2" />
                  <span className="text-[10px] font-bold uppercase">Variant {i}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};
