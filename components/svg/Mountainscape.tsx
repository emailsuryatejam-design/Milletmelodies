'use client';

export default function Mountainscape() {
  return (
    <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id="mtn-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8E2D2" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#DFD7C4" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="mtn-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DFD7C4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4CBB8" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {/* Far mountains */}
      <path
        d="M0 300 L0 140 Q80 40 200 110 T450 80 T700 130 T950 60 T1200 100 L1200 300Z"
        fill="url(#mtn-far)"
      />
      {/* Near mountains */}
      <path
        d="M0 300 L0 190 Q120 90 280 170 T550 130 T800 200 T1050 150 T1200 180 L1200 300Z"
        fill="url(#mtn-near)"
      />
      {/* Tree silhouettes on ridge */}
      {[100, 250, 320, 480, 620, 780, 900, 1050].map((x, i) => (
        <g key={i} opacity={0.08 + (i % 3) * 0.03}>
          <path
            d={`M${x} ${185 - (i % 3) * 10} l-6 0 l3 -${10 + (i % 2) * 5} z`}
            fill="#2C1E16"
          />
          <path
            d={`M${x} ${180 - (i % 3) * 10} l-8 0 l4 -${12 + (i % 3) * 4} z`}
            fill="#2C1E16"
          />
        </g>
      ))}
    </svg>
  );
}
