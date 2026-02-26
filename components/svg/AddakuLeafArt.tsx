'use client';

export default function AddakuLeafArt() {
  return (
    <div
      className="w-full h-full"
      style={{ perspective: '900px' }}
    >
      <svg
        viewBox="0 0 480 340"
        className="w-full h-full drop-shadow-2xl"
        style={{
          animation: 'addakuFloat 8s ease-in-out infinite',
        }}
      >
        <defs>
          {/* Leaf gradients */}
          <linearGradient id="leafConeFront" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A6B45" />
            <stop offset="50%" stopColor="#2E4A35" />
            <stop offset="100%" stopColor="#1E3425" />
          </linearGradient>
          <linearGradient id="leafConeBack" x1="100%" y1="0%" x2="0%" y2="80%">
            <stop offset="0%" stopColor="#4A8B55" />
            <stop offset="40%" stopColor="#3A6B45" />
            <stop offset="100%" stopColor="#223D2A" />
          </linearGradient>
          <linearGradient id="leafConeInner" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#4A7B52" />
            <stop offset="100%" stopColor="#2A4A30" />
          </linearGradient>

          {/* Ragi batter - warm pinkish brown */}
          <radialGradient id="ragiBatter" cx="48%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#F0DCD0" />
            <stop offset="40%" stopColor="#E0C8B6" />
            <stop offset="100%" stopColor="#C8A890" />
          </radialGradient>
          {/* Foxtail batter - pale golden yellow */}
          <radialGradient id="foxtailBatter" cx="48%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#F8F0D8" />
            <stop offset="40%" stopColor="#EDE4C4" />
            <stop offset="100%" stopColor="#D8CEA8" />
          </radialGradient>
          {/* Jowar batter - creamy white */}
          <radialGradient id="jowarBatter" cx="48%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#FFFDF8" />
            <stop offset="40%" stopColor="#FDF8EE" />
            <stop offset="100%" stopColor="#EDE5D4" />
          </radialGradient>

          {/* Ghee */}
          <radialGradient id="gheeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE680" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
          </radialGradient>

          {/* Filters */}
          <filter id="coneShadow">
            <feDropShadow dx="3" dy="8" stdDeviation="8" floodColor="#0a1a0e" floodOpacity="0.35" />
          </filter>
          <filter id="batterShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#2C1E16" floodOpacity="0.15" />
          </filter>
          <filter id="steamBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>

          {/* Clip paths for each cone opening */}
          <clipPath id="clip1">
            <ellipse cx="0" cy="0" rx="58" ry="22" />
          </clipPath>
          <clipPath id="clip2">
            <ellipse cx="0" cy="0" rx="58" ry="22" />
          </clipPath>
          <clipPath id="clip3">
            <ellipse cx="0" cy="0" rx="58" ry="22" />
          </clipPath>
        </defs>

        {/* ===== CONE 1 — RAGI (left) ===== */}
        <g transform="translate(90, 22)">
          <g filter="url(#coneShadow)">
            {/* Back leaf flap */}
            <path
              d="M-52 56 Q-48 22 -22 12 Q2 2 12 8 Q30 18 38 38 Q42 48 42 56 L0 208 Z"
              fill="url(#leafConeBack)" opacity="0.7"
            />
            {/* Front cone body */}
            <path
              d="M-58 56 Q-56 60 -42 64 Q-18 70 0 72 Q18 70 42 64 Q56 60 58 56 L0 208 Z"
              fill="url(#leafConeFront)"
            />
            {/* Leaf veins */}
            <g opacity="0.25" strokeWidth="0.6" stroke="#5A9B65" fill="none">
              <path d="M0 72 L0 200" />
              <path d="M0 82 Q-16 88 -30 84" />
              <path d="M0 104 Q-18 112 -36 108" />
              <path d="M0 128 Q-16 136 -32 132" />
              <path d="M0 152 Q-14 158 -26 156" />
              <path d="M0 176 Q-10 180 -18 180" />
              <path d="M0 82 Q16 88 30 84" />
              <path d="M0 104 Q18 112 36 108" />
              <path d="M0 128 Q16 136 32 132" />
              <path d="M0 152 Q14 158 26 156" />
              <path d="M0 176 Q10 180 18 180" />
            </g>
            {/* Stitch marks */}
            <path
              d="M-58 56 Q-56 60 -42 64 Q-18 70 0 72 Q18 70 42 64 Q56 60 58 56 L0 208 Z"
              fill="none" stroke="#D4AF37" strokeWidth="0.9" strokeDasharray="3 5" opacity="0.4"
            />
            {/* Edge highlight */}
            <path d="M0 208 L58 56" stroke="#4A8B55" strokeWidth="1.2" opacity="0.5" fill="none" />
          </g>

          {/* Cone opening - inner dark */}
          <ellipse cx="0" cy="56" rx="58" ry="22" fill="url(#leafConeInner)" />

          {/* Ragi batter inside */}
          <g transform="translate(0, 56)" clipPath="url(#clip1)" filter="url(#batterShadow)">
            <ellipse cx="0" cy="3" rx="50" ry="16" fill="url(#ragiBatter)" />
            {/* Bubbles */}
            <circle cx="-14" cy="0" r="2.2" fill="#D0B8A0" opacity="0.5" />
            <circle cx="10" cy="-2" r="1.8" fill="#D0B8A0" opacity="0.4" />
            <circle cx="-4" cy="4" r="1.5" fill="#D0B8A0" opacity="0.35" />
            <circle cx="16" cy="2" r="1.2" fill="#D0B8A0" opacity="0.3" />
          </g>
          {/* Ghee */}
          <ellipse cx="4" cy="57" rx="7" ry="3.5" fill="url(#gheeGrad)" opacity="0.6" />
          {/* Podi */}
          <circle cx="-10" cy="54" r="2.8" fill="#C75B39" opacity="0.55" />
          <circle cx="-6" cy="59" r="1.8" fill="#D35400" opacity="0.4" />
          <circle cx="-16" cy="58" r="1.5" fill="#B84A2E" opacity="0.35" />

          {/* Rim */}
          <ellipse cx="0" cy="56" rx="58" ry="22" fill="none" stroke="#3A6B45" strokeWidth="2.5" />
          <path d="M-56 50 Q-22 40 0 38 Q22 40 56 50" fill="none" stroke="#5AA865" strokeWidth="1.2" opacity="0.4" />

          {/* Stick pin */}
          <line x1="32" y1="96" x2="48" y2="84" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="48" cy="84" r="2" fill="#8B6914" />

          {/* Label */}
          <text x="0" y="230" textAnchor="middle" fill="#5E3A1A" fontSize="11" fontFamily="serif" fontStyle="italic" opacity="0.7">Ragi</text>

          {/* Steam */}
          <g opacity="0.4" filter="url(#steamBlur)">
            <path d="M-8 40 Q-11 26 -8 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="d" values="M-8 40 Q-11 26 -8 14;M-8 40 Q-5 24 -8 12;M-8 40 Q-11 26 -8 14" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3.5s" repeatCount="indefinite" />
            </path>
            <path d="M8 38 Q11 24 8 12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
              <animate attributeName="d" values="M8 38 Q11 24 8 12;M8 38 Q5 22 8 10;M8 38 Q11 24 8 12" dur="4.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.08;0.4" dur="4.2s" repeatCount="indefinite" />
            </path>
          </g>
        </g>

        {/* ===== CONE 2 — FOXTAIL (center) ===== */}
        <g transform="translate(240, 14)">
          <g filter="url(#coneShadow)">
            <path
              d="M-52 56 Q-48 22 -22 12 Q2 2 12 8 Q30 18 38 38 Q42 48 42 56 L0 218 Z"
              fill="url(#leafConeBack)" opacity="0.7"
            />
            <path
              d="M-58 56 Q-56 60 -42 64 Q-18 70 0 72 Q18 70 42 64 Q56 60 58 56 L0 218 Z"
              fill="url(#leafConeFront)"
            />
            <g opacity="0.25" strokeWidth="0.6" stroke="#5A9B65" fill="none">
              <path d="M0 72 L0 210" />
              <path d="M0 82 Q-16 88 -30 84" />
              <path d="M0 106 Q-18 114 -36 110" />
              <path d="M0 132 Q-16 140 -32 136" />
              <path d="M0 158 Q-14 164 -26 162" />
              <path d="M0 184 Q-10 188 -18 188" />
              <path d="M0 82 Q16 88 30 84" />
              <path d="M0 106 Q18 114 36 110" />
              <path d="M0 132 Q16 140 32 136" />
              <path d="M0 158 Q14 164 26 162" />
              <path d="M0 184 Q10 188 18 188" />
            </g>
            <path
              d="M-58 56 Q-56 60 -42 64 Q-18 70 0 72 Q18 70 42 64 Q56 60 58 56 L0 218 Z"
              fill="none" stroke="#D4AF37" strokeWidth="0.9" strokeDasharray="3 5" opacity="0.4"
            />
            <path d="M0 218 L58 56" stroke="#4A8B55" strokeWidth="1.2" opacity="0.5" fill="none" />
          </g>

          <ellipse cx="0" cy="56" rx="58" ry="22" fill="url(#leafConeInner)" />

          {/* Foxtail batter */}
          <g transform="translate(0, 56)" clipPath="url(#clip2)" filter="url(#batterShadow)">
            <ellipse cx="0" cy="3" rx="50" ry="16" fill="url(#foxtailBatter)" />
            <circle cx="-12" cy="-1" r="2" fill="#D8D0B0" opacity="0.5" />
            <circle cx="12" cy="-3" r="1.6" fill="#D8D0B0" opacity="0.4" />
            <circle cx="0" cy="5" r="1.4" fill="#D8D0B0" opacity="0.35" />
            <circle cx="18" cy="1" r="1.2" fill="#D8D0B0" opacity="0.3" />
          </g>
          <ellipse cx="3" cy="57" rx="7" ry="3.5" fill="url(#gheeGrad)" opacity="0.6" />
          <circle cx="-8" cy="53" r="2.8" fill="#C75B39" opacity="0.55" />
          <circle cx="-3" cy="58" r="1.8" fill="#D35400" opacity="0.4" />
          <circle cx="-14" cy="57" r="1.5" fill="#B84A2E" opacity="0.35" />

          <ellipse cx="0" cy="56" rx="58" ry="22" fill="none" stroke="#3A6B45" strokeWidth="2.5" />
          <path d="M-56 50 Q-22 40 0 38 Q22 40 56 50" fill="none" stroke="#5AA865" strokeWidth="1.2" opacity="0.4" />

          <line x1="32" y1="96" x2="48" y2="84" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="48" cy="84" r="2" fill="#8B6914" />

          <text x="0" y="240" textAnchor="middle" fill="#5E3A1A" fontSize="11" fontFamily="serif" fontStyle="italic" opacity="0.7">Foxtail</text>

          <g opacity="0.4" filter="url(#steamBlur)">
            <path d="M-6 38 Q-9 24 -6 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="d" values="M-6 38 Q-9 24 -6 12;M-6 38 Q-3 22 -6 10;M-6 38 Q-9 24 -6 12" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite" />
            </path>
            <path d="M10 36 Q13 22 10 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
              <animate attributeName="d" values="M10 36 Q13 22 10 10;M10 36 Q7 20 10 8;M10 36 Q13 22 10 10" dur="3.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0.06;0.35" dur="3.8s" repeatCount="indefinite" />
            </path>
          </g>
        </g>

        {/* ===== CONE 3 — JOWAR (right) ===== */}
        <g transform="translate(390, 22)">
          <g filter="url(#coneShadow)">
            <path
              d="M-52 56 Q-48 22 -22 12 Q2 2 12 8 Q30 18 38 38 Q42 48 42 56 L0 208 Z"
              fill="url(#leafConeBack)" opacity="0.7"
            />
            <path
              d="M-58 56 Q-56 60 -42 64 Q-18 70 0 72 Q18 70 42 64 Q56 60 58 56 L0 208 Z"
              fill="url(#leafConeFront)"
            />
            <g opacity="0.25" strokeWidth="0.6" stroke="#5A9B65" fill="none">
              <path d="M0 72 L0 200" />
              <path d="M0 82 Q-16 88 -30 84" />
              <path d="M0 104 Q-18 112 -36 108" />
              <path d="M0 128 Q-16 136 -32 132" />
              <path d="M0 152 Q-14 158 -26 156" />
              <path d="M0 176 Q-10 180 -18 180" />
              <path d="M0 82 Q16 88 30 84" />
              <path d="M0 104 Q18 112 36 108" />
              <path d="M0 128 Q16 136 32 132" />
              <path d="M0 152 Q14 158 26 156" />
              <path d="M0 176 Q10 180 18 180" />
            </g>
            <path
              d="M-58 56 Q-56 60 -42 64 Q-18 70 0 72 Q18 70 42 64 Q56 60 58 56 L0 208 Z"
              fill="none" stroke="#D4AF37" strokeWidth="0.9" strokeDasharray="3 5" opacity="0.4"
            />
            <path d="M0 208 L58 56" stroke="#4A8B55" strokeWidth="1.2" opacity="0.5" fill="none" />
          </g>

          <ellipse cx="0" cy="56" rx="58" ry="22" fill="url(#leafConeInner)" />

          {/* Jowar batter */}
          <g transform="translate(0, 56)" clipPath="url(#clip3)" filter="url(#batterShadow)">
            <ellipse cx="0" cy="3" rx="50" ry="16" fill="url(#jowarBatter)" />
            <circle cx="-15" cy="-1" r="2.2" fill="#E8E0CE" opacity="0.5" />
            <circle cx="10" cy="-3" r="1.8" fill="#E8E0CE" opacity="0.4" />
            <circle cx="-2" cy="5" r="1.5" fill="#E8E0CE" opacity="0.35" />
            <circle cx="14" cy="2" r="1.2" fill="#E8E0CE" opacity="0.3" />
          </g>
          <ellipse cx="3" cy="57" rx="7" ry="3.5" fill="url(#gheeGrad)" opacity="0.6" />
          <circle cx="-12" cy="54" r="2.8" fill="#C75B39" opacity="0.55" />
          <circle cx="-7" cy="59" r="1.8" fill="#D35400" opacity="0.4" />
          <circle cx="-18" cy="58" r="1.5" fill="#B84A2E" opacity="0.35" />

          <ellipse cx="0" cy="56" rx="58" ry="22" fill="none" stroke="#3A6B45" strokeWidth="2.5" />
          <path d="M-56 50 Q-22 40 0 38 Q22 40 56 50" fill="none" stroke="#5AA865" strokeWidth="1.2" opacity="0.4" />

          <line x1="32" y1="96" x2="48" y2="84" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="48" cy="84" r="2" fill="#8B6914" />

          <text x="0" y="230" textAnchor="middle" fill="#5E3A1A" fontSize="11" fontFamily="serif" fontStyle="italic" opacity="0.7">Jowar</text>

          <g opacity="0.4" filter="url(#steamBlur)">
            <path d="M-10 40 Q-13 26 -10 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="d" values="M-10 40 Q-13 26 -10 14;M-10 40 Q-7 24 -10 12;M-10 40 Q-13 26 -10 14" dur="3.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0.08;0.45" dur="3.8s" repeatCount="indefinite" />
            </path>
            <path d="M6 36 Q9 22 6 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
              <animate attributeName="d" values="M6 36 Q9 22 6 10;M6 36 Q3 20 6 8;M6 36 Q9 22 6 10" dur="4.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0.06;0.35" dur="4.5s" repeatCount="indefinite" />
            </path>
          </g>
        </g>
      </svg>

      <style>{`
        @keyframes addakuFloat {
          0% {
            transform: rotateX(2deg) rotateY(-2deg);
          }
          25% {
            transform: rotateX(-1deg) rotateY(2deg);
          }
          50% {
            transform: rotateX(1.5deg) rotateY(3deg);
          }
          75% {
            transform: rotateX(-2deg) rotateY(-1.5deg);
          }
          100% {
            transform: rotateX(2deg) rotateY(-2deg);
          }
        }
      `}</style>
    </div>
  );
}
