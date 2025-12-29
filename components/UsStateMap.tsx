'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Map state FIPS codes to slugs
const stateSlugMap: { [key: string]: string } = {
  "01": "alabama", "02": "alaska", "04": "arizona", "05": "arkansas", "06": "california",
  "08": "colorado", "09": "connecticut", "10": "delaware", "12": "florida", "13": "georgia",
  "15": "hawaii", "16": "idaho", "17": "illinois", "18": "indiana", "19": "iowa",
  "20": "kansas", "21": "kentucky", "22": "louisiana", "23": "maine", "24": "maryland",
  "25": "massachusetts", "26": "michigan", "27": "minnesota", "28": "mississippi", "29": "missouri",
  "30": "montana", "31": "nebraska", "32": "nevada", "33": "new-hampshire", "34": "new-jersey",
  "35": "new-mexico", "36": "new-york", "37": "north-carolina", "38": "north-dakota", "39": "ohio",
  "40": "oklahoma", "41": "oregon", "42": "pennsylvania", "44": "rhode-island", "45": "south-carolina",
  "46": "south-dakota", "47": "tennessee", "48": "texas", "49": "utah", "50": "vermont",
  "51": "virginia", "53": "washington", "54": "west-virginia", "55": "wisconsin", "56": "wyoming"
};

export default function UsStateMap() {
  const router = useRouter();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (geo: any) => {
    const stateSlug = stateSlugMap[geo.id];
    if (stateSlug) {
      router.push(`/state-constitutions/${stateSlug}`);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#0F2C47] mb-6 text-center">
        Interactive State Map
      </h2>
      
      {/* Animated message showing hovered state */}
      <div className="h-8 mb-4 text-center">
        {hoveredState && (
          <p className="text-lg text-[#C41E3A] font-semibold">
            Click to view {hoveredState}
          </p>
        )}
      </div>

      {/* SVG Map */}
      <div className="flex justify-center">
        <ComposableMap
          projection="geoAlbersUsa"
          style={{ width: '100%', height: 'auto', maxWidth: '900px' }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleStateClick(geo)}
                  onMouseEnter={() => setHoveredState(geo.properties.name)}
                  onMouseLeave={() => setHoveredState(null)}
                  style={{
                    default: {
                      fill: '#0F2C47',
                      stroke: '#FFFFFF',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                    hover: {
                      fill: '#C41E3A',
                      stroke: '#FFFFFF',
                      strokeWidth: 0.75,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: '#8B1428',
                      stroke: '#FFFFFF',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
}
