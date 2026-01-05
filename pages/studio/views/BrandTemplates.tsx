
import React from 'react';
import { Grid, Layout, Star, ArrowRight, CheckCircle, Search } from 'lucide-react';

const CATEGORIES = ['All', 'New Arrivals', 'Sales', 'Quotes', 'Editorial', 'Ad Sets'];

export const BrandTemplates: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Design Guardrails</h2>
          <p className="text-slate-500 font-medium">Reusable layouts that keep your brand consistent and powerful.</p>
        </div>
        <div className="relative w-full md:w-64">
           <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
           <input className="w-full bg-white border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none" placeholder="Search templates..." />
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {CATEGORIES.map(c => (
          <button key={c} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${c === 'All' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Minimalist Editorial', type: 'Post', rating: 98, status: 'Ready' },
          { name: 'Grid Lookbook', type: 'Carousel', rating: 92, status: 'Used recently' },
          { name: 'Luxury Quote', type: 'Story', rating: 88, status: 'Top Performer' },
          { name: 'Product Reveal', type: 'Reel', rating: 95, status: 'Ready' },
          { name: 'Flash Sale Alert', type: 'Ad Set', rating: 99, status: 'High ROI' },
          { name: 'Classic Testimonial', type: 'Post', rating: 84, status: 'Ready' },
        ].map((t, i) => (
          <div key={i} className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div className="aspect-[4/5] bg-slate-50 relative">
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                 Use Template
               </button>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{t.type}</span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-orange-400">
                  <Star size={10} fill="currentColor" /> {t.rating} Performance
                </span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">{t.name}</h3>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <CheckCircle size={14} className="text-green-500" /> {t.status}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-10 bg-blue-50 border-2 border-dashed border-blue-200 rounded-[40px] text-center">
         <h3 className="text-xl font-bold text-blue-900 mb-2">Need something unique?</h3>
         <p className="text-blue-700/70 font-medium mb-6">Describe your layout idea and let AI generate a brand-consistent template from scratch.</p>
         <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all inline-flex items-center gap-2">
           Generate AI Template <ArrowRight size={18} />
         </button>
      </div>
    </div>
  );
};
