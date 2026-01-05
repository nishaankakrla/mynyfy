
import React, { useState } from 'react';
import { SocialSidebar, SocialTab } from './SocialSidebar';
import { SchedulerOverview } from './views/SchedulerOverview';
import { ContentCalendar } from './views/ContentCalendar';
import { QueuesEvergreen } from './views/QueuesEvergreen';
import { FailedDrafts } from './views/FailedDrafts';
import { ApprovalsWorkflow } from './views/ApprovalsWorkflow';
import { PostComposerWorkspace } from './PostComposerWorkspace';

const SocialPlaceholder: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-20 text-center animate-in fade-in duration-500">
    <h2 className="text-2xl font-bold text-slate-800 mb-2">{name}</h2>
    <p className="text-slate-500">Workspace for social {name.toLowerCase()} is being optimized for your brand.</p>
  </div>
);

export const SocialScheduler: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SocialTab>('overview');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderView = () => {
    switch (activeTab) {
      case 'overview': return <SchedulerOverview />;
      case 'calendar': return <ContentCalendar />;
      case 'create': return <PostComposerWorkspace onClose={() => setActiveTab('calendar')} />;
      case 'queues': return <QueuesEvergreen />;
      case 'failed': return <FailedDrafts />;
      case 'approvals': return <ApprovalsWorkflow />;
      case 'campaigns': return <SocialPlaceholder name="Campaign Scheduling" />;
      case 'rules': return <SocialPlaceholder name="Platform Rules" />;
      case 'bulk': return <SocialPlaceholder name="Bulk Actions" />;
      case 'reschedule': return <SocialPlaceholder name="Auto-Rescheduling" />;
      case 'logs': return <SocialPlaceholder name="Publishing Logs" />;
      case 'settings': return <SocialPlaceholder name="Scheduler Settings" />;
      default: return <SchedulerOverview />;
    }
  };

  return (
    <div className="-m-8 flex min-h-[calc(100vh-80px)] overflow-hidden">
      {/* 
        Hide secondary sidebar when in 'create' mode to provide 
        maximum screen real estate for the three-panel workspace.
      */}
      {activeTab !== 'create' && (
        <SocialSidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          isCollapsed={isCollapsed}
          onToggle={() => setIsCollapsed(!isCollapsed)}
        />
      )}
      
      <div className="flex-1 overflow-y-auto bg-slate-50/30 custom-scrollbar">
        <div className={`${activeTab === 'create' ? '' : 'p-10'} animate-in fade-in slide-in-from-right-2 duration-300 h-full`}>
          <div className={`${activeTab === 'create' ? 'h-full w-full' : 'max-w-6xl mx-auto pb-20'}`}>
            {renderView()}
          </div>
        </div>
      </div>
    </div>
  );
};
