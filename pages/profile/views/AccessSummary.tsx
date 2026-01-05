
import React from 'react';
import { UserCheck, Store, Shield, ArrowRight, ExternalLink } from 'lucide-react';

export const AccessSummary: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Access & Roles</h2>
        <p className="text-slate-500 font-medium">Summarizing your permissions across the CommerceOS ecosystem.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {[
          { name: 'Lumière Fashion', role: 'Owner', access: 'Full System', status: 'Primary', color: 'bg-blue-50 text-blue-600' },
          { name: 'Atelier V (Client)', role: 'Admin', access: 'Operations Only', status: 'Managed', color: 'bg-indigo-50 text-indigo-600' },
          { name: 'Studio Noir', role: 'Viewer', access: 'Read-only Insights', status: 'Managed', color: 'bg-slate-50 text-slate-400' },
        ].map((workspace, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:border-blue-100 transition-all">
             <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${workspace.color}`}>
                   <Store size={28} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-800">{workspace.name}</h3>
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{workspace.status} Workspace</p>
                </div>
             </div>
             
             <div className="flex items-center gap-12">
                <div className="text-right">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Assigned Role</p>
                   <p className="text-sm font-black text-slate-800">{workspace.role}</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scope</p>
                   <p className="text-sm font-bold text-slate-500">{workspace.access}</p>
                </div>
                <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                   <ExternalLink size={18} />
                </button>
             </div>
          </div>
        ))}
      </div>

      <div className="p-8 bg-blue-50 rounded-[32px] border border-blue-100 flex items-center justify-between">
         <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
               <Shield size={24} />
            </div>
            <div>
               <h4 className="font-bold text-blue-900">Need to manage workspace team?</h4>
               <p className="text-xs text-blue-700 font-medium">To edit permissions of others or invite staff, visit the brand settings.</p>
            </div>
         </div>
         <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-xl flex items-center gap-2">
            Workspace Settings <ArrowRight size={14} />
         </button>
      </div>
    </div>
  );
};
