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
        {/* Elegant Soft Glow for Thin Lines */}
        <filter id="subtle-line-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Specular Glow for Sparkles */}
        <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Dusty Rose Fine Gradient (Matching the exact pink image tone with slight metallic/light shift) */}
        <linearGradient id="dustyRoseDegrade" x1="150" y1="40" x2="300" y2="470" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D994A3" />
          <stop offset="35%" stopColor="#C0788A" />
          <stop offset="70%" stopColor="#E2A8B5" />
          <stop offset="100%" stopColor="#A85F71" />
        </linearGradient>

        {/* Sparkle Radial Glow */}
        <radialGradient id="sparkleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F7D3DC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C0788A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ================= FINE ELEGANT DUSTY ROSE LINES WITH SUBTLE GLOW ================= */}
      <g filter={glow ? "url(#subtle-line-glow)" : undefined}>
        {/* 1. Neck to Right Shoulder & Outer Arm / Back Curve */}
        <path
          d="M 203 46 C 220 70, 252 94, 258 135 C 263 172, 251 228, 253 268 C 256 312, 280 358, 301 405 C 304 412, 301 445, 296 456"
          stroke="url(#dustyRoseDegrade)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* 2. Decollete / Bust line (The central U-curve) */}
        <path
          d="M 135 158 C 128 178, 142 198, 168 195 C 193 192, 212 165, 222 143"
          stroke="url(#dustyRoseDegrade)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* 3. Left Torso & Hip Hourglass Line */}
        <path
          d="M 125 170 C 110 200, 130 255, 155 292 C 160 320, 146 360, 131 398 C 127 410, 128 430, 137 453"
          stroke="url(#dustyRoseDegrade)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* 4. Right Inner Waist to Thigh Curve */}
        <path
          d="M 234 196 C 215 220, 207 260, 208 288 C 209 318, 236 345, 258 380 C 265 410, 255 448, 237 468"
          stroke="url(#dustyRoseDegrade)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* 5. Right Outer Leg Parallel Sweep */}
        <path
          d="M 230 202 C 248 250, 254 310, 288 385 C 293 420, 298 440, 293 460"
          stroke="url(#dustyRoseDegrade)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* 6. Front Thigh Accent Line */}
        <path
          d="M 203 351 C 180 380, 171 405, 171 468"
          stroke="url(#dustyRoseDegrade)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>

      {/* ================= ELEGANT SPARKLES / GLOW ACCENTS ================= */}
      {glow && (
        <g filter="url(#star-glow)">
          {/* Sparkle 1: Right Shoulder Curve */}
          <g transform="translate(258, 135)">
            <circle cx="0" cy="0" r="7" fill="url(#sparkleGlow)" />
            <path d="M 0 -9 Q 0 0 -9 0 Q 0 0 0 9 Q 0 0 9 0 Q 0 0 0 -9 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="1.8" fill="#FFF0F3" />
          </g>

          {/* Sparkle 2: Left Waist Curves */}
          <g transform="translate(155, 292)">
            <circle cx="0" cy="0" r="8" fill="url(#sparkleGlow)" />
            <path d="M 0 -10 Q 0 0 -10 0 Q 0 0 0 10 Q 0 0 10 0 Q 0 0 0 -10 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2" fill="#FFF0F3" />
          </g>

          {/* Sparkle 3: Right Hip Sweep */}
          <g transform="translate(258, 380)">
            <circle cx="0" cy="0" r="8" fill="url(#sparkleGlow)" />
            <path d="M 0 -10 Q 0 0 -10 0 Q 0 0 0 10 Q 0 0 10 0 Q 0 0 0 -10 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2" fill="#FFF0F3" />
          </g>
        </g>
      )}
    </svg>
  );
};