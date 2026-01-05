
import React, { useState, useEffect } from 'react';
import { SecondaryNav, BuilderTab } from './SecondaryNav';
import { Overview } from './views/Overview';
import { SetupWizard } from './views/SetupWizard';
import { PagesManager } from './views/PagesManager';
import { GlobalStyles } from './views/GlobalStyles';
import { SEOManager } from './views/SEOManager';
import { PublishHub } from './views/PublishHub';
import { BlocksManager } from './views/BlocksManager';
import { ContentManager } from './views/ContentManager';
import { MediaManager } from './views/MediaManager';
import { IntegrationsManager } from './views/IntegrationsManager';

export const WebsiteBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BuilderTab>('overview');
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const tabParam = params.get('tab') as BuilderTab;
    if (tabParam && tabParam !== activeTab) {
      setActiveTab(tabParam);
    }
  }, []);

  const handleTabChange = (tab: BuilderTab) => {
    setActiveTab(tab);
    // Deep linking logic can be improved by updating HashRouter state if needed
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview': return <Overview />;
      case 'setup': return <SetupWizard />;
      case 'pages': return <PagesManager />;
      case 'blocks': return <BlocksManager />;
      case 'styles': return <GlobalStyles />;
      case 'content': return <ContentManager />;
      case 'media': return <MediaManager />;
      case 'seo': return <SEOManager />;
      case 'integrations': return <IntegrationsManager />;
      case 'publish': return <PublishHub />;
      default: return <Overview />;
    }
  };

  return (
    <div className="-m-8 flex min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Sidebar Sub-Nav */}
      <SecondaryNav 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
      />
      
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50/30 custom-scrollbar">
        <div className="p-10 animate-in fade-in slide-in-from-right-2 duration-300">
          <div className="max-w-5xl mx-auto pb-20">
            {renderActiveView()}
          </div>
        </div>
      </div>
    </div>
  );
};
