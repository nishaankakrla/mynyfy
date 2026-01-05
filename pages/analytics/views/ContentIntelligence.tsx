
import React from 'react';
import { Search, Filter, ArrowUpRight, Instagram, Facebook, LayoutGrid, List, MessageSquare, PlayCircle, Layers, MoreVertical, Eye } from 'lucide-react';

export const ContentIntelligence: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Content Intelligence</h2>
          <p className="text-slate-500 font-medium">Analyzing 842 pieces of creative assets.</p>
        </div>
        <div className="flex gap-3">
          <button className="p-2.5 bg-white border border-slate-200 text-blue-600 rounded-xl shadow-sm"><LayoutGrid size={18} /></button>
          <button className="p-2.5 bg-blue-600 text-white rounded-xl shadow-md"><List size={18} /></button>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
           <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className="w-full bg-white border border-slate-100 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Search by caption, platform or ID..." />
           </div>
           <button className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-xl bg-white shadow-sm transition-all">
              <Filter size={16} /> Advanced Filters
           </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/30 border-b border-slate-50">
                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asset</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Format</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Reach</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Eng. Rate</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Saves</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Conv.</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: 'Summer Collection Carousel', plat: 'Instagram', format: 'Carousel', reach: '124k', eng: '8.4%', saves: '4.2k', conv: '128', icon: Layers },
                { name: 'Linen Dress Launch Reel', plat: 'Instagram', format: 'Reel', reach: '450k', eng: '12.1%', saves: '18.4k', conv: '412', icon: PlayCircle },
                { name: 'Sustainability Quote', plat: 'Twitter', format: 'Static', reach: '18k', eng: '2.4%', saves: '124', conv: '12', icon: MessageSquare },
                { name: 'Weekend Flash Sale Ad', plat: 'Facebook', format: 'Image', reach: '82k', eng: '4.2%', saves: '840', conv: '84', icon: Layers },
                { name: 'Behind the Scenes Story', plat: 'Instagram', format: 'Story', reach: '42k', eng: '1.8%', saves: '42', conv: '5', icon: Eye },
              ].map((item, i) => (
                <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-blue-200 transition-all">
                        <item.icon size={20} className="text-slate-400 group-hover:text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{item.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{item.plat}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
                      {item.format}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-center font-bold text-slate-700 text-sm">{item.reach}</td>
                  <td className="px-6 py-6 text-center">
                     <p className="text-sm font-bold text-slate-900">{item.eng}</p>
                     <p className="text-[9px] text-green-600 font-bold">Top 5%</p>
                  </td>
                  <td className="px-6 py-6 text-center font-bold text-slate-700 text-sm">{item.saves}</td>
                  <td className="px-6 py-6 text-center">
                     <p className="text-sm font-bold text-blue-600">{item.conv}</p>
                     <p className="text-[9px] text-slate-400 font-bold">Attributed</p>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-slate-300 hover:text-slate-800 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
