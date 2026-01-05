
import React from 'react';
import { User, Mail, Globe, Clock, Shield } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

export const AccountSettings: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Account Preferences</h2>
        <p className="text-slate-500 font-medium">Control your personal profile and individual system experience.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-20 h-20 rounded-3xl bg-slate-100 overflow-hidden border-2 border-white shadow-md">
               <img src={user?.avatar_url || `https://ui-avatars.com/api/?name=${user?.email}&background=3B82F6&color=fff`} className="w-full h-full object-cover" alt="Profile" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Profile Identity</h3>
              <p className="text-sm text-slate-500">Update your avatar and visible name.</p>
              <button className="mt-3 text-xs font-bold text-blue-600 hover:underline">Change Avatar</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all" defaultValue="Marcello Rossi" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm font-medium outline-none opacity-60 cursor-not-allowed" defaultValue={user?.email} disabled />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
             <Globe className="w-5 h-5 text-blue-600" /> Regional Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Interface Language</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none">
                <option>English (US)</option>
                <option>Italiano</option>
                <option>Français</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Time Zone</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <select className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm font-bold text-slate-700 outline-none">
                  <option>Europe/Rome (GMT+2)</option>
                  <option>America/New_York (EST)</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-3">
           <button className="px-6 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-100 transition-all">Discard</button>
           <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">Save Changes</button>
        </div>
      </div>
    </div>
  );
};
