
import React from 'react';
import { Type, MessageSquare, Send, Sparkles, Languages, Check, Copy } from 'lucide-react';

export const CaptionCopy: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Caption & Language Engine</h2>
          <p className="text-slate-500 font-medium">Generate high-conversion copy tailored to every platform.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-[28px] border border-slate-100 p-8 shadow-sm space-y-8">
             <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Context / Topic</label>
              <textarea 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px]"
                placeholder="Announcing our Summer Sale: Up to 40% off linen collection..."
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Select Platforms</label>
              <div className="flex flex-wrap gap-2">
                {['Instagram', 'Facebook', 'TikTok', 'X', 'LinkedIn'].map(p => (
                  <button key={p} className="px-3 py-1.5 rounded-lg border border-slate-100 text-[10px] font-bold text-slate-500 hover:bg-slate-50">
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Brand Tone</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3 text-sm font-bold text-slate-700 outline-none">
                <option>Sophisticated & Minimalist</option>
                <option>Energetic & Youthful</option>
                <option>Luxury & Exclusive</option>
                <option>Friendly & Accessible</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
              <Sparkles size={18} /> Generate Captions
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden flex flex-col min-h-[600px]">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
               <h3 className="font-bold text-slate-800 flex items-center gap-2">
                 <MessageSquare size={18} className="text-blue-600" /> Draft Variants
               </h3>
               <div className="flex items-center gap-3">
                 <button className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1">
                   <Languages size={14} /> Translate All
                 </button>
               </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-200">
                <Type size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Ready to speak your brand?</h3>
              <p className="text-slate-500 max-w-sm">
                Enter your topic and desired tone to see multiple variants optimized for engagement.
              </p>
            </div>

            {/* Example mock output */}
            <div className="p-8 space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 group hover:border-blue-200 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Variant {i}</span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-blue-600 shadow-sm transition-all"><Copy size={14} /></button>
                      <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-green-600 shadow-sm transition-all"><Check size={14} /></button>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed italic">
                    "Crafted for the sun-seekers. ☀️ Our new Linen Collection is a tribute to effortless Italian summers. Shop early access at the link in bio. #AtelierNoir #SustainableFashion"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
