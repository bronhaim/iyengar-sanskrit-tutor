export const YOGA_SEQUENCES = [
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
    description: "רצף תנוחות עמידה דינמי ונמרץ להזרמת דם, הרחבת בית החזה, מעורר את חוליות עמוד השדרה ומטעין את הגוף באנרגיה חיונית ליום החדש.",
    propsNeeded: ["2 קוביות עץ", "חגורת יוגה"],
    poses: [
      { poseId: "tadasana", durationText: "1 דקה • 5 נשימות עמוקות", tip: "עמדו יציב, חלוקת משקל שווה על כפות הרגליים." },
      { poseId: "vriksasana", durationText: "1 דקה לכל צד", tip: "מיקוד המבט קדימה להשגת שיווי משקל." },
      { poseId: "utthita-trikonasana", durationText: "1.5 דקות לכל צד", tip: "הניחו כף יד על בלוק מאחורי הקרסול לפתיחת החזה." },
      { poseId: "virabhadrasana-2", durationText: "1 דקה לכל צד", tip: "ברך קדמית ב-90 מעלות, גו זקוף במרכז." },
      { poseId: "adho-mukha-svanasana", durationText: "2 דקות", tip: "דחיפת הידיים והרמת אגן מעלה ולאחור." },
      { poseId: "urdhva-mukha-svanasana", durationText: "1 דקה", tip: "פתיחה עמוקה של החזה והרמת הברכיים מהרצפה." },
      { poseId: "savasana", durationText: "3-5 דקות", tip: "הרפיה מלאה להטמעת האנרגיה בגוף." }
    ]
  },
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
    description: "רצף כפיפות לפנים והפוכות מרגיעות המורידות לחץ דם, מאיטות את קצב הלב, משחררות מתח מיום העבודה ומכינות את הגוף לשינה עמוקה.",
    propsNeeded: ["בולסטר", "2 קוביות", "כיסא / שמיכות"],
    poses: [
      { poseId: "uttanasana", durationText: "2 דקות (ראש נח על בלוק/כיסא)", tip: "הרפיית הגב והראש כלפי מטה ללא מאמץ." },
      { poseId: "janu-sirsasana", durationText: "2 דקות לכל צד", tip: "השתמשו בחגורה סביב כף הרגל ושמרו על נשימה רכה." },
      { poseId: "paschimottanasana", durationText: "3 דקות (עם בולסטר)", tip: "השעינו את החזה והראש על בולסטר להרפיה עמוקה." },
      { poseId: "halasana", durationText: "3 דקות (רגליים על כיסא)", tip: "הרגעת מוח עמוקה ושחרור עמוד השדרה." },
      { poseId: "savasana", durationText: "5 דקות (כרית עיניים)", tip: "הרפיית כל השרירים וכיסוי העיניים." }
    ]
  },
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
    description: "רצף טיפולי (Remedial) ייחודי לאיינגר יוגה שבו קודקוד/מצח הראש נתמכים באופן רציף, דבר המפחית לחץ תוך-גולגולתי ומרגיע את מערכת העצבים.",
    propsNeeded: ["קוביות עץ", "בולסטר", "כרית עיניים / תחבושת מצח"],
    poses: [
      { poseId: "prasarita-padottanasana", durationText: "2 דקות (קודקוד הראש על בלוק)", tip: "הנחת הראש על בלוק משקיטה את תנודות המוח." },
      { poseId: "adho-mukha-svanasana", durationText: "2 דקות (מצח נח על בלוק)", tip: "תמיכה במצח מונעת עומס מהצוואר והכתפיים." },
      { poseId: "paschimottanasana", durationText: "3 דקות (מצח על בולסטר)", tip: "כפיפה לפנים במנוחה מוחלטת ללא מאמץ." },
      { poseId: "salamba-sarvangasana", durationText: "3 דקות (על שמיכות / Viparita Karani)", tip: "הזרמת דם מאוזנת לראש ולהרגעת הלב." },
      { poseId: "savasana", durationText: "5 דקות (כרית עיניים ותחבושת מצח)", tip: "כיסוי העיניים מעניק חושך ושקט מוחלט למוח." }
    ]
  },
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
    description: "תנוחות יחידות שמותר ואף מומלץ לתרגל גם לאחר ארוחה! פותחות את האגן, מעסות בעדינות את איברי הבטן ומקלות על גזים ונפיחות.",
    propsNeeded: ["בלוק מעץ", "חגורת יוגה"],
    poses: [
      { poseId: "virasana", durationText: "3-5 דקות (ישיבה על בלוק בין העקבים)", tip: "תנוחה קלאסית לעיכול! ניתן לתרגל מיד לאחר ארוחה." },
      { poseId: "baddha-konasana", durationText: "3 דקות (עם גב לקיר)", tip: "ישיבה זקופה, פתיחת המפשעות והרחבת האזור האורוגניטלי." },
      { poseId: "supta-padangusthasana", durationText: "2 דקות לכל צד (שכיבה על הגב)", tip: "מתיחת רגליים עדינה בשכיבה המפחיתה עומס מאיברי הבטן." },
      { poseId: "pavanamuktasana", durationText: "2 דקות (חיבוק ברכיים לחזה)", tip: "משחררת לחצים ורוחות כלואות במערכת העיכול." }
    ]
  },
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
    description: "שילוב בין תנוחות פותחות חזה (להרחבת הנשימה) לכפיפות לפנים נתמכות. מחזיר תחושת ביטחון, קרקוע ושקט פנימי.",
    propsNeeded: ["בולסטר", "2 קוביות", "חגורה"],
    poses: [
      { poseId: "adho-mukha-svanasana", durationText: "2 דקות (מצח נתמך)", tip: "הארכת עמוד השדרה והרגעת תנודות החשיבה." },
      { poseId: "baddha-konasana", durationText: "3 דקות (עם גב לקיר)", tip: "נשיפה איטית ועמוקה אל סרעפת משוחררת." },
      { poseId: "paschimottanasana", durationText: "4 דקות (עם בולסטר)", tip: "שהות ממושכת בלחיצה קלה של הבטן אל הבולסטר." },
      { poseId: "salamba-sarvangasana", durationText: "4 דקות (או Viparita Karani מול קיר)", tip: "הפחתת הורמוני עוררות והרגעת מערכת העצבים הסימפתטית." },
      { poseId: "savasana", durationText: "5 דקות (כיסוי עיניים)", tip: "שחרור מוחלט של המתח מכל תאי הגוף." }
    ]
  },
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
    description: "תנוחות בטוחות עם פישוק רחב ועזרים המפנות מקום לבטן הצומחת, מעניקות מרחב לנשימה ומקלות על כאבי גב תחתון ואגן.",
    propsNeeded: ["2 קוביות", "בולסטר", "קיר לתמיכה"],
    poses: [
      { poseId: "tadasana", durationText: "1 דקה (פישוק ברוחב האגן, גב לקיר)", tip: "עמידה רחבה ויציבה המונעת עומס באגן." },
      { poseId: "utthita-trikonasana", durationText: "1.5 דקות לכל צד (יד על בלוק גבוה)", tip: "שימוש בבלוק גבוה מונע דחיסה של הבטן והסרעפת." },
      { poseId: "virasana", durationText: "3 דקות (ישיבה על 2 בלוקים)", tip: "מרווח נדיב לברכיים ולאגן, תמיכה בזקירות עמוד השדרה." },
      { poseId: "baddha-konasana", durationText: "3 דקות (גב לקיר)", tip: "פתיחה בטוחה של המפשעות והכנת האגן." },
      { poseId: "savasana", durationText: "5 דקות (שכיבה על צד שמאל עם בולסטר)", tip: "שכיבה על צד שמאל עם בולסטר בין הברכיים לזרימת דם אופטימלית." }
    ]
  }
];
