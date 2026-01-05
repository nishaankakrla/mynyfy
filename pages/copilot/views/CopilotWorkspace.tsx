
import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Target, 
  Activity, 
  History, 
  Info,
  Check,
  X,
  Plus,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  proposal?: ActionProposal;
  metadata?: {
    confidence: number;
    sources: string[];
    logic: string;
  };
}

interface ActionProposal {
  id: string;
  title: string;
  description: string;
  impact: string;
  type: 'schedule' | 'create' | 'optimize' | 'fix';
  status: 'pending' | 'executed' | 'rejected';
}

export const CopilotWorkspace: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello Marcello. I've analyzed your Instagram performance and detected a significant drop in story engagement from your New York segment. Would you like me to prepare a retargeting campaign focusing on the 'Eco-Linen' collection?",
      timestamp: '10:00 AM',
      metadata: {
        confidence: 94,
        sources: ['Analytics: Instagram Segments', 'Product Inventory'],
        logic: "Engagement rate for NY followers fell from 4.2% to 1.8% over 7 days."
      },
      proposal: {
        id: 'prop-1',
        title: 'Retargeting: Eco-Linen NY',
        description: 'Generate 3 Story variants with localized NY timing.',
        impact: '+2.4k Reach Estimated',
        type: 'create',
        status: 'pending'
      }
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Understood. I am pulling the best-performing assets from your 'Minimalist' library now. Give me a second to blueprint the sequence.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        metadata: {
          confidence: 98,
          sources: ['Asset Library', 'Historical Performance'],
          logic: "Pulling Top 5% assets by save rate."
        }
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex h-screen overflow-hidden -m-8">
      {/* Interaction Zone */}
      <div className="flex-1 flex flex-col relative bg-white">
        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-10 custom-scrollbar pb-32">
          <div className="max-w-3xl mx-auto space-y-12">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border ${msg.role === 'user' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-blue-600 border-blue-500 text-white'}`}>
                   {msg.role === 'user' ? <div className="text-xs font-bold">MR</div> : <Bot size={20} />}
                </div>
                <div className={`flex-1 space-y-6 ${msg.role === 'user' ? 'text-right' : ''}`}>
                   <div className={`inline-block p-6 rounded-[32px] text-sm font-medium leading-relaxed shadow-sm border ${msg.role === 'user' ? 'bg-slate-50 border-slate-100 text-slate-700 rounded-tr-none' : 'bg-white border-slate-100 text-slate-800 rounded-tl-none'}`}>
                      {msg.content}
                   </div>

                   {msg.proposal && (
                     <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 space-y-6 animate-in zoom-in-95 duration-500 shadow-sm">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                                 <Zap size={20} />
                              </div>
                              <div>
                                 <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Proposed Action</p>
                                 <h4 className="font-bold text-slate-900">{msg.proposal.title}</h4>
                              </div>
                           </div>
                           <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">{msg.proposal.impact}</span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{msg.proposal.description}</p>
                        <div className="flex items-center gap-3">
                           <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold text-xs shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                              <Check size={16} /> Confirm & Prepare
                           </button>
                           <button className="px-5 py-3 rounded-xl border border-slate-200 text-slate-400 hover:bg-white hover:text-slate-600 transition-all">
                              <X size={16} />
                           </button>
                        </div>
                     </div>
                   )}

                   {msg.metadata && (
                     <div className={`flex items-center gap-6 text-[10px] font-bold uppercase tracking-tighter text-slate-400 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                        <div className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-green-500" /> Confidence: {msg.metadata.confidence}%</div>
                        <div className="flex items-center gap-1.5"><Activity size={12} className="text-blue-500" /> Grounded in Data</div>
                        <div className="group relative">
                           <button className="flex items-center gap-1 text-blue-600 hover:underline"><Info size={12} /> View Logic</button>
                           <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-slate-900 text-white text-[10px] font-medium leading-relaxed rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl">
                             {msg.metadata.logic}
                           </div>
                        </div>
                     </div>
                   )}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input Zone */}
        <div className="absolute bottom-10 left-0 right-0 px-10">
           <div className="max-w-3xl mx-auto bg-white border border-slate-100 shadow-2xl shadow-blue-900/5 rounded-[32px] p-3 flex items-end gap-3 ring-4 ring-blue-50/50">
              <button className="p-4 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all shrink-0">
                 <Plus size={20} />
              </button>
              <textarea 
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                 className="flex-1 bg-transparent border-0 outline-none text-sm font-medium py-4 px-2 min-h-[56px] resize-none overflow-hidden" 
                 placeholder="Ask Copilot to analyze, create, or schedule..."
                 rows={1}
              />
              <button 
                 onClick={handleSend}
                 className="p-4 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 shrink-0"
              >
                 <Send size={20} />
              </button>
           </div>
        </div>
      </div>

      {/* Context Sidebar */}
      <div className="w-80 border-l border-slate-100 bg-white flex flex-col p-8 overflow-y-auto custom-scrollbar">
         <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Intelligence Context</h3>
         
         <div className="space-y-10">
            <section className="space-y-4">
               <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[10px]">LF</div>
                  <div>
                     <p className="text-[10px] font-bold text-slate-800">Lumière Fashion</p>
                     <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Milan, HQ Workspace</p>
                  </div>
               </div>
               <div className="flex flex-wrap gap-2">
                  {['Instagram', 'WhatsApp', 'Meta Ads'].map(p => (
                    <span key={p} className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-[8px] font-bold uppercase border border-blue-100">{p}</span>
                  ))}
               </div>
            </section>

            <section className="space-y-6">
               <div className="flex items-center justify-between">
                  <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Suggested Actions</h4>
                  <Sparkles size={14} className="text-blue-400" />
               </div>
               {[
                 { label: 'Optimize Friday Queue', impact: 'High', icon: Zap },
                 { label: 'Analyze Revenue Leak', impact: 'Medium', icon: Activity },
                 { label: 'Create Flash Sale Draft', impact: 'High', icon: Target },
               ].map((s, i) => (
                  <button key={i} className="w-full text-left p-4 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all group space-y-2">
                     <div className="flex items-center justify-between">
                        <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                           <s.icon size={14} />
                        </div>
                        <span className={`text-[8px] font-black uppercase ${s.impact === 'High' ? 'text-orange-500' : 'text-blue-500'}`}>{s.impact} Impact</span>
                     </div>
                     <p className="text-xs font-bold text-slate-800 leading-snug">{s.label}</p>
                     <p className="text-[10px] text-slate-400 font-medium group-hover:text-slate-600 transition-colors">Based on 7-day conversion delta.</p>
                  </button>
               ))}
            </section>

            <section className="bg-slate-900 rounded-[28px] p-6 text-white text-center space-y-4 relative overflow-hidden group">
               <History size={24} className="text-blue-400 mx-auto group-hover:rotate-12 transition-transform" />
               <h4 className="font-bold text-xs">Recent Copilot Wins</h4>
               <div className="space-y-3">
                  <p className="text-[10px] text-slate-400 leading-relaxed font-medium italic">"Captured $1,240 in abandoned carts yesterday via Auto-DM."</p>
               </div>
               <button className="text-[10px] font-bold text-blue-400 hover:underline">View Intelligence Logs</button>
            </section>
         </div>
      </div>
    </div>
  );
};
