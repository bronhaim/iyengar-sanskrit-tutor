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

## 4. Master Prompt Template for Image Generation
```plaintext
A full-body photograph of the exact same man from the reference image, performing the Iyengar yoga pose: [INSERT_POSE_NAME_HERE].

Character & Appearance:
- Same person: 30s man, dark short brown hair, distinct facial features, light stubble (maintain strict visual identity to reference image).
- Clothing: Muted vintage pink/coral t-shirt, fitted vintage Iyengar yoga bloomers shorts (grey gathered cotton bloomers with elastic leg cuffs). Barefoot.

Setting & Style:
- Clean studio setting with a pure seamless white background and seamless white floor.
- Clear, bright, neutral lighting suitable for adding vector annotation arrows later.
- Full body in frame, no limbs cropped.
- Ultra-realistic, crisp focus, anatomical precision showing correct alignment for Iyengar yoga.
```

## 5. Workflow Automation for Pose Generation & Asset Integration
1. Save generated WebP / JPG assets into `public/images/poses/[pose-id].jpg` (or `.webp`).
2. Update dataset entry in `src/data/posesData.js` with pose details, action vectors, props guide, and muscle anatomy.
3. Keep clean white backgrounds to enable SVG/Canvas Action Vector Arrow overlays in `PoseSvgIllustration.jsx` and `ImageModal.jsx`.
