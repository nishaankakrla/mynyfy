
import React from 'react';
import { Link2, Instagram, Facebook, MessageSquare, Plus, RefreshCcw, ShieldCheck, AlertCircle } from 'lucide-react';

export const PlatformSettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Platform Connections</h2>
          <p className="text-slate-500 font-medium">Link your social storefronts and communication channels.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
           <Plus size={18} /> Add Connection
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: 'Instagram Business', handle: '@ateliernoir_official', status: 'Connected', icon: Instagram, color: 'text-pink-600 bg-pink-50', health: 'Healthy' },
          { name: 'WhatsApp Business', handle: '+39 342 123 4567', status: 'Action Required', icon: MessageSquare, color: 'text-green-600 bg-green-50', health: 'Token Expired' },
        ].map((plat, i) => (
          <div key={i} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm hover:border-blue-100 transition-all group">
             <div className="flex items-start justify-between mb-8">
                <div className="flex gap-4">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${plat.color}`}>
                      <plat.icon size={28} />
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-slate-800">{plat.name}</h3>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{plat.handle}</p>
                   </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${plat.status === 'Connected' ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-600'}`}>
                   {plat.status}
                </span>
             </div>

             <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                   {plat.health === 'Healthy' ? <ShieldCheck size={16} className="text-green-500" /> : <AlertCircle size={16} className="text-orange-500" />}
                   <span className="text-xs font-bold text-slate-700">{plat.health}</span>
                </div>
                <button className="text-[10px] font-bold text-blue-600 hover:underline flex items-center gap-1">
                   <RefreshCcw size={12} /> Sync Status
                </button>
             </div>

             <div className="flex gap-3 border-t border-slate-50 pt-6">
                <button className="flex-1 bg-white border border-slate-200 text-slate-600 py-2.5 rounded-xl font-bold text-xs hover:bg-slate-50 transition-all">Edit Permissions</button>
                <button className="px-4 py-2.5 bg-red-50 text-red-600 rounded-xl font-bold text-xs hover:bg-red-100 transition-all">Disconnect</button>
             </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-[32px] p-8 border border-blue-100 flex items-center justify-between">
         <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
               <Link2 size={24} />
            </div>
            <div>
               <h4 className="font-bold text-blue-900 text-lg">Need to link your store?</h4>
               <p className="text-sm text-blue-700/70 font-medium">Connect Shopify, WooCommerce or Square to unlock social inventory sync.</p>
            </div>
         </div>
         <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-xl">Go to Integrations</button>
      </div>
    </div>
  );
};
