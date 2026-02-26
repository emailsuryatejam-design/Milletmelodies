'use client';

export default function MandalaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
      {/* Outer rings */}
      <circle cx="100" cy="100" r="95" strokeDasharray="3 6" opacity="0.3" />
      <circle cx="100" cy="100" r="80" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="60" />
      {/* Radial spokes */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = Math.round((100 + 25 * Math.cos(angle)) * 100) / 100;
        const y1 = Math.round((100 + 25 * Math.sin(angle)) * 100) / 100;
        const x2 = Math.round((100 + 90 * Math.cos(angle)) * 100) / 100;
        const y2 = Math.round((100 + 90 * Math.sin(angle)) * 100) / 100;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.4" />;
      })}
      {/* Petal forms */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const cx = Math.round((100 + 45 * Math.cos(angle)) * 100) / 100;
        const cy = Math.round((100 + 45 * Math.sin(angle)) * 100) / 100;
        return (
          <ellipse
            key={`p-${i}`}
            cx={cx}
            cy={cy}
            rx="12"
            ry="6"
            transform={`rotate(${i * 45}, ${cx}, ${cy})`}
            fill="currentColor"
            fillOpacity="0.03"
            strokeWidth="0.3"
          />
        );
      })}
      {/* Inner sacred geometry */}
      <circle cx="100" cy="100" r="30" fill="currentColor" fillOpacity="0.05" />
      <circle cx="100" cy="100" r="15" fill="currentColor" fillOpacity="0.08" />
      <circle cx="100" cy="100" r="5" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}
