import React, { useState } from 'react';
import { Search, BookOpen, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { SANSKRIT_ROOTS } from '../data/sanskritRoots';

export const RootsExplorer = ({ onBackToHome, onSelectPoseFromRoot }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRootId, setSelectedRootId] = useState(SANSKRIT_ROOTS[0]?.id || null);

  const filteredRoots = SANSKRIT_ROOTS.filter(r => 
    r.root.includes(searchTerm) || 
    r.sanskrit.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.meaning.includes(searchTerm) ||
    r.englishMeaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedRoot = SANSKRIT_ROOTS.find(r => r.id === selectedRootId) || SANSKRIT_ROOTS[0];

  return (
    <div className="flex flex-col h-full bg-cream-50 animate-fadeIn overflow-hidden">
      
      {/* Header */}
      <header className="p-4 bg-white border-b border-cream-200 flex items-center justify-between shrink-0">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-charcoal hover:text-terracotta text-sm font-semibold transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>חזרה לראשי</span>
        </button>

        <h2 className="text-base font-bold text-charcoal flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-terracotta" />
          <span>מילון שורשי סנסקריט</span>
        </h2>
      </header>

      {/* Search Input */}
      <div className="p-4 border-b border-cream-200 bg-cream-100 shrink-0">
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 absolute right-3.5 top-3.5 text-charcoal-muted" />
          <input
            type="text"
            placeholder="חפש מילה או פירוש (למשל: אדו, מוקה, הר, כלב...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 bg-white border border-cream-300 rounded-2xl text-sm focus:outline-none focus:border-terracotta transition-colors shadow-sm"
          />
        </div>
      </div>

      {/* Main Content Split Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col gap-4">
        
        {/* Selected Root Detailed Card */}
        {selectedRoot && (
          <div className="bg-white border-2 border-terracotta/30 rounded-3xl p-5 shadow-card shrink-0 animate-fadeIn">
            
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-terracotta-light text-terracotta-deep">
                  שורש סנסקריט
                </span>
                <h3 className="text-2xl font-bold text-charcoal mt-1">
                  {selectedRoot.root} <span className="text-sm font-normal text-charcoal-muted">({selectedRoot.sanskrit})</span>
                </h3>
              </div>
              <div className="text-3xl font-sanskrit text-terracotta dir-ltr bg-cream-50 px-3 py-1 rounded-xl border border-cream-200">
                {selectedRoot.devanagari}
              </div>
            </div>

            <div className="bg-cream-50 border border-cream-200 rounded-2xl p-3.5 mb-4">
              <div className="text-xs text-charcoal-muted font-bold uppercase tracking-wider mb-1">משמעות:</div>
              <div className="text-lg font-bold text-terracotta-dark">
                {selectedRoot.meaning} <span className="text-sm font-normal text-charcoal-light">({selectedRoot.englishMeaning})</span>
              </div>
              <p className="text-xs text-charcoal leading-relaxed mt-2">
                {selectedRoot.description}
              </p>
            </div>

            <div>
              <div className="text-xs font-bold text-charcoal-muted uppercase mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-sage-dark" />
                <span>תנוחות לדוגמה המכילות מילה זו:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedRoot.examples.map((ex, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-sage-light border border-sage/20 text-sage-dark font-medium text-xs shadow-sm"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* List of All Roots */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-charcoal-muted uppercase tracking-wider mb-2">
            כל השורשים ({filteredRoots.length})
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filteredRoots.map((item) => {
              const isSelected = item.id === selectedRoot?.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedRootId(item.id)}
                  className={`p-3.5 rounded-2xl border text-right transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-terracotta shadow-md ring-2 ring-terracotta/20'
                      : 'bg-white/80 border-cream-200 hover:bg-white hover:border-cream-300'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm text-charcoal">
                      {item.root} <span className="text-xs font-normal text-charcoal-muted">({item.sanskrit})</span>
                    </div>
                    <div className="text-xs text-terracotta-dark font-medium">
                      {item.meaning}
                    </div>
                  </div>
                  <span className="font-sanskrit text-lg text-charcoal-muted dir-ltr">
                    {item.devanagari}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
