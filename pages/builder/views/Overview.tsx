
import React from 'react';
import { Globe, ShieldCheck, Zap, AlertTriangle, ArrowRight } from 'lucide-react';

export const Overview: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Atelier Noir</h1>
          <p className="text-slate-500 mt-1 flex items-center gap-2">
            <Globe className="w-4 h-4" /> atelier-noir.commerceos.app
            <span className="text-slate-300">|</span>
            Luxury Fashion Template
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100">
            SSL Secure
          </span>
          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100">
            Last published: 2h ago
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex flex-col">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-800 mb-1">Setup Progress</h3>
          <p className="text-sm text-slate-500 mb-6">Your site is 85% ready for launch.</p>
          <div className="mt-auto">
            <div className="h-2 w-full bg-slate-100 rounded-full mb-3 overflow-hidden">
              <div className="h-full bg-indigo-500 w-[85%] rounded-full" />
            </div>
            <button className="text-indigo-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              Complete Setup <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex flex-col">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-800 mb-1">SEO Readiness</h3>
          <p className="text-sm text-slate-500 mb-6">3 critical meta tags missing on Homepage.</p>
          <div className="mt-auto">
            <button className="bg-orange-50 text-orange-600 px-4 py-2 rounded-xl text-xs font-bold border border-orange-100 hover:bg-orange-100 transition-colors">
              Fix SEO Issues
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex flex-col">
          <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-800 mb-1">Site Health</h3>
          <p className="text-sm text-slate-500 mb-6">Fast load times, zero broken links detected.</p>
          <div className="mt-auto">
            <button className="text-green-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              Run New Audit <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[32px] p-10 text-white overflow-hidden relative group">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to reach the world?</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Connect a custom domain to remove the CommerceOS branding and build authority for your fashion label.
          </p>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-[16px] font-bold shadow-xl hover:bg-blue-50 transition-all flex items-center gap-2">
            Connect Domain <Globe className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
        <Globe className="absolute -bottom-20 -right-20 w-80 h-80 text-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
      </div>
    </div>
  );
};
