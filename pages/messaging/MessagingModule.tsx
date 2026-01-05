
import React, { useState } from 'react';
import { MessagingSidebar, MessagingTab } from './MessagingSidebar';
import { MessagingOverview } from './views/MessagingOverview';
import { Connections } from './views/Connections';
import { EntryTriggers } from './views/EntryTriggers';
import { AutomationFlows } from './views/AutomationFlows';
import { AIRules } from './views/AIRules';
import { SafetyLimits } from './views/SafetyLimits';
import { HumanHandoff } from './views/HumanHandoff';

// Placeholder for views not yet detailed in high-fidelity
const MessagingPlaceholder: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-20 text-center">
    <h2 className="text-2xl font-bold text-slate-800 mb-2">{name}</h2>
    <p className="text-slate-500">Workspace for conversational {name.toLowerCase()} is initializing.</p>
  </div>
);

export const MessagingModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MessagingTab>('overview');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview': return <MessagingOverview />;
      case 'connections': return <Connections />;
      case 'triggers': return <EntryTriggers />;
      case 'flows': return <AutomationFlows />;
      case 'ai-rules': return <AIRules />;
      case 'safety': return <SafetyLimits />;
      case 'handoff': return <HumanHandoff />;
      case 'templates': return <MessagingPlaceholder name="Message Templates" />;
      case 'payments': return <MessagingPlaceholder name="Payments & Bookings" />;
      case 'leads': return <MessagingPlaceholder name="Lead Qualification" />;
      case 'rules': return <MessagingPlaceholder name="Conversation Rules" />;
      case 'logs': return <MessagingPlaceholder name="Logs & History" />;
      case 'settings': return <MessagingPlaceholder name="Auto-DM Settings" />;
      default: return <MessagingOverview />;
    }
  };

  return (
    <div className="-m-8 flex min-h-[calc(100vh-80px)] overflow-hidden">
      <MessagingSidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
      />
      
      <div className="flex-1 overflow-y-auto bg-slate-50/30 custom-scrollbar">
        <div className="p-10 animate-in fade-in slide-in-from-right-2 duration-300">
          <div className="max-w-6xl mx-auto pb-20">
            {renderActiveView()}
          </div>
        </div>
      </div>
    </div>
  );
};
