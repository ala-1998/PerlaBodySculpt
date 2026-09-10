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
      viewBox="190 25 630 945"
      preserveAspectRatio="xMidYMin meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Perla Signature Rose Gold Silhouette"
    >
      <defs>
        {/* Soft Ambient Ribbon Shadow */}
        <filter id="ribbon-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="6" dy="12" stdDeviation="9" floodColor="#8B4D3B" floodOpacity="0.22" />
        </filter>

        {/* Specular Glow for Sparkles */}
        <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Primary 3D Rose Gold Gradient (Multi-stop for realistic metallic sheen) */}
        <linearGradient id="roseGoldBody" x1="200" y1="100" x2="800" y2="900" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C98A6F" />
          <stop offset="18%" stopColor="#F5DFD2" />
          <stop offset="35%" stopColor="#BA7558" />
          <stop offset="52%" stopColor="#ECC2AB" />
          <stop offset="70%" stopColor="#8F4832" />
          <stop offset="85%" stopColor="#E5B79E" />
          <stop offset="100%" stopColor="#B36A4E" />
        </linearGradient>

        {/* Secondary Rose Gold Gradient for right side flows */}
        <linearGradient id="roseGoldSweep" x1="500" y1="50" x2="800" y2="950" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B87355" />
          <stop offset="15%" stopColor="#FCECE3" />
          <stop offset="35%" stopColor="#AB6346" />
          <stop offset="55%" stopColor="#F2D1BF" />
          <stop offset="75%" stopColor="#7D3B25" />
          <stop offset="90%" stopColor="#DFAD94" />
          <stop offset="100%" stopColor="#A85C3F" />
        </linearGradient>

        {/* Highlight Gradient for the top ridge of the 3D tube */}
        <linearGradient id="tubeHighlight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#FFF2EB" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
        </linearGradient>

        {/* Sparkle Gradient */}
        <radialGradient id="sparkleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#FFF3ED" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#E8B89E" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C98A6F" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ================= BACKGROUND TUBE SHADOWS ================= */}
      <g filter="url(#ribbon-shadow)">
        {/* 1. Neck to Back/Right Thigh Ribbon */}
        <path
          d="M 495 58 C 530 112 602 165 644 212 C 668 248 662 360 638 460 C 618 535 645 640 695 735 C 738 815 774 888 778 930"
          stroke="#7A3D29"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
        />

        {/* 2. Décolleté / Breast Curve Ribbon */}
        <path
          d="M 538 260 C 490 320 430 405 375 405 C 335 405 305 370 295 315"
          stroke="#7A3D29"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
        />

        {/* 3. Left Torso / Waist / Hip Ribbon */}
        <path
          d="M 275 335 C 258 380 255 425 268 472 C 285 532 328 578 336 626 C 350 695 334 772 295 852 C 282 880 286 910 305 935"
          stroke="#7A3D29"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
        />

        {/* 4. Right Inner Flank / Waist Ribbon */}
        <path
          d="M 575 365 C 545 425 515 482 508 538 C 500 600 522 668 568 728 C 625 805 658 875 605 955"
          stroke="#7A3D29"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
        />

        {/* 5. Right Echo Line */}
        <path
          d="M 575 430 C 612 542 668 678 728 805 C 748 848 752 888 745 912"
          stroke="#7A3D29"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.45"
        />

        {/* 6. Groin / Pelvic Accent Curve */}
        <path
          d="M 480 720 C 455 770 415 848 375 940"
          stroke="#7A3D29"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.45"
        />
      </g>

      {/* ================= PRIMARY 3D METALLIC ROSE GOLD RIBBONS ================= */}
      {/* 1. Neck to Back/Right Thigh Ribbon */}
      <path
        d="M 495 58 C 530 112 602 165 644 212 C 668 248 662 360 638 460 C 618 535 645 640 695 735 C 738 815 774 888 778 930"
        stroke="url(#roseGoldSweep)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* 2. Décolleté / Breast Curve Ribbon */}
      <path
        d="M 538 260 C 490 320 430 405 375 405 C 335 405 305 370 295 315"
        stroke="url(#roseGoldBody)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* 3. Left Torso / Waist / Hip Ribbon */}
      <path
        d="M 275 335 C 258 380 255 425 268 472 C 285 532 328 578 336 626 C 350 695 334 772 295 852 C 282 880 286 910 305 935"
        stroke="url(#roseGoldBody)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* 4. Right Inner Flank / Waist Ribbon */}
      <path
        d="M 575 365 C 545 425 515 482 508 538 C 500 600 522 668 568 728 C 625 805 658 875 605 955"
        stroke="url(#roseGoldSweep)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* 5. Right Echo Line */}
      <path
        d="M 575 430 C 612 542 668 678 728 805 C 748 848 752 888 745 912"
        stroke="url(#roseGoldSweep)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* 6. Groin / Pelvic Accent Curve */}
      <path
        d="M 480 720 C 455 770 415 848 375 940"
        stroke="url(#roseGoldBody)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ================= 3D TUBULAR SPECULAR HIGHLIGHT RIDGES ================= */}
      {/* 1. Highlight Neck & Shoulder Ridge */}
      <path
        d="M 497 60 C 531 113 603 166 643 211 C 666 247 660 358 636 458 C 616 533 643 638 693 733 C 736 813 772 886 776 928"
        stroke="url(#tubeHighlight)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />

      {/* 2. Highlight Décolleté */}
      <path
        d="M 536 261 C 489 321 430 403 375 403 C 336 403 306 369 296 316"
        stroke="url(#tubeHighlight)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />

      {/* 3. Highlight Left Waist Curve */}
      <path
        d="M 276 337 C 260 381 257 426 270 473 C 287 533 330 579 338 627 C 352 696 336 773 297 853"
        stroke="url(#tubeHighlight)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />

      {/* 4. Highlight Right Flank */}
      <path
        d="M 573 367 C 544 426 514 483 507 539 C 499 601 521 669 567 729 C 623 806 656 876 604 954"
        stroke="url(#tubeHighlight)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />

      {/* ================= METALLIC SPECULAR SPARKLES (Exact locations from WhatsApp image) ================= */}
      {glow && (
        <g filter="url(#star-glow)">
          {/* Sparkle 1: Right Shoulder / Upper Back Curve (x=644, y=212) */}
          <g transform="translate(644, 212)">
            <circle cx="0" cy="0" r="14" fill="url(#sparkleGlow)" />
            {/* 4-point diamond star */}
            <path d="M 0 -18 Q 0 0 -18 0 Q 0 0 0 18 Q 0 0 18 0 Q 0 0 0 -18 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="3.5" fill="#FFF8F5" />
          </g>

          {/* Sparkle 2: Left Waist Inward Curve (x=336, y=555) */}
          <g transform="translate(330, 565)">
            <circle cx="0" cy="0" r="15" fill="url(#sparkleGlow)" />
            <path d="M 0 -19 Q 0 0 -19 0 Q 0 0 0 19 Q 0 0 19 0 Q 0 0 0 -19 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="4" fill="#FFF8F5" />
          </g>

          {/* Sparkle 3: Right Inner Flank Hip Curve (x=650, y=715) */}
          <g transform="translate(650, 715)">
            <circle cx="0" cy="0" r="16" fill="url(#sparkleGlow)" />
            <path d="M 0 -20 Q 0 0 -20 0 Q 0 0 0 20 Q 0 0 20 0 Q 0 0 0 -20 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="4.5" fill="#FFF8F5" />
          </g>
        </g>
      )}
    </svg>
  );
};
