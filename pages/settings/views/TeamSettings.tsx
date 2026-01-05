
import React from 'react';
import { Users, UserPlus, Shield, MoreVertical, Search, CheckCircle2 } from 'lucide-react';

export const TeamSettings: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Team & Access</h2>
          <p className="text-slate-500 font-medium">Collaborate safely with assigned roles and permissions.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
           <UserPlus size={18} /> Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
           <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
              <div className="relative flex-1 max-w-md">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input className="w-full bg-white border border-slate-100 rounded-xl pl-11 pr-4 py-2.5 text-sm font-medium outline-none" placeholder="Search members..." />
              </div>
              <div className="flex gap-4">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Seats: 2 / 10</span>
              </div>
           </div>

           <div className="divide-y divide-slate-50">
              {[
                { name: 'Marcello Rossi', email: 'marcello@lumiere.it', role: 'Owner', status: 'Active' },
                { name: 'Sarah Jenks', email: 'sarah@lumiere.it', role: 'Admin', status: 'Active' },
                { name: 'Dev Account', email: 'dev@brand.com', role: 'Staff', status: 'Awaiting Auth' },
              ].map((member, i) => (
                <div key={i} className="p-8 flex items-center justify-between group hover:bg-slate-50/50 transition-all">
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-blue-600 border-2 border-white shadow-sm">
                         {member.name.substring(0,2).toUpperCase()}
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-800">{member.name}</p>
                         <p className="text-xs text-slate-400 font-medium">{member.email}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-12">
                      <div className="text-right">
                         <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100">{member.role}</span>
                         <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-tighter">{member.status}</p>
                      </div>
                      <button className="p-2 text-slate-300 hover:text-slate-800 transition-colors">
                         <MoreVertical size={18} />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <section className="bg-blue-600 rounded-[32px] p-10 text-white relative overflow-hidden group">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                 <Shield size={48} className="text-blue-200" />
                 <h2 className="text-2xl font-bold tracking-tight">Least-Privilege Mode</h2>
                 <p className="text-blue-100 leading-relaxed font-medium">
                    Automatically restrict new members to 'Viewer' status until explicitly promoted by the Workspace Owner.
                 </p>
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-6 bg-blue-500 rounded-full relative shadow-inner">
                       <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                    <span className="text-xs font-bold">Safe Mode Enabled</span>
                 </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-[28px] border border-white/20 p-8 space-y-4">
                 <h4 className="font-bold text-sm">Role Definitions</h4>
                 <div className="space-y-3">
                    {['Full System (Owner)', 'Operations (Admin)', 'Execution (Staff)', 'Audit (Client)'].map(r => (
                       <div key={r} className="flex items-center gap-2 text-xs font-medium">
                          <CheckCircle2 size={14} className="text-blue-300" /> {r}
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};
