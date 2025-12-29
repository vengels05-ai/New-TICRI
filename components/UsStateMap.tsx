'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface StateData {
  name: string;
  slug: string;
  path: string;
}

// Simple embedded US map - no external dependencies
const states: StateData[] = [
  { name: 'California', slug: 'california', path: 'M 50 250 L 30 270 L 40 320 L 60 340 L 90 330 L 100 280 L 80 250 Z' },
  { name: 'Texas', slug: 'texas', path: 'M 380 380 L 340 420 L 360 480 L 420 490 L 480 460 L 490 400 L 450 360 Z' },
  { name: 'Florida', slug: 'florida', path: 'M 720 450 L 740 480 L 760 520 L 750 540 L 720 530 L 700 490 L 710 460 Z' },
  { name: 'New York', slug: 'new-york', path: 'M 750 140 L 780 150 L 800 180 L 790 210 L 760 200 L 740 170 Z' },
  // We'll use a hybrid approach: clickable regions with labels
];

export default function UsStateMap() {
  const router = useRouter();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (slug: string) => {
    router.push(`/state-constitutions/${slug}`);
  };

  // For now, let's use a clean, organized regional selection
  const regions = [
    {
      name: 'Northeast',
      states: ['maine', 'new-hampshire', 'vermont', 'massachusetts', 'rhode-island', 'connecticut', 'new-york', 'new-jersey', 'pennsylvania']
    },
    {
      name: 'Southeast', 
      states: ['delaware', 'maryland', 'virginia', 'west-virginia', 'north-carolina', 'south-carolina', 'georgia', 'florida', 'kentucky', 'tennessee', 'alabama', 'mississippi']
    },
    {
      name: 'Midwest',
      states: ['ohio', 'indiana', 'illinois', 'michigan', 'wisconsin', 'minnesota', 'iowa', 'missouri', 'north-dakota', 'south-dakota', 'nebraska', 'kansas']
    },
    {
      name: 'Southwest',
      states: ['arkansas', 'louisiana', 'oklahoma', 'texas', 'new-mexico', 'arizona']
    },
    {
      name: 'West',
      states: ['colorado', 'wyoming', 'montana', 'idaho', 'utah', 'nevada', 'california', 'oregon', 'washington']
    },
    {
      name: 'Other',
      states: ['alaska', 'hawaii']
    }
  ];

  const stateNames: { [key: string]: string } = {
    'alabama': 'Alabama', 'alaska': 'Alaska', 'arizona': 'Arizona', 'arkansas': 'Arkansas',
    'california': 'California', 'colorado': 'Colorado', 'connecticut': 'Connecticut',
    'delaware': 'Delaware', 'florida': 'Florida', 'georgia': 'Georgia', 'hawaii': 'Hawaii',
    'idaho': 'Idaho', 'illinois': 'Illinois', 'indiana': 'Indiana', 'iowa': 'Iowa',
    'kansas': 'Kansas', 'kentucky': 'Kentucky', 'louisiana': 'Louisiana', 'maine': 'Maine',
    'maryland': 'Maryland', 'massachusetts': 'Massachusetts', 'michigan': 'Michigan',
    'minnesota': 'Minnesota', 'mississippi': 'Mississippi', 'missouri': 'Missouri',
    'montana': 'Montana', 'nebraska': 'Nebraska', 'nevada': 'Nevada',
    'new-hampshire': 'New Hampshire', 'new-jersey': 'New Jersey', 'new-mexico': 'New Mexico',
    'new-york': 'New York', 'north-carolina': 'North Carolina', 'north-dakota': 'North Dakota',
    'ohio': 'Ohio', 'oklahoma': 'Oklahoma', 'oregon': 'Oregon', 'pennsylvania': 'Pennsylvania',
    'rhode-island': 'Rhode Island', 'south-carolina': 'South Carolina',
    'south-dakota': 'South Dakota', 'tennessee': 'Tennessee', 'texas': 'Texas', 'utah': 'Utah',
    'vermont': 'Vermont', 'virginia': 'Virginia', 'washington': 'Washington',
    'west-virginia': 'West Virginia', 'wisconsin': 'Wisconsin', 'wyoming': 'Wyoming'
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-[#0F2C47] mb-2 text-center">
        Select a State Constitution
      </h2>
      <p className="text-gray-600 text-center mb-8">Browse by geographic region</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions.map((region) => (
          <div key={region.name} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border-2 border-slate-200">
            <h3 className="text-xl font-bold text-[#0F2C47] mb-4 pb-2 border-b-2 border-[#C41E3A]">
              {region.name}
            </h3>
            <div className="space-y-2">
              {region.states.map((stateSlug) => (
                <button
                  key={stateSlug}
                  onClick={() => handleStateClick(stateSlug)}
                  onMouseEnter={() => setHoveredState(stateNames[stateSlug])}
                  onMouseLeave={() => setHoveredState(null)}
                  className="w-full text-left px-4 py-2 rounded-md bg-[#0F2C47] text-white
                           hover:bg-[#C41E3A] hover:scale-105 transition-all duration-200
                           font-medium text-sm shadow-md hover:shadow-lg"
                >
                  {stateNames[stateSlug]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {hoveredState && (
        <div className="mt-6 text-center">
          <p className="text-xl text-[#C41E3A] font-bold animate-pulse">
            Click to view {hoveredState} Constitution →
          </p>
        </div>
      )}
    </div>
  );
}
