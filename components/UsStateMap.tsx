'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import USAMap from '@mirawision/usa-map-react';

// Map state abbreviations to slugs
const stateSlugMap: { [key: string]: string } = {
  'AL': 'alabama', 'AK': 'alaska', 'AZ': 'arizona', 'AR': 'arkansas', 'CA': 'california',
  'CO': 'colorado', 'CT': 'connecticut', 'DE': 'delaware', 'FL': 'florida', 'GA': 'georgia',
  'HI': 'hawaii', 'ID': 'idaho', 'IL': 'illinois', 'IN': 'indiana', 'IA': 'iowa',
  'KS': 'kansas', 'KY': 'kentucky', 'LA': 'louisiana', 'ME': 'maine', 'MD': 'maryland',
  'MA': 'massachusetts', 'MI': 'michigan', 'MN': 'minnesota', 'MS': 'mississippi', 'MO': 'missouri',
  'MT': 'montana', 'NE': 'nebraska', 'NV': 'nevada', 'NH': 'new-hampshire', 'NJ': 'new-jersey',
  'NM': 'new-mexico', 'NY': 'new-york', 'NC': 'north-carolina', 'ND': 'north-dakota', 'OH': 'ohio',
  'OK': 'oklahoma', 'OR': 'oregon', 'PA': 'pennsylvania', 'RI': 'rhode-island', 'SC': 'south-carolina',
  'SD': 'south-dakota', 'TN': 'tennessee', 'TX': 'texas', 'UT': 'utah', 'VT': 'vermont',
  'VA': 'virginia', 'WA': 'washington', 'WV': 'west-virginia', 'WI': 'wisconsin', 'WY': 'wyoming'
};

const stateNames: { [key: string]: string } = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
  'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
  'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
  'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
  'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
  'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
  'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
  'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
  'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
  'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming'
};

export default function UsStateMap() {
  const router = useRouter();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (stateAbbr: string) => {
    const slug = stateSlugMap[stateAbbr];
    if (slug) {
      router.push(`/state-constitutions/${slug}`);
    }
  };

  const handleHover = (stateAbbr: string) => {
    setHoveredState(stateAbbr);
  };

  const handleLeave = () => {
    setHoveredState(null);
  };

  const customizeStates = () => {
    const stateConfig: any = {};
    Object.keys(stateSlugMap).forEach(abbr => {
      stateConfig[abbr] = {
        fill: '#0F2C47',
        onClick: () => handleStateClick(abbr),
        onHover: () => handleHover(abbr),
        onLeave: handleLeave,
      };
    });
    return stateConfig;
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-[#0F2C47] mb-2 text-center">
        Interactive United States Map
      </h2>
      <p className="text-gray-600 text-center mb-8">Click any state to view its constitution</p>

      {/* Fixed height container to prevent layout shift */}
      <div className="text-center mb-4 h-10 flex items-center justify-center">
        {hoveredState && (
          <p className="text-xl text-[#C41E3A] font-bold">
            {stateNames[hoveredState]}
          </p>
        )}
      </div>

      {/* Fixed container to prevent map shake */}
      <div className="flex justify-center w-full">
        <div className="w-full max-w-4xl">
          <USAMap
            customStates={customizeStates()}
            defaultState={{
              fill: '#0F2C47',
              stroke: '#FFFFFF',
            }}
          />
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Click any state to explore its constitution
      </p>
    </div>
  );
}

