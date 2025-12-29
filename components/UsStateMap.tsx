'use client';

import { ComposableMap, Geographies, Geography } from '@vnedyalk0v/react19-simple-maps';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface UsStateMapProps {
  onStateClick?: (stateAbbreviation: string) => void;
}

export default function UsStateMap({ onStateClick }: UsStateMapProps) {
  const router = useRouter();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (geo: any) => {
    const stateName = geo.properties.name;
    const slug = stateName.toLowerCase().replace(/\s+/g, '-');
    
    if (onStateClick) {
      onStateClick(geo.id);
    } else {
      router.push(`/state-constitutions/${slug}`);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto" style={{ minHeight: '500px' }}>
      <ComposableMap 
        projection="geoAlbersUsa"
        projectionConfig={{
          scale: 1000
        }}
        width={800}
        height={500}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHovered = hoveredState === geo.id;
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setHoveredState(geo.id)}
                  onMouseLeave={() => setHoveredState(null)}
                  onClick={() => handleStateClick(geo)}
                  style={{
                    default: {
                      fill: isHovered ? '#1A3A5C' : '#0F2C47',
                      stroke: '#FFFFFF',
                      strokeWidth: 0.75,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    hover: {
                      fill: '#1A3A5C',
                      stroke: '#FFFFFF',
                      strokeWidth: 0.75,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: '#C41E3A',
                      stroke: '#FFFFFF',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      
      {hoveredState && (
        <div className="text-center mt-4 text-lg font-semibold text-[#0F2C47]">
          Click to view constitution
        </div>
      )}
    </div>
  );
}
