export const YOGA_SEQUENCES = [
  // --- 1. רצף טיפולי להרגעת כאבי בטן עזים ומערכת העיכול ---
  {
    id: "abdominal-pain-relief",
    title: "רצף עמוק להרגעת כאבי בטן עזים ומערכת העיכול",
    subtitle: "Acute Abdominal Pain & Gastrointestinal Relief",
    category: "digestion",
    timing: "בכל עת • במיוחד בעת התקפי כאב בטן, עוויתות מעיים, גזים או צרבות",
    duration: "20-25 דקות",
    icon: "Shield",
    bgGradient: "from-amber-600/10 to-orange-500/10",
    borderColor: "border-amber-300",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    description: "רצף טיפולי רסטורטיבי מובהק מבית מדרשו של ב.ק.ס איינגר המיועד להרגעת כאבי בטן, עוויתות, גסטריטיס ומעי רגיז. העיקרון המנחה הקריטי: לא מכווצים או לוחצים את הבטן, אלא פותחים ומרווחים את חלל הבטן והסרעפת בעזרת בולסטרים ושמיכות, דבר המזרים דם מחומצן למערכת העיכול ומרגיע את מערכת העצבים האנטרית",
    propsNeeded: ["בולסטר (כרית גלילית)", "2 בלוקים מעץ", "חגורת יוגה", "שמיכות מקופלות"],
    poses: [
      { 
        poseId: "supta-baddha-konasana", 
        durationText: "5-7 דקות (שכיבה על בולסטר עם רצועה)", 
        tip: "תנוחת מפתח להרגעת הבטן! השכיבה על בולסטר לאורך הגב מרחיבה את הסרעפת ומשחררת לחץ תוך-בטני ללא כיווץ" 
      },
      { 
        poseId: "supta-virasana", 
        durationText: "4-5 דקות (שכיבה לאחור על בולסטר מוגבה)", 
        tip: "מייצרת מתיחה עדינה ומאורכת של הבטן התחתונה ומקלה מיידית על התכווצויות, חומציות וכאבי מעיים" 
      },
      { 
        poseId: "virasana", 
        durationText: "3 דקות (ישיבה מוגבהת על בלוקים בין העקבים)", 
        tip: "תנוחה קלאסית מאור על היוגה המאפשרת לאיברי הבטן לשקוע במנוחה ומסייעת לתנועתיות המעיים" 
      },
      { 
        poseId: "setu-bandha-sarvangasana", 
        durationText: "4 דקות (תמיכת בולסטר או בלוק תחת הסאקרום)", 
        tip: "מרחיבה את אזור האגן והבטן התחתונה, מורידה מתח עצבי ומאפשרת זרימת דם מזינה לקרביים" 
      },
      { 
        poseId: "viparita-karani", 
        durationText: "5 דקות (רגליים על הקיר עם אגן מורם על בולסטר)", 
        tip: "משחררת לחלוטין את כוח הכובד מאיברי הבטן, מרגיעה את מערכת העצבים ומסייעת לשיכוך כאב עמוק" 
      },
      { 
        poseId: "savasana", 
        durationText: "5 דקות (בולסטר תחת הברכיים ושמיכה עבה מקופלת על הבטן)", 
        tip: "המשקל הקל והחמים של השמיכה המונחת על הבטן מרגיע את מקלעת השמש (Solar Plexus) ומעניק שלווה" 
      }
    ]
  },

  // --- 2. רצף טיפולי להקלת כאבי גב תחתון ועמוד שדרה ---
  {
    id: "lower-back-therapy",
    title: "רצף טיפולי להקלת כאבי גב תחתון ועמוד שדרה",
    subtitle: "Lower Back & Sacral Care Sequence",
    category: "remedial",
    timing: "בכל עת • במיוחד לאחר עמידה ממושכת או בעת כאבי גב תחתון",
    duration: "20 דקות",
    icon: "Shield",
    bgGradient: "from-amber-500/10 to-stone-500/10",
    borderColor: "border-amber-300",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    description: "רצף מתוך הספר הטיפולי 'Yoga: The Path to Holistic Health' המשלב מתיחה מבוקרת של שרירי הירך האחורית ברצועה עם פתיחה פאסיבית של מפרק הסאקרו-איליאק",
    propsNeeded: ["חגורת יוגה", "בולסטר", "בלוק עץ", "קיר לתמיכה"],
    poses: [
      { 
        poseId: "supta-padangusthasana", 
        durationText: "2 דקות לכל צד (חגורה סביב העקב, רגל תחתונה בקיר)", 
        tip: "שחרור עומס מהגב התחתון דרך הארכת מיתרי הברך ללא כל עומס על חוליות עמוד השדרה" 
      },
      { 
        poseId: "supta-baddha-konasana", 
        durationText: "4 דקות (שכיבה על בולסטר עם תמיכה לברכיים)", 
        tip: "פתיחה והרפיה של מפרקי הירך ועצם העצה" 
      },
      { 
        poseId: "adho-mukha-svanasana", 
        durationText: "2 דקות (דחיפת ידיים לקיר או ראש נח על בלוק)", 
        tip: "מתיחה והארכה של עמוד השדרה המותני ללא דחיסה" 
      },
      { 
        poseId: "prasarita-padottanasana", 
        durationText: "2 דקות (פישוק רחב עם קודקוד הראש נח על בלוק)", 
        tip: "הרגעת שרירי היציבה המותניים והורדת עומס" 
      },
      { 
        poseId: "setu-bandha-sarvangasana", 
        durationText: "3 דקות (תמיכת בלוק עץ רחב תחת הסאקרום)", 
        tip: "שחרור עומס מחוליות הגב התחתון" 
      },
      { 
        poseId: "savasana", 
        durationText: "5 דקות (שוקיים מונחות על מושב כיסא או בולסטר)", 
        tip: "הרפיה מושלמת של שרירי הפסואס והגב התחתון" 
      }
    ]
  },

  // --- 3. רצף קורס יסוד 1 מתוך אור על היוגה ---
  {
    id: "light-on-yoga-course-1",
    title: "רצף קורס יסוד שבועות 1–10 (אור על היוגה)",
    subtitle: "Light on Yoga Course 1 (Weeks 1-10)",
    category: "foundational",
    timing: "בוקר או אחה\"צ • לפני ארוחה",
    duration: "30-35 דקות",
    icon: "BookOpen",
    bgGradient: "from-amber-700/10 to-yellow-600/10",
    borderColor: "border-[#8C6549]",
    badgeColor: "bg-[#EAE0D3] text-[#382417] border-[#DECFC0]",
    description: "רצף התרגול המקורי והמדויק שחיבר ב.ק.ס איינגר בנספח הספר 'אור על היוגה' לשבועות הראשונים של המתרגל, המקנה את עקרונות היציבה, היישור והנשימה הנכונים",
    propsNeeded: ["בלוק עץ", "חגורת יוגה", "3-4 שמיכות איינגר"],
    poses: [
      { poseId: "tadasana", durationText: "1 דקה", tip: "עמידה שווה על עקבי הרגליים והבהונות כהר איתן" },
      { poseId: "vriksasana", durationText: "1 דקה לכל צד", tip: "שיווי משקל, ענווה ומיקוד תודעתי" },
      { poseId: "utthita-trikonasana", durationText: "1.5 דקות לכל צד", tip: "יד על בלוק מאחורי הקרסול, גב ורגליים במישור אחד" },
      { poseId: "virabhadrasana-1", durationText: "1 דקה לכל צד", tip: "הרמת בית החזה וחיזוק שרירי הרגליים" },
      { poseId: "virabhadrasana-2", durationText: "1 דקה לכל צד", tip: "ברך קדמית בזווית ישרה, גו אנכי ויציב" },
      { poseId: "parsvottanasana", durationText: "1.5 דקות לכל צד", tip: "ידיים על בלוקים מצידי הרגל, הארכת הגו קדימה" },
      { poseId: "prasarita-padottanasana", durationText: "2 דקות", tip: "קודקוד הראש נח ברכות על בלוק" },
      { poseId: "dandasana", durationText: "1 דקה", tip: "ישיבה זקופה ויישור עמוד השדרה" },
      { poseId: "paschimottanasana", durationText: "3 דקות", tip: "אחיזת רצועה סביב כפות הרגליים, זרועות ישרות" },
      { poseId: "salamba-sarvangasana", durationText: "5 דקות (על 3-4 שמיכות)", tip: "אם כל האסאנות, איזון בלוטת התריס ושקט פנימי" },
      { poseId: "halasana", durationText: "3 דקות", tip: "תנוחת המחרשה, הרגעת המוח" },
      { poseId: "savasana", durationText: "5 דקות", tip: "הרפיה מוחלטת להטמעת פירות התרגול" }
    ]
  },

  // --- 4. רצף פתיחת בית חזה ויציבה נגד גיבנת ישיבה ---
  {
    id: "desk-worker-posture",
    title: "רצף פתיחת בית חזה ויציבה זקופה",
    subtitle: "Chest Opening & Posture Alignment Sequence",
    category: "posture",
    timing: "באמצע יום עבודה או בסיומו",
    duration: "15-20 דקות",
    icon: "Activity",
    bgGradient: "from-sky-500/10 to-indigo-500/10",
    borderColor: "border-sky-300",
    badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
    description: "רצף ממוקד לפתיחת חגורת הכתפיים, הרחבת הריאות והסרת הגיבנת והעומס המצטבר מישיבה ממושכת מול מחשב ומסכים",
    propsNeeded: ["חגורת יוגה", "2 בלוקים", "בולסטר"],
    poses: [
      { poseId: "tadasana", durationText: "1 דקה (עם גב לקיר)", tip: "החזרת השכמות והעקבים לקו אנכי מדויק" },
      { poseId: "gomukhasana", durationText: "1.5 דקות לכל צד (חגורה בין הידיים)", tip: "פתיחה עמוקה של מפרקי הכתפיים והשכמות" },
      { poseId: "adho-mukha-svanasana", durationText: "2 דקות (דחיפת קיר)", tip: "הארכת בית החזה והרחקת השכמות מהאוזניים" },
      { poseId: "bhujangasana", durationText: "1 דקה (ידיים על בלוקים נמוכים)", tip: "פתיחת החזה והסרת עומס מחוליות הצוואר והגב" },
      { poseId: "ustrasana", durationText: "1.5 דקות (ידיים על בלוקים לצד העקבים)", tip: "הרחבת הכלוב הצלעי והסרת קימור הגב העליון" },
      { poseId: "supta-baddha-konasana", durationText: "4 דקות (שכיבה על בולסטר)", tip: "פתיחה פאסיבית עמוקה של בית החזה ללא מאמץ" },
      { poseId: "savasana", durationText: "4 דקות", tip: "הרפיה מלאה בשכיבה" }
    ]
  },

  // --- 5. רצף כפיפות לפנים ופיתולים לשקט מוחי (שבוע 2 בפונה) ---
  {
    id: "forward-bends-twists",
    title: "רצף כפיפות לפנים ופיתולים לשקט מוחי",
    subtitle: "Forward Bends & Calming Twists (RIMYI Week 2)",
    category: "remedial",
    timing: "אחה\"צ או ערב",
    duration: "25 דקות",
    icon: "Moon",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-300",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    description: "רצף לפי תוכנית השבוע השני של מכון האם בפונה, המשלב כפיפות לפנים ופיתולים המווסתים את פעילות הכבד, הטחול ומערכת העיכול ומעניקים שקט תודעתי מוחלט",
    propsNeeded: ["חגורה", "2 בלוקים", "שמיכות", "בולסטר"],
    poses: [
      { poseId: "adho-mukha-svanasana", durationText: "2 דקות (מצח על בלוק)", tip: "הארכת עמוד השדרה והרגעת תנודות החשיבה" },
      { poseId: "uttanasana", durationText: "2 דקות (מצח נח על כיסא או בלוק)", tip: "הרגעת הדופק והארכת מיתרי הברך" },
      { poseId: "dandasana", durationText: "1 דקה (ישיבה על שמיכה)", tip: "הכנת הגב לישיבה זקופה" },
      { poseId: "janu-sirsasana", durationText: "2 דקות לכל צד (חגורה סביב כף הרגל)", tip: "עיסוי איברי הבטן והרגעת מערכת העצבים" },
      { poseId: "marichyasana-3", durationText: "1.5 דקות לכל צד (יד אחורית על בלוק)", tip: "פיתול עדין המווסת את הכבד והטחול" },
      { poseId: "paschimottanasana", durationText: "3 דקות (חזה על בולסטר)", tip: "כפיפה לפנים במנוחה מוחלטת" },
      { poseId: "setu-bandha-sarvangasana", durationText: "3 דקות (בלוק תחת הסאקרום)", tip: "איזון מחדש של עמוד השדרה" },
      { poseId: "savasana", durationText: "5 דקות (כרית עיניים)", tip: "שחרור מוחלט של כל המתחים" }
    ]
  },

  // --- 6. רצף לחיזוק המערכת החיסונית וחידוש אנרגיה ---
  {
    id: "immune-booster",
    title: "רצף לחיזוק המערכת החיסונית וחידוש אנרגיה",
    subtitle: "Immune System & Vitality Booster Sequence",
    category: "remedial",
    timing: "בוקר או אחה\"צ בעת ירידת אנרגיה או לחילופי עונות",
    duration: "20 דקות",
    icon: "HeartPulse",
    bgGradient: "from-teal-500/10 to-sky-500/10",
    borderColor: "border-teal-300",
    badgeColor: "bg-teal-100 text-teal-900 border-teal-300",
    description: "רצף טיפולי של ב.ק.ס איינגר הממריץ את מערכת הלימפה, מרחיב את בלוטת התימוס בחזה, ומאזן את בלוטת התריס בעזרת שילוב של פתיחת בית חזה ותנוחות הפוכות נתמכות",
    propsNeeded: ["בולסטר", "קיר לתמיכה", "בלוק עץ", "שמיכות מקופלות"],
    poses: [
      { poseId: "supta-baddha-konasana", durationText: "4 דקות (שכיבה על בולסטר)", tip: "הרחבת בית החזה והמרצת מחזור הלימפה" },
      { poseId: "adho-mukha-svanasana", durationText: "2 דקות (הארכת הגו)", tip: "המרצת זרימת הדם הכללית" },
      { poseId: "viparita-karani", durationText: "5 דקות (רגליים על הקיר עם בולסטר)", tip: "סם חיים למערכת החיסון, הזרמת דם מחומצן ללב" },
      { poseId: "salamba-sarvangasana", durationText: "4 דקות (על שמיכות או כיסא)", tip: "איזון בלוטת התריס והמרצת חילוף החומרים" },
      { poseId: "halasana", durationText: "2 דקות", tip: "הרגעת המוח והורדת לחץ דם" },
      { poseId: "savasana", durationText: "5 דקות", tip: "ספיגה והתחדשות התאים" }
    ]
  },

  // --- 7. רצף מעורר לבוקר ---
  {
    id: "morning-awakening",
    title: "רצף מעורר לבוקר",
    subtitle: "Morning Awakening Sequence",
    category: "morning",
    timing: "בוקר • לפני האוכל (על קיבה ריקה)",
    duration: "15-20 דקות",
    icon: "Sun",
    bgGradient: "from-amber-500/10 to-orange-500/10",
    borderColor: "border-amber-300",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    description: "רצף תנוחות עמידה דינמי ונמרץ להזרמת דם, הרחבת בית החזה, מעורר את חוליות עמוד השדרה ומטעין את הגוף באנרגיה חיונית ליום החדש",
    propsNeeded: ["2 קוביות עץ", "חגורת יוגה"],
    poses: [
      { poseId: "tadasana", durationText: "1 דקה • 5 נשימות עמוקות", tip: "עמדו יציב, חלוקת משקל שווה על כפות הרגליים" },
      { poseId: "vriksasana", durationText: "1 דקה לכל צד", tip: "מיקוד המבט קדימה להשגת שיווי משקל" },
      { poseId: "utthita-trikonasana", durationText: "1.5 דקות לכל צד", tip: "הניחו כף יד על בלוק מאחורי הקרסול לפתיחת החזה" },
      { poseId: "virabhadrasana-2", durationText: "1 דקה לכל צד", tip: "ברך קדמית ב-90 מעלות, גו זקוף במרכז" },
      { poseId: "adho-mukha-svanasana", durationText: "2 דקות", tip: "דחיפת הידיים והרמת אגן מעלה ולאחור" },
      { poseId: "urdhva-mukha-svanasana", durationText: "1 דקה", tip: "פתיחה עמוקה של החזה והרמת הברכיים מהרצפה" },
      { poseId: "savasana", durationText: "3-5 דקות", tip: "הרפיה מלאה להטמעת האנרגיה בגוף" }
    ]
  },

  // --- 8. רצף הרפיה ושינה לערב ---
  {
    id: "evening-winddown",
    title: "רצף הרפיה ושינה לערב",
    subtitle: "Evening Restorative Wind-Down",
    category: "evening",
    timing: "ערב • לפני השינה",
    duration: "15-20 דקות",
    icon: "Moon",
    bgGradient: "from-indigo-500/10 to-purple-500/10",
    borderColor: "border-indigo-300",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
    description: "רצף כפיפות לפנים והפוכות מרגיעות המורידות לחץ דם, מאיטות את קצב הלב, משחררות מתח מיום העבודה ומכינות את הגוף לשינה עמוקה",
    propsNeeded: ["בולסטר", "2 קוביות", "כיסא / שמיכות"],
    poses: [
      { poseId: "uttanasana", durationText: "2 דקות (ראש נח על בלוק/כיסא)", tip: "הרפיית הגב והראש כלפי מטה ללא מאמץ" },
      { poseId: "janu-sirsasana", durationText: "2 דקות לכל צד", tip: "השתמשו בחגורה סביב כף הרגל ושמרו על נשימה רכה" },
      { poseId: "paschimottanasana", durationText: "3 דקות (עם בולסטר)", tip: "השעינו את החזה והראש על בולסטר להרפיה עמוקה" },
      { poseId: "halasana", durationText: "3 דקות (רגליים על כיסא)", tip: "הרגעת מוח עמוקה ושחרור עמוד השדרה" },
      { poseId: "savasana", durationText: "5 דקות (כרית עיניים)", tip: "הרפיית כל השרירים וכיסוי העיניים" }
    ]
  },

  // --- 9. רצף להרגעת כאבי ראש ומגרנות ---
  {
    id: "headache-relief",
    title: "רצף להרגעת כאבי ראש ומגרנות",
    subtitle: "Headache & Tension Relief Sequence",
    category: "remedial",
    timing: "בכל עת • בעת תחושת עומס, לחץ בראש או מגרנה",
    duration: "15 דקות",
    icon: "Brain",
    bgGradient: "from-teal-500/10 to-emerald-500/10",
    borderColor: "border-teal-300",
    badgeColor: "bg-teal-100 text-teal-900 border-teal-300",
    description: "רצף טיפולי (Remedial) ייחודי לאיינגר יוגה שבו קודקוד/מצח הראש נתמכים באופן רציף, דבר המפחית לחץ תוך-גולגולתי ומרגיע את מערכת העצבים",
    propsNeeded: ["קוביות עץ", "בולסטר", "כרית עיניים / תחבושת מצח"],
    poses: [
      { poseId: "prasarita-padottanasana", durationText: "2 דקות (קודקוד הראש על בלוק)", tip: "הנחת הראש על בלוק משקיטה את תנודות המוח" },
      { poseId: "adho-mukha-svanasana", durationText: "2 דקות (מצח נח על בלוק)", tip: "תמיכה במצח מונעת עומס מהצוואר והכתפיים" },
      { poseId: "paschimottanasana", durationText: "3 דקות (מצח על בולסטר)", tip: "כפיפה לפנים במנוחה מוחלטת ללא מאמץ" },
      { poseId: "salamba-sarvangasana", durationText: "3 דקות (על שמיכות / Viparita Karani)", tip: "הזרמת דם מאוזנת לראש ולהרגעת הלב" },
      { poseId: "savasana", durationText: "5 דקות (כרית עיניים ותחבושת מצח)", tip: "כיסוי העיניים מעניק חושך ושקט מוחלט למוח" }
    ]
  },

  // --- 10. רצף עדין להקלה על העיכול (לאחר ארוחה) ---
  {
    id: "post-meal-digestion",
    title: "רצף עדין להקלה על העיכול (לאחר ארוחה)",
    subtitle: "Post-Meal Digestive Relief",
    category: "digestion",
    timing: "לאחר ארוחה (או בעת תחושת כבדות בבטן)",
    duration: "10-15 דקות",
    icon: "Apple",
    bgGradient: "from-lime-500/10 to-green-500/10",
    borderColor: "border-lime-300",
    badgeColor: "bg-lime-100 text-lime-900 border-lime-300",
    description: "תנוחות יחידות שמותר ואף מומלץ לתרגל גם לאחר ארוחה! פותחות את האגן, מעסות בעדינות את איברי הבטן ומקלות על גזים ונפיחות",
    propsNeeded: ["בלוק מעץ", "חגורת יוגה"],
    poses: [
      { poseId: "virasana", durationText: "3-5 דקות (ישיבה על בלוק בין העקבים)", tip: "תנוחה קלאסית לעיכול! ניתן לתרגל מיד לאחר ארוחה" },
      { poseId: "baddha-konasana", durationText: "3 דקות (עם גב לקיר)", tip: "ישיבה זקופה, פתיחת המפשעות והרחבת האזור האורוגניטלי" },
      { poseId: "supta-padangusthasana", durationText: "2 דקות לכל צד (שכיבה על הגב)", tip: "מתיחת רגליים עדינה בשכיבה המפחיתה עומס מאיברי הבטן" },
      { poseId: "pavanamuktasana", durationText: "2 דקות (חיבוק ברכיים לחזה)", tip: "משחררת לחצים ורוחות כלואות במערכת העיכול" }
    ]
  },

  // --- 11. רצף להפחתת מתח וחרדה ---
  {
    id: "stress-anxiety-relief",
    title: "רצף להפחתת מתח וחרדה",
    subtitle: "Stress & Anxiety Relief Sequence",
    category: "remedial",
    timing: "בכל עת • כשמרגישים עומס רגשי או מתח נפשי",
    duration: "20 דקות",
    icon: "Heart",
    bgGradient: "from-rose-500/10 to-pink-500/10",
    borderColor: "border-rose-300",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
    description: "שילוב בין תנוחות פותחות חזה (להרחבת הנשימה) לכפיפות לפנים נתמכות. מחזיר תחושת ביטחון, קרקוע ושקט פנימי",
    propsNeeded: ["בולסטר", "2 קוביות", "חגורה"],
    poses: [
      { poseId: "adho-mukha-svanasana", durationText: "2 דקות (מצח נתמך)", tip: "הארכת עמוד השדרה והרגעת תנודות החשיבה" },
      { poseId: "baddha-konasana", durationText: "3 דקות (עם גב לקיר)", tip: "נשיפה איטית ועמוקה אל סרעפת משוחררת" },
      { poseId: "paschimottanasana", durationText: "4 דקות (עם בולסטר)", tip: "שהות ממושכת בלחיצה קלה של הבטן אל הבולסטר" },
      { poseId: "salamba-sarvangasana", durationText: "4 דקות (או Viparita Karani מול קיר)", tip: "הפחתת הורמוני עוררות והרגעת מערכת העצבים הסימפתטית" },
      { poseId: "savasana", durationText: "5 דקות (כיסוי עיניים)", tip: "שחרור מוחלט של המתח מכל תאי הגוף" }
    ]
  },

  // --- 12. רצף תמיכה עדין להריון ---
  {
    id: "pregnancy-safe",
    title: "רצף תמיכה עדין להריון",
    subtitle: "Pregnancy Safe Supported Sequence",
    category: "pregnancy",
    timing: "בוקר / צהריים • במהלך ההריון (מתאים לכל הטרימסטרים)",
    duration: "15-20 דקות",
    icon: "Sparkles",
    bgGradient: "from-amber-500/10 to-rose-500/10",
    borderColor: "border-amber-300",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    description: "תנוחות בטוחות עם פישוק רחב ועזרים המפנות מקום לבטן הצומחת, מעניקות מרחב לנשימה ומקלות על כאבי גב תחתון ואגן",
    propsNeeded: ["2 קוביות", "בולסטר", "קיר לתמיכה"],
    poses: [
      { poseId: "tadasana", durationText: "1 דקה (פישוק ברוחב האגן, גב לקיר)", tip: "עמידה רחבה ויציבה המונעת עומס באגן" },
      { poseId: "utthita-trikonasana", durationText: "1.5 דקות לכל צד (יד על בלוק גבוה)", tip: "שימוש בבלוק גבוה מונע דחיסה של הבטן והסרעפת" },
      { poseId: "virasana", durationText: "3 דקות (ישיבה על 2 בלוקים)", tip: "מרווח נדיב לברכיים ולאגן, תמיכה בזקירות עמוד השדרה" },
      { poseId: "baddha-konasana", durationText: "3 דקות (גב לקיר)", tip: "פתיחה בטוחה של המפשעות והכנת האגן" },
      { poseId: "savasana", durationText: "5 דקות (שכיבה על צד שמאל עם בולסטר)", tip: "שכיבה על צד שמאל עם בולסטר בין הברכיים לזרימת דם אופטימלית" }
    ]
  },

  // --- 13. רצף תרגול משרדי ליד השולחן והכיסא ---
  {
    id: "office-desk-chair-yoga",
    title: "רצף משרדי מהיר ליד השולחן והכיסא",
    subtitle: "Office Desk & Chair Sequence (No Mat Required)",
    category: "office",
    timing: "באמצע יום עבודה • בהפסקת צהריים או בעת עומס מול מסכים",
    duration: "10-12 דקות",
    icon: "Briefcase",
    bgGradient: "from-blue-600/10 to-cyan-500/10",
    borderColor: "border-blue-300",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    description: "רצף נגיש ומיידי המיועד לביצוע מלא בבגדי עבודה, ללא צורך במזרן יוגה או שכיבה על הרצפה. משתמש בכיסא המשרדי, בשולחן העבודה ובקיר לשחרור צוואר תפוס, פתיחת בית החזה, שחרור עומס מחוליות הגב התחתון ורענון המיקוד והראייה",
    propsNeeded: ["כיסא משרדי יציב", "שולחן עבודה", "קיר משרדי פנוי"],
    poses: [
      { 
        poseId: "tadasana", 
        durationText: "1-1.5 דקות (עמידה זקופה ושלוב אצבעות מעלה)", 
        tip: "שלבו אצבעות הידיים והפכו כפות ידיים מעלה (Parvatasana) להארכה מרבית של הצדדים והסרת כיווץ הישיבה" 
      },
      { 
        poseId: "gomukhasana", 
        durationText: "2 דקות (דקה לכל צד בישיבה על הכיסא)", 
        tip: "שילוב זרועות גומוקהאסאנה מאחורי הגב (או אחיזת שרוול/עט אם הידיים לא נפגשות) לשחרור עמוק של הכתפיים והעורף" 
      },
      { 
        poseId: "marichyasana-3", 
        durationText: "2 דקות (דקה לכל צד בעזרת משענת הכיסא)", 
        tip: "ישיבה צדית על הכיסא וסיבוב הגו לכיוון המשענת עם אחיזה בידיים להפגת עומס ולחץ מצטבר מחוליות המותן" 
      },
      { 
        poseId: "adho-mukha-svanasana", 
        durationText: "2 דקות (כפות ידיים על שולחן העבודה או גב הכיסא)", 
        tip: "הניחו ידיים על השולחן וצעדו אחורה עד שהגו מקביל לרצפה בזווית ישרה להארכת כל עמוד השדרה והמסטרינגס ללא מזרן" 
      },
      { 
        poseId: "uttanasana", 
        durationText: "1.5 דקות (אמות ומצח נחים על השולחן)", 
        tip: "שבו קרוב לשולחן, שלבו אמות והניחו עליהן את המצח לשחרור עומס מהצוואר, הרגעת הדופק ומנוחה מוחלטת לעיניים מהמסך" 
      },
      { 
        poseId: "vriksasana", 
        durationText: "2 דקות (דקה לכל רגל עם מגע קל בשולחן)", 
        tip: "עמידת עץ לצד השולחן עם יד אחת נוגעת קלות בשולחן ליציבות, ממריצה את זרימת הדם ברגליים ומחדשת את הריכוז" 
      },
      { 
        poseId: "savasana", 
        durationText: "2-3 דקות (ישיבה נינוחה לאחור וכיסוי עיניים בכפות הידיים)", 
        tip: "הישענו לאחור בכיסא, שפשפו את כפות הידיים לחמימות והניחו אותן בקעור על העיניים העצומות (Palming) לרענון עצבי מלא" 
      }
    ]
  }
];
