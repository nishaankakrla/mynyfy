
import React from 'react';
import { Globe, Mail, CreditCard, MessageCircle, BarChart, ToggleRight, Check } from 'lucide-react';

const INTEGRATIONS = [
  { name: 'Google Analytics', icon: BarChart, cat: 'Analytics', status: 'connected', color: 'text-orange-600 bg-orange-50' },
  { name: 'Stripe Payments', icon: CreditCard, cat: 'Payments', status: 'connected', color: 'text-blue-600 bg-blue-50' },
  { name: 'Mailchimp', icon: Mail, cat: 'Marketing', status: 'disconnected', color: 'text-yellow-600 bg-yellow-50' },
  { name: 'WhatsApp Business', icon: MessageCircle, cat: 'Chat', status: 'disconnected', color: 'text-green-600 bg-green-50' },
];

export const IntegrationsManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Connected Apps</h2>
        <p className="text-slate-500">Supercharge your site with the best-in-class commerce tools.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INTEGRATIONS.map((app) => (
          <div key={app.name} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-start justify-between group hover:border-blue-100 transition-all">
            <div className="flex gap-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${app.color}`}>
                <app.icon className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{app.cat}</span>
                <h3 className="text-xl font-bold text-slate-800 mt-1">{app.name}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {app.status === 'connected' 
                    ? `Live sync enabled with your brand's workspace.` 
                    : `Connect ${app.name} to unlock advanced features.`}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              {app.status === 'connected' ? (
                <div className="flex items-center gap-1.5 text-green-600 font-bold text-xs bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                  <Check className="w-3 h-3" /> Active
                </div>
              ) : (
                <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all">
                  Connect
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-12 bg-white rounded-[40px] border border-slate-100 text-center space-y-4">
        <Globe className="w-12 h-12 text-blue-600 mx-auto" />
        <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Need a custom integration?</h3>
        <p className="text-slate-500 max-w-md mx-auto">Our Agency plan allows for custom API hooks and direct database connections.</p>
        <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-700 transition-all">
          Explore Developer API
        </button>
      </div>
    </div>
  );
};
