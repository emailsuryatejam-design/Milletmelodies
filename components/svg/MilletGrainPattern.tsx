'use client';

export default function MilletGrainPattern({ className }: { className?: string }) {
  const grains = Array.from({ length: 40 }).map((_, i) => ({
    x: Math.random() * 400,
    y: Math.random() * 400,
    r: 1.5 + Math.random() * 2,
    opacity: 0.08 + Math.random() * 0.12,
    rotation: Math.random() * 360,
  }));

  return (
    <svg viewBox="0 0 400 400" className={className} fill="currentColor">
      {grains.map((g, i) => (
        <ellipse
          key={i}
          cx={g.x}
          cy={g.y}
          rx={g.r * 1.5}
          ry={g.r}
          opacity={g.opacity}
          transform={`rotate(${g.rotation}, ${g.x}, ${g.y})`}
        />
      ))}
    </svg>
  );
}
