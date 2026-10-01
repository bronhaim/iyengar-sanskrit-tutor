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
      description: 'עמידת הר (טדאסאנה) לפי מסורת איינגר: כפות רגליים צמודות לחלוטין כמקשה אחת, ברכיים וירכיים נעולות',
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
  'virabhadrasana-1': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'ויראבדראסאנה I: רגל קדמית כפופה ב-90 מעלות מדויקות (ירך מקבילה לקרקע), רגל אחורית נעולה ועקב מושרש ברצפה',
      src: '/images/poses/virabhadrasana-1.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח לוחם 1 בהדגמה נוספת',
      src: '/images/poses/virabhadrasana-1.png'
    }
  ],
  'virabhadrasana-2': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'ויראבדראסאנה II: ירך קדמית מקבילה לרצפה ב-90 מעלות, טורסו זקוף וממורכז, זרועות פרושות בגובה הכתפיים',
      src: '/images/poses/virabhadrasana-2.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח לוחם 2 בהדגמה נוספת',
      src: '/images/poses/virabhadrasana-2.png'
    }
  ],
  'vriksasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'תנוחת העץ (וריקשאסאנה): רגל עמידה כעמוד ישר, כף רגל מונחת בירך הפנימית העליונה וידיים בנמסטה מעל הראש',
      src: '/images/poses/vriksasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח עץ בהדגמה נוספת',
      src: '/images/poses/vriksasana.png'
    }
  ],
  'adho-mukha-svanasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'כלב מביט מטה: מנח V הפוך מושלם, כפות ידיים שטוחות, עקבים יורדים לרצפה, ישבנים מורמים מעלה',
      src: '/images/poses/adho-mukha-svanasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח כלב מביט מטה בהדגמה נוספת',
      src: '/images/poses/adho-mukha-svanasana.png'
    }
  ],
  'utthita-parsvakonasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית עם בלוק',
      badge: '📸 הדמות הראשית',
      description: 'זווית צדדית מוארכת (אוטיטה פארשוואקונאסאנה): מנח מדויק עם תמיכת בלוק עץ, רגל קדמית ב-90 מעלות וזרוע מתוחה באלכסון מעבר לראש',
      src: '/images/poses/utthita-parsvakonasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח זווית צדדית בהדגמה נוספת',
      src: '/images/poses/utthita-parsvakonasana.png'
    }
  ],
  'utkatasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'תנוחת הכיסא (אוטקטאסאנה): כפות רגליים וברכיים צמודות היטב, ישיבה עמוקה לאחור והרמת זרועות מעלה',
      src: '/images/poses/utkatasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח כיסא בהדגמה נוספת',
      src: '/images/poses/utkatasana.png'
    }
  ],
  'uttanasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'כפיפה עזה לפנים (אוטאנאסאנה): רגליים נעולות ואנכיות לקרקע, כפיפה ממפרקי הירך וכפות ידיים שטוחות לצד הרגליים',
      src: '/images/poses/uttanasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח אוטאנאסאנה בהדגמה נוספת',
      src: '/images/poses/uttanasana.png'
    }
  ],
  'ardha-chandrasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית עם בלוק',
      badge: '📸 הדמות הראשית',
      description: 'חצי ירח (ארדהה צ\'נדראסאנה): איזון על רגל עמידה ישרה עם תמיכת בלוק עץ, רגל אחורית אופקית ובית חזה פתוח',
      src: '/images/poses/ardha-chandrasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח חצי ירח בהדגמה נוספת',
      src: '/images/poses/ardha-chandrasana.png'
    }
  ],
  'dandasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'תנוחת המטה (דנדאסאנה): גו זקוף ב-90 מעלות מדויקות לרגליים, כפות רגליים בפלקס וידיים משתרשות לצד האגן',
      src: '/images/poses/dandasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח דנדאסאנה בהדגמה נוספת',
      src: '/images/poses/dandasana.png'
    }
  ],
  'parsvottanasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'מתיחה צדדית אינטנסיבית עם ידיים בנמסטה אחורי (Paschima Namaskarasana), רגליים ישרות ופיתול אגן לפנים',
      src: '/images/poses/parsvottanasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח פארשוואוטאנאסאנה בהדגמה נוספת',
      src: '/images/poses/parsvottanasana.png'
    }
  ],
  'prasarita-padottanasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'כפיפה לפנים ברגליים מפושקות: קודקוד הראש נוגע קלות ברצפה, מרפקים ב-90 מעלות וכפות ידיים בקו הרגליים',
      src: '/images/poses/prasarita-padottanasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח פרסאריטה פאדוטאנאסאנה בהדגמה נוספת',
      src: '/images/poses/prasarita-padottanasana.png'
    }
  ],
  'parivrtta-trikonasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית עם בלוק',
      badge: '📸 הדמות הראשית',
      description: 'משולש מסובב (פאריבריטה טריקונאסאנה): פיתול עמוק של עמוד השדרה עם תמיכת בלוק עץ וזרוע נמתחת מעלה',
      src: '/images/poses/parivrtta-trikonasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח משולש מסובב בהדגמה נוספת',
      src: '/images/poses/parivrtta-trikonasana.png'
    }
  ],
  'janu-sirsasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'ראש לברך בישיבה (ג\'אנו שירשאסאנה): כפיפה מלאה מעל רגל ישרה, אחיזת כף הרגל והארכת הגב',
      src: '/images/poses/janu-sirsasana.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח ג\'אנו שירשאסאנה בהדגמה נוספת',
      src: '/images/poses/janu-sirsasana.png'
    }
  ],
  'marichyasana-3': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'פיתול חכם מאריצ\'י (מריצ\'יאסאנה III): עמוד שדרה זקוף ומאורך, מינוף הזרוע כנגד הברך ומבט לאחור מעבר לכתף',
      src: '/images/poses/marichyasana-3.jpg'
    },
    {
      id: 'alt',
      title: 'הדגמה נוספת',
      badge: '🧘 הדגמה נוספת',
      description: 'מנח מריצ\'יאסאנה III בהדגמה נוספת',
      src: '/images/poses/marichyasana-3.png'
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
  ],
  'pincha-mayurasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'פינצ\'ה מאיוראסאנה (עמידת אמות / נוצת הטווס): עמידת אמות יציבה, אמות מקבילות, בית חזה מורם ורגליים מתוחות מעלה',
      src: '/images/poses/pincha-mayurasana.jpg'
    }
  ],
  'savasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 הדמות הראשית',
      description: 'שאוואסאנה (תנוחת הרפיה / גופה): הרפיה מודעת ושקטה בשכיבה על הגב, כפות ידיים פונות מעלה וגוף שליו לחלוטין',
      src: '/images/poses/savasana.jpg'
    }
  ],
  'bhujangasana': [
    {
      id: 'studio',
      title: 'הדגמת סטודיו רשמית',
      badge: '📸 תצלום התנוחה',
      description: 'בהוג\'אנגאסאנה (תנוחת הנחש / קוברה): פתיחת בית החזה, הארכת הגב התחתון ורוחב בכתפיים',
      src: '/images/poses/bhujangasana.jpg'
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
      src: `/images/poses/${pose.id}.jpg`
    }
  ];
}
