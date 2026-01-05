
import React from 'react';
import { Type, Sparkles, Languages, Search, ChevronRight, Edit3 } from 'lucide-react';

const CONTENT_ITEMS = [
  { page: 'Homepage', key: 'Hero Title', text: 'Elevate Your Style', tokens: 18 },
  { page: 'Homepage', key: 'Hero Subtitle', text: 'New Arrivals Summer 2024 Collection', tokens: 32 },
  { page: 'Our Story', key: 'Main Intro', text: 'Crafted with premium Italian leather and sustainable materials.', tokens: 64 },
  { page: 'Contact', key: 'Form Header', text: 'Get in Touch with our Atelier', tokens: 28 },
];

export const ContentManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Content Studio</h2>
          <p className="text-slate-500">Manage all site copy from one central hub with AI assistance.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
            <Languages className="w-4 h-4" /> Translate All
          </button>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-200 flex items-center gap-2 hover:bg-blue-700 transition-all">
            <Sparkles className="w-4 h-4" /> Global AI Rewrite
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {CONTENT_ITEMS.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-6 flex items-center justify-between group hover:shadow-md transition-all">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {item.page}
                </span>
                <span className="text-xs font-bold text-slate-400">{item.key}</span>
              </div>
              <p className="text-slate-800 font-medium">{item.text}</p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-300 uppercase">Tokens</p>
                <p className="text-xs font-bold text-slate-500">{item.tokens}</p>
              </div>
              <button className="p-3 bg-slate-50 text-slate-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Edit3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-900 rounded-[32px] p-10 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">Conversion Optimizer</h3>
          <p className="text-indigo-200 mb-6 max-w-md">Our AI analyzed your homepage copy and suggests a "High Urgency" tone for the Summer Sale banner.</p>
          <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-50 transition-all">
            Apply Suggestions <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <Sparkles className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
      </div>
    </div>
  );
};
