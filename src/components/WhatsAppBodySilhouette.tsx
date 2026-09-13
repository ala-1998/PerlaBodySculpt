import React from 'react';

interface WhatsAppSilhouetteProps {
  className?: string;
  glow?: boolean;
}

export const WhatsAppBodySilhouette: React.FC<WhatsAppSilhouetteProps> = ({
  className = "w-full h-full",
  glow = true
}) => {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Perla Fine Line Silhouette"
    >
      <defs>
        {/* توهج ناعم للخطوط الرفيعة */}
        <filter id="subtle-line-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* توهج النجوم */}
        <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* تدرج وردي ترابي ناعم */}
        <linearGradient id="dustyRoseGradient" x1="150" y1="40" x2="300" y2="470" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D994A3" />
          <stop offset="35%" stopColor="#C0788A" />
          <stop offset="70%" stopColor="#E2A8B5" />
          <stop offset="100%" stopColor="#A85F71" />
        </linearGradient>

        {/* توهج دائري للنجوم */}
        <radialGradient id="sparkleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F7D3DC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C0788A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ================= خطوط السيلويت الرفيعة ================= */}
      <g
        filter={glow ? "url(#subtle-line-glow)" : undefined}
        stroke="url(#dustyRoseGradient)"
        strokeLinecap="round"
        fill="none"
      >
        {/* 1. الكتف الأيمن والذراع الخارجي - منفصل عن الفخذ */}
        <path
          d="M 200 40 C 225 65, 255 95, 260 140 C 265 185, 255 235, 260 285 C 265 335, 280 385, 295 435"
          strokeWidth="1.5"
        />

        {/* 2. خط الصدر (U-curve) */}
        <path
          d="M 140 160 C 130 185, 145 205, 170 200 C 195 195, 215 170, 225 145"
          strokeWidth="1.5"
        />

        {/* 3. الخصر الأيسر والورك */}
        <path
          d="M 125 170 C 110 210, 135 260, 160 295 C 165 325, 150 365, 135 400 C 130 415, 132 435, 140 455"
          strokeWidth="1.5"
        />

        {/* 4. الفخذ الأيمن الداخلي - منفصل عن الذراع */}
        <path
          d="M 220 220 C 200 250, 195 285, 200 315 C 205 345, 230 375, 250 405 C 255 430, 250 455, 240 470"
          strokeWidth="1.5"
        />

        {/* 5. الساق اليمنى الخارجية - منفصلة */}
        <path
          d="M 215 230 C 235 275, 245 330, 275 395 C 280 425, 285 445, 280 465"
          strokeWidth="1.3"
        />

        {/* 6. خط الفخذ الأمامي */}
        <path
          d="M 200 365 C 185 390, 175 415, 175 470"
          strokeWidth="1.3"
        />
      </g>

      {/* ================= النجوم المتلألئة ================= */}
      {glow && (
        <g filter="url(#star-glow)">
          {/* نجمة 1: عند الكتف الأيمن */}
          <g transform="translate(260, 140)">
            <circle cx="0" cy="0" r="7" fill="url(#sparkleGlow)" />
            <path d="M 0 -9 Q 0 0 -9 0 Q 0 0 0 9 Q 0 0 9 0 Q 0 0 0 -9 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="1.8" fill="#FFF0F3" />
          </g>

          {/* نجمة 2: عند الخصر الأيسر */}
          <g transform="translate(160, 295)">
            <circle cx="0" cy="0" r="8" fill="url(#sparkleGlow)" />
            <path d="M 0 -10 Q 0 0 -10 0 Q 0 0 0 10 Q 0 0 10 0 Q 0 0 0 -10 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2" fill="#FFF0F3" />
          </g>

          {/* نجمة 3: عند الورك الأيمن */}
          <g transform="translate(250, 405)">
            <circle cx="0" cy="0" r="8" fill="url(#sparkleGlow)" />
            <path d="M 0 -10 Q 0 0 -10 0 Q 0 0 0 10 Q 0 0 10 0 Q 0 0 0 -10 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2" fill="#FFF0F3" />
          </g>
        </g>
      )}
    </svg>
  );
};