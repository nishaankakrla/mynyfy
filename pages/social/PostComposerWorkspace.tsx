
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Send, 
  Clock, 
  Sparkles, 
  Upload, 
  Image as ImageIcon, 
  Video, 
  Trash2, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Monitor, 
  Smartphone, 
  Plus, 
  MessageSquare, 
  X, 
  Copy,
  ChevronDown,
  ShieldCheck,
  Bot,
  // Fix: Added missing ArrowRight icon import
  ArrowRight
} from 'lucide-react';

// --- Types & Constants ---

type Platform = 'instagram' | 'facebook' | 'twitter' | 'linkedin';

interface PostVariant {
  caption: string;
  firstComment: string;
  isOverridden: boolean;
}

interface PlatformConfig {
  id: Platform;
  name: string;
  icon: React.ElementType;
  color: string;
  charLimit: number;
  mediaTypes: string[];
}

const PLATFORMS: PlatformConfig[] = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'text-pink-600 bg-pink-50', charLimit: 2200, mediaTypes: ['image', 'video'] },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'text-blue-600 bg-blue-50', charLimit: 63206, mediaTypes: ['image', 'video'] },
  { id: 'twitter', name: 'Twitter (X)', icon: Twitter, color: 'text-sky-500 bg-sky-50', charLimit: 280, mediaTypes: ['image', 'video'] },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-700 bg-blue-50', charLimit: 3000, mediaTypes: ['image', 'video'] },
];

export const PostComposerWorkspace: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // --- State ---
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>(['instagram']);
  const [masterCaption, setMasterCaption] = useState('');
  const [masterFirstComment, setMasterFirstComment] = useState('');
  const [variants, setVariants] = useState<Record<string, PostVariant>>({});
  const [media, setMedia] = useState<any[]>([]);
  const [scheduledAt, setScheduledAt] = useState<string>('');
  const [activePreview, setActivePreview] = useState<Platform>('instagram');
  const [previewMode, setPreviewMode] = useState<'mobile' | 'desktop'>('mobile');
  const [isApproving, setIsApproving] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // --- Derived State & Logic ---
  const currentVariant = useMemo(() => {
    if (variants[activePreview]) return variants[activePreview];
    return { caption: masterCaption, firstComment: masterFirstComment, isOverridden: false };
  }, [activePreview, variants, masterCaption, masterFirstComment]);

  const currentPlatformConfig = useMemo(() => PLATFORMS.find(p => p.id === activePreview)!, [activePreview]);

  const togglePlatform = (id: Platform) => {
    setSelectedPlatforms(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
    if (!selectedPlatforms.includes(id)) setActivePreview(id);
  };

  const handleUpdateCaption = (val: string) => {
    if (currentVariant.isOverridden) {
      setVariants(prev => ({
        ...prev,
        [activePreview]: { ...prev[activePreview], caption: val }
      }));
    } else {
      setMasterCaption(val);
    }
  };

  const toggleOverride = () => {
    setVariants(prev => ({
      ...prev,
      [activePreview]: { 
        caption: masterCaption, 
        firstComment: masterFirstComment, 
        isOverridden: !currentVariant.isOverridden 
      }
    }));
  };

  // --- Mock AI Functions ---
  const aiImproveHook = () => {
    const hooks = [
      "Stop scrolling. Your summer uniform just arrived. ✨",
      "Minimalism isn't a trend, it's a statement. Meet the Silk Collection.",
      "Sustainable. Italian-crafted. Essential."
    ];
    handleUpdateCaption(hooks[Math.floor(Math.random() * hooks.length)] + "\n\n" + masterCaption);
  };

  return (
    <div className="flex flex-col h-screen bg-white animate-in slide-in-from-bottom-6 duration-500 overflow-hidden border-t border-slate-100">
      {/* Header Panel */}
      <header className="h-16 border-b border-slate-100 px-8 flex items-center justify-between shrink-0 bg-white z-20">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors">
            <X size={20} />
          </button>
          <div className="h-6 w-px bg-slate-100 mx-2" />
          <h1 className="font-bold text-slate-900 tracking-tight flex items-center gap-2">
            New Multi-Platform Post 
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-100">V2.4</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-slate-400 uppercase mr-4">Autosaved 2m ago</span>
          <button className="px-5 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">Save Draft</button>
          <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all flex items-center gap-2">
            Schedule Post <Clock size={16} />
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* LEFT PANEL: CONFIGURATION */}
        <aside className="w-80 border-r border-slate-100 p-8 overflow-y-auto custom-scrollbar flex flex-col gap-10">
          <section className="space-y-6">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Platforms</h3>
            <div className="grid grid-cols-1 gap-3">
              {PLATFORMS.map(p => (
                <button 
                  key={p.id}
                  onClick={() => togglePlatform(p.id)}
                  className={`
                    flex items-center justify-between p-4 rounded-2xl border transition-all group
                    ${selectedPlatforms.includes(p.id) 
                      ? 'bg-blue-50 border-blue-200 ring-2 ring-blue-100/50' 
                      : 'bg-white border-slate-100 hover:border-slate-200'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${p.color}`}>
                      <p.icon size={18} />
                    </div>
                    <span className={`text-sm font-bold ${selectedPlatforms.includes(p.id) ? 'text-blue-700' : 'text-slate-600'}`}>
                      {p.name}
                    </span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPlatforms.includes(p.id) ? 'bg-blue-600 border-blue-600' : 'border-slate-100 bg-slate-50'}`}>
                    {selectedPlatforms.includes(p.id) && <CheckCircle2 size={12} className="text-white" />}
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Scheduling</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                 <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600">Post Timing</span>
                    <Zap size={14} className="text-orange-500" />
                 </div>
                 <input 
                   type="datetime-local" 
                   className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-800 outline-none"
                   value={scheduledAt}
                   onChange={e => setScheduledAt(e.target.value)}
                 />
              </div>
              <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                 <p className="text-[10px] font-bold text-blue-600 mb-1">AI Optimal Window</p>
                 <p className="text-[10px] text-blue-700 leading-relaxed">Friday, 18:40 PM EST (Peak conversion detected)</p>
              </div>
            </div>
          </section>

          <section className="space-y-6 mt-auto">
             <div className="p-4 bg-slate-900 rounded-3xl text-white space-y-4 relative overflow-hidden group">
                <ShieldCheck size={24} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                <h4 className="text-xs font-bold">Safe-Mode Publishing</h4>
                <p className="text-[10px] text-slate-400 leading-relaxed">Automatic character limit enforcement & image aspect checking active.</p>
             </div>
          </section>
        </aside>

        {/* CENTER PANEL: EDITOR */}
        <main className="flex-1 bg-slate-50/30 p-10 overflow-y-auto custom-scrollbar">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Editor Top Bar */}
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Adapting For:</span>
                  <div className="flex gap-2">
                    {selectedPlatforms.map(id => {
                      const p = PLATFORMS.find(x => x.id === id)!;
                      return (
                        <button 
                          key={id} 
                          onClick={() => setActivePreview(id)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${activePreview === id ? 'bg-white border-blue-600 text-blue-600 shadow-sm' : 'bg-slate-100 border-transparent text-slate-400 hover:bg-white'}`}
                        >
                          <p.icon size={12} />
                          <span className="text-[10px] font-bold uppercase tracking-tighter">{p.name}</span>
                          {variants[id]?.isOverridden && <div className="w-1 h-1 rounded-full bg-orange-400" />}
                        </button>
                      );
                    })}
                  </div>
               </div>
               <button 
                  onClick={toggleOverride}
                  className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-all ${currentVariant.isOverridden ? 'bg-orange-50 border-orange-200 text-orange-600' : 'bg-white border-slate-200 text-slate-400 hover:text-blue-600'}`}
                >
                  {currentVariant.isOverridden ? 'Using Custom Variant' : 'Using Master Caption'}
               </button>
            </div>

            {/* Main Content Area Card */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              {/* Media Uploader Section */}
              <div className="p-8 border-b border-slate-50 bg-slate-50/20">
                <div className="grid grid-cols-4 gap-4">
                  <button className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-blue-400 hover:text-blue-600 transition-all group">
                    <Upload size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase">Add Media</span>
                  </button>
                  <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400" className="w-full h-full object-cover" />
                    <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <Trash2 size={14} className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Caption Editor Instance */}
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Caption Content</label>
                    <div className="flex items-center gap-4">
                      <span className={`text-[10px] font-bold ${currentVariant.caption.length > currentPlatformConfig.charLimit ? 'text-red-500' : 'text-slate-400'}`}>
                        {currentVariant.caption.length} / {currentPlatformConfig.charLimit}
                      </span>
                    </div>
                  </div>
                  <textarea 
                    value={currentVariant.isOverridden ? currentVariant.caption : masterCaption}
                    onChange={(e) => handleUpdateCaption(e.target.value)}
                    rows={8}
                    className="w-full text-base font-medium text-slate-800 placeholder:text-slate-200 resize-none outline-none border-0 p-0"
                    placeholder={`Compose your ${activePreview} post...`}
                  />
                </div>

                <div className="pt-6 border-t border-slate-50 space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Comment (Auto-DM)</label>
                    <div className="w-8 h-4 bg-blue-600 rounded-full relative cursor-pointer">
                       <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                  <input 
                    type="text"
                    value={currentVariant.isOverridden ? currentVariant.firstComment : masterFirstComment}
                    onChange={(e) => {
                      if (currentVariant.isOverridden) {
                        setVariants(prev => ({ ...prev, [activePreview]: { ...prev[activePreview], firstComment: e.target.value }}));
                      } else {
                        setMasterFirstComment(e.target.value);
                      }
                    }}
                    placeholder="Enter keywords like SHOP to trigger DM flow..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Bottom Utility Bar */}
              <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <button className="text-[10px] font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">Hashtags</button>
                    <button className="text-[10px] font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">Mentions</button>
                    <button className="text-[10px] font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">Alt Text</button>
                 </div>
                 <div className="flex items-center gap-1 text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    <ShieldCheck size={10} /> Brand Kit Verified
                 </div>
              </div>
            </div>
          </div>
        </main>

        {/* RIGHT PANEL: PREVIEW & AI TOOLS */}
        <aside className="w-[450px] border-l border-slate-100 flex flex-col bg-white overflow-hidden">
          {/* Preview Header */}
          <div className="p-6 border-b border-slate-50 flex items-center justify-between shrink-0">
             <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${currentPlatformConfig.color}`}>
                   <currentPlatformConfig.icon size={18} />
                </div>
                <div>
                   <h4 className="text-sm font-black text-slate-800 uppercase tracking-tighter">{currentPlatformConfig.name} Preview</h4>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Mobile Feed View</p>
                </div>
             </div>
             <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg">
                <button 
                  onClick={() => setPreviewMode('mobile')}
                  className={`p-1.5 rounded-md transition-all ${previewMode === 'mobile' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Smartphone size={14} />
                </button>
                <button 
                   onClick={() => setPreviewMode('desktop')}
                   className={`p-1.5 rounded-md transition-all ${previewMode === 'desktop' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Monitor size={14} />
                </button>
             </div>
          </div>

          {/* Actual Mock Preview Card */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-10 bg-slate-50/50 flex flex-col items-center">
             <div className="w-[320px] bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden shrink-0">
                <div className="p-4 flex items-center gap-3 border-b border-slate-50">
                   <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-black">LF</div>
                   <div>
                      <p className="text-xs font-black text-slate-900 leading-none">lumiere_fashion</p>
                      <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Sponsored</p>
                   </div>
                   <MoreVertical size={14} className="ml-auto text-slate-300" />
                </div>
                <div className="aspect-square bg-slate-200">
                   <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 space-y-3">
                   <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                         <div className="w-5 h-5 rounded border border-slate-200" />
                         <div className="w-5 h-5 rounded border border-slate-200" />
                         <div className="w-5 h-5 rounded border border-slate-200" />
                      </div>
                      <div className="w-5 h-5 rounded border border-slate-200" />
                   </div>
                   <p className="text-xs text-slate-800 leading-relaxed font-medium line-clamp-3">
                      <span className="font-black mr-2">lumiere_fashion</span>
                      {currentVariant.caption || "Your master caption will appear here..."}
                   </p>
                   <p className="text-[10px] text-slate-300 font-bold uppercase">View all 12 comments</p>
                </div>
             </div>

             {/* AI TOOLS SECTION */}
             <div className="w-full mt-10 space-y-6">
                <div className="flex items-center justify-between">
                   <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AI Content Tools</h3>
                   <Bot size={14} className="text-blue-500" />
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                   <button 
                      onClick={aiImproveHook}
                      className="w-full p-4 bg-white border border-slate-100 rounded-2xl flex items-center justify-between group hover:border-blue-200 transition-all shadow-sm"
                   >
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                            <Sparkles size={16} />
                         </div>
                         <div className="text-left">
                            <p className="text-xs font-black text-slate-800">Improve Hook</p>
                            <p className="text-[10px] text-slate-400 font-medium">94% Confidence Boost</p>
                         </div>
                      </div>
                      <ChevronRight size={14} className="text-slate-300" />
                   </button>

                   <button className="w-full p-4 bg-white border border-slate-100 rounded-2xl flex items-center justify-between group hover:border-blue-200 transition-all shadow-sm">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                            <MessageSquare size={16} />
                         </div>
                         <div className="text-left">
                            <p className="text-xs font-black text-slate-800">Hashtag Stack</p>
                            <p className="text-[10px] text-slate-400 font-medium">Generated from Visual Context</p>
                         </div>
                      </div>
                      <ChevronRight size={14} className="text-slate-300" />
                   </button>
                   
                   <div className="p-5 bg-indigo-950 rounded-[28px] text-white space-y-4 relative overflow-hidden">
                      <div className="relative z-10">
                         <p className="text-[10px] font-black uppercase text-blue-400 tracking-widest mb-1">Engagement Advisor</p>
                         <p className="text-xs leading-relaxed font-medium">
                            "Moving the 'Italian Heritage' keyword to the first line will likely increase click-through by <span className="text-blue-400 font-black">12%</span>."
                         </p>
                         <button className="mt-4 text-[10px] font-bold flex items-center gap-1 hover:underline">Apply Recommendation <ArrowRight size={12} /></button>
                      </div>
                      <Sparkles size={120} className="absolute -bottom-10 -right-10 text-white/5 rotate-12" />
                   </div>
                </div>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

// Helper components (missing icons in standard imports sometimes)
const MoreVertical = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
);
