
import React from 'react';
import { User, Mail, Camera, Phone, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

export const PersonalInformation: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Identity & Profile</h2>
        <p className="text-slate-500 font-medium">Manage how you appear across all workspaces and team communications.</p>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm space-y-12">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
           <div className="relative group shrink-0">
              <div className="w-32 h-32 rounded-[40px] bg-slate-100 overflow-hidden border-4 border-white shadow-xl">
                 <img 
                    src={user?.avatar_url || `https://ui-avatars.com/api/?name=${user?.email}&background=3B82F6&color=fff`} 
                    className="w-full h-full object-cover" 
                    alt="Profile" 
                 />
              </div>
              <button className="absolute -bottom-2 -right-2 p-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition-all">
                 <Camera size={20} />
              </button>
           </div>
           <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-800">Marcello Rossi</h3>
              <p className="text-slate-500 font-medium flex items-center gap-2">
                 <ShieldCheck size={16} className="text-green-500" /> Verified Founder Account
              </p>
              <div className="flex gap-2 pt-2">
                 <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100">OWNER</span>
                 <span className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-full border border-slate-100">@marcellorossi</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-50">
           <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Legal Full Name</label>
              <div className="relative">
                 <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                 <input className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all" defaultValue="Marcello Rossi" />
              </div>
           </div>
           <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Display Name (Public)</label>
              <div className="relative">
                 <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                 <input className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all" defaultValue="Marcello" />
              </div>
           </div>
           <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Email</label>
              <div className="relative">
                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                 <input className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all" defaultValue={user?.email} />
              </div>
           </div>
           <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number (Optional)</label>
              <div className="relative">
                 <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                 <input className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="+39 ..." />
              </div>
           </div>
        </div>

        <div className="flex justify-end gap-3 pt-10">
           <button className="px-6 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 transition-all">Cancel Changes</button>
           <button className="px-10 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">Save Profile</button>
        </div>
      </div>
    </div>
  );
};
