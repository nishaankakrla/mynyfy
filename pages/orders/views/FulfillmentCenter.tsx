
import React from 'react';
import { Truck, Package, Globe, Clock, CheckCircle2, MoreVertical, Plus, Zap, AlertCircle } from 'lucide-react';

export const FulfillmentCenter: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Fulfillment Center</h2>
          <p className="text-slate-500 font-medium">Ensuring every promise made on social is delivered perfectly.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg flex items-center gap-2">
           <Plus size={18} /> Bulk Create Labels
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'To Fulfill', count: 18, color: 'text-orange-600 bg-orange-50' },
                { title: 'In Transit', count: 124, color: 'text-blue-600 bg-blue-50' },
                { title: 'Out for Delivery', count: 42, color: 'text-green-600 bg-green-50' },
                { title: 'Delayed / Issues', count: 3, color: 'text-red-600 bg-red-50' },
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-blue-100 transition-all">
                   <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.color}`}>
                         <Package size={28} />
                      </div>
                      <div>
                         <h4 className="text-lg font-bold text-slate-800">{card.title}</h4>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{card.count} Orders</p>
                      </div>
                   </div>
                   <button className="p-3 text-slate-300 group-hover:text-blue-600 transition-colors">
                      <MoreVertical size={20} />
                   </button>
                </div>
              ))}
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <Truck size={18} className="text-blue-600" /> Recent Shipments
                 </h3>
                 <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
                    View Tracking Map
                 </button>
              </div>
              <div className="divide-y divide-slate-50">
                 {[
                   { id: 'ORD-8240', carrier: 'FedEx', status: 'In Transit', location: 'Milan, IT', eta: 'Tomorrow' },
                   { id: 'ORD-8236', carrier: 'DHL Express', status: 'Delivered', location: 'London, UK', eta: 'Yesterday' },
                   { id: 'ORD-8235', carrier: 'USPS', status: 'Pending Pickup', location: 'New York, US', eta: 'June 22' },
                 ].map((shipment, i) => (
                   <div key={i} className="p-6 flex items-center justify-between group hover:bg-slate-50/50 transition-colors">
                      <div className="flex items-center gap-6 flex-1">
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${shipment.status === 'Delivered' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                            {shipment.status === 'Delivered' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                         </div>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
                            <div>
                               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Order</p>
                               <p className="text-sm font-bold text-slate-900">{shipment.id}</p>
                            </div>
                            <div>
                               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Carrier</p>
                               <p className="text-sm font-bold text-slate-700">{shipment.carrier}</p>
                            </div>
                            <div>
                               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                               <p className="text-sm font-bold text-slate-700">{shipment.location}</p>
                            </div>
                            <div className="text-right">
                               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">ETA</p>
                               <p className="text-sm font-bold text-slate-900">{shipment.eta}</p>
                            </div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-indigo-900 rounded-[32px] p-8 text-white relative overflow-hidden group text-center">
              <Globe size={48} className="text-blue-400 mx-auto mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Global Coverage</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                 You are currently shipping to <span className="text-white font-bold">14 countries</span>. AI suggests opening up "Nordic Corridor" based on 240 new leads.
              </p>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-blue-500 transition-all">
                Expand Logistics
              </button>
           </div>

           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <AlertCircle size={18} className="text-orange-500" /> Fulfillment Status
              </h3>
              <div className="space-y-4">
                 <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-slate-400 uppercase tracking-widest">Digital Assets</span>
                    <span className="text-green-600 font-bold">99% Auto-Sent</span>
                 </div>
                 <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-slate-400 uppercase tracking-widest">Service Bookings</span>
                    <span className="text-blue-600 font-bold">12 Active</span>
                 </div>
                 <div className="pt-4 border-t border-slate-50">
                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed uppercase mb-2">Efficiency Rating</p>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 w-[94%]" />
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm text-center">
              <Zap size={32} className="text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-800 text-sm mb-2">Auto-Fulfillment Bots</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed font-medium mb-6">Connect your Warehouse API to enable 1-click zero-touch fulfillment.</p>
              <button className="w-full py-3 bg-slate-50 text-slate-600 rounded-xl font-bold text-xs border border-slate-100 hover:bg-slate-100 transition-all">
                 Configure Integrations
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
