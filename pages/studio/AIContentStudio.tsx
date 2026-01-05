
import React, { useState } from 'react';
import { StudioSidebar, StudioTab } from './StudioSidebar';
import { StudioOverview } from './views/StudioOverview';
import { CreateContent } from './views/CreateContent';
import { ImageGenerator } from './views/ImageGenerator';
import { CaptionCopy } from './views/CaptionCopy';
import { BrandTemplates } from './views/BrandTemplates';
import { CampaignBuilder } from './views/CampaignBuilder';
import { VariationsAB } from './views/VariationsAB';
import { AutomationRules } from './views/AutomationRules';
import { ContentLibrary } from './views/ContentLibrary';
import { ApprovalsFeedback } from './views/ApprovalsFeedback';
import { AIInsights } from './views/AIInsights';
import { StudioSettings } from './views/StudioSettings';

export const AIContentStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<StudioTab>('overview');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview': return <StudioOverview />;
      case 'create': return <CreateContent />;
      case 'images': return <ImageGenerator />;
      case 'copy': return <CaptionCopy />;
      case 'templates': return <BrandTemplates />;
      case 'campaigns': return <CampaignBuilder />;
      case 'variants': return <VariationsAB />;
      case 'automation': return <AutomationRules />;
      case 'library': return <ContentLibrary />;
      case 'approvals': return <ApprovalsFeedback />;
      case 'insights': return <AIInsights />;
      case 'settings': return <StudioSettings />;
      default: return <StudioOverview />;
    }
  };

  return (
    <div className="-m-8 flex min-h-[calc(100vh-80px)] overflow-hidden">
      <StudioSidebar 
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
