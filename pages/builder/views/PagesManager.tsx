
import React from 'react';
import { FileText, Plus, Search, MoreHorizontal, Settings, ExternalLink } from 'lucide-react';

const PAGES = [
  { name: 'Home', slug: '/', type: 'Standard', status: 'Live', lastEdit: '2h ago' },
  { name: 'Summer Collection', slug: '/summer-24', type: 'Collection', status: 'Live', lastEdit: '1d ago' },
  { name: 'Our Story', slug: '/about', type: 'Standard', status: 'Draft', lastEdit: '4h ago' },
  { name: 'Contact', slug: '/contact', type: 'Standard', status: 'Live', lastEdit: '1w ago' },
];

export const PagesManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search pages..." 
            className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-[16px] font-bold shadow-lg flex items-center gap-2">
          <Plus className="w-5 h-5" /> Create New Page
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {PAGES.map((page) => (
          <div key={page.slug} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">{page.name}</h3>
                <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  {page.slug} <ExternalLink className="w-3 h-3" />
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Page Type</p>
                <p className="text-sm font-semibold text-slate-600">{page.type}</p>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Last Edit</p>
                <p className="text-sm font-semibold text-slate-600">{page.lastEdit}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${page.status === 'Live' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                {page.status}
              </span>
              <div className="flex items-center gap-2">
                 <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                   <Settings className="w-4 h-4" />
                 </button>
                 <button className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all">
                   <MoreHorizontal className="w-4 h-4" />
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
