'use client';

export default function StoneMortar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <linearGradient id="stoneGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B8178" />
          <stop offset="50%" stopColor="#6B6158" />
          <stop offset="100%" stopColor="#4A4038" />
        </linearGradient>
        <linearGradient id="pestleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9B9188" />
          <stop offset="100%" stopColor="#6B6158" />
        </linearGradient>
      </defs>
      {/* Mortar bowl */}
      <path
        d="M20 55 Q15 55 12 70 Q8 90 20 100 Q35 110 60 110 Q85 110 100 100 Q112 90 108 70 Q105 55 100 55Z"
        fill="url(#stoneGrad)"
      />
      {/* Mortar inner */}
      <ellipse cx="60" cy="58" rx="38" ry="8" fill="#4A4038" />
      <ellipse cx="60" cy="58" rx="35" ry="6" fill="#5A5048" />
      {/* Pestle */}
      <g className="animate-mortar-pound origin-bottom">
        <rect x="55" y="10" width="10" height="50" rx="5" fill="url(#pestleGrad)" />
        <ellipse cx="60" cy="12" rx="8" ry="4" fill="#9B9188" />
        <ellipse cx="60" cy="58" rx="7" ry="3" fill="#6B6158" />
      </g>
      {/* Grain dots inside mortar */}
      <circle cx="50" cy="56" r="1.5" fill="#D4AF37" opacity="0.6" />
      <circle cx="65" cy="55" r="1" fill="#D4AF37" opacity="0.4" />
      <circle cx="58" cy="58" r="1.2" fill="#D4AF37" opacity="0.5" />
    </svg>
  );
}
