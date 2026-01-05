
import React from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  MoreVertical, 
  Instagram, 
  MessageSquare, 
  Zap, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ExternalLink,
  ChevronDown,
  User,
  ShieldCheck,
  Tag
} from 'lucide-react';

const CUSTOMERS = [
  { id: '1', name: 'Marcello Rossi', email: 'marcello.r@icloud.com', type: 'Repeat Customer', value: '$2,450', platforms: ['IG', 'WA'], status: 'Active', engagement: 'High' },
  { id: '2', name: 'Sarah Jenks', email: 'sarah_j@gmail.com', type: 'Lead', value: '$0', platforms: ['IG'], status: 'Active', engagement: 'Medium' },
  { id: '3', name: 'Elena Atelier', email: 'elena@atelier.fr', type: 'Customer', value: '$420', platforms: ['FB'], status: 'Active', engagement: 'Low' },
  { id: '4', name: 'Luca Vitti', email: 'luca_v@vitti.it', type: 'At Risk', value: '$12,800', platforms: ['IG', 'WA'], status: 'Paused', engagement: 'High' },
  { id: '5', name: 'Anna Berg', email: 'anna@nordic.se', type: 'Repeat Customer', value: '$8,200', platforms: ['IG'], status: 'Active', engagement: 'Max' },
];

export const CustomersList: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Identity Hub</h2>
          <p className="text-slate-500 font-medium">Managing 42,812 unified customer identities.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
             <Download size={18} /> Export List
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-all">
             <Filter size={18} /> Segment Views
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
           <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className="w-full bg-white border border-slate-100 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Search by name, email, or social handle..." />
           </div>
           <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-4">
                 <button className="text-[10px] font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1 uppercase tracking-widest">
                   All Platforms <ChevronDown size={14} />
                 </button>
                 <button className="text-[10px] font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1 uppercase tracking-widest">
                   Bulk Actions <ChevronDown size={14} />
                 </button>
              </div>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/30 border-b border-slate-50">
                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Identity</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lifecycle</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Value</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Platforms</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Engagement</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {CUSTOMERS.map((customer) => (
                <tr key={customer.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
                         <img src={`https://ui-avatars.com/api/?name=${customer.name}&background=EAF3FF&color=3B82F6`} className="w-full h-full object-cover" alt={customer.name} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{customer.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold truncate max-w-[140px]">{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 w-fit ${getLifecycleColor(customer.type)}`}>
                       {customer.type}
                    </span>
                  </td>
                  <td className="px-6 py-6 font-bold text-slate-900 text-sm">
                    {customer.value}
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center justify-center gap-1.5">
                       {customer.platforms.map(p => (
                         <div key={p} className="p-1 rounded bg-slate-100 text-slate-500">
                           {p === 'IG' ? <Instagram size={12} /> : <MessageSquare size={12} />}
                         </div>
                       ))}
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                       <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < getEngagementScore(customer.engagement) ? 'bg-blue-500' : 'bg-slate-100'}`} />
                          ))}
                       </div>
                       <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">{customer.engagement}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-2 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View Profile">
                         <ExternalLink size={16} />
                       </button>
                       <button className="p-2 text-slate-300 hover:text-slate-800 rounded-lg transition-all">
                         <MoreVertical size={16} />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-8 bg-indigo-50 rounded-[32px] border border-indigo-100 flex items-center justify-between">
         <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
               <ShieldCheck size={24} />
            </div>
            <div>
               <h4 className="font-bold text-indigo-900">Advanced Identity Resolution</h4>
               <p className="text-xs text-indigo-700 font-medium leading-relaxed">CommerceOS automatically merged 240 potential duplicate profiles today based on email & WhatsApp signatures.</p>
            </div>
         </div>
         <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-xl">Manage Merges</button>
      </div>
    </div>
  );
};

const getLifecycleColor = (type: string) => {
  switch (type) {
    case 'Repeat Customer': return 'bg-green-100 text-green-600';
    case 'Customer': return 'bg-blue-100 text-blue-600';
    case 'Lead': return 'bg-slate-100 text-slate-500';
    case 'At Risk': return 'bg-red-50 text-red-500';
    default: return 'bg-slate-50 text-slate-400';
  }
};

const getEngagementScore = (level: string) => {
  switch (level) {
    case 'Max': return 5;
    case 'High': return 4;
    case 'Medium': return 3;
    case 'Low': return 1;
    default: return 0;
  }
};
