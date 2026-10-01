import React, { useState, useEffect } from 'react';

/**
 * Custom clean vector illustrations for Iyengar Yoga Poses.
 * Tries loading real high-res images from /images/poses/{poseId}.(png|jpg|jpeg|webp) first,
 * and gracefully falls back to vector illustrations if no photo exists yet.
 */
export const PoseSvgIllustration = ({ poseId, className = "w-full h-full text-terracotta", customSrc = null }) => {
  const formats = ['.jpg', '.png', '.webp', '.jpeg'];
  const [formatIndex, setFormatIndex] = useState(0);
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    setFormatIndex(0);
    setHasImageError(false);
  }, [poseId]);

  const handleImageError = () => {
    if (formatIndex < formats.length - 1) {
      setFormatIndex(prev => prev + 1);
    } else {
      setHasImageError(true);
    }
  };

  if (!hasImageError && (customSrc || poseId)) {
    const imageSrc = customSrc || `/images/poses/${poseId}${formats[formatIndex]}`;
    return (
      <img
        src={imageSrc}
        alt={`תנוחת ${poseId}`}
        className={`${className} object-contain rounded-xl`}
        onError={handleImageError}
      />
    );
  }

  // Color palette for SVG elements
  const primary = "#C07373";    // Terracotta
  const darkPrimary = "#853F3F";
  const bodyColor = "#5E5752";   // Charcoal light
  const headColor = "#383330";
  const lineAccent = "#728C74";  // Sage
  const groundColor = "#E4D6C3";

  const renderIllustration = () => {
    switch (poseId) {
      case "tadasana":
        return (
          <g>
            {/* Ground Line */}
            <line x1="20" y1="180" x2="180" y2="180" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Head */}
            <circle cx="100" cy="40" r="14" fill={headColor} />
            {/* Spine & Body */}
            <line x1="100" y1="54" x2="100" y2="120" stroke={bodyColor} strokeWidth="12" strokeLinecap="round" />
            {/* Arms at side */}
            <line x1="88" y1="62" x2="84" y2="120" stroke={primary} strokeWidth="6" strokeLinecap="round" />
            <line x1="112" y1="62" x2="116" y2="120" stroke={primary} strokeWidth="6" strokeLinecap="round" />
            {/* Legs */}
            <line x1="93" y1="120" x2="94" y2="180" stroke={bodyColor} strokeWidth="8" strokeLinecap="round" />
            <line x1="107" y1="120" x2="106" y2="180" stroke={bodyColor} strokeWidth="8" strokeLinecap="round" />
            {/* Alignment line accent */}
            <line x1="100" y1="20" x2="100" y2="180" stroke={lineAccent} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          </g>
        );

      case "adho-mukha-svanasana":
        return (
          <g>
            <line x1="10" y1="170" x2="190" y2="170" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Inverted V shape */}
            {/* Pelvis Apex */}
            <circle cx="100" cy="60" r="6" fill={darkPrimary} />
            {/* Spine to Hands */}
            <line x1="100" y1="60" x2="40" y2="170" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head down between arms */}
            <circle cx="58" cy="140" r="12" fill={headColor} />
            {/* Arms extending to ground */}
            <line x1="75" y1="100" x2="35" y2="170" stroke={primary} strokeWidth="6" strokeLinecap="round" />
            {/* Legs extending to ground */}
            <line x1="100" y1="60" x2="165" y2="170" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            <line x1="96" y1="65" x2="155" y2="170" stroke={primary} strokeWidth="5" strokeLinecap="round" />
            {/* Angle Indicator */}
            <path d="M70 170 A 30 30 0 0 1 100 130" fill="none" stroke={lineAccent} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        );

      case "utthita-trikonasana":
        return (
          <g>
            <line x1="10" y1="170" x2="190" y2="170" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Legs Triangle */}
            <line x1="50" y1="170" x2="100" y2="100" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            <line x1="150" y1="170" x2="100" y2="100" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Torso lateral tilt */}
            <line x1="100" y1="100" x2="60" y2="115" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head looking up */}
            <circle cx="55" cy="102" r="12" fill={headColor} />
            {/* Bottom Arm to Foot */}
            <line x1="70" y1="110" x2="52" y2="168" stroke={primary} strokeWidth="6" strokeLinecap="round" />
            {/* Top Arm extending straight up */}
            <line x1="70" y1="110" x2="75" y2="40" stroke={primary} strokeWidth="6" strokeLinecap="round" />
            {/* Triangle visual highlight */}
            <polygon points="50,170 150,170 70,110" fill={primary} fillOpacity="0.12" stroke={primary} strokeWidth="1.5" strokeDasharray="4 2" />
          </g>
        );

      case "vriksasana":
        return (
          <g>
            <line x1="30" y1="180" x2="170" y2="180" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Standing Leg */}
            <line x1="100" y1="115" x2="100" y2="180" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Bent Leg (Foot to inner thigh) */}
            <polyline points="100,115 135,140 102,145" fill="none" stroke={primary} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            {/* Spine */}
            <line x1="100" y1="60" x2="100" y2="115" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head */}
            <circle cx="100" cy="46" r="13" fill={headColor} />
            {/* Arms Overhead (Anjali Mudra / Prayer) */}
            <path d="M90,70 Q75,35 98,15" fill="none" stroke={primary} strokeWidth="6" strokeLinecap="round" />
            <path d="M110,70 Q125,35 102,15" fill="none" stroke={primary} strokeWidth="6" strokeLinecap="round" />
            <circle cx="100" cy="15" r="4" fill={lineAccent} />
          </g>
        );

      case "virabhadrasana-2":
        return (
          <g>
            <line x1="10" y1="175" x2="190" y2="175" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Front Bent Leg (90 deg) */}
            <polyline points="50,175 50,125 100,125" fill="none" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            {/* Back Straight Leg */}
            <line x1="100" y1="125" x2="160" y2="175" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Vertical Torso */}
            <line x1="100" y1="75" x2="100" y2="125" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head turned to front */}
            <circle cx="100" cy="58" r="13" fill={headColor} />
            {/* Extended Arms Horizontal */}
            <line x1="30" y1="78" x2="170" y2="78" stroke={primary} strokeWidth="7" strokeLinecap="round" />
            {/* Knee 90 deg alignment check mark */}
            <rect x="50" y="125" width="15" height="15" fill="none" stroke={lineAccent} strokeWidth="1.5" strokeDasharray="2 2" />
          </g>
        );

      case "virabhadrasana-1":
        return (
          <g>
            <line x1="10" y1="175" x2="190" y2="175" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Front Bent Leg */}
            <polyline points="60,175 60,130 110,130" fill="none" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            {/* Back Leg extended */}
            <line x1="110" y1="130" x2="165" y2="175" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Torso tilted slightly forward */}
            <line x1="110" y1="130" x2="105" y2="75" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head */}
            <circle cx="104" cy="60" r="13" fill={headColor} />
            {/* Arms Overhead */}
            <line x1="105" y1="75" x2="90" y2="18" stroke={primary} strokeWidth="6" strokeLinecap="round" />
            <line x1="105" y1="75" x2="102" y2="15" stroke={primary} strokeWidth="6" strokeLinecap="round" />
          </g>
        );

      case "salamba-sirsasana":
        return (
          <g>
            <line x1="40" y1="180" x2="160" y2="180" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Crown of Head on Mat */}
            <circle cx="100" cy="170" r="13" fill={headColor} />
            {/* Forearm Triangle Base */}
            <path d="M80,180 L100,165 L120,180" fill="none" stroke={lineAccent} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            {/* Spine Inverted */}
            <line x1="100" y1="160" x2="100" y2="85" stroke={bodyColor} strokeWidth="11" strokeLinecap="round" />
            {/* Legs Inverted straight up */}
            <line x1="96" y1="85" x2="96" y2="20" stroke={primary} strokeWidth="7" strokeLinecap="round" />
            <line x1="104" y1="85" x2="104" y2="20" stroke={primary} strokeWidth="7" strokeLinecap="round" />
            {/* Vertical Plumb Line */}
            <line x1="100" y1="10" x2="100" y2="185" stroke={primary} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
          </g>
        );

      case "halasana":
        return (
          <g>
            <line x1="10" y1="165" x2="190" y2="165" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Head & Neck on mat */}
            <circle cx="130" cy="152" r="13" fill={headColor} />
            {/* Shoulders on mat */}
            <ellipse cx="120" cy="155" rx="14" ry="8" fill={bodyColor} />
            {/* Curved Back Plough Shape */}
            <path d="M120,152 C100,100 80,70 60,110 C50,130 35,165 30,165" fill="none" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Arms extending away on mat */}
            <line x1="120" y1="158" x2="175" y2="162" stroke={primary} strokeWidth="6" strokeLinecap="round" />
          </g>
        );

      case "paschimottanasana":
        return (
          <g>
            <line x1="10" y1="165" x2="190" y2="165" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Seated Legs Forward */}
            <line x1="100" y1="160" x2="25" y2="160" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Folded Torso over Legs */}
            <path d="M100,160 Q80,120 40,145" fill="none" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head near knees */}
            <circle cx="45" cy="142" r="11" fill={headColor} />
            {/* Arms reaching for toes */}
            <line x1="85" y1="145" x2="22" y2="158" stroke={primary} strokeWidth="6" strokeLinecap="round" />
          </g>
        );

      case "bhujangasana":
        return (
          <g>
            <line x1="10" y1="165" x2="190" y2="165" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Legs & Pelvis flat */}
            <line x1="170" y1="162" x2="100" y2="162" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Arching Cobra Chest */}
            <path d="M100,162 Q75,130 65,95" fill="none" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head lifted */}
            <circle cx="62" cy="78" r="12" fill={headColor} />
            {/* Supporting Arms */}
            <polyline points="85,162 78,130 68,115" fill="none" stroke={primary} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );

      case "utkatasana":
        return (
          <g>
            <line x1="20" y1="180" x2="180" y2="180" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Lower Legs (angled back) */}
            <line x1="100" y1="180" x2="120" y2="140" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Thighs (deep bend) */}
            <line x1="120" y1="140" x2="85" y2="120" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Torso angled forward */}
            <line x1="85" y1="120" x2="60" y2="65" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head */}
            <circle cx="56" cy="50" r="12" fill={headColor} />
            {/* Arms reaching overhead along torso line */}
            <line x1="65" y1="75" x2="40" y2="20" stroke={primary} strokeWidth="6" strokeLinecap="round" />
          </g>
        );

      case "utthita-parsvakonasana":
        return (
          <g>
            <line x1="10" y1="175" x2="190" y2="175" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Bent Front Leg */}
            <polyline points="45,175 45,125 95,125" fill="none" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            {/* Straight Back Leg */}
            <line x1="95" y1="125" x2="165" y2="175" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Diagonal Torso Line */}
            <line x1="95" y1="125" x2="55" y2="105" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head */}
            <circle cx="50" cy="95" r="12" fill={headColor} />
            {/* Arm to Floor */}
            <line x1="60" y1="112" x2="45" y2="172" stroke={primary} strokeWidth="6" strokeLinecap="round" />
            {/* Top Arm Long Line overhead */}
            <line x1="60" y1="112" x2="145" y2="55" stroke={lineAccent} strokeWidth="7" strokeLinecap="round" />
          </g>
        );

      case "virasana":
        return (
          <g>
            <line x1="30" y1="175" x2="170" y2="175" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Folded Knees on ground */}
            <path d="M120,172 L70,172 L85,135 L115,135 Z" fill={primary} fillOpacity="0.2" stroke={primary} strokeWidth="3" />
            {/* Vertical Spine */}
            <line x1="100" y1="135" x2="100" y2="75" stroke={bodyColor} strokeWidth="11" strokeLinecap="round" />
            {/* Head */}
            <circle cx="100" cy="58" r="13" fill={headColor} />
            {/* Hands resting on thighs */}
            <line x1="90" y1="85" x2="80" y2="140" stroke={primary} strokeWidth="6" strokeLinecap="round" />
            <line x1="110" y1="85" x2="120" y2="140" stroke={primary} strokeWidth="6" strokeLinecap="round" />
          </g>
        );

      case "ustrasana":
        return (
          <g>
            <line x1="20" y1="175" x2="180" y2="175" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Shin on ground */}
            <line x1="120" y1="172" x2="70" y2="172" stroke={bodyColor} strokeWidth="9" strokeLinecap="round" />
            {/* Vertical Thighs */}
            <line x1="70" y1="172" x2="70" y2="120" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Backbending Torso */}
            <path d="M70,120 Q80,75 110,90" fill="none" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head dropped back */}
            <circle cx="122" cy="85" r="12" fill={headColor} />
            {/* Arms holding heels */}
            <line x1="95" y1="88" x2="118" y2="168" stroke={primary} strokeWidth="6" strokeLinecap="round" />
          </g>
        );

      case "dhanurasana":
        return (
          <g>
            <line x1="10" y1="170" x2="190" y2="170" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Belly on mat */}
            <ellipse cx="100" cy="155" rx="20" ry="8" fill={lineAccent} opacity="0.3" />
            {/* Arc Body (Bow shape) */}
            <path d="M50,100 Q100,165 150,110" fill="none" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head lifted */}
            <circle cx="48" cy="84" r="12" fill={headColor} />
            {/* Arms reaching back holding ankles */}
            <line x1="58" y1="102" x2="148" y2="112" stroke={primary} strokeWidth="6" strokeLinecap="round" />
          </g>
        );

      case "gomukhasana":
        return (
          <g>
            <line x1="30" y1="175" x2="170" y2="175" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Crossed Knees Base */}
            <ellipse cx="100" cy="155" rx="35" ry="15" fill={primary} fillOpacity="0.2" stroke={primary} strokeWidth="3" />
            {/* Vertical Torso */}
            <line x1="100" y1="145" x2="100" y2="80" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head */}
            <circle cx="100" cy="65" r="12" fill={headColor} />
            {/* Upper Arm up & down behind back */}
            <path d="M92,90 L90,40 L100,55 L100,95" fill="none" stroke={primary} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );

      case "salamba-sarvangasana":
        return (
          <g>
            <line x1="30" y1="180" x2="170" y2="180" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Head & Neck flat */}
            <circle cx="100" cy="170" r="12" fill={headColor} />
            {/* Shoulder shelf */}
            <line x1="75" y1="175" x2="125" y2="175" stroke={bodyColor} strokeWidth="8" strokeLinecap="round" />
            {/* Vertical Body & Legs */}
            <line x1="100" y1="165" x2="100" y2="30" stroke={bodyColor} strokeWidth="11" strokeLinecap="round" />
            {/* Supporting Hands on back */}
            <polyline points="75,175 88,140 98,140" fill="none" stroke={primary} strokeWidth="6" strokeLinecap="round" />
            <polyline points="125,175 112,140 102,140" fill="none" stroke={primary} strokeWidth="6" strokeLinecap="round" />
          </g>
        );

      case "baddha-konasana":
        return (
          <g>
            <line x1="20" y1="175" x2="180" y2="175" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Seated Base */}
            <circle cx="100" cy="165" r="8" fill={bodyColor} />
            {/* Butterfly Knees out */}
            <path d="M100,165 Q135,175 145,150 Q120,150 100,165" fill={primary} fillOpacity="0.25" stroke={primary} strokeWidth="4" />
            <path d="M100,165 Q65,175 55,150 Q80,150 100,165" fill={primary} fillOpacity="0.25" stroke={primary} strokeWidth="4" />
            {/* Upright Spine */}
            <line x1="100" y1="165" x2="100" y2="90" stroke={bodyColor} strokeWidth="10" strokeLinecap="round" />
            {/* Head */}
            <circle cx="100" cy="74" r="13" fill={headColor} />
            {/* Hands holding feet */}
            <line x1="92" y1="105" x2="100" y2="165" stroke={lineAccent} strokeWidth="5" strokeLinecap="round" />
          </g>
        );

      case "chaturanga-dandasana":
        return (
          <g>
            <line x1="10" y1="170" x2="190" y2="170" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
            {/* Horizontal Plank Body */}
            <line x1="40" y1="140" x2="165" y2="140" stroke={bodyColor} strokeWidth="11" strokeLinecap="round" />
            {/* Head facing down */}
            <circle cx="35" cy="138" r="12" fill={headColor} />
            {/* Bent Elbows (90 deg) */}
            <polyline points="55,140 55,168 65,168" fill="none" stroke={primary} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            {/* Toes on ground */}
            <line x1="165" y1="140" x2="170" y2="168" stroke={primary} strokeWidth="7" strokeLinecap="round" />
          </g>
        );

      default:
        // Generic Lotus / Yoga Icon fallback
        return (
          <g>
            <circle cx="100" cy="100" r="85" fill="#FAF5EE" stroke="#E4D6C3" strokeWidth="2" strokeDasharray="4 3" />
            <path d="M100 40 C84 70 60 110 60 140 C60 162 78 176 100 176 C122 176 140 162 140 140 C140 110 116 70 100 40 Z" fill="#F8ECEB" stroke={primary} strokeWidth="3" />
            <path d="M100 70 C90 96 76 124 76 144 C76 156 86 166 100 166 C114 166 124 156 124 144 C124 124 110 96 100 70 Z" fill={primary} />
            <circle cx="100" cy="100" r="12" fill="#FAF5EE" />
          </g>
        );
    }
  };

  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`איור תנוחת יוגה - ${poseId}`}
    >
      {renderIllustration()}
    </svg>
  );
};
