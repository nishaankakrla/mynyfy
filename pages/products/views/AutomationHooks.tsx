
import React from 'react';
import { Bot, Zap, MessageCircle, ShoppingCart, RefreshCw, Plus, ShieldCheck, ArrowRight } from 'lucide-react';

export const AutomationHooks: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Auto-DM & Distribution</h2>
          <p className="text-slate-500 font-medium">Turn your product catalog into conversational sales engines.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
           <Plus size={18} /> New Product Hook
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           {[
             { title: 'Oversized Silk Blazer', trigger: 'Comment: "SHOP"', action: 'Auto-DM with Buy Link & Size Guide', status: 'Active', conv: '420', revenue: '$4,200' },
             { title: 'Brand Masterclass PDF', trigger: 'Keyword: "LEARN"', action: 'Send Free Lead Magnet + Upsell Flow', status: 'Active', conv: '1,200', revenue: '$240' },
             { title: 'VIP Style Session', trigger: 'Story Reply: "ME"', action: 'Check availability & Send Booking Link', status: 'Paused', conv: '42', revenue: '$0' },
           ].map((hook, i) => (
             <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 hover:border-blue-100 transition-all group">
                <div className="w-full md:w-32 aspect-square bg-blue-50 rounded-2xl border border-blue-100 flex flex-col items-center justify-center shrink-0">
                   <Zap size={32} className="text-blue-600 mb-2" />
                   <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Automation</span>
                </div>
                <div className="flex-1 space-y-6">
                   <div className="flex items-center justify-between">
                      <div>
                         <h3 className="text-xl font-bold text-slate-800">{hook.title}</h3>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Platform: Instagram / WhatsApp</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${hook.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                        {hook.status}
                      </span>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                         <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Trigger</p>
                         <p className="text-xs font-bold text-slate-700">{hook.trigger}</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                         <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Action</p>
                         <p className="text-xs font-bold text-slate-700">{hook.action}</p>
                      </div>
                   </div>

                   <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-6">
                         <div className="flex items-center gap-2">
                            <MessageCircle size={14} className="text-blue-400" />
                            <span className="text-xs font-bold text-slate-700">{hook.conv} Conv.</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <ShoppingCart size={14} className="text-green-500" />
                            <span className="text-xs font-bold text-slate-900">{hook.revenue} ROI</span>
                         </div>
                      </div>
                      <div className="flex gap-2">
                         <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">Edit</button>
                         <button className="p-2 text-slate-400 hover:text-slate-800 transition-colors">View Stats</button>
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <Bot size={32} className="text-blue-400 mb-6" />
              <h3 className="text-lg font-bold mb-2">Smart Upsell Hook</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                 CommerceOS AI detects when a user buys a product and automatically triggers a "Perfect Match" recommendation 24h later.
              </p>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2 hover:bg-blue-500 transition-all">
                Enable Global Upsell <RefreshCw size={18} />
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <ShieldCheck size={18} className="text-green-600" /> Compliance Safety
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                 All product links sent via DM are automatically passed through the "Platform Standing Guard" to prevent link-blocks.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center justify-between text-[10px] font-bold border-b border-slate-50 pb-3">
                    <span className="text-slate-400 uppercase tracking-widest">Link Encryption</span>
                    <span className="text-green-600">ACTIVE</span>
                 </div>
                 <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-slate-400 uppercase tracking-widest">Bot-Behavior Delay</span>
                    <span className="text-green-600">ACTIVE</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
