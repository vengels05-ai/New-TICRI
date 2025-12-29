'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Simplified SVG paths for US states
const statePaths: { [key: string]: { path: string; name: string } } = {
  'california': { name: 'California', path: 'M 30,180 L 20,190 L 15,210 L 20,240 L 30,260 L 50,270 L 70,265 L 80,250 L 85,220 L 75,190 L 60,175 Z' },
  'oregon': { name: 'Oregon', path: 'M 25,120 L 15,130 L 20,150 L 35,165 L 60,168 L 80,160 L 85,140 L 70,125 Z' },
  'washington': { name: 'Washington', path: 'M 30,90 L 20,100 L 25,115 L 50,120 L 80,115 L 90,100 L 75,88 Z' },
  'nevada': { name: 'Nevada', path: 'M 75,170 L 70,190 L 75,220 L 85,235 L 95,230 L 100,200 L 95,175 Z' },
  'idaho': { name: 'Idaho', path: 'M 90,100 L 85,125 L 90,160 L 105,165 L 115,150 L 110,110 L 100,95 Z' },
  'montana': { name: 'Montana', path: 'M 110,85 L 105,110 L 115,145 L 170,140 L 175,90 L 165,80 Z' },
  'wyoming': { name: 'Wyoming', path: 'M 115,150 L 110,180 L 120,200 L 165,195 L 170,155 L 165,145 Z' },
  'utah': { name: 'Utah', path: 'M 100,200 L 95,230 L 105,260 L 125,265 L 135,235 L 130,205 Z' },
  'colorado': { name: 'Colorado', path: 'M 135,205 L 130,235 L 140,265 L 185,260 L 190,210 Z' },
  'arizona': { name: 'Arizona', path: 'M 95,240 L 90,270 L 100,300 L 130,305 L 140,275 L 135,245 Z' },
  'new-mexico': { name: 'New Mexico', path: 'M 135,245 L 130,275 L 140,320 L 180,315 L 185,265 Z' },
  'texas': { name: 'Texas', path: 'M 180,265 L 175,290 L 185,330 L 220,355 L 250,345 L 260,310 L 270,285 L 260,260 L 240,250 Z' },
  'oklahoma': { name: 'Oklahoma', path: 'M 240,245 L 235,265 L 245,280 L 290,275 L 295,250 Z' },
  'kansas': { name: 'Kansas', path: 'M 235,220 L 230,245 L 290,240 L 295,215 Z' },
  'nebraska': { name: 'Nebraska', path: 'M 230,185 L 225,210 L 285,205 L 290,180 Z' },
  'south-dakota': { name: 'South Dakota', path: 'M 230,145 L 225,175 L 285,170 L 290,140 Z' },
  'north-dakota': { name: 'North Dakota', path: 'M 230,100 L 225,135 L 285,130 L 290,95 Z' },
  'minnesota': { name: 'Minnesota', path: 'M 290,95 L 285,140 L 310,145 L 330,150 L 335,105 L 320,90 Z' },
  'iowa': { name: 'Iowa', path: 'M 290,170 L 285,200 L 335,205 L 345,175 Z' },
  'missouri': { name: 'Missouri', path: 'M 290,205 L 285,240 L 340,245 L 350,215 Z' },
  'arkansas': { name: 'Arkansas', path: 'M 285,245 L 280,275 L 330,280 L 340,250 Z' },
  'louisiana': { name: 'Louisiana', path: 'M 280,280 L 270,310 L 285,330 L 320,325 L 330,290 Z' },
  'wisconsin': { name: 'Wisconsin', path: 'M 330,105 L 325,155 L 355,160 L 370,140 L 365,100 Z' },
  'illinois': { name: 'Illinois', path: 'M 340,175 L 335,220 L 370,225 L 380,185 Z' },
  'michigan': { name: 'Michigan', path: 'M 365,100 L 360,145 L 390,150 L 410,135 L 405,95 Z' },
  'indiana': { name: 'Indiana', path: 'M 375,185 L 370,220 L 395,225 L 405,195 Z' },
  'ohio': { name: 'Ohio', path: 'M 405,175 L 400,210 L 435,215 L 445,185 Z' },
  'kentucky': { name: 'Kentucky', path: 'M 375,225 L 370,250 L 440,255 L 450,230 Z' },
  'tennessee': { name: 'Tennessee', path: 'M 370,250 L 365,270 L 465,275 L 470,255 Z' },
  'mississippi': { name: 'Mississippi', path: 'M 335,280 L 330,320 L 365,325 L 370,285 Z' },
  'alabama': { name: 'Alabama', path: 'M 370,285 L 365,325 L 405,330 L 415,290 Z' },
  'georgia': { name: 'Georgia', path: 'M 415,285 L 410,325 L 455,330 L 465,290 Z' },
  'florida': { name: 'Florida', path: 'M 455,330 L 450,360 L 470,385 L 490,375 L 485,345 L 475,330 Z' },
  'south-carolina': { name: 'South Carolina', path: 'M 465,280 L 460,305 L 495,310 L 500,285 Z' },
  'north-carolina': { name: 'North Carolina', path: 'M 470,255 L 465,280 L 520,285 L 530,260 Z' },
  'virginia': { name: 'Virginia', path: 'M 450,230 L 445,255 L 520,260 L 530,235 Z' },
  'west-virginia': { name: 'West Virginia', path: 'M 445,215 L 440,235 L 475,240 L 485,220 Z' },
  'pennsylvania': { name: 'Pennsylvania', path: 'M 485,180 L 480,210 L 545,215 L 555,185 Z' },
  'maryland': { name: 'Maryland', path: 'M 520,235 L 515,250 L 550,255 L 555,240 Z' },
  'delaware': { name: 'Delaware', path: 'M 555,240 L 550,260 L 565,265 L 570,245 Z' },
  'new-jersey': { name: 'New Jersey', path: 'M 555,200 L 550,230 L 575,235 L 580,205 Z' },
  'new-york': { name: 'New York', path: 'M 545,155 L 535,190 L 580,195 L 595,165 Z' },
  'connecticut': { name: 'Connecticut', path: 'M 585,185 L 580,200 L 605,205 L 610,190 Z' },
  'rhode-island': { name: 'Rhode Island', path: 'M 610,190 L 605,200 L 615,205 L 620,195 Z' },
  'massachusetts': { name: 'Massachusetts', path: 'M 595,170 L 590,190 L 625,195 L 635,175 Z' },
  'vermont': { name: 'Vermont', path: 'M 585,145 L 580,170 L 600,175 L 605,150 Z' },
  'new-hampshire': { name: 'New Hampshire', path: 'M 605,145 L 600,175 L 620,180 L 625,150 Z' },
  'maine': { name: 'Maine', path: 'M 625,110 L 615,150 L 645,155 L 655,120 Z' },
  'alaska': { name: 'Alaska', path: 'M 5,350 L 0,370 L 20,385 L 50,380 L 60,355 L 40,345 Z' },
  'hawaii': { name: 'Hawaii', path: 'M 180,380 L 175,390 L 185,400 L 210,395 L 215,385 L 200,380 Z' },
};

export default function UsStateMap() {
  const router = useRouter();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (stateSlug: string) => {
    router.push(`/state-constitutions/${stateSlug}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-[#0F2C47] mb-2 text-center">
        Interactive United States Map
      </h2>
      <p className="text-gray-600 text-center mb-8">Click any state to view its constitution</p>

      {hoveredState && (
        <div className="text-center mb-4 h-8">
          <p className="text-xl text-[#C41E3A] font-bold animate-pulse">
            {statePaths[hoveredState]?.name}
          </p>
        </div>
      )}

      <div className="flex justify-center bg-slate-50 rounded-lg p-4">
        <svg
          viewBox="0 0 700 420"
          className="w-full h-auto max-w-4xl"
          style={{ maxHeight: '600px' }}
        >
          {/* US State paths */}
          {Object.entries(statePaths).map(([slug, data]) => (
            <path
              key={slug}
              d={data.path}
              fill={hoveredState === slug ? '#C41E3A' : '#0F2C47'}
              stroke="#FFFFFF"
              strokeWidth="1.5"
              className="cursor-pointer transition-all duration-200 hover:opacity-90"
              onClick={() => handleStateClick(slug)}
              onMouseEnter={() => setHoveredState(slug)}
              onMouseLeave={() => setHoveredState(null)}
              style={{
                filter: hoveredState === slug ? 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' : 'none',
                transform: hoveredState === slug ? 'scale(1.02)' : 'scale(1)',
                transformOrigin: 'center',
              }}
            >
              <title>{data.name}</title>
            </path>
          ))}
        </svg>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Hover over any state to see its name, click to explore its constitution
      </p>
    </div>
  );
}
