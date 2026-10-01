# Iyengar Yoga Master Application - Design Spec & Asset Kit

## 1. Core Visual & Brand Identity
- **App Title:** איינגר יוגה • מדריך תרגול מעמיק, אנטומיה ושפת הסנסקריט
- **Tradition:** Strict B.K.S. Iyengar Tradition (*Light on Yoga* alignment standards).
- **Aesthetics:** Warm neutral studio palette, clean seamless white backgrounds, studio lighting, minimal vintage Iyengar bloomers outfit, bright clear contrast suitable for SVG vector annotation overlays.

## 2. Character & Appearance Spec (Anchor Model)
To ensure **100% strict visual consistency** across all pose photographs:
- **Person:** 30s male model, dark short brown hair, distinct facial features, light stubble.
- **Clothing:** Muted vintage pink/coral t-shirt, fitted vintage Iyengar yoga bloomers shorts (grey gathered cotton bloomers with elastic leg cuffs). Barefoot.
- **Setting:** Clean studio setting with a pure seamless white background and seamless white floor.
- **Lighting:** Clear, bright, neutral studio lighting suitable for direct SVG vector overlay arrows.
- **Framing:** Full body in frame, no limbs cropped, sharp focus, precise Iyengar anatomical alignment.

## 3. Anchor Reference Files Location
- Primary reference directory: `public/assets/character-references/`
- Reference Photo 1 (Full Body Standing/Outfit Anchor): `watermarked_img_1659219516270568555.jpg`
- Reference Photo 2 (Trikonasana / Alignment Anchor): `watermarked_img_11923653126053845456.jpg`
- Reference Photo 3 (Facial Profile & Stubble Anchor): `facial_profile_anchor.jpg`

## 4. Master Prompt Template for Image Generation (CLEAN PHOTOGRAPHY ONLY - NO ARROWS)
```plaintext
A full-body photograph of the exact same man from the reference image, performing the Iyengar yoga pose: [INSERT_POSE_NAME_HERE].

Character & Appearance:
- Same person: 30s man, dark short brown hair, distinct facial features, light stubble (maintain strict visual identity to reference image).
- Clothing: Muted vintage pink/coral t-shirt, fitted vintage Iyengar yoga bloomers shorts (grey gathered cotton bloomers with elastic leg cuffs). Barefoot.

Setting & Style:
- Clean studio setting with a pure seamless white background and seamless white floor.
- Clear, bright, neutral studio lighting.
- Pure photograph, NO drawn arrows, NO text, NO graphic overlays, clean authentic posture demonstration.
- Full body in frame, no limbs cropped.
- Ultra-realistic, crisp focus, anatomical precision showing correct alignment for Iyengar yoga.
```

## 5. Workflow Automation for Pose Generation & Asset Integration
1. Save generated WebP / JPG assets into `public/images/poses/[pose-id].jpg` (or `.webp`).
2. Update dataset entry in `src/data/posesData.js` with pose details, props guide, and muscle anatomy.
3. Clean high-end photography without graphical overlays.

## 6. Priority Fixes & Alignment Rectifications (Scheduled for 15:07 Reset)

### 🌟 Universal Golden Rule for All Bent-Knee Poses (כלל ברזל יישורת):
**"תמיד בתנוחות שהרגל הקדמית כפופה היא צריכה להיות ב-90 מעלות מדויקות בין המפסעה לברך"**
In ANY standing pose where the front leg is bent (Virabhadrasana I, Virabhadrasana II, Utthita Parsvakonasana, Parivrtta Parsvakonasana):
1. **Front Thigh:** Must descend until it is strictly horizontal and parallel to the floor. The inner groin crease drops to the exact level of the inner knee.
2. **Front Shin:** Strictly vertical and perpendicular to the floor (90° right angle). The knee is stacked directly above the heel/ankle – NEVER overshooting forward past the toes or collapsing inward.
3. **Clean Photography Only:** NO arrows or graphics drawn on the body.

### Virabhadrasana I (ויראבדראסאנה 1 - Warrior 1) - CRITICAL FIX #1:
- **Identified Flaws in previous version to fix:**
  - Back foot was partially lifted on the ball of the foot (Gym lunge/Crescent lunge mistake) instead of rooted flat.
  - Front thigh was not deep enough at 90 degrees.
- **Strict B.K.S. Iyengar "Light on Yoga" Requirements for Clean Replacement:**
  1. **Back Foot & Leg:** Back foot MUST be completely flat on the floor, turned inward 45-60 degrees. Outer edge and heel pressing down forcefully into the floor with back knee completely straight and kneecap locked up.
  2. **Front Thigh & Knee:** Front knee bent to an EXACT 90-degree right angle. Thigh strictly parallel to the floor, shin strictly vertical (knee stacked directly above ankle/heel, NEVER drifting forward past toes).
  3. **Hips & Pelvis:** Both hips squared completely forward toward the front wall (left hip rolling forward, right hip drawing back).
  4. **Arms & Spine:** Arms stretched straight up overhead, elbows straight, palms pressed together in Anjali Mudra, chest lifted, head tilted back gazing at thumbs.
  5. **Style:** Clean, beautiful studio photograph without any arrows or graphics.

