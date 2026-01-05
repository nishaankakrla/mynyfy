
import React, { useState } from 'react';
import { 
  Package, 
  BarChart3, 
  Zap, 
  Plus, 
  Search, 
  Filter, 
  LayoutGrid, 
  List as ListIcon,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  CreditCard,
  Target
} from 'lucide-react';
import { ProductsOverview } from './views/ProductsOverview';
import { ProductList } from './views/ProductList';
import { AutomationHooks } from './views/AutomationHooks';
import { RevenueIntelligence } from './views/RevenueIntelligence';

export type ProductTab = 'overview' | 'catalog' | 'automation' | 'attribution';

export const ProductsModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProductTab>('overview');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview': return <ProductsOverview />;
      case 'catalog': return <ProductList />;
      case 'automation': return <AutomationHooks />;
      case 'attribution': return <RevenueIntelligence />;
      default: return <ProductsOverview />;
    }
  };

  return (
    <div className="-m-8 flex min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Secondary Sidebar */}
      <div className={`${isCollapsed ? 'w-20' : 'w-64'} flex flex-col border-r border-slate-100 bg-white min-h-[calc(100vh-80px)] sticky top-20 transition-all duration-300 group z-10`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6 px-2">
            {!isCollapsed && <h3 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Inventory OS</h3>}
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors ml-auto"
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>

          <nav className="space-y-1 flex-1">
            <SidebarItem 
              id="overview" 
              label="Overview" 
              icon={BarChart3} 
              active={activeTab === 'overview'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('overview')} 
            />
            <SidebarItem 
              id="catalog" 
              label="Product Catalog" 
              icon={Package} 
              active={activeTab === 'catalog'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('catalog')} 
            />
            <SidebarItem 
              id="automation" 
              label="Auto-DM Hooks" 
              icon={Zap} 
              active={activeTab === 'automation'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('automation')} 
            />
            <SidebarItem 
              id="attribution" 
              label="Revenue Intelligence" 
              icon={TrendingUp} 
              active={activeTab === 'attribution'} 
              isCollapsed={isCollapsed} 
              onClick={() => setActiveTab('attribution')} 
            />
          </nav>

          <div className={`mt-auto pt-6 border-t border-slate-50 ${isCollapsed ? 'items-center' : ''}`}>
            {!isCollapsed ? (
              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Platform Coverage</p>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-slate-500 font-medium">Synced Products</span>
                  <span className="text-[10px] text-slate-900 font-bold">92%</span>
                </div>
                <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[92%]" />
                </div>
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Target size={18} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
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

interface SidebarItemProps {
  id: string;
  label: string;
  icon: React.ElementType;
  active: boolean;
  isCollapsed: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, active, isCollapsed, onClick }) => (
  <button
    onClick={onClick}
    className={`
      w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative
      ${active 
        ? 'bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100 font-bold' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
      }
      ${isCollapsed ? 'justify-center' : ''}
    `}
  >
    <Icon size={18} className={`${active ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
    {!isCollapsed && <span className="text-sm truncate">{label}</span>}
    {isCollapsed && (
      <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl">
        {label}
      </div>
    )}
  </button>
);
