
import React from 'react';
import { Instagram, Facebook, Twitter, Send, Clock, Sparkles, Upload, Image as ImageIcon, Video, Trash2 } from 'lucide-react';

export const CreateSchedule: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Create & Schedule</h2>
        <p className="text-slate-500 font-medium">Compose once, publish across your entire fashion ecosystem.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-8">
             <div className="space-y-4">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Select Platforms</label>
                <div className="flex gap-4">
                   {[
                     { id: 'ig', icon: Instagram, label: 'Instagram', color: 'bg-pink-50 text-pink-600 border-pink-100' },
                     { id: 'fb', icon: Facebook, label: 'Facebook', color: 'bg-blue-50 text-blue-600 border-blue-100' },
                     { id: 'tw', icon: Twitter, label: 'Twitter', color: 'bg-sky-50 text-sky-500 border-sky-100' },
                   ].map(p => (
                     <button key={p.id} className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all hover:scale-105 ${p.color}`}>
                        <p.icon size={24} />
                        <span className="text-xs font-bold">{p.label}</span>
                     </button>
                   ))}
                </div>
             </div>

             <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Post Caption</label>
                   <button className="text-[10px] font-bold text-blue-600 flex items-center gap-1">
                      <Sparkles size={12} /> AI Rewrite
                   </button>
                </div>
                <textarea 
                  rows={6}
                  className="w-full bg-slate-50 border border-slate-100 rounded-[20px] p-6 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300"
                  placeholder="Tell your brand's story..."
                />
             </div>

             <div className="space-y-4">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Media Library</label>
                <div className="grid grid-cols-4 gap-4">
                   <button className="aspect-square rounded-2xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center gap-2 text-slate-300 hover:border-blue-200 hover:text-blue-400 transition-all">
                      <Upload size={20} />
                      <span className="text-[8px] font-bold uppercase">Upload</span>
                   </button>
                   <button className="aspect-square rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 hover:bg-blue-50 hover:text-blue-400 transition-all">
                      <ImageIcon size={24} />
                   </button>
                   <button className="aspect-square rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 hover:bg-blue-50 hover:text-blue-400 transition-all">
                      <Video size={24} />
                   </button>
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-8">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                 <Clock size={18} className="text-blue-600" /> Scheduling Rules
              </h3>
              
              <div className="space-y-6">
                 <div>
                    <label className="text-xs font-bold text-slate-500 block mb-3">Publishing Time</label>
                    <input type="datetime-local" className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3 text-sm font-bold text-slate-700 outline-none" />
                 </div>

                 <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                       <Sparkles size={14} className="text-blue-600" />
                       <span className="text-xs font-bold text-blue-900">AI Best Time Recommendation</span>
                    </div>
                    <p className="text-[10px] text-blue-700 font-medium leading-relaxed">
                       Based on your @ateliernoir audience, post today at <span className="font-bold">06:45 PM</span> for max reach.
                    </p>
                    <button className="mt-3 text-[10px] font-bold text-blue-600 underline">Apply suggested time</button>
                 </div>

                 <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-700">Add to Evergreen Queue</span>
                    <div className="w-8 h-4 bg-slate-200 rounded-full relative">
                       <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                    </div>
                 </div>
              </div>

              <div className="pt-8 border-t border-slate-50 space-y-4">
                 <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                    <Send size={18} /> Schedule Content
                 </button>
                 <button className="w-full bg-white border border-slate-200 text-slate-400 py-4 rounded-2xl font-bold text-sm hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all flex items-center justify-center gap-2">
                    <Trash2 size={18} /> Discard Draft
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
