/**
 * Configuration and resolution of multiple gallery images for Iyengar Yoga poses.
 * Allows viewing clean studio photography alongside supported props variations
 * and alternative practitioner views (without visual arrow clutter).
 */

// Mapping of poses that have distinct clean variations available in /images/poses/
export const KNOWN_POSE_VARIATIONS = {
  'tadasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'עמידת הר (טדאסאנה) בצילום סטודיו נקי ומדויק',
      src: '/images/poses/tadasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגלת נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'תצלום מתרגלת להדגמת יציבה וחלוקת משקל שווה',
      src: '/images/poses/tadasana.png'
    }
  ],
  'utthita-trikonasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו עם בלוק',
      badge: '📸 הדמות הראשית',
      description: 'משולש מוארך עם תמיכת בלוק עץ ופתיחה מלאה של בית החזה',
      src: '/images/poses/utthita-trikonasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגלת נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח משולש מוארך בהדגמת מתרגלת נוספת',
      src: '/images/poses/utthita-trikonasana.png'
    }
  ],
  'paschimottanasana': [
    {
      id: 'classic',
      title: 'תרגול קלאסי (ללא עזרים)',
      badge: '🧘 תרגול קלאסי',
      description: 'כפיפה מלאה לפנים בישיבה עם אחיזת כפות הרגליים',
      src: '/images/poses/paschimottanasana.png'
    },
    {
      id: 'props',
      title: 'תרגול נתמך עם עזרים',
      badge: '🧱 עזרי איינגר',
      description: 'תרגול משקם ונתמך עם בולסטר מתחת לחזה והרפיית המצח',
      src: '/images/poses/paschimottanasana-props.png'
    }
  ]
};

/**
 * Returns the list of gallery image objects for a given pose.
 * If the pose has predefined multiple variations, returns them.
 * Otherwise returns a single item pointing to the clean full pose image.
 */
export function getPoseGallery(pose) {
  if (!pose) return [];

  // Check predefined variations
  if (KNOWN_POSE_VARIATIONS[pose.id]) {
    return KNOWN_POSE_VARIATIONS[pose.id];
  }

  // If pose explicitly has props variation specified in data
  if (pose.hasPropsVariation) {
    return [
      {
        id: 'primary',
        title: 'תרגול קלאסי',
        badge: '🧘 תרגול קלאסי',
        description: `מנח קלאסי של ${pose.poseHebrewName}`,
        src: `/images/poses/${pose.id}.png`
      },
      {
        id: 'props',
        title: 'תרגול נתמך עם עזרים',
        badge: '🧱 עזרי איינגר',
        description: `תרגול נתמך עם בלוקים / בולסטר עבור ${pose.poseHebrewName}`,
        src: `/images/poses/${pose.id}-props.png`
      }
    ];
  }

  // Default single clean image
  return [
    {
      id: 'default',
      title: pose.poseHebrewName || 'הדגמת התנוחה',
      badge: '📸 תצלום התנוחה',
      description: `מנח גוף מלא ומדויק של תנוחת ${pose.poseHebrewName || pose.id}`,
      src: `/images/poses/${pose.id}.png`
    }
  ];
}
