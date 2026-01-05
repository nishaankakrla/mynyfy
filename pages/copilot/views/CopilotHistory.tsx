
import React from 'react';
import { History, Search, Filter, CheckCircle2, XCircle, Clock, Zap, Target, ArrowRight, RotateCcw } from 'lucide-react';

export const CopilotHistory: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Action History</h2>
          <p className="text-slate-500 font-medium">Tracking the lifecycle of every AI decision and execution.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
             <Filter size={18} /> Filters
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
           <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className="w-full bg-white border border-slate-100 rounded-xl pl-11 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Search history by keyword or action type..." />
           </div>
           <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Storage: Persistent</span>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/30 border-b border-slate-50">
                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Decision / Action</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trigger</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Impact</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Outcome</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { time: '10:45 AM', action: 'Queue Optimization', trigger: 'Engagement Dip', impact: '+4.2% Est.', status: 'Executed', icon: Zap, color: 'text-blue-600 bg-blue-50' },
                { time: '09:12 AM', action: 'Draft Generation', trigger: 'New Asset Upload', impact: 'Editorial Consistency', status: 'Pending', icon: Target, color: 'text-indigo-600 bg-indigo-50' },
                { time: 'Yesterday', action: 'Bot-Spam Block', trigger: 'Negative Sentiment Loop', impact: 'Brand Safety', status: 'Blocked', icon: XCircle, color: 'text-red-600 bg-red-50' },
                { time: 'Yesterday', action: 'LTV Segment Sync', trigger: 'Manual Prompt', impact: 'Retargeting ROI', status: 'Executed', icon: CheckCircle2, color: 'text-green-600 bg-green-50' },
              ].map((log, i) => (
                <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-800">{log.time}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">TODAY</p>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${log.color}`}>
                         <log.icon size={18} />
                      </div>
                      <span className="text-sm font-bold text-slate-800">{log.action}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-xs font-medium text-slate-500">{log.trigger}</td>
                  <td className="px-6 py-6 font-bold text-slate-700 text-sm">{log.impact}</td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${log.status === 'Executed' ? 'bg-green-100 text-green-600' : log.status === 'Pending' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-slate-300 hover:text-blue-600 transition-colors">
                      <ArrowRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-8 bg-blue-50 rounded-[32px] border border-blue-100 flex items-center justify-between">
         <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
               <RotateCcw size={24} />
            </div>
            <div>
               <h4 className="font-bold text-blue-900">Need to rollback?</h4>
               <p className="text-xs text-blue-700 font-medium leading-relaxed">Copilot automatically keeps snapshots of your workspace state before any automated adjustment.</p>
            </div>
         </div>
         <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-xl">Manage Snapshots</button>
      </div>
    </div>
  );
};
