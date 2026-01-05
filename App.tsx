
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { AppShell } from './components/Layout/AppShell';
import { Dashboard } from './pages/Dashboard';
import { WebsiteBuilder } from './pages/builder/WebsiteBuilder';
import { AIContentStudio } from './pages/studio/AIContentStudio';
import { MessagingModule } from './pages/messaging/MessagingModule';
import { SocialScheduler } from './pages/social/SocialScheduler';
import { ProductsModule } from './pages/products/ProductsModule';
import { OrdersModule } from './pages/orders/OrdersModule';
import { AnalyticsModule } from './pages/analytics/AnalyticsModule';
import { CustomersModule } from './pages/customers/CustomersModule';
import { SettingsModule } from './pages/settings/SettingsModule';
import { AICopilotModule } from './pages/copilot/AICopilotModule';
import { ProfileModule } from './pages/profile/ProfileModule';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/app/dashboard" replace />} />

          <Route 
            path="/app/*" 
            element={
              <AppShell>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="builder" element={<WebsiteBuilder />} />
                  <Route path="ai-studio" element={<AIContentStudio />} />
                  <Route path="messaging" element={<MessagingModule />} />
                  <Route path="social" element={<SocialScheduler />} />
                  <Route path="products" element={<ProductsModule />} />
                  <Route path="orders" element={<OrdersModule />} />
                  <Route path="analytics" element={<AnalyticsModule />} />
                  <Route path="customers" element={<CustomersModule />} />
                  <Route path="settings" element={<SettingsModule />} />
                  <Route path="copilot" element={<AICopilotModule />} />
                  <Route path="profile" element={<ProfileModule />} />
                  <Route path="*" element={<Navigate to="dashboard" replace />} />
                </Routes>
              </AppShell>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
