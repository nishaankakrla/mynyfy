
import React from 'react';
import { Search, Globe, Share2, Bot, CheckCircle2, AlertCircle } from 'lucide-react';

export const SEOManager: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-600" /> Search Appearance
            </h3>
            <button className="text-blue-600 font-bold text-sm flex items-center gap-1">
              <Bot className="w-4 h-4" /> AI Suggest
            </button>
          </div>
          
          <div className="p-8 space-y-8">
            <div>
              <label className="text-xs font-bold text-slate-500 block mb-3">SEO Title Tag</label>
              <input 
                type="text" 
                defaultValue="Atelier Noir | Luxury Minimalist Fashion Atelier" 
                className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              <p className="text-[10px] text-slate-400 mt-2 font-medium">Character count: 52/60 (Optimal)</p>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-3">Meta Description</label>
              <textarea 
                rows={4}
                defaultValue="Explore the fusion of Italian craftsmanship and modern minimalism. Atelier Noir offers premium, sustainable basics for the discerning individual. Shop the 2024 Collection now." 
                className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              <p className="text-[10px] text-slate-400 mt-2 font-medium">Character count: 154/160 (Optimal)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-indigo-600" /> Social Preview (OG)
          </h3>
          <div className="aspect-[1.91/1] bg-slate-100 rounded-[24px] border border-slate-200 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" alt="OG Preview" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm border-t border-slate-200">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">atelier-noir.com</p>
              <h4 className="font-bold text-slate-800">Atelier Noir | Luxury Minimalist Fashion</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900 rounded-[32px] p-8 text-white">
          <h3 className="text-lg font-bold mb-6">SEO Health Score</h3>
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-800" />
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="364" strokeDashoffset="40" className="text-blue-500" />
              </svg>
              <span className="absolute text-3xl font-bold">92</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Mobile friendly viewports</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Sitemap.xml generated</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <AlertCircle className="w-4 h-4 text-orange-400" />
              <span>3 images missing ALT text</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
           <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
             <Globe className="w-4 h-4 text-blue-600" /> Sitemap & Robots
           </h3>
           <p className="text-xs text-slate-500 leading-relaxed mb-4">
             CommerceOS manages your indexing rules automatically. Manual overrides are restricted for brand safety.
           </p>
           <button className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-bold border border-slate-100 transition-all">
             View Public Sitemap
           </button>
        </div>
      </div>
    </div>
  );
};
