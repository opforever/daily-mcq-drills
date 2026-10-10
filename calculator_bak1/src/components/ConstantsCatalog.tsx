import React, { useState } from 'react';
import { CASIO_CONSTANTS, CASIO_CONVERSIONS } from '../utils/constants';

interface ConstantsCatalogProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertValue: (val: string, symbol: string) => void;
  initialTab?: 'constants' | 'conversions';
}

export const ConstantsCatalog: React.FC<ConstantsCatalogProps> = ({
  isOpen,
  onClose,
  onInsertValue,
  initialTab = 'constants',
}) => {
  const [activeTab, setActiveTab] = useState<'constants' | 'conversions'>(initialTab);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  if (!isOpen) return null;

  const categories = ['All', 'Universal', 'Atomic', 'Electromagnetic', 'Physico-chemical'];

  const filteredConstants = CASIO_CONSTANTS.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.symbol.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toString() === search;
    const matchesCat = categoryFilter === 'All' || c.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const filteredConversions = CASIO_CONVERSIONS.filter((u) => {
    return (
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.fromUnit.toLowerCase().includes(search.toLowerCase()) ||
      u.toUnit.toLowerCase().includes(search.toLowerCase()) ||
      u.id.toString() === search
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#1f242e] border border-slate-700/80 rounded-xl w-full max-w-xl h-[85vh] max-h-[640px] flex flex-col text-slate-100 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93c]" />
            <h3 className="font-bold text-sm tracking-wide text-slate-200">
              fx-991ES PLUS Reference (CONST & CONV)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xs px-2.5 py-1 rounded bg-slate-800"
          >
            ESC
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-800 bg-slate-900/60 p-2 gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab('constants')}
            className={`flex-1 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'constants'
                ? 'bg-[#e5a93c] text-black font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Scientific Constants (40)
          </button>
          <button
            onClick={() => setActiveTab('conversions')}
            className={`flex-1 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'conversions'
                ? 'bg-[#e5a93c] text-black font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Unit Conversions (40)
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="p-3 border-b border-slate-800 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search symbol, code (e.g. 28 for c0), name..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-md px-3 py-1.5 text-xs text-white placeholder-slate-500 font-mono"
          />

          {activeTab === 'constants' && (
            <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`text-[11px] px-2 py-1 rounded border transition-colors whitespace-nowrap ${
                    categoryFilter === cat
                      ? 'border-[#e5a93c] text-[#e5a93c] bg-[#e5a93c]/10'
                      : 'border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-thin">
          {activeTab === 'constants' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {filteredConstants.map((c) => (
                <div
                  key={c.id}
                  className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-[#e5a93c] hover:bg-slate-800/80 transition-colors flex items-center justify-between"
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-slate-500 font-mono font-bold">
                        {String(c.id).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-bold text-[#e5a93c] font-serif">
                        {c.symbol}
                      </span>
                      <span className="text-xs text-slate-300 font-medium truncate">
                        {c.name}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {c.value.toExponential(4).replace('e+', '×10^').replace('e-', '×10^-')} {c.unit}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onInsertValue(c.value.toString(), c.symbol);
                      onClose();
                    }}
                    className="shrink-0 text-xs px-2.5 py-1 bg-[#e5a93c] text-black font-semibold rounded hover:brightness-105"
                  >
                    Insert
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {filteredConversions.map((u) => (
                <div
                  key={u.id}
                  className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-[#e5a93c] hover:bg-slate-800/80 transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-slate-500 font-mono font-bold">
                        {String(u.id).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-bold text-slate-200">
                        {u.name}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      1 {u.fromUnit} = {u.factor < 0.001 ? u.factor.toExponential(4) : u.factor.toFixed(6).replace(/\.?0+$/, '')} {u.toUnit}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onInsertValue(`*(${u.factor})`, u.name);
                      onClose();
                    }}
                    className="shrink-0 text-xs px-2.5 py-1 bg-slate-700 hover:bg-slate-600 text-slate-100 font-medium rounded"
                  >
                    Apply (×)
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
