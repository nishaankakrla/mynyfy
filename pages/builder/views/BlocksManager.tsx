
import React from 'react';
import { Layers, Move, Eye, Edit3, Trash2, Plus, GripVertical } from 'lucide-react';

const MOCK_SECTIONS = [
  { id: '1', type: 'Hero', variant: 'Split Layout', status: 'Live' },
  { id: '2', type: 'Product Grid', variant: 'Dynamic Carousel', status: 'Live' },
  { id: '3', type: 'About Us', variant: 'Centered Text', status: 'Draft' },
  { id: '4', type: 'Newsletter', variant: 'Minimalist', status: 'Live' },
];

export const BlocksManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Page Sections</h2>
          <p className="text-slate-500">Configure the order and variants of sections on your homepage.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-[16px] font-bold shadow-lg shadow-blue-200 flex items-center gap-2">
          <Plus className="w-5 h-5" /> Add Section
        </button>
      </div>

      <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm">
        <div className="bg-slate-50 p-4 border-b border-slate-100 grid grid-cols-12 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
          <div className="col-span-1">Order</div>
          <div className="col-span-4">Section Type</div>
          <div className="col-span-3">Variant</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        
        <div className="divide-y divide-slate-50">
          {MOCK_SECTIONS.map((section, index) => (
            <div key={section.id} className="grid grid-cols-12 items-center p-6 hover:bg-slate-50/50 transition-colors group">
              <div className="col-span-1">
                <GripVertical className="w-5 h-5 text-slate-300 group-hover:text-blue-400 cursor-grab" />
              </div>
              <div className="col-span-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-700">{section.type}</span>
              </div>
              <div className="col-span-3 text-sm text-slate-500 font-medium">
                {section.variant}
              </div>
              <div className="col-span-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${section.status === 'Live' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                  {section.status}
                </span>
              </div>
              <div className="col-span-2 flex items-center justify-end gap-2">
                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit Content">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all" title="Preview Section">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Remove Section">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 border-2 border-dashed border-slate-100 rounded-[32px] text-center bg-slate-50/30">
        <p className="text-slate-400 font-medium mb-4">Want to protect your brand aesthetic?</p>
        <button className="text-blue-600 font-bold text-sm bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
          Enable Design Lock (Staff Only)
        </button>
      </div>
    </div>
  );
};
