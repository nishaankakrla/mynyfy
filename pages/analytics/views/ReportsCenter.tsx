
import React from 'react';
import { Download, FileText, Calendar, Plus, Share2, MoreVertical, ShieldCheck, Mail } from 'lucide-react';

export const ReportsCenter: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Reports & Exports</h2>
          <p className="text-slate-500 font-medium">Package your growth for investors, team, or clients.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
           <Plus size={18} /> Custom Report Builder
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
           <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <FileText size={18} className="text-blue-600" /> Recent Reports
                 </h3>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Storage: 42MB</span>
              </div>
              <div className="divide-y divide-slate-50">
                 {[
                   { name: 'Monthly Growth Review (June)', type: 'PDF', date: '2h ago', size: '4.2MB', status: 'Ready' },
                   { name: 'Campaign ROI: Summer Launch', type: 'PPTX', date: 'Yesterday', size: '12.8MB', status: 'Ready' },
                   { name: 'Weekly Social Snapshot', type: 'PDF', date: 'Jun 12', size: '1.4MB', status: 'Archived' },
                 ].map((report, i) => (
                   <div key={i} className="p-6 flex items-center justify-between group hover:bg-slate-50/50 transition-colors">
                      <div className="flex items-center gap-6">
                         <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-blue-600 transition-all border border-slate-100">
                            <FileText size={20} />
                         </div>
                         <div>
                            <h4 className="text-sm font-bold text-slate-800">{report.name}</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{report.type} • {report.size} • {report.date}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <button className="p-2 text-slate-300 hover:text-blue-600 transition-colors"><Download size={18} /></button>
                         <button className="p-2 text-slate-300 hover:text-slate-800 transition-colors"><Share2 size={18} /></button>
                         <button className="p-2 text-slate-300 hover:text-slate-800 transition-colors"><MoreVertical size={18} /></button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-10 shadow-sm flex flex-col md:flex-row items-center justify-between overflow-hidden relative group">
              <div className="relative z-10 max-w-sm space-y-4">
                 <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Schedule Automated Reports</h3>
                 <p className="text-slate-500 font-medium leading-relaxed">
                    Have your executive team receive a clean ROI snapshot in their inbox every Monday at 9 AM automatically.
                 </p>
                 <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-lg flex items-center gap-2">
                    <Calendar size={14} /> Schedule Now
                 </button>
              </div>
              <div className="w-48 h-48 bg-slate-50 rounded-full flex items-center justify-center text-slate-100 absolute -right-10 group-hover:scale-110 transition-transform">
                 <Mail size={120} />
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[32px] p-8 text-white text-center space-y-6">
              <ShieldCheck size={48} className="text-blue-400 mx-auto" />
              <h3 className="text-lg font-bold">White-Labeling</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                 Remove CommerceOS branding from all reports and use your own fashion house's logo.
              </p>
              <button className="w-full bg-white text-slate-950 py-3 rounded-xl font-bold text-xs shadow-lg">
                 Upgrade to Pro
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6">Quick Exports</h3>
              <div className="space-y-3">
                 {['Post Level CSV', 'Customer Leads XLS', 'Full Payout History', 'Ad Creative Archive'].map((item, i) => (
                   <button key={i} className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-100 transition-all text-left">
                      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">{item}</span>
                      <Download size={12} className="text-blue-600" />
                   </button>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
