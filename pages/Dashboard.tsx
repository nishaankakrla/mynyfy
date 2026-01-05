
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  CreditCard, 
  AlertCircle, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Instagram, 
  Facebook, 
  Twitter, 
  CheckCircle2, 
  Zap, 
  MessageCircle,
  ShieldAlert,
  MoreVertical,
  Calendar as CalendarIcon,
  Play,
  RotateCcw,
  // Fix: Added missing Plus icon import
  Plus
} from 'lucide-react';

// --- Dashboard Component ---

export const Dashboard: React.FC = () => {
  const { user, brand } = useAuth();
  const [loading, setLoading] = useState(true);

  // Simulated initial loading state
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-12 w-1/3 bg-slate-200 rounded-2xl" />
        <div className="h-24 w-full bg-slate-100 rounded-[32px]" />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="h-32 bg-slate-100 rounded-[24px]" />
          <div className="h-32 bg-slate-100 rounded-[24px]" />
          <div className="h-32 bg-slate-100 rounded-[24px]" />
          <div className="h-32 bg-slate-100 rounded-[24px]" />
        </div>
        <div className="h-96 w-full bg-slate-100 rounded-[32px]" />
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-20 animate-in fade-in duration-700">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Dashboard
          </h2>
          <p className="text-slate-500 font-medium mt-1">
            Welcome back to the <span className="text-blue-600 font-bold">{brand?.name}</span> command center.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white border border-slate-200 rounded-xl flex items-center gap-2 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Live Sync: 100%</span>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-all active:scale-95">
            <Zap size={18} /> Quick Action
          </button>
        </div>
      </div>

      {/* 1. TOP PRIORITY STRIP (DYNAMIC ALERTS) */}
      <PriorityStrip />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN (MAIN EXECUTION & PERFORMANCE) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* 3. PERFORMANCE SNAPSHOT */}
          <section>
            <div className="flex items-center justify-between mb-6">
               <h3 className="font-bold text-slate-800 flex items-center gap-2">
                 <TrendingUp size={20} className="text-blue-600" /> Performance Snapshot
               </h3>
               <button className="text-xs font-bold text-blue-600 hover:underline">Full Analytics</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard 
                label="Reach" 
                value="124.5k" 
                change="+12.4%" 
                trend="up" 
                context="vs last 7 days"
              />
              <MetricCard 
                label="Engagement" 
                value="8.2%" 
                change="+1.5%" 
                trend="up" 
                context="Top in Fashion cat."
              />
              <MetricCard 
                label="Attributed Sales" 
                value="$3,420" 
                change="-2.1%" 
                trend="down" 
                context="Wait for Weekend bump"
              />
            </div>
          </section>

          {/* 2. TODAY & UPCOMING (TIMELINE) */}
          <ExecutionTimeline />

          {/* 4. AI INSIGHTS & RECOMMENDATIONS */}
          <AIRecommendations />
        </div>

        {/* RIGHT COLUMN (RISK, TEAM, HEALTH) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* 5. PLATFORM HEALTH & ALERTS */}
          <PlatformHealth />

          {/* 6. TEAM WORKFLOW (PENDING APPROVALS) */}
          <TeamWorkflow />

          {/* GROWTH AD CARD */}
          <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <Sparkles size={32} className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Ready to scale?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Connect your Shopify or Square store to unlock <span className="text-white font-bold">Attributed ROI</span> and <span className="text-white font-bold">Automatic Product DMs</span>.
              </p>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2 hover:bg-blue-500 transition-all">
                Connect Store <ArrowRight size={18} />
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Sub-Components ---

const PriorityStrip = () => {
  return (
    <div className="bg-orange-50 border border-orange-100 rounded-[32px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm animate-in slide-in-from-top-4 duration-500">
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
          <AlertCircle size={30} />
        </div>
        <div>
          <h4 className="text-lg font-bold text-orange-900">2 Posts Failed to Publish</h4>
          <p className="text-sm text-orange-700 font-medium leading-relaxed">
            Your token for <span className="font-bold">@ateliernoir_official</span> has expired. Action required to resume 12 scheduled posts.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <button className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all active:scale-95">
          Fix Now
        </button>
        <button className="p-3 text-orange-400 hover:text-orange-600 transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};

const MetricCard = ({ label, value, change, trend, context }: any) => {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
      <div className="flex items-baseline gap-3 mb-4">
        <h4 className="text-3xl font-black text-slate-900 tracking-tight">{value}</h4>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-lg ${trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
          {change}
        </span>
      </div>
      <p className="text-xs text-slate-400 font-medium group-hover:text-slate-600 transition-colors">{context}</p>
    </div>
  );
};

const ExecutionTimeline = () => {
  const posts = [
    { time: '10:00 AM', platform: 'Instagram', title: 'Summer Lookbook Story #3', status: 'Live', icon: Instagram, color: 'text-pink-600' },
    { time: '12:30 PM', platform: 'Facebook', title: 'Flash Sale Reminder', status: 'Upcoming', icon: Facebook, color: 'text-blue-600' },
    { time: '04:00 PM', platform: 'Twitter', title: 'Sustainability Thread', status: 'Upcoming', icon: Twitter, color: 'text-sky-500' },
  ];

  return (
    <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <Clock size={20} className="text-blue-600" /> Today's Execution
        </h3>
        <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
          View Calendar
        </button>
      </div>
      <div className="p-8 space-y-6">
        {posts.map((post, i) => (
          <div key={i} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-6">
               <div className="text-right w-16">
                  <p className="text-xs font-bold text-slate-800">{post.time}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">EST</p>
               </div>
               <div className="relative flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center ${post.color} border border-slate-100 group-hover:scale-110 transition-transform`}>
                     <post.icon size={18} />
                  </div>
                  {i !== posts.length - 1 && <div className="w-[2px] h-10 bg-slate-50 absolute -bottom-10" />}
               </div>
               <div>
                  <h4 className="text-sm font-bold text-slate-800">{post.title}</h4>
                  <p className="text-xs text-slate-400 font-medium">{post.platform} • <span className={post.status === 'Live' ? 'text-green-500' : 'text-blue-500'}>{post.status}</span></p>
               </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors"><Plus size={16} /></button>
               <button className="p-2 hover:bg-slate-50 text-slate-400 rounded-lg transition-colors"><ArrowRight size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const AIRecommendations = () => {
  return (
    <section className="bg-blue-600 rounded-[32px] p-10 text-white relative overflow-hidden group">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
             <Bot size={28} />
           </div>
           <div>
             <h3 className="text-2xl font-bold">AI Growth Strategy</h3>
             <p className="text-blue-100 text-sm font-medium">Confidence: <span className="text-white font-bold">94%</span></p>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl space-y-4">
             <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-200" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Optimal Timing</span>
             </div>
             <p className="text-sm font-medium leading-relaxed">
                Post your <span className="font-bold underline">Summer Collection Story</span> today at <span className="bg-white text-blue-600 px-2 py-0.5 rounded-lg font-bold">06:40 PM</span> for peak engagement.
             </p>
             <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/40">
                Apply Schedule <Zap size={14} />
             </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl space-y-4">
             <div className="flex items-center gap-2">
                <RotateCcw size={16} className="text-blue-200" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Recycling Hook</span>
             </div>
             <p className="text-sm font-medium leading-relaxed">
                Your <span className="font-bold underline">Eco-Linen Reveal</span> from last month is trending again. Repost as a Reel now.
             </p>
             <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-400 transition-all shadow-xl shadow-blue-900/40 border border-blue-400/50">
                Generate Reel <ArrowRight size={14} />
             </button>
          </div>
        </div>
      </div>
      <Sparkles size={240} className="absolute -bottom-20 -right-20 text-white/5 rotate-12 group-hover:scale-125 transition-transform duration-[2s]" />
    </section>
  );
};

const PlatformHealth = () => {
  return (
    <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">
      <h3 className="font-bold text-slate-800 mb-8 flex items-center gap-2">
         <ShieldAlert size={18} className="text-blue-600" /> Platform Security
      </h3>
      <div className="space-y-6">
        {[
          { name: 'Instagram', status: 'Healthy', color: 'bg-green-500' },
          { name: 'Facebook', status: 'Action Required', color: 'bg-orange-500' },
          { name: 'Twitter (X)', status: 'Maintenance', color: 'bg-blue-400' },
        ].map((p, i) => (
          <div key={i} className="flex items-center justify-between group">
            <div className="flex items-center gap-4">
               <div className={`w-2 h-2 rounded-full ${p.color} group-hover:scale-150 transition-transform`} />
               <span className="text-sm font-bold text-slate-700">{p.name}</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">{p.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const TeamWorkflow = () => {
  return (
    <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
           <Users size={18} className="text-indigo-600" /> Pending Approvals
        </h3>
        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">3 Active</span>
      </div>
      <div className="space-y-6">
        {[
          { user: 'MJ', title: 'Summer Sale Carousel', date: '2h ago' },
          { user: 'CB', title: 'Influencer Thread #4', date: '5h ago' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-indigo-100 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs shrink-0">
                 {item.user}
               </div>
               <div className="truncate max-w-[120px]">
                 <p className="text-xs font-bold text-slate-800 truncate">{item.title}</p>
                 <p className="text-[10px] text-slate-400 font-bold uppercase">{item.date}</p>
               </div>
            </div>
            <button className="bg-white p-2 rounded-lg text-indigo-600 border border-indigo-100 shadow-sm hover:bg-indigo-600 hover:text-white transition-all">
               <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Minimal helper for the Bot icon (missing in standard lucide imports sometimes in specific environments) ---
const Bot = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);