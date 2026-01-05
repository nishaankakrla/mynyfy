
import React, { useState } from 'react';
import { SettingsSidebar, SettingsTab } from './SettingsSidebar';
import { AccountSettings } from './views/AccountSettings';
import { BrandSettings } from './views/BrandSettings';
import { PlatformSettings } from './views/PlatformSettings';
import { AutomationSettings } from './views/AutomationSettings';
import { AISettings } from './views/AISettings';
import { NotificationSettings } from './views/NotificationSettings';
import { TeamSettings } from './views/TeamSettings';
import { IntegrationSettings } from './views/IntegrationSettings';
import { BillingSettings } from './views/BillingSettings';
import { SecuritySettings } from './views/SecuritySettings';
import { PrivacySettings } from './views/PrivacySettings';
import { AdvancedSettings } from './views/AdvancedSettings';

export const SettingsModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('account');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'account': return <AccountSettings />;
      case 'brand': return <BrandSettings />;
      case 'platforms': return <PlatformSettings />;
      case 'automation': return <AutomationSettings />;
      case 'ai': return <AISettings />;
      case 'notifications': return <NotificationSettings />;
      case 'team': return <TeamSettings />;
      case 'integrations': return <IntegrationSettings />;
      case 'billing': return <BillingSettings />;
      case 'security': return <SecuritySettings />;
      case 'privacy': return <PrivacySettings />;
      case 'advanced': return <AdvancedSettings />;
      default: return <AccountSettings />;
    }
  };

  return (
    <div className="-m-8 flex min-h-[calc(100vh-80px)] overflow-hidden">
      <SettingsSidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
      />
      
      <div className="flex-1 overflow-y-auto bg-slate-50/30 custom-scrollbar">
        <div className="p-10 animate-in fade-in slide-in-from-right-2 duration-300">
          <div className="max-w-4xl mx-auto pb-20">
            {renderActiveView()}
          </div>
        </div>
      </div>
    </div>
  );
};
