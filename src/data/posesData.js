export const POSE_DATABASE = [
  // --- 1. תנוחות עמידה (Standing Poses) ---
  {
    id: "tadasana",
    type: "root",
    sanskritScript: "ताडासन • Tādāsana",
    poseHebrewName: "טדאסאנה (תנוחת ההר)",
    englishName: "Mountain Pose",
    category: "standing",
    question: "מה הפירוש המילולי של המילה 'טָאדָה' (Tāḍa)?",
    options: ["הר", "עץ", "מקל ישר", "לוחם"],
    correctIndex: 0,
    breakdown: [
      { root: "טדה (Tāḍa)", meaning: "הר" },
      { root: "אסאנה (Āsana)", meaning: "תנוחה / יציבה" }
    ],
    iyengarNote: "למדו לעמוד שווה על עקבי הרגליים והבהונות, כשהמשקל מחולק באופן מושלם כהר איתן.",
    benefits: "שיפור יציבת הגוף, חלוקת משקל מאוזנת על כפות הרגליים, חיזוק הירכיים והבטן, והגברת התודעה והנוכחות בקימה.",
    drishti: "👁️ לפנים בגובה העיניים - מבט רך וממוקד קדימה (Nasagrai)",
    cautions: "⚠️ במקרה של סחרחורת או חוסר יציבות, מומלץ לעמוד בפישוק קל (ברוחב האגן) או כשהגב נתמך בקיר.",
    anatomicalPointers: [
      { area: "ראש וקודקוד", direction: "צמיחה והתארכות אנכית ישרה כלפי מעלה" },
      { area: "חזה וכלוב צלעות", direction: "מורם, רחב ופתוח" },
      { area: "ירכיים וברכיים", direction: "הדוקות מעלה אל מפרקי הירך" },
      { area: "עקבים וכפות רגליים", direction: "השרשה אחידה וחלוקת משקל שווה לקרקע" }
    ],
    propsGuide: "🧱 עמידה כשהעקבים, הישבן והשכמות צמודים לקיר לבדיקת יציבה אנכית. הידוק בלוק בין הירכיים הפנימיות ללמידת העבודה האקטיבית של הרגליים."
  },
  {
    id: "utthita-trikonasana",
    type: "identify",
    sanskritScript: "उत्थित त्रिकोणासन • Utthita Trikoṇāsana",
    poseHebrewName: "אוטיטה טריקונאסאנה",
    englishName: "Extended Triangle Pose",
    category: "standing",
    question: "מה שמה של התנוחה בתמונה?",
    options: ["ויראבדראסאנה II", "אוטיטה טריקונאסאנה", "פארשוואקונאסאנה", "פרסאריטה פאדוטאנאסאנה"],
    correctIndex: 1,
    breakdown: [
      { root: "אוטיטה (Utthita)", meaning: "מוארך / מורם" },
      { root: "טרי (Tri)", meaning: "שלוש" },
      { root: "קונה (Koṇa)", meaning: "זווית" }
    ],
    iyengarNote: "בתנוחת המשולש המוארך, הגב והרגליים מתוחים באותו מישור. הירכיים והחזה פתוחים לחלוטין.",
    benefits: "הגמשת המפרקים והירכיים, פתיחת בית החזה והצלעות, הקלה על כאבי גב וחיזוק שרירי הרגליים והליבה.",
    drishti: "👁️ אל אגודל כף היד העליונה המורמת לתקרה",
    cautions: "⚠️ במקרה של כאבי צוואר, שמר/י על המבט ישר לפנים. במקרה של לחץ דם גבוה, הימנע/י משהות ממושכת ללא תמיכת בלוק.",
    anatomicalPointers: [
      { area: "זרוע עליונה", direction: "מתיחה אנכית ישרה מעלה" },
      { area: "יד תחתונה", direction: "תמיכה על קוביית עץ מחוץ לקרסול" },
      { area: "חזה וגו", direction: "פתיחה צדדית ומתיחת שתי הצלעות באותו מישור" },
      { area: "רגליים", direction: "ישרות ומהודקות בחוזקה לרצפה" }
    ],
    propsGuide: "🧱 הנחת כף היד התחתונה על בלוק מעץ מאחורי הקרסול לשמירה על אורך הצלע התחתונה ופתיחת החזה. השענת עקב כף הרגל והגב מול קיר."
  },
  {
    id: "vriksasana",
    type: "root",
    sanskritScript: "वृक्षासन • Vṛkṣāsana",
    poseHebrewName: "וריקשאסאנה (תנוחת העץ)",
    englishName: "Tree Pose",
    category: "standing",
    question: "מה מסמלת המילה 'וריקשה' (Vṛkṣa) בתנוחה זו?",
    options: ["ענף גמיש", "עץ", "שורש", "פרח הלוטוס"],
    correctIndex: 1,
    breakdown: [
      { root: "וריקשה (Vṛkṣa)", meaning: "עץ" }
    ],
    iyengarNote: "איינגר מלמד לקבע את כף הרגל במעלה הירך הפנימית ולמתוח את הזרועות ישרות מעלה כענפי עץ.",
    benefits: "פיתוח שיווי משקל וריכוז מנטלי, פתיחת מפרק הירך, חיזוק הקרסוליים והשוקיים והתארכות עמוד השדרה.",
    drishti: "👁️ נקודה נייחת בגובה העיניים קדימה (Bhrumadhya / מיקוד קדמי)",
    cautions: "⚠️ לעולם אין להניח את כף הרגל ישירות על הברך הצידית - מקדו אותה מעל או מתחת למפרק הברך.",
    anatomicalPointers: [
      { area: "כפות ידיים (Anjali Mudra)", direction: "צמודות מעלה מעל הראש" },
      { area: "עמוד שדרה", direction: "התארכות אנכית זקופה" },
      { area: "ברך כפופה", direction: "פתיחה צדדית הצידה" },
      { area: "כף רגל עומדת", direction: "השרשה עמוקה כמקל יציב בקרקע" }
    ],
    propsGuide: "🧱 השענת גב היד או הכתף מול קיר לשמירה על שיווי משקל ומיקוד בפתיחת מפרק הירך."
  },
  {
    id: "virabhadrasana-1",
    type: "identify",
    sanskritScript: "वीरभद्रासन I • Vīrabhadrāsana I",
    poseHebrewName: "ויראבדראסאנה I",
    englishName: "Warrior I Pose",
    category: "standing",
    question: "איזו תנוחה מוצגת כאן?",
    options: ["ויראבדראסאנה I", "ויראבדראסאנה II", "אושטראסאנה", "פארשוואוטאנאסאנה"],
    correctIndex: 0,
    breakdown: [
      { root: "וירא (Vīra)", meaning: "גיבור" },
      { root: "בהדרה (Bhadra)", meaning: "מבורך" }
    ],
    iyengarNote: "פנים ואגן מופנים קדימה, חזה מורם וזרועות נמתחות מעלה. מחזקת את הקרסוליים והברכיים.",
    benefits: "חיזוק אדיר של הזרועות, הברכיים והקרסוליים, הרחבת בית החזה והריאות, ופיתוח נחישות ועוצמה.",
    drishti: "👁️ מעלה אל האגודלים השלובים (Hastagrai)",
    cautions: "⚠️ במקרה של לחץ דם גבוה או כאבי כתפיים, מומלץ להחזיק ידיים ברוחב הכתפיים במקום להצמידם.",
    anatomicalPointers: [
      { area: "זרועות וחזה", direction: "הרמה עמוקה מעלה והטיה קלה לאחור" },
      { area: "אגן וצלעות קדמיות", direction: "פונים ישר קדימה בסימטריה מלאה" },
      { area: "ברך קדמית", direction: "כפופה ב-90 מעלות מעל הקרסול" },
      { area: "רגל אחורית", direction: "ישרה ונעוצה בקרקע" }
    ],
    propsGuide: "🎗️ החזקת חגורה ברוחב הכתפיים בין הידיים למתיחה ישרה של הזרועות מעלה. לחיצת עקב הרגל האחורית מול שיפוע קיר."
  },
  {
    id: "virabhadrasana-2",
    type: "identify",
    sanskritScript: "वीरभद्रासन II • Vīrabhadrāsana II",
    poseHebrewName: "ויראבדראסאנה II",
    englishName: "Warrior II Pose",
    category: "standing",
    question: "זהה את התנוחה מהאיור:",
    options: ["ויראבדראסאנה I", "ויראבדראסאנה II", "ויראבדראסאנה III", "טריקונאסאנה"],
    correctIndex: 1,
    breakdown: [
      { root: "וירא (Vīra)", meaning: "גיבור / אמיץ" },
      { root: "בהדרה (Bhadra)", meaning: "נעלה / מבורך" }
    ],
    iyengarNote: "ויראבדרא היא דמות מיתולוגית לוחמת. התנוחה מפתחת אומץ לב, מיקוד וכוח ברגליים.",
    benefits: "פיתוח סיבולת וכוח ברגליים, פתיחת הירכיים והמפשעות, הרחבת החזה ומיקוד תודעתי מתוחזק.",
    drishti: "👁️ מעבר לקצות אצבעות היד הקדמית (Angusthamadhye)",
    cautions: "⚠️ בעיות ברכיים: יש לוודא שהברך הקדמית אינה גולשת פנימה ואינה עוברת את פתח כף הרגל.",
    anatomicalPointers: [
      { area: "זרועות", direction: "מושטות ישר במקביל לרצפה לצדדים" },
      { area: "מבט (Drishti)", direction: "מופנה קדימה מעבר לקצות אצבעות היד הקדמית" },
      { area: "גו ואגן", direction: "זקופים במרכז, ללא נטייה לפנים" },
      { area: "ברך קדמית", direction: "כפופה ב-90 מעלות בקו ישר מעל העקב" }
    ],
    propsGuide: "🧱 השענת עקב כף הרגל האחורית והאגן האחורי מול קיר למניעת נטיית גוף לפנים ולשמירה על גו אנכי."
  },
  {
    id: "virabhadrasana-3",
    type: "identify",
    sanskritScript: "वीरभद्रासन III • Vīrabhadrāsana III",
    poseHebrewName: "ויראבדראסאנה III",
    englishName: "Warrior III Pose",
    category: "standing",
    question: "במה שונה ויראבדראסאנה III מלוחם I ו-II?",
    options: ["איזון על רגל אחת כשהגו והזרועות מקבילים לרצפה", "ישיבה על העקבים", "כפיפה לאחור במצב עמידה", "עמידת ראש"],
    correctIndex: 0,
    breakdown: [
      { root: "וירא (Vīra)", meaning: "גיבור" },
      { root: "בהדרה (Bhadra)", meaning: "מבורך / אציל" }
    ],
    iyengarNote: "הגוף נמתח אופקית במקביל לרצפה כמו חץ השלוח מקשת, כשרגל אחת עומדת איתנה כעמוד.",
    benefits: "חיזוק שרירי הגב, הישבן והליבה, שיפור שיווי משקל מתקדם, ופיתוח קואורדינציה ומרכז כובד יציב.",
    drishti: "👁️ מטה אל המזרן או בנקודה נייחת על הרצפה",
    cautions: "⚠️ סחרחורות או עומס בגב התחתון: מומלץ להניח את הידיים על שני בלוקים גבוהים או על משענת כיסא.",
    anatomicalPointers: [
      { area: "זרועות וגו", direction: "מתיחה אופקית ישרה קדימה במקביל לרצפה" },
      { area: "רגל אחורית", direction: "מורמת ישרה לאחור בקו אופקי אחיד" },
      { area: "אגן", direction: "מפולס ומקביל לרצפה ללא הטיות" },
      { area: "רגל עומדת", direction: "ישרה ואיתנה כעמוד" }
    ],
    propsGuide: "🧱 הנחת הידיים על קיר או על שני בלוקים גבוהים לתמיכה בשיווי המשקל ולשמירה על אגן מפולס."
  },
  {
    id: "adho-mukha-svanasana",
    type: "identify",
    sanskritScript: "अधोमुखश्वानासन • Adho Mukha Śvānāsana",
    poseHebrewName: "אדו מוקה שוואנאסאנה",
    englishName: "Downward-Facing Dog Pose",
    category: "standing",
    question: "איזו תנוחה מוצגת באיור?",
    options: ["אורדווה מוקה שוואנאסאנה", "אדו מוקה שוואנאסאנה", "פשצ'ימוטאנאסאנה", "צ'טורנגה דנדאסאנה"],
    correctIndex: 1,
    breakdown: [
      { root: "אדו (Adho)", meaning: "כלפי מטה" },
      { root: "מוקה (Mukha)", meaning: "פנים" },
      { root: "שוואנה (Śvāna)", meaning: "כלב" }
    ],
    iyengarNote: "התנוחה מחקה כלב המותח את איבריו קדימה ולמטה. מפיגה עייפות ומזרימה דם מעורר ללב ולמוח.",
    benefits: "הפגת עייפות, הזרמת דם מעוררת ללב ולמוח, מתיחת השכמות וההמסטרינגס, והרגעת מערכת העצבים.",
    drishti: "👁️ אל הטבור (Nabhi Chakra) או כפות הרגליים",
    cautions: "⚠️ עומס במפרקי הידיים: מומלץ להניח את הידיים על שיפוע קיר או קוביות מוטות.",
    anatomicalPointers: [
      { area: "עצמות הישיבה והאגן", direction: "הרמה עמוקה אלכסונית מעלה ולאחור" },
      { area: "גב ועמוד שדרה", direction: "התארכות ישרה וארוכה ללא גבנון" },
      { area: "כפות ידיים", direction: "דחיפה אקטיבית ופרישת אצבעות" },
      { area: "עקבים", direction: "הורדה אקטיבית לכיוון המזרן" }
    ],
    propsGuide: "🧱 דחיפת הידיים מול קוביות המושענות על קיר. הנחת מצח על בלוק להרגעת מערכת העצבים והפחתת עומס מהצוואר."
  },
  {
    id: "utthita-parsvakonasana",
    type: "identify",
    sanskritScript: "उत्थित पार्श्वकोणासन • Utthita Pārśvakoṇāsana",
    poseHebrewName: "אוטיטה פארשוואקונאסאנה",
    englishName: "Extended Side Angle Pose",
    category: "standing",
    question: "זהה את התנוחה שבתמונה:",
    options: ["טריקונאסאנה", "אוטיטה פארשוואקונאסאנה", "ארדהה צ'נדראסאנה", "פאריבריטה טריקונאסאנה"],
    correctIndex: 1,
    breakdown: [
      { root: "אוטיטה (Utthita)", meaning: "מוארך" },
      { root: "פארשווא (Pārśva)", meaning: "צד / צלע" },
      { root: "קונה (Koṇa)", meaning: "זווית" }
    ],
    iyengarNote: "יוצרת קו מתיחה ישר ואחיד מעקב כף הרגל האחורית ועד לקצות אצבעות היד העליונה.",
    benefits: "מתיחה עוצמתית לכל הצד של הגוף, חיזוק הברכיים והירכיים, הפחתת שומן באזור המותניים ושיפור העיכול.",
    drishti: "👁️ מעבר לזרוע העליונה אל התקרה",
    cautions: "⚠️ בעיות ברכיים: הימנע/י מכפיפה מעבר ל-90 מעלות. השתמש/י בבלוק מתחת ליד התחתונה.",
    anatomicalPointers: [
      { area: "זרוע עליונה", direction: "קו אלכסוני רציף מעקב כף הרגל ועד לקצות האצבעות" },
      { area: "יד תחתונה", direction: "תמיכה על בלוק מעץ מחוץ לכף הרגל" },
      { area: "חזה", direction: "פתוח ומסובב כלפי התקרה" },
      { area: "ברך קדמית", direction: "כפופה ב-90 מעלות" }
    ],
    propsGuide: "🧱 הנחת היד התחתונה על בלוק מעץ מחוץ לכף הרגל לשמירה על פתיחת בית החזה. השענת עקב כף הרגל האחורית מול קיר."
  },
  {
    id: "utkatasana",
    type: "root",
    sanskritScript: "उत्कटासन • Utkaṭāsana",
    poseHebrewName: "אוטקטאסאנה",
    englishName: "Fierce Pose",
    category: "standing",
    question: "מהי המשמעות המדויקת של המילה 'אוּטְקַטָה' (Utkaṭa)?",
    options: ["עוצמתי / עז", "כיסא מלכות", "ברך כפופה", "עמידת ברק"],
    correctIndex: 0,
    breakdown: [
      { root: "אוטקטה (Utkaṭa)", meaning: "עוצמתי / עז" }
    ],
    iyengarNote: "למרות שמכנים אותה לעיתים 'תנוחת הכיסא', פירושה האמיתי הוא 'התנוחה העוצמתית והעזה'.",
    benefits: "חיזוק הירכיים והקרסוליים, חיזוק הגב והסרעפת, פתיחת הכתפיים והגברת האנרגיה בגוף.",
    drishti: "👁️ מעלה בין כפות הידיים",
    cautions: "⚠️ בעיות ברכיים או גב תחתון: יש לבצע ישיבה פחות עמוקה או להיעזר בגב נתמך בקיר.",
    anatomicalPointers: [
      { area: "זרועות וכפות ידיים", direction: "מושטות באלכסון מעלה בהמשך לגו" },
      { area: "אגן וירכיים", direction: "ישיבה עמוקה לאחור ולמטה" },
      { area: "ברכיים", direction: "כפופות ומקבילות ללא גלישה פנימה" }
    ],
    propsGuide: "🧱 הידוק בלוק בין הברכיים לשמירה על יציבות האגן. כריכת חגורה סביב הירכיים או הזרועות לשמירה על רוחב אחיד."
  },
  {
    id: "chaturanga-dandasana",
    type: "identify",
    sanskritScript: "चतुरङ्ग दण्डासन • Caturaṅga Daṇḍāsana",
    poseHebrewName: "צ'טורנגה דנדאסאנה",
    englishName: "Four-Limbed Staff Pose",
    category: "standing",
    question: "מה שם התנוחה המוצגת?",
    options: ["קומבהקאסאנה", "צ'טורנגה דנדאסאנה", "מיוּראסאנה", "וסִישְטְהאסאנה"],
    correctIndex: 1,
    breakdown: [
      { root: "צ'אטור (Catur)", meaning: "ארבע" },
      { root: "אנגה (Aṅga)", meaning: "איבר / גפה" },
      { root: "דנדה (Daṇḍa)", meaning: "מטה / מקל" }
    ],
    iyengarNote: "הגוף מקביל לרצפה ונתמך על ידי 'ארבע הגפיים', נוקשה וישר כמו מטה.",
    benefits: "חיזוק מסיבי של הזרועות, פרקי הידיים, הכתפיים ושרירי הבטן, והקניית יציבות לכל שלד הגוף.",
    drishti: "👁️ קדימה אל המזרן במרחק חצי מטר (Nasagrai)",
    cautions: "⚠️ בעיות בפרק כף היד או בכתפיים: אין לתת לחזה לקרוס מתחת מגובה המרפקים. היעזר/י בבלוק מתחת לחזה.",
    anatomicalPointers: [
      { area: "גו וגוף", direction: "ישר ונוקשה במקביל לרצפה כמו מטה" },
      { area: "מרפקים", direction: "זווית 90 מעלות, צמודים לצלעות" },
      { area: "עקבים ובהונות", direction: "דחיפה אחורית אקטיבית" }
    ],
    propsGuide: "🎗️ ליפוף חגורה סביב הזרועות (מעל המרפקים) למניעת קריסת הזרועות לצדדים. תמיכת בלוק מתחת לאגן או עצם החזה."
  },
  {
    id: "uttanasana",
    type: "root",
    sanskritScript: "उत्तानासन • Uttānāsana",
    poseHebrewName: "אוטאנאסאנה (כפיפה עזה לפנים בעמידה)",
    englishName: "Intense Standing Forward Stretch",
    category: "standing",
    question: "מה פירוש הקידומת 'אוּט-טָאנָה' (Ut-tāna)?",
    options: ["מתיחה עזה / מוארכת", "ראש למטה", "עמידה ישרה", "נשיפה עמוקה"],
    correctIndex: 0,
    breakdown: [
      { root: "אוט (Ut)", meaning: "עז / עוצמתי" },
      { root: "טאנה (Tāna)", meaning: "מתיחה" }
    ],
    iyengarNote: "הגו נכפף לפנים מהאגן כשרגליים ישרות ונוקשות, מה שמביא להרגעת הלב וחידוש האנרגיה בגוף.",
    benefits: "הרגעת המוח והורדת לחץ דם, מתיחת שרירי הרגליים האחוריים, עיסוי איברי הבטן והקלה על עייפות.",
    drishti: "👁️ אל קצה האף (Nasagrai) או הבהונות",
    cautions: "⚠️ בעיות דיסק בגב התחתון: יש לשמור על גב ישר ומקביל לרצפה (Ardha Uttanasana) עם ידיים על בלוקים.",
    anatomicalPointers: [
      { area: "אגן", direction: "כפיפה עמוקה ממפרקי הירך" },
      { area: "עמוד שדרה", direction: "התארכות והרפיה כלפי מטה" },
      { area: "רגליים", direction: "ישרות ומהודקות בברכיים" }
    ],
    propsGuide: "🧱 הנחת הידיים על שני בלוקים בגבהים שונים אם הידיים אינן מגיעות לרצפה. הנחת המצח על כיסא או בלוקים."
  },
  {
    id: "parsvottanasana",
    type: "identify",
    sanskritScript: "पार्श्वोत्तानासन • Pārśvottānāsana",
    poseHebrewName: "פארשוואוטאנאסאנה",
    englishName: "Intense Side Stretch Pose",
    category: "standing",
    question: "מהי המילה המרכיבה את שם התנוחה ופירושה 'צד / צלע'?",
    options: ["פארשווא (Pārśva)", "אוטיטה (Utthita)", "פאדה (Pāda)", "קונה (Koṇa)"],
    correctIndex: 0,
    breakdown: [
      { root: "פארשווא (Pārśva)", meaning: "צד / צלע" },
      { root: "אוט-טאנה (Ut-tāna)", meaning: "מתיחה עזה" }
    ],
    iyengarNote: "החזה והגו נמתחים במקביל מעל השוק הקדמית, תוך הידוק שתי הרגליים ישרות לקרקע.",
    benefits: "מתיחה עמוקה להמסטרינגס ולגב התחתון, שיפור גמישות האגן והכתפיים, והרגעת מערכת העצבים.",
    drishti: "👁️ אל הבוהן של כף הרגל הקדמית",
    cautions: "⚠️ נוקשות בהמסטרינגס: היעזר/י בבלוקים גבוהים מתחת כפות הידיים לשמירה על אורך עמוד השדרה.",
    anatomicalPointers: [
      { area: "חזה וגו", direction: "התארכות במקביל מעל השוק הקדמית" },
      { area: "ידיים", direction: "תמיכה על בלוקים מצידי הרגל הקדמית" },
      { area: "אגן", direction: "מפולס ומקביל קדימה" }
    ],
    propsGuide: "🧱 הנחת הידיים על בלוקים מצידי הרגל הקדמית לשמירה על אורך הגב. השענת עקב כף הרגל האחורית על קיר."
  },
  {
    id: "prasarita-padottanasana",
    type: "identify",
    sanskritScript: "प्रसारित पादोत्तानासन • Prasārita Pādottānāsana",
    poseHebrewName: "פרסאריטה פאדוטאנאסאנה",
    englishName: "Intense Wide-Legged Forward Stretch",
    category: "standing",
    question: "מה פירוש המילים 'פרסאריטה פאדה' (Prasārita Pāda)?",
    options: ["רגליים מפושקות / מורחבות", "כפות רגליים צמודות", "ברכיים כפופות", "עמידה על קצות האצבעות"],
    correctIndex: 0,
    breakdown: [
      { root: "פרסאריטה (Prasārita)", meaning: "מופשק / מורחב" },
      { root: "פאדה (Pāda)", meaning: "רגל / כף רגל" },
      { root: "אוט-טאנה (Ut-tāna)", meaning: "מתיחה עזה" }
    ],
    iyengarNote: "הרגליים מפושקות לרווחה, הקודקוד נח קלות על הרצפה והשרירים האחוריים של הירכיים נמתחים בעוצמה.",
    benefits: "הרגעת התודעה, הזרמת דם מוגברת לראש, חיזוק והגמשת הירכיים הפנימיות והגב.",
    drishti: "👁️ אל קצה האף (Nasagrai)",
    cautions: "⚠️ לחץ דם גבוה: יש להניח ראש על הגבהה (בלוק/שמיכות) ולהימנע משהות מעמיקה ללא תמיכה.",
    anatomicalPointers: [
      { area: "קודקוד הראש", direction: "מנוחה קלה על קוביית עץ או רצפה לשקט מנטלי" },
      { area: "רגליים", direction: "פישוק רחב, ישרות ומהודקות" },
      { area: "כפות ידיים", direction: "שטוחות על הרצפה ברוחב הכתפיים" }
    ],
    propsGuide: "🧱 הנחת קודקוד הראש על בלוק מעץ או שמיכה אם הראש אינו מגיע לרצפה. שומר על שקט מנטלי והורדת לחץ דם."
  },
  {
    id: "ardha-chandrasana",
    type: "identify",
    sanskritScript: "अर्ध चन्द्रासन • Ardha Chandrāsana",
    poseHebrewName: "ארדהה צ'נדראסאנה (חצי ירח)",
    englishName: "Half Moon Pose",
    category: "standing",
    question: "מה הפירוש המילולי של 'ארדהה צ'נדרה' (Ardha Chandra)?",
    options: ["חצי ירח", "שמש עולה", "כוכב צפון", "גלגל מואר"],
    correctIndex: 0,
    breakdown: [
      { root: "ארדהה (Ardha)", meaning: "חצי" },
      { root: "צ'נדרה (Chandra)", meaning: "ירח" }
    ],
    iyengarNote: "איזון מרהיב על רגל אחת ויד אחת, כשמבט, חזה ורגל מורמת פתוחים צדדית אל החלל.",
    benefits: "חיזוק עמוד השדרה והרגליים, שיפור קואורדינציה ושיווי משקל, והקלה על בעיות עיכול וכאבי גב.",
    drishti: "👁️ אל כף היד העליונה המורמת (או ישר קדימה ליציבות)",
    cautions: "⚠️ בעיות שיווי משקל: מומלץ לבצע את התנוחה כשהגב והרגל המורמת נשענים כנגד קיר.",
    anatomicalPointers: [
      { area: "זרוע עליונה", direction: "מתיחה אנכית מעלה" },
      { area: "רגל מורמת", direction: "ישרה ומקבילה לרצפה" },
      { area: "יד תחתונה", direction: "תמיכה על בלוק מעץ מחוץ לכף הרגל" },
      { area: "חזה ואגן", direction: "פתוחים צדדית לחלל" }
    ],
    propsGuide: "🧱 הנחת כף היד התחתונה על בלוק מעץ מחוץ לכף הרגל. תרגול הגב והרגל המורמת צמודים לקיר."
  },
  {
    id: "parivrtta-trikonasana",
    type: "identify",
    sanskritScript: "परिवृत्त त्रिकोणासन • Parivṛtta Trikoṇāsana",
    poseHebrewName: "פאריבריטה טריקונאסאנה (משולש מסובב)",
    englishName: "Revolved Triangle Pose",
    category: "standing",
    question: "מה מסמלת המילה 'פָּארִיבְרִיטָה' (Parivṛtta)?",
    options: ["מסובב / מפותל", "מואץ", "הפוך", "נמוך"],
    correctIndex: 0,
    breakdown: [
      { root: "פאריבריטה (Parivṛtta)", meaning: "מסובב / מפותל" },
      { root: "טרי (Tri)", meaning: "שלוש" },
      { root: "קונה (Koṇa)", meaning: "זווית" }
    ],
    iyengarNote: "הפיתול העמוק של עמוד השדרה מעסה את איברי הבטן, מחזק את הירכיים ופותח את החזה.",
    benefits: "פיתוח גמישות עמוד השדרה, עיסוי עמוק לכבד ולטחול, חיזוק הירכיים ושיפור היציבה.",
    drishti: "👁️ אל אגודל היד העליונה המסובבת מעלה",
    cautions: "⚠️ כאבי גב תחתון או פציעות דיסק: יש להימנע מסיבוב יתר של האגן ולהשתמש בבלוק מחוץ לרגל.",
    anatomicalPointers: [
      { area: "עמוד שדרה", direction: "פיתול עמוק סביב הציר" },
      { area: "יד נגדית", direction: "תמיכה על קוביית עץ מחוץ לכף הרגל" },
      { area: "חזה ומבט", direction: "פתוחים ומופנים כלפי היד העליונה" }
    ],
    propsGuide: "🧱 הנחת כף היד הנגדית על בלוק מעץ מחוץ לכף הרגל הקדמית ליצירת ציר פיתול יציב."
  },

  // --- 2. תנוחות ישיבה ומתיחה לפנים (Seated & Forward Bends) ---
  {
    id: "paschimottanasana",
    type: "root",
    sanskritScript: "पश्चिमोत्तानासन • Paścimottānāsana",
    poseHebrewName: "פשצ'ימוטאנאסאנה",
    englishName: "Intense Backside Stretch Pose",
    category: "forwardbend",
    question: "המילה 'פשצ'ימה' (Paścima) פירושה מערב. מה מסמל 'המערב' בגוף?",
    options: ["החלק הקדמי", "החלק האחורי של כל הגוף", "צד שמאל של הגוף", "אזור הלב והנשימה"],
    correctIndex: 1,
    breakdown: [
      { root: "פשצ'ימה (Paścima)", meaning: "מערב / אחורי" },
      { root: "אוט-טאנה (Ut-tāna)", meaning: "מתיחה עזה" }
    ],
    iyengarNote: "היוגי נהג לתרגל פניו למזרח. המערב הוא המתיחה העזה של כל חלקו האחורי של הגוף מעקב ועד ראש.",
    benefits: "הרגעת מערכת העצבים המרכזית, הפחתת מתח ולחץ דם, עיסוי איברי הבטן והגמשת עמוד השדרה והירכיים.",
    drishti: "👁️ אל הבהונות (Padayoragrai) או סנטר מעבר לשוקיים",
    cautions: "⚠️ פריצת דיסק או כאב חריף בגב התחתון: אין לכפוף את עמוד השדרה; יש לשמור על גב מוארך וזקוף עם חגורה סביב הרגליים.",
    hasPropsVariation: true,
    anatomicalPointers: [
      { area: "גב אחורי (המערב)", direction: "מתיחה עזה ממושכת מהעקבים ועד הראש" },
      { area: "כפות ידיים", direction: "אחיזה בהיקף כפות הרגליים או בחגורה" },
      { area: "חזה", direction: "התארכות לפנים מעל השוקיים" }
    ],
    propsGuide: "🛌 בולסטר / כרית גלילית: השענת החזה והראש על בולסטר להרפיה עמוקה ושהות ממושכת. 🎗️ חגורה: לולאת חגורה סביב כפות הרגליים לשמירה על גב ישר."
  },
  {
    id: "virasana",
    type: "root",
    sanskritScript: "वीरासन • Vīrāsana",
    poseHebrewName: "ויראסאנה",
    englishName: "Hero Pose",
    category: "seated",
    question: "מה הפירוש של 'וִירָה' (Vīra) בשם התנוחה?",
    options: ["גיבור", "חכם", "יהלום", "לוטוס"],
    correctIndex: 0,
    breakdown: [
      { root: "וירה (Vīra)", meaning: "גיבור / גבורה" }
    ],
    iyengarNote: "בישיבה זו הרגליים מקבילות והישבן נח בין העקבים. מציע מנוחה מצוינת לברכיים ולרגליים.",
    benefits: "מנוחה עמוקה לרגליים ולברכיים לאחר הליכה או עמידה ממושכת, הקלה על נוקשות במפרקים ושיפור העיכול.",
    drishti: "👁️ אל קצה האף (Nasagrai) במבט שקט פנימי",
    cautions: "⚠️ כאבי ברכיים או רצועות: יש לשבת על בלוק או שניים בין העקבים כדי למנוע עומס במפרק.",
    anatomicalPointers: [
      { area: "עמוד שדרה", direction: "זקוף ואנכי במרכז" },
      { area: "ברכיים", direction: "צמודות ומקבילות" },
      { area: "ישבן", direction: "נח בין העקבים על הרצפה או על בלוק" }
    ],
    propsGuide: "🧱 ישיבה על בלוק או שמיכה מקופלת בין העקבים להורדת עומס ממפרקי הברכיים והקרסוליים."
  },
  {
    id: "gomukhasana",
    type: "root",
    sanskritScript: "गोमुखासन • Gomukhāsana",
    poseHebrewName: "גומוקהאסאנה",
    englishName: "Cow Face Pose",
    category: "seated",
    question: "ממה מורכבות המילים 'גוֹ' (Go) ו-'מוּקְהָה' (Mukha)?",
    options: ["פרה + פנים (פני פרה)", "אור + שחר", "יד + כתף", "חלב + טוהר"],
    correctIndex: 0,
    breakdown: [
      { root: "גו (Go)", meaning: "פרה" },
      { root: "מוקהה (Mukha)", meaning: "פנים" }
    ],
    iyengarNote: "מנח הרגליים המוצלבות מזכיר מבנה פני פרה. תנוחה מעולה לפתיחת בית החזה ומפרקי הכתף.",
    benefits: "פתיחה עמוקה של הכתפיים וכלוב הצלעות, הגמשת הירכיים והאגן, ושיפור הנשימה והיציבה.",
    drishti: "👁️ לפנים בגובה העיניים",
    cautions: "⚠️ כתפיים נוקשות: השתמש/י בחגורת יוגה בין כפות הידיים במקום לאחוז באצבעות.",
    anatomicalPointers: [
      { area: "מרפק עליון", direction: "מופנה ישר כלפי התקרה" },
      { area: "כפות ידיים", direction: "אחזת אצבעות מאחורי הגב או בחגורה" },
      { area: "ברכיים", direction: "מוצלבות זו מעל זו" }
    ],
    propsGuide: "🎗️ אחיזת חגורה בין הידיים מאחורי הגב כשהכתפיים או החזה נוקשים. ישיבה על שמיכה למניעת הטיות באגן."
  },
  {
    id: "baddha-konasana",
    type: "root",
    sanskritScript: "बद्धकोणासन • Baddhakoṇāsana",
    poseHebrewName: "באדהה קונאסאנה",
    englishName: "Bound Angle Pose",
    category: "seated",
    question: "מה פירוש המילה 'בָּאדְהָה' (Baddha)?",
    options: ["קשור / אחוז", "פתוח / רחב", "עף / מרחף", "פרפר"],
    correctIndex: 0,
    breakdown: [
      { root: "באדהה (Baddha)", meaning: "קשור / לפות" },
      { root: "קונה (Koṇa)", meaning: "זווית" }
    ],
    iyengarNote: "הידיים אוחזות ו'קולעות' את כפות הרגליים קרוב לפרינאום. מצוינת לבריאות המערכת האורוגניטלית.",
    benefits: "בריאות מפרקי הירך והמערכת האורוגניטלית, הקלה על עייפות ומתיחה עמוקה של הירכיים הפנימיות.",
    drishti: "👁️ אל קצה האף (Nasagrai)",
    cautions: "⚠️ כאבי ברכיים או מפשעה נוקשה: הנח/י בלוקים או שמיכות מתחת לבירכיים לתמיכה.",
    anatomicalPointers: [
      { area: "עצם החזה", direction: "הרמה ופתיחה כלפי מעלה" },
      { area: "ירכיים פנימיות", direction: "גלגול כלפי חוץ והורדת ברכיים" },
      { area: "כפות רגליים", direction: "צמודות ואחוזות בידיים" }
    ],
    propsGuide: "🧱 תמיכה בבלוקים או שמיכות מקופלות מתחת לבירכיים המורמות. ישיבה עם הגב צמוד לקיר למתיחה זקופה של עמוד השדרה."
  },
  {
    id: "dandasana",
    type: "root",
    sanskritScript: "दण्डासन • Daṇḍāsana",
    poseHebrewName: "דנדאסאנה (תנוחת המטה בישיבה)",
    englishName: "Staff Pose",
    category: "seated",
    question: "מהי המשמעות המקורית של המילה 'דָנְדָה' (Daṇḍa)?",
    options: ["מטה / מקל ישר", "סלע יציב", "גזע עץ", "נחש"],
    correctIndex: 0,
    breakdown: [
      { root: "דנדה (Daṇḍa)", meaning: "מטה / מקל" }
    ],
    iyengarNote: "תנוחת ישיבת הבסיס: הגב זקוף 90 מעלות, הירכיים מהודקות לרצפה והזרועות תומכות לצד האגן.",
    benefits: "שיפור היציבה הזקופה של עמוד השדרה, חיזוק שרירי הגב והבטן, והכנת הגוף לישיבת מדיטציה.",
    drishti: "👁️ אל הבהונות (Padayoragrai)",
    cautions: "⚠️ קושי בזקירות הגב: יש לשבת על שמיכה מקופלת אחת או שתיים כדי לאפשר הטיה נכונה של האגן.",
    anatomicalPointers: [
      { area: "עמוד שדרה", direction: "זקוף 90 מעלות במדויק" },
      { area: "רגליים", direction: "ישרות, מהודקות וצמודות לרצפה" },
      { area: "כפות ידיים", direction: "תמיכה ישרה לצד האגן" }
    ],
    propsGuide: "🧱 ישיבה על שמיכה מקופלת להרמת האגן. השענת הגב מול קיר לבדיקת זקירות עמוד השדרה."
  },
  {
    id: "janu-sirsasana",
    type: "identify",
    sanskritScript: "जानु शीर्षासन • Jānu Śīrṣāsana",
    poseHebrewName: "ג'אנו שירשאסאנה",
    englishName: "Head-to-Knee Pose",
    category: "forwardbend",
    question: "מה פירוש המילה 'גָ'אנוּ' (Jānu) בשם התנוחה?",
    options: ["ברך", "ירך", "סנטר", "מצח"],
    correctIndex: 0,
    breakdown: [
      { root: "ג'אנו (Jānu)", meaning: "ברך" },
      { root: "שירשה (Śīrṣa)", meaning: "ראש" }
    ],
    iyengarNote: "רגל אחת כפופה כבבאדהה קונאסאנה והשנייה מתוחה לפנים. מרגיעה את הלב ומעסה את איברי הבטן.",
    benefits: "הרגעת התודעה והפחתת חרדה, מתיחת ההמסטרינגס ועמוד השדרה, ושיפור תפקוד הכליות והכבד.",
    drishti: "👁️ אל הבוהן של הרגל המתוחה",
    cautions: "⚠️ בעיות גב: שמור/י על בית חזה פתוח ולא מקופב, בעזרת חגורה סביב הרגל.",
    anatomicalPointers: [
      { area: "רגל מתוחה", direction: "ישרה לפנים, אחיזה בכף הרגל" },
      { area: "ברך כפופה", direction: "מונחת על הרצפה הצידה" },
      { area: "גו וחזה", direction: "כפיפה והתארכות לפנים מעל השוק" }
    ],
    propsGuide: "🎗️ לולאת חגורה סביב כף הרגל המתוחה. תמיכת בלוק/שמיכה מתחת לברך הכפופה."
  },
  {
    id: "marichyasana-3",
    type: "identify",
    sanskritScript: "मरीच्यासन III • Marīchyāsana III",
    poseHebrewName: "מריצ'יאסאנה III",
    englishName: "Sage Marichi's Pose III",
    category: "seated",
    question: "על שם מי נקראת התנוחה 'מריצ'י' (Marīchi)?",
    options: ["חכם מיתולוגי / אחד מבניו של בראהמה", "נהר קדוש", "ההר הגבוה בהימלאיה", "מלך עתיק"],
    correctIndex: 0,
    breakdown: [
      { root: "מריצ'י (Marīchi)", meaning: "שם חכם קדום (קרן אור)" }
    ],
    iyengarNote: "פיתול ישיבה עוצמתי שבו מרפק מנוף כנגד הירך הכפופה, מרענן את עמוד השדרה והכבד.",
    benefits: "עיסוי עמוק לאיברי הבטן הפנימיים, שחרור נוקשות בגב התחתון ובכתפיים, וגמישות עמוד השדרה.",
    drishti: "👁️ לאחור מעבר לכתף המסובבת",
    cautions: "⚠️ הריון: הימנעי מפתולים עמוקים הלוחצים על הבטן. תרגלי פיתול פתוח לכיוון הנגדי.",
    anatomicalPointers: [
      { area: "עמוד שדרה", direction: "פיתול זקוף ועמוק סביב הציר" },
      { area: "זרועות", direction: "לפיפה ואחיזת כפות ידיים מאחורי הגב" },
      { area: "רגל ישרה", direction: "אקטיבית ונעוצה ברצפה" }
    ],
    propsGuide: "🧱 ישיבה על שמיכה מקופלת. הנחת כף היד האחורית על בלוק מעץ ליצירת זקירות מרבית."
  },

  // --- 3. תנוחות שכיבה ומערכת העיכול (Supine & Restorative Poses) ---
  {
    id: "pavanamuktasana",
    type: "root",
    sanskritScript: "पवनमुक्तासन • Pavanamuktāsana",
    poseHebrewName: "פאוואנמוקטאסאנה (תנוחת שחרור הרוח והגזים)",
    englishName: "Wind-Relieving Pose",
    category: "seated",
    question: "מה הפירוש של המילים 'פָּאווָאנָה' (Pavana) ו-'מוּקְטָה' (Mukta)?",
    options: ["רוח/גז + משוחרר/חופשי", "מים + זורמים", "אש + בוערת", "אדמה + יציבה"],
    correctIndex: 0,
    breakdown: [
      { root: "פאוואנה (Pavana)", meaning: "רוח / אוויר" },
      { root: "מוקטה (Mukta)", meaning: "משוחרר / חופשי" }
    ],
    iyengarNote: "הידוק הברכיים אל החזה בשכיבה על הגב מעסה את המעיים, משחרר לחץ בגב התחתון ומשפר את העיכול.",
    benefits: "שחרור גזים ולחצים במערכת העיכול, עיסוי המעיים, והקלה מיידית על מתח וכאבים בגב התחתון.",
    drishti: "👁️ עיניים עצומות ברוגע או אל הברכיים",
    cautions: "⚠️ בעיות צוואר: שמר/י על הראש שטוח על הרצפה ולא מורם אל הברכיים.",
    anatomicalPointers: [
      { area: "ברכיים", direction: "הידוק אקטיבי עמוק אל החזה" },
      { area: "גב תחתון", direction: "פרוס ומשוחרר שטוח על הרצפה" },
      { area: "כתפיים", direction: "נינוחות ורחוקות מהאוזניים" }
    ],
    propsGuide: "🎗️ שימוש בחגורה סביב השוקיים לשמירה על הידוק הברכיים ללא מאמץ בכתפיים ובצוואר."
  },
  {
    id: "supta-padangusthasana",
    type: "identify",
    sanskritScript: "सुप्त पादाङ्गुष्ठासन • Supta Pādāṅguṣṭhāsana",
    poseHebrewName: "סופטה פאדאנגושטהאסאנה",
    englishName: "Reclined Big Toe Pose",
    category: "seated",
    question: "מה פירוש המילה 'סוּפְטָה' (Supta) בשם התנוחה?",
    options: ["בשכיבה / נח על הגב", "בעמידה", "בתנועה", "בפיתול"],
    correctIndex: 0,
    breakdown: [
      { root: "סופטה (Supta)", meaning: "בשכיבה" },
      { root: "פאדה (Pāda)", meaning: "כף רגל" },
      { root: "אנגושטהה (Aṅguṣṭha)", meaning: "בוהן" }
    ],
    iyengarNote: "מתיחת רגל אנכית מעלה בשכיבה על הגב. משחררת סיאטיקה ומגמישה את שרירי הירך האחורית בבטיחות.",
    benefits: "שחרור סיאטיקה ונוקשות בגב התחתון, מתיחה בטוחה להמסטרינגס, וחיזוק מפרקי הירך.",
    anatomicalPointers: [
      { area: "רגל מורמת", direction: "מתיחה אנכית ישרה ב-90 מעלות" },
      { area: "חגורת יוגה", direction: "אחיזה בשני קצוות החגורה סביב העקב" },
      { area: "רגל תחתונה", direction: "ישרה ומהודקת לרצפה" }
    ],
    propsGuide: "🎗️ לולאת חגורה סביב עקב כף הרגל המורמת, כשהזרועות ישרות והכתפיים נחות על הרצפה."
  },

  // --- 4. כפופות לאחור ואיזון זרועות (Backbends & Arm Balances) ---
  {
    id: "bhujangasana",
    type: "identify",
    sanskritScript: "भुजङ्गासन • Bhujaṅgāsana",
    poseHebrewName: "בהוג'אנגאסאנה",
    englishName: "Cobra Pose",
    category: "backbend",
    question: "איזו תנוחה מוצגת באיור?",
    options: ["בהוג'אנגאסאנה", "אורדווה מוקה שוואנאסאנה", "סלבהאסאנה", "דְהנוּרָאסָנָה"],
    correctIndex: 0,
    breakdown: [
      { root: "בהוג'אנגה (Bhujaṅga)", meaning: "נחש קוברה" }
    ],
    iyengarNote: "התנוחה מדמה נחש הזוקף את ראשו. יש לפתוח את בית החזה לפנים ולשמור על עצם החזה מורמת.",
    benefits: "חיזוק עמוד השדרה ושרירי הגב, פתיחת בית החזה והריאות, והגברת החיוניות והאנרגיה בגוף.",
    drishti: "👁️ מעלה אל השמיים/תקרה (Bhrumadhya / בין הגבות)",
    cautions: "⚠️ הריון, פציעות גב חריפות או הרניה: הימנע/י מדחיפה גבוהה; תרגל/י בהוג'אנגאסאנה נמוכה (Baby Cobra).",
    anatomicalPointers: [
      { area: "סנטר וראש", direction: "הרחק מהחזה, ראש הפוך לאחור" },
      { area: "חזה וכלוב צלעות", direction: "מערב, רחב, מורם מעלה וכפיפה לאחור" },
      { area: "זרועות", direction: "מוארכות אקטיבית" },
      { area: "ירכיים וקרסוליים", direction: "מעורבות ומהודקות מטה" }
    ],
    propsGuide: "🧱 הנחת כפות הידיים על בלוקים נמוכים להגבהה ופתיחה עמוקה יותר של בית החזה ללא דחיסת גב תחתון."
  },
  {
    id: "ustrasana",
    type: "identify",
    sanskritScript: "उष्ट्रासन • Uṣṭrāsana",
    poseHebrewName: "אושטראסאנה (גמל)",
    englishName: "Camel Pose",
    category: "backbend",
    question: "מה שם התנוחה המוצגת?",
    options: ["קפוטאסאנה", "בקהאסאנה", "אושטראסאנה", "דְהנוּרָאסָנָה"],
    correctIndex: 2,
    breakdown: [
      { root: "אושְׁטרה (Uṣṭra)", meaning: "גמל" }
    ],
    iyengarNote: "אושטראסאנה (תנוחת הגמל) מרחיבה את הריאות, פותחת את מפרקי הירך ומשפרת יציבה שפופה.",
    benefits: "פתיחה עוצמתית של בית החזה והסרעפת, שיפור יציבה שפופה, והמרצת מחזור הדם והאיברים הפנימיים.",
    drishti: "👁️ אל קצה האף (Nasagrai) או לאחור ברוגע",
    cautions: "⚠️ בעיות צוואר חריפות: שמר/י על סנטר קרוב לחזה ואל תפיל/י את הראש לאחור. היעזר/י בבלוקים על העקבים.",
    anatomicalPointers: [
      { area: "חזה וכלוב צלעות", direction: "הרמה עמוקה מעלה וכפיפה לאחור" },
      { area: "זרועות", direction: "מוארכות מעלה ולאחור לאחיזת העקבים" },
      { area: "ירכיים", direction: "אנכיות ודוחפות קדימה" }
    ],
    propsGuide: "🧱 הנחת בלוקים אנכית לצד העקבים להגבהת נקודת האחיזה של כפות הידיים ולמניעת עומס בגב התחתון."
  },
  {
    id: "dhanurasana",
    type: "identify",
    sanskritScript: "धनुरासन • Dhanurāsana",
    poseHebrewName: "דהנוראסאנה",
    englishName: "Bow Pose",
    category: "backbend",
    question: "איזו תנוחה אנו רואים כאן?",
    options: ["דְהנוּרָאסָנָה", "סלבהאסאנה", "אורדווה מוקה שוואנאסאנה", "צ'אקראסאנה"],
    correctIndex: 0,
    breakdown: [
      { root: "דהנור (Dhanur)", meaning: "קשת" }
    ],
    iyengarNote: "הזרועות משמשות כמיתר הקשת המושך את הקרסוליים והשוקיים מעלה ליצירת גמישות בעמוד השדרה.",
    benefits: "הגמשת עמוד השדרה לכל אורכו, חיזוק שרירי הגב והבטן, ופתיחת הכתפיים והחזה.",
    drishti: "👁️ מעלה אל המרכז בין הגבות (Bhrumadhya)",
    cautions: "⚠️ הריון או ניתוחי בטן מקרוב: אין לתרגל תנוחה זו. השתמש/י בחגורה אם האחיזה בקרסוליים קשה.",
    anatomicalPointers: [
      { area: "סנטר וראש", direction: "הרחק מהחזה, הטיה לאחור" },
      { area: "חזה וצלעות", direction: "מורמים בעוצמה מעלה לפתיחת נשימה" },
      { area: "זרועות", direction: "מוארכות כקשת לאחיזת הקרסוליים" },
      { area: "ירכיים ושוקיים", direction: "משיכה אקטיבית מעלה" }
    ],
    propsGuide: "🎗️ ליפוף חגורה סביב הקרסוליים במידה וכפות הידיים אינן מגיעות לקרסוליים, להרמת בית החזה והירכיים."
  },
  {
    id: "urdhva-mukha-svanasana",
    type: "identify",
    sanskritScript: "ऊर्ध्वमुखश्वानासन • Ūrdhva Mukha Śvānāsana",
    poseHebrewName: "אורדווה מוקה שוואנאסאנה",
    englishName: "Upward-Facing Dog Pose",
    category: "backbend",
    question: "מה פירוש המילה 'אוּרְדְהְוָוה' (Ūrdhva)?",
    options: ["כלפי מעלה", "כלפי מטה", "צדדי", "אחורי"],
    correctIndex: 0,
    breakdown: [
      { root: "אורדווה (Ūrdhva)", meaning: "כלפי מעלה" },
      { root: "מוקה (Mukha)", meaning: "פנים" },
      { root: "שוואנה (Śvāna)", meaning: "כלב" }
    ],
    iyengarNote: "הגוף מורם מהרצפה ונתמך על כפות הידיים וכפות הרגליים בלבד. פותחת את בית החזה, מחזקת את עמוד השדרה ומזרימה אנרגיה מעוררת לכל הגוף.",
    benefits: "פתיחת בית החזה, חיזוק הזרועות ועמוד השדרה, והמרצת זרימת הדם והאנרגיה.",
    drishti: "👁️ מעלה אל השמיים/תקרה (Bhrumadhya) או ישר לפנים",
    cautions: "⚠️ עומס בגב התחתון: הקפד/י על הידוק הירכיים והרמת הבטן. במקרה של כאב בפרקי הידיים, השתמש/י בבלוקים.",
    anatomicalPointers: [
      { area: "זרועות וכתפיים", direction: "זרועות אנכיות וישרות, כתפיים מורדות מטה הרחק מהאוזניים" },
      { area: "חזה וכלוב צלעות", direction: "מורם ופתוח קדימה ומעלה לרווחת הנשימה" },
      { area: "ירכיים וברכיים", direction: "מורמות באוויר ללא נגיעה ברצפה (שרשרת גב אקטיבית)" },
      { area: "כפות רגליים (Toes Tucked)", direction: "נעירת בהונות או גב כף רגל שטוח - מעניק בסיס יציב ומקל על מעברים" }
    ],
    propsGuide: "🧱 קוביות עץ (Blocks): הנחת הידיים על 2 קוביות להגבהת החזה והפחתת עומס מפרקי הידיים והגב התחתון. 🦶 בהונות נעוצות (Toes Tucked): נעירת הבהונות בקרקע מעניקה בסיס תמיכה יציב, מונעת שקיעה בגב ומקלה על המעבר מ-Chaturanga."
  },
  {
    id: "urdhva-dhanurasana",
    type: "identify",
    sanskritScript: "ऊर्ध्व धनुरासन • Ūrdhva Dhanurāsana",
    poseHebrewName: "אורדווה דהנוראסאנה (קשת עולה / גלגל)",
    englishName: "Upward Bow / Wheel Pose",
    category: "backbend",
    question: "מה שם התנוחה המכונה גם 'צ'אקראסאנה' (תנוחת הגלגל)?",
    options: ["אורדווה דהנוראסאנה", "בהוג'אנגאסאנה", "אושטראסאנה", "סלבהאסאנה"],
    correctIndex: 0,
    breakdown: [
      { root: "אורדווה (Ūrdhva)", meaning: "מעלה" },
      { root: "דהנור (Dhanur)", meaning: "קשת" }
    ],
    iyengarNote: "הגוף מקושת באוויר כקשת מתוחה. פותחת בעוצמה את הריאות, הכתפיים והאגן ומביאה חיוניות אדירה.",
    benefits: "חיזוק אדיר של הגב, הזרועות והרגליים, פתיחה עמוקה של הריאות והחזה, והגברת השמחה והאנרגיה.",
    drishti: "👁️ מטה בין כפות הידיים אל הרצפה",
    cautions: "⚠️ לחץ דם גבוה, מחלות לב או סחרחורות: הימנע/י מכפיפה עמוקה זו ללא ליווי מורה מוסמך או תמיכת כיסא.",
    anatomicalPointers: [
      { area: "אגן וגב", direction: "הרמה עמוקה וקימור כגלגל באוויר" },
      { area: "זרועות וכתפיים", direction: "דחיפה ישרה מעלה" },
      { area: "כפות רגליים", direction: "מהודקות ומקבילות לקרקע" }
    ],
    propsGuide: "🧱 הנחת הידיים על קוביות מוטות מול קיר (Wall Blocks) להקלת עבודת הכתפיים והרמת החזה."
  },

  // --- 5. תנוחות הפוכות (Inversions) ---
  {
    id: "salamba-sirsasana",
    type: "root",
    sanskritScript: "सालम्ब शीर्षासन • Sālamba Śīrṣāsana",
    poseHebrewName: "סאלמבה שירשאסאנה",
    englishName: "Supported Headstand",
    category: "inversion",
    question: "שירשאסאנה מכונה 'מלך התנוחות'. מה משמעות המילה 'שירשה' (Śīrṣa)?",
    options: ["ראש", "כתפיים", "נר / להבה", "כתר"],
    correctIndex: 0,
    breakdown: [
      { root: "סה (Sa)", meaning: "עם" },
      { root: "אלמבה (Ālamba)", meaning: "תמיכה" },
      { root: "שירשה (Śīrṣa)", meaning: "ראש" }
    ],
    iyengarNote: "ביצוע מדויק דורש שהמשקל יישאר על האמות ולא ידחס את חוליות הצוואר. מעורר ומאזן את כל הגוף.",
    benefits: "מלך התנוחות: הזרמת דם מעוררת למוח, איזון בלוטת התריס וההיפופיזה, וחיזוק הזיכרון והמיקוד.",
    drishti: "👁️ אל קצה האף (Nasagrai) במבט שקט",
    cautions: "⚠️ התוויות נגד חמורות: לחץ דם גבוה, בעיות עיניים (גלאוקומה), פציעות צוואר, בזמן וסת. חובה לתרגל ליד קיר.",
    anatomicalPointers: [
      { area: "אמות וידיים", direction: "שלוב אצבעות הידיים מאחורי הקודקוד, מרפקים ברוחב הכתפיים" },
      { area: "כתפיים", direction: "הרמה עמוקה מטה הרחק מהרצפה" },
      { area: "גוף ורגליים", direction: "קו אנכי ישר וזקוף ב-180 מעלות" }
    ],
    propsGuide: "🧱 תרגול בפינת קיר (Wall Corner) המקנה ביטחון מלא, תומך בכתפיים ובאגן ומונע נפילה לאחור."
  },
  {
    id: "halasana",
    type: "identify",
    sanskritScript: "हलासन • Halāsana",
    poseHebrewName: "הלאסאנה (מחרשה)",
    englishName: "Plough Pose",
    category: "inversion",
    question: "מה שמה של התנוחה בתמונה?",
    options: ["קרנפידאסאנה", "סרוואנגאסאנה", "הלאסאנה", "מטסיאסאנה"],
    correctIndex: 2,
    breakdown: [
      { root: "הָלָה (Hala)", meaning: "מחרשה" }
    ],
    iyengarNote: "הגוף בהלאסאנה מדמה מחרשה. התנוחה מרגיעה את מערכת העצבים, מפיגה עייפות ומרעננת את עמוד השדרה.",
    benefits: "הרגעת עמוקה של מערכת העצבים, חידוש אנרגיה, הרגעת המוח והקלה על עייפות ונדודי שינה.",
    drishti: "👁️ אל הטבור (Nabhi Chakra)",
    cautions: "⚠️ בעיות צוואר או בזמן וסת: הימנע/י משהות ללא תמיכת שמיכות מתחת לכתפיים. השתמש/י בכיסא מתחת לרגליים.",
    anatomicalPointers: [
      { area: "רגליים", direction: "מתוחות ישרות לאחור מעבר לראש" },
      { area: "עמוד שדרה", direction: "אנכי מעל חגורת הכתפיים" },
      { area: "זרועות", direction: "פרוסות ישרות על הרצפה" }
    ],
    propsGuide: "🧱 הנחת 3-4 שמיכות מקופלות מתחת לכתפיים להגנה על חוליות הצוואר. הנחת כפות הרגליים על מושב כיסא (Chair Halasana)."
  },
  {
    id: "salamba-sarvangasana",
    type: "identify",
    sanskritScript: "सालम्ब सर्वाङ्गासन • Sālamba Sarvāṅgāsana",
    poseHebrewName: "סרוואנגאסאנה",
    englishName: "Supported Shoulderstand",
    category: "inversion",
    question: "איזו תנוחה מוצגת כאן?",
    options: ["שירשאסאנה", "הלאסאנה", "סרוואנגאסאנה", "ויפריטה קראני"],
    correctIndex: 2,
    breakdown: [
      { root: "סרווה (Sarva)", meaning: "כל / הכל" },
      { root: "אנגה (Aṅga)", meaning: "איבר / גוף" }
    ],
    iyengarNote: "מכונה במסורת איינגר 'מלכת התנוחות' (The Mother of Asanas), פועלת על 'כל איברי' הגוף ומווסתת את בלוטת התריס.",
    benefits: "מלכת התנוחות: וויסות בלוטת התריס, הרגעת הלב והנשימה, והזרמת חיוניות לכל איברי הגוף.",
    drishti: "👁️ אל הבוהן או החזה (Nabhi / Padayoragrai)",
    cautions: "⚠️ בזמן וסת, לחץ דם גבוה או כאבי צוואר: הימנע/י מעמידת כתפיים מלאה. תרגל/י Viparita Karani נתמכת בקיר.",
    anatomicalPointers: [
      { area: "גב וצלעות", direction: "תמיכת כפות הידיים במעלה הגב" },
      { area: "כתפיים", direction: "השרשה עמוקה בשמיכות להרמת חוליות הצוואר" },
      { area: "רגליים", direction: "צמיחה אנכית ישרה מעלה" }
    ],
    propsGuide: "🧱 הגבהת הכתפיים ב-3-4 שמיכות מקופלות לשמירה על המרווח הטבעי של חוליות הצוואר. חגורה סביב המרפקים ברוחב הכתפיים."
  },

  // --- 6. תנוחת הרפיה (Restorative) ---
  {
    id: "savasana",
    type: "root",
    sanskritScript: "शवासन • Śavāsana",
    poseHebrewName: "שאוואסאנה (תנוחת הרפיה / גופה)",
    englishName: "Corpse Pose",
    category: "seated",
    question: "מה הפירוש המילולי של המילה 'שָאָווָה' (Śava)?",
    options: ["גופה / גוף דומם", "שקט מוחלט", "שנה עמוקה", "אוקיינוס שקט"],
    correctIndex: 0,
    breakdown: [
      { root: "שאווה (Śava)", meaning: "גופה / גוף ללא תנועה" }
    ],
    iyengarNote: "תנוחת ההרפיה הקלאסית המסכמת כל תרגול. מביאה לשקט תודעתי מוחלט, הרפיית שרירים והטמעת התרגול.",
    benefits: "הרפיה פיזית ומנטלית מוחלטת, הטמעת פירות התרגול, הפחתת לחץ דם והרגעת התודעה.",
    drishti: "👁️ עיניים עצומות ברכות - מבט מופנה פנימה",
    cautions: "⚠️ אי שקט או כאב בגב התחתון: הנח/י בולסטר עבה מתחת לברכיים ושמיכה מקופלת מתחת לראש.",
    anatomicalPointers: [
      { area: "גוף ושלד", direction: "שכיבה שטוחה וסימטרית לחלוטין" },
      { area: "זרועות", direction: "פרוסות לצדדים ב-45 מעלות, כפות ידיים פונות מעלה" },
      { area: "עיניים ונשימה", direction: "הרפיה פנימית שקטה" }
    ],
    propsGuide: "🛌 הנחת בולסטר מתחת לברכיים להקלת עומס מהגב התחתון. כיסוי העיניים בכרית עיניים (Eye Pillow) להרגעת המוח."
  }
];
