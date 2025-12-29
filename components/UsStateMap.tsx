'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { usStates } from '@/lib/usStates';

export default function UsStateMap() {
  const router = useRouter();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (slug: string) => {
    router.push(`/state-constitutions/${slug}`);
  };

  // Simple grid-based state selector as fallback
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-2 border-blue-200">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#0F2C47] mb-2">Interactive State Map</h3>
          <p className="text-gray-600">Click on any state to view its constitution</p>
        </div>
        
        {/* Grid of states organized roughly geographically */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {usStates.map((state) => {
            const isHovered = hoveredState === state.slug;
            return (
              <button
                key={state.abbreviation}
                onClick={() => handleStateClick(state.slug)}
                onMouseEnter={() => setHoveredState(state.slug)}
                onMouseLeave={() => setHoveredState(null)}
                className={`
                  px-4 py-3 rounded-lg font-bold text-sm transition-all
                  ${isHovered 
                    ? 'bg-[#C41E3A] text-white scale-105 shadow-lg' 
                    : 'bg-[#0F2C47] text-white hover:bg-[#1A3A5C]'
                  }
                `}
              >
                <div className="text-xs opacity-75">{state.name}</div>
                <div className="text-lg">{state.abbreviation}</div>
              </button>
            );
          })}
        </div>
        
        {hoveredState && (
          <div className="text-center mt-6 text-lg font-semibold text-[#0F2C47] animate-pulse">
            Click to view {usStates.find(s => s.slug === hoveredState)?.name} Constitution
          </div>
        )}
      </div>
    </div>
  );
}
