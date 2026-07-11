/**
 * Generation manifest:
 *   archetype: G              style: S3                 color_variant: warm-clay
 *   voice_family: V3          card_variant: CV8         cta_variant: CTA1
 *   header_variant: burger-only   footer_variant: FT3
 *   hero_overlay: HO3         hero_text: H2             hero_entrance: E3
 *   scene_variant: n/a        motion_variant: M1
 *   g_render_mode: loop       services_variant: SV3
 *   showcase_variant: n/a     hero_composition: HC2
 *   manifesto_variant: n/a    value_prop_variant: VV3
 *   process_variant: PRV2     booking_pattern: n/a
 *   hero_treatment: static-imagery-parallax
 *   glass_material: none      motion_vocabulary: ease-cinematic
 *   background_treatment: layered-photography-parallax
 *   card_material_variant: image-reveal-mask
 *   motion_bg_pattern: none   motion_bg_density: none
 *   narrative_shape: n/a      camera_vocabulary: n/a
 *   composition_pattern: n/a  subject_position: n/a
 *   lighting_temperature: n/a industry_video_tone: n/a
 *   bookingVariant: n/a       cartVariant: n/a          industry: specialty_coffee
 *   auth_strategy: none       customer_management_enabled: false
 *   subscribers_enabled: false
 */

export const siteConfig = {
  company: {
    name: "Copperleaf Coffee Roasters",
    slug: "copperleaf-coffee-roasters",
    tagline: "Small-batch specialty coffee, roasted with intention in Austin.",
    description: "Copperleaf Coffee Roasters is a small-batch specialty roastery in Austin, Texas. We source single-origin beans from trusted farms and roast them with care — for local cafés and coffee lovers who taste the difference.",
    email: "hello@copperleafcoffee.com",
    phone: "(512) 555-0147",
    location: "Austin, TX",
  },

  brand: {
    primary: "#C4794A",
    accent: "#8B6B3D",
    bg: "#FDF6F0",
    surface: "#FFF8F2",
    dark: "#2D1810",
    muted: "#6B5A4E",
  },

  typography: {
    display: "Lora",
    body: "Nunito",
  },

  seo: {
    siteUrl: "https://copperleafcoffee.com",
    title: "Copperleaf Coffee Roasters — Small-Batch Specialty Coffee, Austin TX",
    description: "Single-origin beans, wholesale roasting, and barista workshops from Austin's craft roastery.",
    ogImage: "",
  },

  socials: {
    instagram: "https://instagram.com/copperleafcoffee",
    facebook: "https://facebook.com/copperleafcoffee",
    x: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    threads: "",
    pinterest: "",
    whatsapp: "",
  },

  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],

  nav: [
    { label: "Our Beans", href: "#services" },
    { label: "Our Story", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Austin, TX — Est. 2019",
    h1: "Roasted with intention.",
    subtitle: "Single-origin specialty coffee, small-batch roasted for cafés and home brewers who taste the difference.",
    cta: { label: "Explore Our Beans", href: "#services" },
    secondaryCta: { label: "Get in Touch", href: "#contact" },
  },

  services: [
    {
      name: "Single-Origin Beans",
      slug: "single-origin-beans",
      description: "Traceable lots from farms we trust — Ethiopia, Colombia, Guatemala, and rotating seasonal picks roasted to highlight each origin's character.",
    },
    {
      name: "Wholesale Roasting",
      slug: "wholesale-roasting",
      description: "Consistent, fresh-roasted beans delivered to your café on a schedule that works. Custom profiles available for partners.",
    },
    {
      name: "Barista Workshops",
      slug: "barista-workshops",
      description: "Hands-on sessions covering extraction, milk technique, and sensory calibration. For home brewers and professional teams alike.",
    },
  ],

  about: {
    heading: "Our Story",
    body: "Copperleaf started in a garage with a sample roaster and a stubborn belief: great coffee shouldn't require a passport. We source directly, roast weekly, and deliver the same day. Every bag carries the name of the farm, the altitude, and the story behind the beans.",
    values: [
      { title: "Direct Trade", description: "We buy from farmers we know by name, paying above fair-trade minimums." },
      { title: "Small Batch", description: "We roast in 12kg lots so nothing sits on a shelf longer than a week." },
      { title: "Local First", description: "Austin cafés get priority. Freshness isn't a marketing word — it's logistics." },
    ],
  },

  process: [
    { step: 1, title: "Source", description: "We cup samples from farms across 4 continents, selecting lots with distinct character." },
    { step: 2, title: "Profile", description: "Each origin gets a custom roast profile developed over dozens of test batches." },
    { step: 3, title: "Roast", description: "Small-batch drum roasting, every Tuesday and Friday. Nothing older than 5 days ships." },
    { step: 4, title: "Deliver", description: "Same-day delivery to Austin partners. Nationwide shipping within 48 hours of roast." },
  ],

  stats: [
    { value: 12, suffix: "+", label: "Origin countries" },
    { value: 40, suffix: "+", label: "Café partners" },
    { value: 5, suffix: " yrs", label: "Roasting in Austin" },
  ],

  cta: {
    heading: "Ready to taste the difference?",
    body: "Whether you're a café looking for a roasting partner or a home brewer chasing better mornings — let's talk beans.",
    label: "Start a Conversation",
    href: "#contact",
  },

  contact: {
    heading: "Get in Touch",
    email: "hello@copperleafcoffee.com",
    phone: "(512) 555-0147",
    address: "1204 E 6th St, Austin, TX 78702",
    hours: "Roastery visits by appointment · Workshop schedule on Instagram",
  },

  scrollHero: {
    archetype: "G",
    styleId: "S3",
    assetMode: "prompt-only",
    imageUrl: "",
    frameCount: 0,
    scrollDistance: 1,
  },

  headerVariant: "burger-only",

  footer: {
    variant: "FT3",
  },

  footerVariant: "FT3",

  motion: {
    intensity: "medium",
    cursorFollower: false,
    scrollProgress: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;
