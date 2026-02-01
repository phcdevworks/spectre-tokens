# 🖼️ Aspect Ratios

Consistent aspect ratio tokens for media in the Spectre design system.

[← Back to Examples](README.md)

## Aspect Ratio Tokens

| Token                    | Ratio    | Decimal | Usage                                    |
| ------------------------ | -------- | ------- | ---------------------------------------- |
| `aspectRatios.square`    | **1:1**  | 1.000   | Profile images, thumbnails, social posts |
| `aspectRatios.video`     | **16:9** | 1.778   | Video embeds, widescreen content         |
| `aspectRatios.portrait`  | **3:4**  | 0.750   | Vertical images, mobile screenshots      |
| `aspectRatios.landscape` | **4:3**  | 1.333   | Traditional photos, presentations        |
| `aspectRatios.ultrawide` | **21:9** | 2.333   | Cinematic content, panoramas             |
| `aspectRatios.hero`      | **2:1**  | 2.000   | Hero banners, wide headers               |

## Visual Comparison

```
Square (1:1)        ┌─────────┐
                    │         │
                    │    1    │
                    │         │
                    └─────────┘

Video (16:9)        ┌─────────────────────┐
                    │                     │
                    │        16:9         │
                    └─────────────────────┘

Portrait (3:4)      ┌──────────┐
                    │          │
                    │          │
                    │   3:4    │
                    │          │
                    │          │
                    └──────────┘

Landscape (4:3)     ┌─────────────────┐
                    │                 │
                    │      4:3        │
                    │                 │
                    └─────────────────┘

Ultrawide (21:9)    ┌─────────────────────────────────┐
                    │            21:9                 │
                    └─────────────────────────────────┘

Hero (2:1)          ┌───────────────────────────┐
                    │           2:1             │
                    └───────────────────────────┘
```

## Usage Guidelines

### Square (1:1)

**Best For:**

- Profile pictures and avatars
- Product thumbnails
- Instagram-style posts
- Logo containers
- Icon backgrounds
- Social media assets

**Dimensions:**

- 64×64px (small avatars)
- 128×128px (medium avatars)
- 256×256px (large avatars)
- 512×512px (product images)
- 1080×1080px (social posts)

**Example Use Cases:**

```
User Avatar        Product Card       Social Post
┌─────────┐       ┌─────────┐       ┌─────────┐
│  👤     │       │  📦     │       │  🎨     │
│         │       │         │       │         │
└─────────┘       └─────────┘       └─────────┘
```

---

### Video (16:9)

**Best For:**

- YouTube video embeds
- Widescreen video players
- Featured media
- Tutorial videos
- Webinar recordings
- Presentation slides

**Dimensions:**

- 640×360px (small)
- 1280×720px (HD)
- 1920×1080px (Full HD)
- 3840×2160px (4K)

**Example Use Cases:**

```
Video Embed                Tutorial Section
┌─────────────────────┐   ┌─────────────────────┐
│                     │   │   ▶ Watch Tutorial  │
│    ▶ Play Video     │   │                     │
│                     │   └─────────────────────┘
└─────────────────────┘
```

---

### Portrait (3:4)

**Best For:**

- Mobile app screenshots
- Vertical photography
- Story-format content
- Book covers
- Portrait photos
- Mobile mockups

**Dimensions:**

- 768×1024px (iPad portrait)
- 1080×1440px (high-res mobile)
- 1536×2048px (tablet)

**Example Use Cases:**

```
App Screenshot    Mobile Mockup      Portrait Photo
┌──────────┐     ┌──────────┐      ┌──────────┐
│  📱      │     │  📱      │      │    🌅    │
│          │     │          │      │          │
│   App    │     │  Design  │      │  Photo   │
│  Screen  │     │  Preview │      │          │
│          │     │          │      │          │
└──────────┘     └──────────┘      └──────────┘
```

---

### Landscape (4:3)

**Best For:**

- Traditional photography
- Presentation slides
- Classic media
- Screenshots
- Standard displays
- Whiteboard content

**Dimensions:**

- 1024×768px (XGA)
- 1600×1200px (UXGA)
- 2048×1536px (QXGA)

**Example Use Cases:**

```
Presentation           Photo Gallery
┌─────────────────┐   ┌─────────────────┐
│                 │   │                 │
│  Slide Content  │   │  Landscape Photo│
│                 │   │                 │
└─────────────────┘   └─────────────────┘
```

---

### Ultrawide (21:9)

**Best For:**

- Cinematic content
- Panoramic photography
- Ultrawide monitors
- Movie trailers
- Epic hero sections
- Immersive visuals

**Dimensions:**

- 2560×1080px (UW-FHD)
- 3440×1440px (UW-QHD)
- 5120×2160px (5K2K)

**Example Use Cases:**

```
Cinematic Hero
┌─────────────────────────────────┐
│    Epic Landscape Background    │
└─────────────────────────────────┘

Movie Trailer
┌─────────────────────────────────┐
│     Widescreen Cinema View      │
└─────────────────────────────────┘
```

---

### Hero (2:1)

**Best For:**

- Website hero sections
- Banner images
- Header backgrounds
- Wide promotional images
- Landing page headers
- Cover photos

**Dimensions:**

- 1600×800px (desktop)
- 2400×1200px (high-res)
- 3200×1600px (retina)

**Example Use Cases:**

```
Hero Section
┌───────────────────────────┐
│    Welcome Message        │
│    Call to Action         │
└───────────────────────────┘

Page Banner
┌───────────────────────────┐
│   Product Launch Banner   │
└───────────────────────────┘
```

---

## CSS Implementation

### Using Aspect Ratio

```css
/* Modern approach */
.image-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

/* With tokens */
.video-wrapper {
  aspect-ratio: var(--aspect-ratio-video); /* 16/9 */
}

.avatar {
  aspect-ratio: var(--aspect-ratio-square); /* 1/1 */
}
```

### Padding-Bottom Fallback

```css
/* Legacy browser support */
.aspect-ratio-16-9 {
  position: relative;
  padding-bottom: 56.25%; /* 9/16 = 0.5625 */
  height: 0;
  overflow: hidden;
}

.aspect-ratio-16-9 img,
.aspect-ratio-16-9 video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Object Fit Options

### Cover (Default)

```css
img {
  object-fit: cover; /* Fills container, may crop */
}
```

**Use when:** Image should fill container completely

### Contain

```css
img {
  object-fit: contain; /* Fits within container, no crop */
}
```

**Use when:** Full image must be visible (logos, products)

### Fill

```css
img {
  object-fit: fill; /* Stretches to fill */
}
```

**Use when:** Distortion is acceptable (rare)

---

## Responsive Aspect Ratios

### Mobile to Desktop

```css
.hero-image {
  aspect-ratio: 3 / 4; /* Portrait on mobile */
}

@media (min-width: 768px) {
  .hero-image {
    aspect-ratio: 16 / 9; /* Widescreen on desktop */
  }
}
```

### Adaptive Cards

```css
.card-image {
  aspect-ratio: 1 / 1; /* Square on mobile */
}

@media (min-width: 768px) {
  .card-image {
    aspect-ratio: 4 / 3; /* Landscape on tablet+ */
  }
}
```

---

## Best Practices

### Performance

- Use appropriate image dimensions for each ratio
- Serve responsive images with `srcset`
- Lazy load images below the fold
- Compress images without quality loss

### Consistency

- Use the same aspect ratio for similar content
- Maintain ratios across breakpoints when possible
- Document aspect ratio usage per component

### Accessibility

- Always provide alt text
- Ensure sufficient contrast for text overlays
- Consider image content in aspect ratio choice

### Content Strategy

- Prepare images in multiple ratios for responsive designs
- Crop images thoughtfully to preserve focal points
- Test aspect ratios with real content

---

All aspect ratio tokens are from `tokens/core.json`.
