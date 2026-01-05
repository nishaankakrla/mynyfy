
import React from 'react';
import { AlertCircle, FileText, RefreshCcw, Edit3, Trash2, ArrowRight } from 'lucide-react';

export const FailedDrafts: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Recovery Zone</h2>
        <p className="text-slate-500 font-medium">Review failed attempts and pending drafts to ensure zero content loss.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
           <div className="bg-red-50 p-6 rounded-[24px] border border-red-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <AlertCircle size={24} className="text-red-600" />
                 <div>
                    <h4 className="text-sm font-bold text-red-900">Critical Error: 2 Posts Blocked</h4>
                    <p className="text-xs text-red-700 font-medium">Meta API is currently rejecting posts with specific bitrates.</p>
                 </div>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-red-200">
                 Fix All
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <FileText size={18} className="text-slate-400" /> Pending Review
                 </h3>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">3 Items</span>
              </div>
              <div className="divide-y divide-slate-50">
                 {[
                   { title: 'Behind the Scenes Story', type: 'Draft', date: 'Edited 2h ago', status: 'Draft' },
                   { title: 'Influencer Collab Post', type: 'Rejected', date: 'Rejected 1d ago', status: 'Needs Edit' },
                   { title: 'Monday Morning Quote', type: 'Draft', date: 'Edited 3d ago', status: 'Draft' },
                 ].map((item, i) => (
                   <div key={i} className="p-6 flex items-center justify-between group hover:bg-slate-50/50 transition-colors">
                      <div className="flex items-center gap-6">
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.type === 'Rejected' ? 'bg-red-50 text-red-400' : 'bg-slate-50 text-slate-300'}`}>
                            <FileText size={20} />
                         </div>
                         <div>
                            <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.date}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Edit3 size={18} /></button>
                         <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                         <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-all">
                            Publish Now
                         </button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6">Error Log</h3>
              <div className="space-y-4">
                 <div className="space-y-1">
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">08:45 AM - IG API</p>
                    <p className="text-xs text-slate-600 font-medium">Media file format (WebP) not supported by legacy Reels API.</p>
                 </div>
                 <div className="space-y-1 pt-4 border-t border-slate-50">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">12:12 PM - FB API</p>
                    <p className="text-xs text-slate-600 font-medium">Rate limit reached for campaign "Summer 24".</p>
                 </div>
              </div>
           </div>

           <div className="bg-blue-600 rounded-[32px] p-8 text-white text-center">
              <RefreshCcw size={32} className="mx-auto mb-4" />
              <h3 className="font-bold mb-2">Bulk Retry</h3>
              <p className="text-blue-100 text-[10px] leading-relaxed mb-6 font-medium">Attempt to publish all failed posts with current API tokens.</p>
              <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-bold text-xs shadow-lg shadow-blue-900/20 active:scale-95 transition-all">
                 Retry All Failed
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
