
import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Package, 
  Smartphone, 
  Calendar, 
  RefreshCcw, 
  ShieldCheck, 
  ArrowUpRight,
  ExternalLink,
  ChevronDown,
  // Added Zap import to fix the "Cannot find name 'Zap'" error
  Zap
} from 'lucide-react';

const PRODUCTS = [
  { id: '1', name: 'Oversized Silk Blazer', type: 'Physical', price: '$240', status: 'Active', rev: '$14.2k', platform: 3 },
  { id: '2', name: 'Brand Masterclass PDF', type: 'Digital', price: '$49', status: 'Active', rev: '$2.8k', platform: 5 },
  { id: '3', name: 'VIP Style Session', type: 'Service', price: '$150', status: 'Active', rev: '$1.4k', platform: 1 },
  { id: '4', name: 'Quarterly Lookbook', type: 'Subscription', price: '$29/mo', status: 'Paused', rev: '$640', platform: 2 },
  { id: '5', name: 'Luxury Pop-up Entry', type: 'Booking', price: '$0', status: 'Active', rev: '450 Leads', platform: 4 },
];

export const ProductList: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Product Catalog</h2>
          <p className="text-slate-500 font-medium">Manage all revenue primitives across your ecosystem.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
             <Filter size={18} /> Filters
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-all">
             <Plus size={18} /> Create Product
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
           <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className="w-full bg-white border border-slate-100 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Search by name, SKU, or type..." />
           </div>
           <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-4">
                 <button className="text-xs font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1">
                   All Types <ChevronDown size={14} />
                 </button>
                 <button className="text-xs font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1">
                   Bulk Edit <ChevronDown size={14} />
                 </button>
              </div>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/30 border-b border-slate-50">
                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Product</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Price</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Revenue</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Platforms</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {PRODUCTS.map((prod) => (
                <tr key={prod.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                        {getTypeIcon(prod.type)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{prod.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold">SKU: {prod.id}000-A</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
                      {prod.type}
                    </span>
                  </td>
                  <td className="px-6 py-6 font-bold text-slate-700 text-sm">
                    {prod.price}
                  </td>
                  <td className="px-6 py-6">
                    <p className="text-sm font-bold text-slate-900">{prod.rev}</p>
                    <p className="text-[9px] text-green-600 font-bold">+12% vs last mo</p>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-1.5">
                       <div className="flex -space-x-1.5">
                          {[...Array(Math.min(prod.platform, 3))].map((_, i) => (
                            <div key={i} className="w-5 h-5 rounded-full border border-white bg-blue-100 flex items-center justify-center">
                               <ArrowUpRight size={8} className="text-blue-600" />
                            </div>
                          ))}
                       </div>
                       <span className="text-[10px] font-bold text-slate-400">+{prod.platform} channels</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${prod.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                      {prod.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-2 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Add to DM Flow">
                         <Zap size={16} />
                       </button>
                       <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                         <ExternalLink size={16} />
                       </button>
                       <button className="p-2 text-slate-300 hover:text-slate-800 rounded-lg">
                         <MoreVertical size={16} />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-10 border-2 border-dashed border-slate-100 rounded-[32px] text-center bg-slate-50/30">
        <Package className="w-12 h-12 text-slate-200 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-800">Scaling your collection?</h3>
        <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
          Import your entire Shopify, Square, or WooCommerce catalog in one click with full Social Attribution mapping.
        </p>
        <div className="flex items-center justify-center gap-4">
           <button className="bg-white border border-slate-200 px-6 py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all">
             Import CSV
           </button>
           <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:bg-slate-800 transition-all">
             Sync Shopify Store
           </button>
        </div>
      </div>
    </div>
  );
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Physical': return <Package size={20} className="text-blue-600" />;
    case 'Digital': return <Smartphone size={20} className="text-purple-600" />;
    case 'Service': return <RefreshCcw size={20} className="text-indigo-600" />;
    case 'Subscription': return <RefreshCcw size={20} className="text-orange-600" />;
    case 'Booking': return <Calendar size={20} className="text-green-600" />;
    default: return <Package size={20} className="text-slate-400" />;
  }
};
