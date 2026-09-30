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
    hasPropsVariation: true,
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
    propsGuide: "🎗️ לולאת חגורה סביב כף הרגל המתוחה. תמיכת בלוק/שמיכה מתחת לברך הכפופה."
  },
  {
    id: "marichyasana-3",
    type: "identify",
    sanskritScript: "मריच्यासन III • Marīchyāsana III",
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
    iyengarNote: "הגוף מורם מהרצפה ונתמך על כפות הידיים וגב כפות הרגליים בלבד, תוך פתיחה עמוקה של החזה.",
    propsGuide: "🧱 הנחת הידיים על שתי קוביות עץ להגבהה והקלת העומס על גב תחתון ופרקי הידיים."
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
    propsGuide: "🛌 הנחת בולסטר מתחת לברכיים להקלת עומס מהגב התחתון. כיסוי העיניים בכרית עיניים (Eye Pillow) להרגעת המוח."
  }
];
