
import React from 'react';
import { Rocket, RotateCcw, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const PublishHub: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-10 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Push to Production</h2>
            <p className="text-slate-500 mb-8 max-w-md">You have 14 unpublished changes including Global Style updates and 2 new sections.</p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>All SEO meta tags validated.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Media assets optimized for CDN.</span>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-[20px] font-bold shadow-2xl shadow-blue-200 flex items-center gap-3 transition-all active:scale-95 text-lg">
              <Rocket className="w-6 h-6" /> Publish Now
            </button>
          </div>
          <Rocket className="absolute -bottom-10 -right-10 w-64 h-64 text-blue-50/50 -rotate-12 pointer-events-none" />
        </div>

        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-800">Publish History</h3>
            <button className="text-blue-600 text-sm font-bold">View Full Archive</button>
          </div>
          
          <div className="space-y-6">
            {[
              { version: 'v1.2.4', date: 'Today, 10:45 AM', author: 'Dev User', type: 'Production' },
              { version: 'v1.2.3', date: 'Yesterday, 04:20 PM', author: 'Dev User', type: 'Rollback' },
              { version: 'v1.2.2', date: 'Oct 24, 02:15 PM', author: 'Dev User', type: 'Production' },
            ].map((v) => (
              <div key={v.version} className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{v.version}</p>
                    <p className="text-xs text-slate-400">{v.date} by {v.author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded border ${v.type === 'Rollback' ? 'bg-red-50 text-red-500 border-red-100' : 'bg-slate-100 text-slate-500 border-slate-200'}`}>
                    {v.type}
                  </span>
                  <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 hover:bg-blue-50 rounded-lg">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-indigo-600 rounded-[32px] p-8 text-white">
          <ShieldCheck className="w-10 h-10 mb-4" />
          <h3 className="text-lg font-bold mb-2">Publishing Safely</h3>
          <p className="text-indigo-100 text-sm leading-relaxed mb-6">
            CommerceOS automatically creates a rollback point before every publish. If something breaks, revert in one click.
          </p>
          <button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 rounded-xl text-sm font-bold transition-all">
            Review Safeguards
          </button>
        </div>

        <div className="bg-white rounded-[32px] border border-slate-100 p-8">
          <h3 className="font-bold text-slate-800 mb-4">Integrity Check</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Broken Links</span>
              <span className="font-bold text-green-600">0 Found</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Image Alt Tags</span>
              <span className="font-bold text-slate-800">12/12 Set</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Mobile Layout</span>
              <span className="font-bold text-blue-600">Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
