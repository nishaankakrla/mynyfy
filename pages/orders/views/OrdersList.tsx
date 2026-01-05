
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
  // Added ShoppingCart import to fix "Cannot find name 'ShoppingCart'"
  ShoppingCart
} from 'lucide-react';

const ORDERS = [
  { id: 'ORD-8241', date: '2m ago', customer: 'marcello.r@icloud.com', amount: '$240.00', platform: 'Instagram', status: 'Paid', fulfillment: 'Pending', source: 'DM Flow' },
  { id: 'ORD-8240', date: '15m ago', customer: 'sarah_j@gmail.com', amount: '$1,200.00', platform: 'WhatsApp', status: 'Paid', fulfillment: 'Shipped', source: 'Manual Link' },
  { id: 'ORD-8239', date: '45m ago', customer: 'elena@atelier.fr', amount: '$49.00', platform: 'Facebook', status: 'Pending', fulfillment: 'Unfulfilled', source: 'Ad Click' },
  { id: 'ORD-8238', date: '1h ago', customer: 'dev@brand.co', amount: '$150.00', platform: 'Instagram', status: 'Failed', fulfillment: 'Cancelled', source: 'Automation' },
  { id: 'ORD-8237', date: '3h ago', customer: 'lucia_v@hotmail.com', amount: '$89.00', platform: 'Instagram', status: 'Refunded', fulfillment: 'Returned', source: 'Story Swipe' },
];

export const OrdersList: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Order Management</h2>
          <p className="text-slate-500 font-medium">Tracking 842 transactions across your ecosystem.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
             <Download size={18} /> Export CSV
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-all">
             <Filter size={18} /> Filter Views
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
           <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className="w-full bg-white border border-slate-100 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Search orders by ID, email, or source..." />
           </div>
           <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-4">
                 <button className="text-[10px] font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1 uppercase tracking-widest">
                   All Status <ChevronDown size={14} />
                 </button>
                 <button className="text-[10px] font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1 uppercase tracking-widest">
                   Bulk Fulfillment <ChevronDown size={14} />
                 </button>
              </div>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/30 border-b border-slate-50">
                <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Order</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Platform & Source</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payment</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fulfillment</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {ORDERS.map((order) => (
                <tr key={order.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-all shrink-0">
                         <ShoppingCart size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{order.id}</p>
                        <p className="text-[10px] text-slate-400 font-bold truncate max-w-[140px]">{order.customer}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                       <div className="p-1.5 rounded-lg bg-slate-50 text-slate-500">
                          {order.platform === 'Instagram' ? <Instagram size={14} /> : <MessageSquare size={14} />}
                       </div>
                       <div>
                         <p className="text-xs font-bold text-slate-700">{order.platform}</p>
                         <p className="text-[10px] text-blue-500 font-bold uppercase tracking-tighter">{order.source}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 font-bold text-slate-900 text-sm">
                    {order.amount}
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 w-fit ${getStatusColor(order.status)}`}>
                       {getStatusIcon(order.status)} {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${getFulfillmentColor(order.fulfillment)}`}>
                      {order.fulfillment}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-2 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View Details">
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

      {/* Bulk Status Update Placeholder */}
      <div className="p-8 bg-blue-50 rounded-[32px] border border-blue-100 flex items-center justify-between">
         <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
               <Zap size={24} />
            </div>
            <div>
               <h4 className="font-bold text-blue-900">Need to batch process?</h4>
               <p className="text-xs text-blue-700 font-medium leading-relaxed">Select orders and trigger bulk fulfillment emails or payment recovery flows in one click.</p>
            </div>
         </div>
         <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-xl">Enable Selection Mode</button>
      </div>
    </div>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Paid': return 'bg-green-100 text-green-600';
    case 'Pending': return 'bg-blue-100 text-blue-600';
    case 'Failed': return 'bg-red-50 text-red-500';
    case 'Refunded': return 'bg-slate-100 text-slate-500';
    default: return 'bg-slate-50 text-slate-400';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Paid': return <CheckCircle2 size={12} />;
    case 'Pending': return <Clock size={12} />;
    case 'Failed': return <AlertCircle size={12} />;
    default: return null;
  }
};

const getFulfillmentColor = (status: string) => {
  switch (status) {
    case 'Shipped': return 'bg-green-100 text-green-600';
    case 'Pending': return 'bg-orange-100 text-orange-600';
    case 'Unfulfilled': return 'bg-red-50 text-red-500';
    case 'Cancelled': return 'bg-slate-100 text-slate-400';
    default: return 'bg-slate-50 text-slate-400';
  }
};
