
import React from 'react';
import { Link2, ShieldCheck, Instagram, MessageSquare, Plus, RefreshCw, XCircle } from 'lucide-react';

export const Connections: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Platform Control</h2>
          <p className="text-slate-500 font-medium">Manage and secure your conversational endpoints.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg flex items-center gap-2">
           <Plus size={18} /> Connect New Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: 'Instagram DM', handle: '@ateliernoir_official', icon: Instagram, status: 'Connected', health: 98, color: 'text-pink-600 bg-pink-50' },
          { name: 'WhatsApp Business', handle: '+39 02 1234567', icon: MessageSquare, status: 'Needs Auth', health: 45, color: 'text-green-600 bg-green-50' },
        ].map((plat, i) => (
          <div key={i} className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm flex flex-col justify-between group hover:border-blue-100 transition-all">
            <div className="flex items-start justify-between mb-8">
               <div className="flex gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${plat.color}`}>
                     <plat.icon size={28} />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-800">{plat.name}</h3>
                     <p className="text-sm font-medium text-slate-400">{plat.handle}</p>
                  </div>
               </div>
               <div className={`px-3 py-1 rounded-full text-[10px] font-bold ${plat.status === 'Connected' ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-500'}`}>
                  {plat.status}
               </div>
            </div>

            <div className="space-y-6">
               <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-500">Platform Health Score</span>
                  <span className={plat.health > 90 ? 'text-green-600' : 'text-orange-500'}>{plat.health}%</span>
               </div>
               <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div className={`h-full transition-all duration-1000 ${plat.health > 90 ? 'bg-green-500' : 'bg-orange-400'}`} style={{ width: `${plat.health}%` }} />
               </div>
            </div>

            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-50">
               <button className="flex-1 bg-slate-50 text-slate-600 py-3 rounded-xl font-bold text-xs hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                  <RefreshCw size={14} /> Refresh Token
               </button>
               <button className="p-3 text-red-400 hover:bg-red-50 rounded-xl transition-all">
                  <XCircle size={18} />
               </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-950 rounded-[40px] p-12 text-white flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
         <div className="relative z-10 max-w-md space-y-6">
            <ShieldCheck size={48} className="text-blue-400" />
            <h2 className="text-3xl font-bold leading-tight">Enterprise Privacy Guard</h2>
            <p className="text-indigo-200 leading-relaxed font-medium">
               CommerceOS uses encrypted direct-API tunnels. Your customer data never touches non-compliant secondary servers.
            </p>
         </div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  );
};
