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
        {/* 1. الكتف الأيمن والذراع الخارجي - plus éloigné du corps */}
        <path
          d="
            M 200 40
            C 225 65, 255 95, 260 140
            C 265 185, 255 235, 263 285
            C 270 330, 292 375, 307 420
            C 315 442, 318 455, 312 470
          "
          strokeWidth="1.5"
        />

        {/* 2. خط الصدر (U-curve) */}
        <path
          d="M 140 160 C 130 185, 145 205, 170 200 C 195 195, 215 170, 225 145"
          strokeWidth="1.5"
        />

        {/* 3. Taille gauche + hanche + cuisse */}
        <path
          d="
            M 125 170
            C 113 204, 126 238, 150 270
            C 163 287, 166 304, 162 322
            C 158 343, 148 363, 140 382
            C 132 401, 130 420, 135 438
            C 136 444, 138 450, 140 455
          "
          strokeWidth="1.5"
        />

        {/* 4. Fkhadh droit intérieur - courbe plus naturelle */}
        <path
          d="
            M 220 220
            C 207 245, 198 270, 199 295
            C 200 322, 214 346, 235 368
            C 253 387, 260 406, 257 425
            C 255 442, 248 457, 240 470
          "
          strokeWidth="1.5"
        />

        {/* 5. Contour extérieur jambe droite - plus fluide */}
        <path
          d="
            M 215 230
            C 225 258, 235 287, 242 315
            C 249 342, 263 367, 275 391
            C 286 414, 290 437, 284 455
            C 283 459, 282 462, 280 465
          "
          strokeWidth="1.3"
        />

        {/* 6. Ligne intérieure cuisse/jambe gauche - plus douce */}
        <path
          d="
            M 200 365
            C 188 382, 178 400, 173 419
            C 169 437, 171 454, 175 470
          "
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