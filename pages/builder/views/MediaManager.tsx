
import React from 'react';
import { Image as ImageIcon, Upload, Search, Grid, List, MoreVertical, Sparkles, Filter } from 'lucide-react';

const ASSETS = [
  { id: 1, name: 'hero_summer.jpg', type: 'JPG', size: '1.2MB', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400' },
  { id: 2, name: 'logo_white.png', type: 'PNG', size: '240KB', url: 'https://ui-avatars.com/api/?name=Lumiere&background=0F172A&color=fff' },
  { id: 3, name: 'collection_lookbook.pdf', type: 'PDF', size: '4.5MB', url: '#' },
  { id: 4, name: 'product_detail_01.webp', type: 'WEBP', size: '450KB', url: 'https://images.unsplash.com/photo-1523381235312-3a1647fa9917?w=400' },
];

export const MediaManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search assets..." 
            className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        <div className="flex gap-3">
          <button className="bg-indigo-50 text-indigo-600 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 border border-indigo-100 hover:bg-indigo-100 transition-all">
            <Sparkles className="w-4 h-4" /> AI Generate
          </button>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-200 flex items-center gap-2 hover:bg-blue-700 transition-all">
            <Upload className="w-4 h-4" /> Upload Media
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
        <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-4">
          <div className="flex items-center gap-4">
             <button className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Grid className="w-4 h-4" /></button>
             <button className="p-2 text-slate-400 hover:text-slate-600"><List className="w-4 h-4" /></button>
             <span className="text-slate-300 mx-2">|</span>
             <button className="text-sm font-bold text-slate-500 flex items-center gap-2"><Filter className="w-4 h-4" /> All Assets</button>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Storage: 450MB / 1GB</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {ASSETS.map((asset) => (
            <div key={asset.id} className="group relative">
              <div className="aspect-square bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden relative">
                {asset.type !== 'PDF' ? (
                  <img src={asset.url} alt={asset.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-10 h-10 text-slate-200" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="p-2 bg-white rounded-lg text-slate-900 shadow-xl"><MoreVertical className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs font-bold text-slate-800 truncate">{asset.name}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">{asset.type} • {asset.size}</p>
              </div>
            </div>
          ))}
          <button className="aspect-square border-2 border-dashed border-slate-100 rounded-2xl flex flex-col items-center justify-center gap-2 text-slate-300 hover:border-blue-200 hover:text-blue-400 transition-all group">
            <Upload className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold uppercase">Add New</span>
          </button>
        </div>
      </div>
    </div>
  );
};
