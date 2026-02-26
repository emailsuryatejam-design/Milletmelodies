'use client';

export default function BrassVessel({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={className} fill="none">
      <defs>
        <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="40%" stopColor="#C9A030" />
          <stop offset="70%" stopColor="#B5952F" />
          <stop offset="100%" stopColor="#8B7524" />
        </linearGradient>
        <linearGradient id="brassHighlight" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Vessel body */}
      <path
        d="M25 30 Q20 30 18 45 Q15 70 20 85 Q22 92 40 95 Q58 92 60 85 Q65 70 62 45 Q60 30 55 30Z"
        fill="url(#brassGrad)"
      />
      {/* Highlight */}
      <path
        d="M30 35 Q28 50 30 75 Q32 82 40 83 Q35 82 33 75 Q30 55 32 35Z"
        fill="url(#brassHighlight)"
      />
      {/* Rim */}
      <ellipse cx="40" cy="30" rx="18" ry="5" fill="#D4AF37" stroke="#B5952F" strokeWidth="1" />
      {/* Decorative band */}
      <path d="M20 60 Q40 55 60 60" stroke="#8B7524" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M20 63 Q40 58 60 63" stroke="#FDE68A" strokeWidth="0.4" fill="none" opacity="0.3" />
    </svg>
  );
}
