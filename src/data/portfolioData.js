export const portfolioData = {
  personal: {
    name: "Muaaz",
    role: "Graphic Designer",
    roles: [
      "Graphic Designer",
      "Visual Identity Specialist",
      "Brand Strategist",
      "Packaging Designer",
      "Social Media Creative"
    ],
    tagline: "I create visual identities, brand stories, and designs that make an impact.",
    subTagline: "I turn ideas into visual stories.",
    passionStatement: "DESIGN IS MY PASSION",
    bio: "I am a multidisciplinary Graphic Designer specializing in brand identities, high-impact vector logos, social media aesthetics, and bespoke packaging. I blend typography, minimalist grid systems, and color theory to transform visions into unforgettable visual stories.",
    location: "Available Worldwide (Remote)",
    email: "muaaz.design@gmail.com",
    phone: "03472100798",
    phoneTel: "+923472100798",
    phoneFormatted: "+92 347 2100798",
    whatsappUrl: "https://wa.me/923472100798?text=Hi%20Muaaz,%20I%20love%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!",
    availability: "Available for new projects & full brand commissions",
    isAvailable: true,
    socials: {
      github: "https://github.com/muaaz42/my-portfolio"
    },
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Completed", value: "100+" },
      { label: "Happy Clients", value: "50+" }
    ]
  },

  // What I Do - Core 4 disciplines
  whatIDo: [
    {
      id: "logo-design",
      title: "LOGO DESIGN",
      shortDesc: "Vector geometry, monograms, wordmarks & emblem systems.",
      description: "Crafting timeless, memorable, and mathematically balanced vector logos designed to look distinct at any scale — from a favicon to a billboard.",
      deliverables: ["Master Vector Files (AI, EPS, SVG)", "Monogram & Symbol Variations", "Light & Dark Mode Formats", "Typography & Color Lockups"],
      iconType: "LogoDesignIcon"
    },
    {
      id: "brand-identity",
      title: "BRAND IDENTITY",
      shortDesc: "Complete brand guidelines, stationery & cohesive visual systems.",
      description: "Developing comprehensive visual ecosystems that tell your brand story through deliberate typography, tailored color palettes, iconography, and style rules.",
      deliverables: ["Brand Style Guide PDF", "Color Palette & Typography Specs", "Business Stationery & Invoices", "Presentation & Deck Templates"],
      iconType: "BrandIdentityIcon"
    },
    {
      id: "social-media-design",
      title: "SOCIAL MEDIA DESIGN",
      shortDesc: "High-conversion feed posts, carousels, banners & story sets.",
      description: "Designing scroll-stopping digital content tailored for Instagram, LinkedIn, YouTube, and digital ad networks to boost follower growth and sales.",
      deliverables: ["Editable Canva / Figma Templates", "High-Resolution Carousel Slides", "Promotional Ad Banners", "Story & Highlight Covers"],
      iconType: "SocialMediaIcon"
    },
    {
      id: "print-design",
      title: "PRINT DESIGN",
      shortDesc: "Product packaging, box dielines, apparel & editorial print.",
      description: "Premium physical design with production-ready CMYK dielines, foil-stamp specs, tactile packaging boxes, merchandise, and editorial brochures.",
      deliverables: ["Production-Ready CMYK Files", "Custom 3D Box Packaging Dielines", "Apparel & Merchandise Mockups", "Brochures, Menus & Flyers"],
      iconType: "PrintDesignIcon"
    }
  ],

  skills: {
    designTools: [
      { name: "Adobe Illustrator", level: 98, tag: "Vector Mastery", color: "#FF9A00" },
      { name: "Adobe Photoshop", level: 95, tag: "Retouching & Compositing", color: "#31A8FF" },
      { name: "Adobe InDesign", level: 90, tag: "Editorial & Layout", color: "#FF3366" },
      { name: "Figma", level: 92, tag: "UI & Digital Systems", color: "#F24E1E" },
      { name: "Adobe After Effects", level: 85, tag: "Motion & Logo Animation", color: "#9999FF" },
      { name: "Cinema 4D / Blender", level: 80, tag: "3D Product Mockups", color: "#EA7600" }
    ],
    disciplines: [
      { name: "Logo & Brand Mark Systems", level: 96, tag: "Core Specialty", color: "#ffffff" },
      { name: "Visual Identity & Style Guides", level: 95, tag: "Core Specialty", color: "#ffffff" },
      { name: "Typography & Font Pairing", level: 94, tag: "Advanced", color: "#ffffff" },
      { name: "Packaging & Dieline Engineering", level: 90, tag: "Advanced", color: "#ffffff" },
      { name: "Color Psychology & Contrast", level: 96, tag: "Expert", color: "#ffffff" },
      { name: "Social Media Campaign Art", level: 92, tag: "High Engagement", color: "#ffffff" }
    ]
  },

  projects: [
    {
      id: "aurora-luxury-identity",
      title: "Aura Luxe - Haute Parfumerie Identity",
      category: "Brand Identity",
      tagline: "Ultra-luxury visual identity and bespoke glass bottle packaging.",
      description: "Developed an opulent, minimalist brand identity for a Parisian niche fragrance house. Created bespoke custom typography, gold-foil packaging dielines, and immersive editorial lookbooks.",
      challenge: "Capturing tactile elegance in minimalist design while creating packaging that stands out on luxury boutique shelves.",
      solution: "Engineered a custom high-contrast serif monogram paired with blind embossing and tactile matte black paper stock specifications.",
      keyFeatures: [
        "Custom handcrafted monogram and luxury wordmark",
        "Gold-foil stamped perfume box dielines with internal foam inserts",
        "48-page comprehensive brand guidelines manual",
        "High-fashion 3D bottle renders and advertising posters"
      ],
      metrics: "✨ Featured in Design Inspiration & 300% preorder launch surge",
      technologies: ["Illustrator", "Photoshop", "InDesign", "Cinema 4D", "Figma"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      badge: "Featured Branding",
      color: "from-neutral-900 to-stone-800",
      accentGlow: "rgba(255, 255, 255, 0.25)"
    },
    {
      id: "kuro-streetwear-graphics",
      title: "Kuro Athletics - Cyber Streetwear Brand",
      category: "Print Design",
      tagline: "Bold typography, screen-print apparel & modular packaging box.",
      description: "Complete visual identity and apparel graphics collection for a cyberpunk-inspired performance streetwear label.",
      challenge: "Balancing aggressive typographic distress with modern high-fashion apparel production constraints.",
      solution: "Created modular vector graphics optimized for high-density puff print and reflective screen printing.",
      keyFeatures: [
        "8-piece apparel collection graphics (hoodies, tees, caps)",
        "Custom shipping box dieline with UV spot gloss pattern",
        "Woven label & hanging tag production specifications",
        "Social media launch campaign assets & motion teasers"
      ],
      metrics: "🔥 Sold out first collection in under 48 hours",
      technologies: ["Illustrator", "Photoshop", "After Effects", "Blender"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      badge: "Apparel & Packaging",
      color: "from-zinc-900 to-neutral-950",
      accentGlow: "rgba(255, 255, 255, 0.2)"
    },
    {
      id: "zenith-geometric-logomark",
      title: "Zenith Labs - Tech Monogram System",
      category: "Logo Design",
      tagline: "Mathematical precision logo system for an AI robotics studio.",
      description: "Engineered an iconic geometric logomark constructed from golden-ratio arcs and negative space symbolism.",
      challenge: "Creating a symbol that works seamlessly across microscopic microchip laser engravings and massive architectural signage.",
      solution: "Built a mathematically rigid vector system with standardized optical compensation curves.",
      keyFeatures: [
        "Golden-ratio vector mark with responsive variations",
        "Full monochromatic dark & light brand lockups",
        "Comprehensive logo misuse and clearspace guide",
        "Animated vector SVG logo reveal for web and apps"
      ],
      metrics: "⚡ Scaled across 12 product lines with zero optical distortion",
      technologies: ["Adobe Illustrator", "After Effects", "Figma"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      badge: "Logo System",
      color: "from-neutral-900 to-slate-900",
      accentGlow: "rgba(255, 255, 255, 0.3)"
    },
    {
      id: "pulse-energy-packaging",
      title: "Nova Hydrate - Premium Can Packaging",
      category: "Print Design",
      tagline: "Vibrant aluminum beverage can packaging with tactile finish.",
      description: "Designed a 4-flavor organic electrolyte beverage line featuring kinetic color gradients, clean nutritional architecture, and holographic accents.",
      challenge: "Ensuring vivid color reproduction on raw aluminum can substrate while complying with FDA labeling requirements.",
      solution: "Utilized customized pantone ink separations and matte/gloss contrast layers for shelf pop.",
      keyFeatures: [
        "4-flavor matching can wrap dielines (355ml & 473ml)",
        "Retail 4-pack outer carton packaging design",
        "Photorealistic 3D moisture-droplet beverage renders",
        "In-store point-of-sale display posters"
      ],
      metrics: "🥤 Secured distribution across 450+ retail stores",
      technologies: ["Adobe Illustrator", "Photoshop", "Cinema 4D"],
      liveUrl: "",
      githubUrl: "",
      featured: false,
      badge: "Packaging",
      color: "from-stone-900 to-zinc-900",
      accentGlow: "rgba(255, 255, 255, 0.2)"
    },
    {
      id: "vanguard-social-kit",
      title: "Vanguard Growth - Social & Digital Ad Suite",
      category: "Social Media Design",
      tagline: "30+ high-engagement social templates & conversion-optimized ads.",
      description: "An end-to-end social media design system crafted for a venture capital & fintech accelerator.",
      challenge: "Creating a template system flexible enough for daily news posts without losing visual brand coherence.",
      solution: "Structured modular Canva and Figma master components with dynamic typography hierarchy.",
      keyFeatures: [
        "10-slide educational carousel layouts",
        "Animated video quote templates for Instagram Reels & TikTok",
        "YouTube thumbnail & banner brand identity kit",
        "LinkedIn thought leadership infographics"
      ],
      metrics: "📈 145% average increase in social engagement rate",
      technologies: ["Figma", "Photoshop", "Illustrator", "After Effects"],
      liveUrl: "",
      githubUrl: "",
      featured: false,
      badge: "Social Media",
      color: "from-neutral-900 to-stone-950",
      accentGlow: "rgba(255, 255, 255, 0.2)"
    },
    {
      id: "elysium-editorial-book",
      title: "Elysium Architecture - Biennial Monograph",
      category: "Print Design",
      tagline: "Hardcover editorial book layout with swiss typography grid.",
      description: "Designed a 220-page hardcover architectural retrospective book using asymmetrical swiss grids and tactile debossed linen cover.",
      challenge: "Harmonizing 300+ architectural photography works with bilingual typographic annotations.",
      solution: "Engineered a rigid 12-column baseline grid with generous white space and custom folio typography.",
      keyFeatures: [
        "Hardcover linen case binding with blind debossing",
        "Custom 12-column modular editorial grid system",
        "Curated matte art paper stock recommendations",
        "Interactive digital EPUB version with fluid layout"
      ],
      metrics: "📚 Awarded Bronze in Editorial Design 2024",
      technologies: ["InDesign", "Photoshop", "Illustrator"],
      liveUrl: "",
      githubUrl: "",
      featured: false,
      badge: "Editorial Print",
      color: "from-stone-900 to-neutral-900",
      accentGlow: "rgba(255, 255, 255, 0.2)"
    }
  ],

  experiences: [
    {
      period: "2023 - Present",
      role: "Lead Visual Identity Designer",
      company: "Muaaz Design Studio",
      location: "Worldwide (Remote)",
      description: "Directing end-to-end branding sprints, luxury product packaging, and global brand identity systems for high-growth DTC brands and venture startups.",
      achievements: [
        "Crafted over 100+ bespoke vector logo systems and brand guideline manuals.",
        "Engineered production-ready packaging dielines with 0% print misregistration rate across 30+ manufacturers.",
        "Achieved 100% 5-star client satisfaction rating across freelance platforms."
      ],
      technologies: ["Illustrator", "Photoshop", "InDesign", "Figma", "Cinema 4D"]
    },
    {
      period: "2021 - 2023",
      role: "Senior Brand & Packaging Designer",
      company: "Apex Creative Agency",
      location: "London & Remote",
      description: "Led multi-disciplinary design teams in creating beverage packaging, retail apparel collections, and high-conversion social advertising assets.",
      achievements: [
        "Rebranded 14 consumer retail brands, resulting in an average 38% bump in shelf-appeal sales.",
        "Standardized CMYK color proofing and dieline engineering pipeline for the agency."
      ],
      technologies: ["Illustrator", "Photoshop", "InDesign", "Blender"]
    },
    {
      period: "2019 - 2021",
      role: "Junior Graphic & Vector Designer",
      company: "Studio Vanguard",
      location: "New York & Remote",
      description: "Designed promotional marketing collateral, social media carousel suites, event posters, and vector icon libraries.",
      achievements: [
        "Designed 500+ high-engagement social media posts and ad banners.",
        "Collaborated closely with art directors to prepare large-scale outdoor billboard vector assets."
      ],
      technologies: ["Adobe Illustrator", "Photoshop", "Typography Systems"]
    }
  ],

  testimonials: [
    {
      name: "Marcus Vance",
      role: "Creative Director",
      company: "Kuro Apparel Co.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content: "Muaaz's eye for typography, layout tension, and packaging dielines is world-class. Our brand identity received immediate praise from both retail distributors and fashion bloggers.",
      rating: 5
    },
    {
      name: "Sophia Sterling",
      role: "Founder & CEO",
      company: "Aura Luxe Paris",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content: "Working with Muaaz was an absolute pleasure. He turned abstract sensory concepts into a breathtaking visual identity that truly elevates our luxury perfume house.",
      rating: 5
    },
    {
      name: "Darius Thorne",
      role: "Head of Marketing",
      company: "Nova Beverage Group",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      content: "The packaging design for our energy cans stopped buyers in their tracks. Muaaz understands both the artistic beauty and the commercial psychology of graphic design.",
      rating: 5
    }
  ],

  navLinks: [
    { name: "Design.", href: "#home" },
    { name: "Create.", href: "#what-i-do" },
    { name: "Inspire.", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ]
};
