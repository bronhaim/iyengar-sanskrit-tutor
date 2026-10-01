/**
 * Configuration and resolution of multiple gallery images for Iyengar Yoga poses.
 * Allows viewing primary studio model with action vectors alongside
 * previous/alternative practitioners (men/women) and props variations.
 */

// Mapping of poses that have known distinct variations available in /images/poses/
export const KNOWN_POSE_VARIATIONS = {
  'tadasana': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'הדגמת מודל סטודיו רשמי עם חיצי פעולה אנטומיים ויישורת מלאה לפי "אור על היוגה"',
      src: '/images/poses/tadasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגלת נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'תצלום מתרגלת להדגמת יציבה וחלוקת משקל שווה מכיוון מבט פרונטלי',
      src: '/images/poses/tadasana.png'
    }
  ],
  'utthita-trikonasana': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'הדגמת סטודיו עם בלוק עץ וחיצי פתיחת בית חזה ומתיחת זרועות',
      src: '/images/poses/utthita-trikonasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגלת נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח משולש מוארך עם מתרגלת נוספת ומבט מעלה אל האגודל',
      src: '/images/poses/utthita-trikonasana.png'
    }
  ],
  'virabhadrasana-1': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'הדגמת סטודיו עם 90 מעלות בברך קדמית, אגן רבוע לפנים וחיצי הרמה',
      src: '/images/poses/virabhadrasana-1.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגל/ת נוסף/ת',
      badge: '🧘 הדגמה נוספת',
      description: 'וריאציית לוחם 1 עם מתרגל/ת נוסף/ת והרמת זרועות מלאה',
      src: '/images/poses/virabhadrasana-1.png'
    }
  ],
  'virabhadrasana-2': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'הדגמת סטודיו עם פריסת זרועות אופקית, ברך קדמית ב-90 מעלות וחיצי פתיחת אגן',
      src: '/images/poses/virabhadrasana-2.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגל/ת נוסף/ת',
      badge: '🧘 הדגמה נוספת',
      description: 'מבט רוחבי נוסף על תנוחת הלוחם 2',
      src: '/images/poses/virabhadrasana-2.png'
    }
  ],
  'adho-mukha-svanasana': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'הדגמת סטודיו בצורת V הפוך מושלם עם חיצי הרמת עצמות הישיבה והורדת עקבים',
      src: '/images/poses/adho-mukha-svanasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגלת נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'כלב מביט מטה בהדגמת מתרגלת להשוואת יישורת בית חזה ושכמות',
      src: '/images/poses/adho-mukha-svanasana.png'
    }
  ],
  'vriksasana': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'הדגמת סטודיו עם כף רגל גבוהה בירך הפנימית, ידיים באנג׳לי מודרה מעל הראש וחיצי צמיחה',
      src: '/images/poses/vriksasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגל/ת נוסף/ת',
      badge: '🧘 הדגמה נוספת',
      description: 'תנוחת העץ בהדגמה נוספת של שיווי משקל ומיקוד מבט',
      src: '/images/poses/vriksasana.png'
    }
  ],
  'dandasana': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'הדגמת סטודיו של תנוחת המקל ב-90 מעלות עם כפות ידיים צמודות לאגן וחיצי הזדקפות',
      src: '/images/poses/dandasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגל/ת נוסף/ת',
      badge: '🧘 הדגמה נוספת',
      description: 'דנדאסאנה בהדגמה נוספת להבנת עבודת העקבים והארכת הגב',
      src: '/images/poses/dandasana.png'
    }
  ],
  'paschimottanasana': [
    {
      id: 'classic',
      title: 'תרגול קלאסי (ללא עזרים)',
      badge: '📸 תצלום מלא',
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
  ],
  'utthita-parsvakonasana': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'הדגמת סטודיו עם 90 מעלות בברך קדמית, תמיכת בלוק וקו אלכסוני מלא מהעקב ליד',
      src: '/images/poses/utthita-parsvakonasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגלת נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'תצלום מתרגלת להדגמת פתיחת בית החזה והארכת הצלע העליונה',
      src: '/images/poses/utthita-parsvakonasana.png'
    }
  ],
  'utkatasana': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'הדגמת סטודיו של תנוחת הכיסא עם ירידת אגן, עקבים מושרשים וזרועות מתוחות מעלה',
      src: '/images/poses/utkatasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגל/ת נוסף/ת',
      badge: '🧘 הדגמה נוספת',
      description: 'תצלום נוסף המדגים את זווית השוקיים ומנח הזרועות לצד האוזניים',
      src: '/images/poses/utkatasana.png'
    }
  ],
  'uttanasana': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'כפיפה עזה לפנים עם כפות ידיים שטוחות ברצפה, רגליים צמודות וחיצי הארכת עמוד שדרה',
      src: '/images/poses/uttanasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגל/ת נוסף/ת',
      badge: '🧘 הדגמה נוספת',
      description: 'מבט צדדי נוסף על תנוחת אוטאנאסאנה וגמישות שרירי הירך האחורית (Hamstrings)',
      src: '/images/poses/uttanasana.png'
    }
  ],
  'ardha-chandrasana': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'הדגמת סטודיו של חצי ירח עם בלוק עץ, רגל מונפת מקבילה לרצפה וחיצי פתיחת אגן',
      src: '/images/poses/ardha-chandrasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגל/ת נוסף/ת',
      badge: '🧘 הדגמה נוספת',
      description: 'הדגמה נוספת להשוואת שיווי משקל ופריסת בית החזה במרחב',
      src: '/images/poses/ardha-chandrasana.png'
    }
  ],
  'parsvottanasana': [
    {
      id: 'studio',
      title: 'סטודיו + חיצי פעולה',
      badge: '🎯 סטודיו ואנטומיה',
      description: 'הדגמת סטודיו עם כפות ידיים בתפילה מאחורי הגב (פסצ׳ימה נמסקר) וחיצי ריבוע אגן',
      src: '/images/poses/parsvottanasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמת מתרגל/ת נוסף/ת',
      badge: '🧘 הדגמה נוספת',
      description: 'תצלום נוסף המדגים את מתיחת הצד והתארכות הגו מעל הרגל הקדמית',
      src: '/images/poses/parsvottanasana.png'
    }
  ]
};

/**
 * Returns the list of gallery image objects for a given pose.
 * If the pose has predefined multiple variations, returns them.
 * Otherwise returns a single item pointing to the best available image.
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
        badge: '📸 תצלום מלא',
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

  // Default single image
  return [
    {
      id: 'default',
      title: pose.poseHebrewName || 'הדגמת התנוחה',
      badge: '📸 תצלום התנוחה',
      description: `מנח גוף מלא של תנוחת ${pose.poseHebrewName || pose.id}`,
      src: `/images/poses/${pose.id}.jpg` // fallback chain in illustration
    }
  ];
}
