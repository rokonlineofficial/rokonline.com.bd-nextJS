import founderPhoto from "@/assets/Rokon-Uz-Zaman.webp";
import faridPhoto from "@/assets/Farid-web_dev.jpg";
import softwareDev from "@/assets/Senior-App-Developer.jpg";
import helalPhoto from "@/assets/AL-Helal.webp";
import nahidPhoto from "@/assets/Nahid-Hassan.webp";
import azizPhoto from "@/assets/Azizul-Islam-Aziz.webp";
import jashimPhoto from "@/assets/Josim-Uddin.webp";
import mehediPhoto from "@/assets/Mahadi-hasan.webp";
import badshaPhoto from "@/assets/Abdur-Rahman-Badsha.webp";
import masumPhoto from "@/assets/Masum-Billah.webp";

import sellmoraWebsite from "@/assets/sellmoraWebsite.png";
import easyBeingGreen from "@/assets/easy-being-green.jpg";
import robindev from "@/assets/robindev.png";
import maidit from "@/assets/maid-it.png";
import greenleaf from "@/assets/greenleaf.png";
import junkRobbers from "@/assets/junk-robbers.png";
import gloriaCleaning from "@/assets/gloriaCleaning.png";
import cleanIQ from "@/assets/cleanIQ.png";
import sireSoundsDJ from "@/assets/sireSoundsDJ.png";
import weHaulRaleigh from "@/assets/weHaulRaleigh.png";
import jcsu100Club from "@/assets/jcsu100Club.png";
import cfeAccounting from "@/assets/cfeAccounting.png";
import IntegratedHealth from "@/assets/4cIntegratedHealth.png";
import cableGuy from "@/assets/cableGuy.png";
import vpdContracting from "@/assets/vpdContracting.png";
import bnfJunkRemoval from "@/assets/bnfJunkRemoval.png";
import ahApplianceRepair from "@/assets/ahApplianceRepair.png";
import arosaWithin from "@/assets/arosaWithin.png";
import effortlessMindMeditation from "@/assets/effortlessMindMeditation.png";
import agapeCleaningServices from "@/assets/agapeCleaningServices.png";
import nissiCleaningService from "@/assets/nissiCleaningService.png";


export const company = {
  name: "Rok Online",
  legal: "Rok Online Inc.",
  address: "Munshir Moor, Maddho Pirzabad, Badarganj Road, Rangpur, Bangladesh",
  street: "Maddho Pirzabad",
  city: "Rangpur",
  state: "Bangladesh",
  zip: "5400",
  phone: "+880 1326-131609",
  phoneHref: "tel:+8801326131609",
  email: "email@rokonline.com",
  founder: "Rokon Uz Zaman",
  tagline: "Turning Clicks Into Loyal Customers",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  category: "Development" | "Marketing" | "Creative";
  benefits: string[];
  features: string[];
  process: { step: string; title: string; text: string }[];
  tech: string[];
  faqs: { q: string; a: string }[];
};

const defaultProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    text: "We audit your current presence, competitors and goals to define a measurable growth plan.",
  },
  {
    step: "02",
    title: "Planning & Design",
    text: "Architecture, wireframes and conversion-focused design built around your buyer journey.",
  },
  {
    step: "03",
    title: "Execution",
    text: "Our specialists build, launch and QA every deliverable against performance benchmarks.",
  },
  {
    step: "04",
    title: "Launch & Marketing",
    text: "Go live with tracking, analytics and campaigns configured from day one.",
  },
  {
    step: "05",
    title: "Growth Optimization",
    text: "Continuous testing, reporting and iteration to compound results month over month.",
  },
];

export const services: Service[] = [
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    short: "Fast, secure and easy-to-manage WordPress websites.",
    description:
      "Custom WordPress builds engineered for speed, security and search visibility — no bloated themes, no page-builder debt.",
    category: "Development",
    benefits: [
      "Sub-2s load times on core pages",
      "Editor-friendly content blocks",
      "Hardened security and backups",
      "SEO-ready technical foundation",
    ],
    features: [
      "Custom theme development",
      "Elementor & Gutenberg builds",
      "WooCommerce stores",
      "Speed & Core Web Vitals tuning",
      "Migration and redesign",
      "Ongoing maintenance plans",
    ],
    process: defaultProcess,
    tech: ["WordPress", "PHP", "Elementor", "WooCommerce", "MySQL", "Cloudflare"],
    faqs: [
      {
        q: "Do you build custom themes or use templates?",
        a: "We build custom, lightweight themes tailored to your brand. When a premium theme fits the budget, we optimize it heavily.",
      },
      {
        q: "How long does a WordPress project take?",
        a: "Most marketing sites launch in 3–6 weeks depending on page count and content readiness.",
      },
      {
        q: "Can you maintain the site after launch?",
        a: "Yes. Our maintenance plans cover updates, backups, uptime monitoring and monthly performance reports.",
      },
    ],
  },
  {
    slug: "custom-web-development",
    title: "Custom Web Development",
    short: "Bespoke web platforms built for scale and performance.",
    description:
      "Tailored web applications and marketing platforms designed around your workflows, integrations and growth targets.",
    category: "Development",
    benefits: [
      "Architecture built for scale",
      "Clean, documented codebase",
      "Third-party integrations",
      "Enterprise-grade security",
    ],
    features: [
      "Web app and portal development",
      "API design and integration",
      "Dashboards and admin tooling",
      "Payment and CRM integrations",
      "Automated testing",
      "Cloud deployment",
    ],
    process: defaultProcess,
    tech: ["React", "TypeScript", "Node.js", "Laravel", "PostgreSQL", "AWS"],
    faqs: [
      {
        q: "Do you work with existing codebases?",
        a: "Absolutely. We start with a technical audit and roadmap before touching production code.",
      },
      {
        q: "Who owns the code?",
        a: "You do — full ownership and repository access are handed over at launch.",
      },
      {
        q: "Can you support after launch?",
        a: "Yes, with SLA-backed support and iterative feature sprints.",
      },
    ],
  },
  {
    slug: "nextjs-development",
    title: "Next.js Development",
    short: "Blazing-fast React sites with world-class SEO.",
    description:
      "Modern React frontends with server rendering, edge performance and perfect crawlability for competitive search markets.",
    category: "Development",
    benefits: [
      "Excellent Core Web Vitals",
      "Server-side rendering for SEO",
      "Reusable component systems",
      "Headless CMS friendly",
    ],
    features: [
      "SSR and static generation",
      "Headless CMS integration",
      "Design systems in Tailwind CSS",
      "Advanced animation with GSAP",
      "Edge deployment",
      "Analytics and tracking",
    ],
    process: defaultProcess,
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Vercel"],
    faqs: [
      {
        q: "Why choose Next.js over WordPress?",
        a: "Choose it when performance, custom UX and complex integrations matter more than plugin ecosystems.",
      },
      {
        q: "Can marketing still edit content?",
        a: "Yes — we pair the frontend with a headless CMS so non-technical teams stay in control.",
      },
      {
        q: "Is it SEO friendly?",
        a: "Very. Server rendering, structured data and clean metadata are built in from the start.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Cross-platform apps with native-quality experience.",
    description:
      "iOS and Android apps built from a single codebase with polished motion, offline support and analytics baked in.",
    category: "Development",
    benefits: [
      "One codebase, two platforms",
      "Faster time to market",
      "App store launch support",
      "Analytics and crash reporting",
    ],
    features: [
      "UX research and prototyping",
      "React Native development",
      "Push notifications",
      "In-app payments",
      "API and backend integration",
      "Store submission & updates",
    ],
    process: defaultProcess,
    tech: ["React Native", "TypeScript", "Firebase", "Node.js", "Figma", "App Store Connect"],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "We recommend cross-platform for most business apps and native where deep hardware access is required.",
      },
      {
        q: "Do you handle store submission?",
        a: "Yes, including listings, assets and review compliance.",
      },
      {
        q: "What about ongoing updates?",
        a: "We offer retainer plans for feature releases and OS compatibility updates.",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Increase organic traffic and search visibility.",
    description:
      "Technical, on-page and content SEO programs that grow qualified organic traffic and compound over time.",
    category: "Marketing",
    benefits: [
      "Qualified organic traffic",
      "Lower cost per acquisition",
      "Durable long-term growth",
      "Transparent monthly reporting",
    ],
    features: [
      "Technical SEO audits",
      "Keyword and intent research",
      "On-page optimization",
      "Content strategy & production",
      "Digital PR and link building",
      "Rank and revenue reporting",
    ],
    process: defaultProcess,
    tech: ["GA4", "Search Console", "Ahrefs", "Semrush", "Screaming Frog", "Looker Studio"],
    faqs: [
      {
        q: "How soon will I see results?",
        a: "Technical wins can move within weeks; competitive rankings typically compound over 3–6 months.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No credible agency does. We guarantee process, transparency and measurable progress reporting.",
      },
      {
        q: "Do you write the content?",
        a: "Yes, our writers and SEO strategists produce content mapped to search intent.",
      },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    short: "Own the map pack in your service area.",
    description:
      "Get found by nearby customers with optimized Google Business Profiles, local citations and review growth.",
    category: "Marketing",
    benefits: [
      "More calls and direction requests",
      "Higher map pack visibility",
      "Stronger local reputation",
      "Multi-location support",
    ],
    features: [
      "Google Business Profile optimization",
      "Local citation building",
      "Review generation systems",
      "Location landing pages",
      "Local link building",
      "Call and lead tracking",
    ],
    process: defaultProcess,
    tech: ["Google Business Profile", "GA4", "BrightLocal", "Search Console", "Schema", "CallRail"],
    faqs: [
      {
        q: "Do you handle multiple locations?",
        a: "Yes, we build scalable location page structures and manage profiles per branch.",
      },
      {
        q: "Can you fix a suspended profile?",
        a: "We handle reinstatement requests and compliance cleanup.",
      },
      {
        q: "How do you track leads?",
        a: "Call tracking, form attribution and GA4 events tied to revenue where possible.",
      },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads Management",
    short: "Performance-focused search and shopping campaigns.",
    description:
      "Profitable paid search programs built on tight targeting, strong creative and rigorous conversion tracking.",
    category: "Marketing",
    benefits: [
      "Immediate qualified traffic",
      "Lower cost per lead",
      "Full funnel tracking",
      "Weekly optimization",
    ],
    features: [
      "Account audit and rebuild",
      "Search, Shopping & PMax",
      "Landing page optimization",
      "Conversion tracking setup",
      "Negative keyword hygiene",
      "Transparent reporting",
    ],
    process: defaultProcess,
    tech: ["Google Ads", "GA4", "Google Tag Manager", "Merchant Center", "Looker Studio", "CallRail"],
    faqs: [
      {
        q: "What ad budget do I need?",
        a: "Most local campaigns start around $1,500/month in media spend to gather meaningful data.",
      },
      {
        q: "Who owns the ad account?",
        a: "You do. We work inside your account with full transparency.",
      },
      {
        q: "How often do you optimize?",
        a: "Weekly optimization cycles with monthly strategy reviews.",
      },
    ],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads Management",
    short: "Facebook and Instagram campaigns that convert.",
    description:
      "Creative-led paid social programs that build demand, retarget warm audiences and drive measurable revenue.",
    category: "Marketing",
    benefits: [
      "Scalable demand generation",
      "High-performing creative testing",
      "Precise retargeting",
      "Clear ROAS reporting",
    ],
    features: [
      "Audience and offer strategy",
      "Creative production",
      "Pixel & Conversions API setup",
      "A/B and incrementality testing",
      "Retargeting funnels",
      "Performance dashboards",
    ],
    process: defaultProcess,
    tech: ["Meta Ads Manager", "Conversions API", "GA4", "Google Tag Manager", "Canva", "Looker Studio"],
    faqs: [
      {
        q: "Do you produce the creative?",
        a: "Yes — static, motion and short-form video creative are part of our program.",
      },
      {
        q: "How do you handle iOS tracking limits?",
        a: "Server-side Conversions API plus modeled reporting and blended CAC targets.",
      },
      {
        q: "How fast can we launch?",
        a: "Typically 7–10 business days from kickoff.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Build brand awareness and customer engagement.",
    description:
      "Always-on organic social programs that grow an audience, build trust and support your paid campaigns.",
    category: "Marketing",
    benefits: [
      "Consistent brand presence",
      "Higher engagement rates",
      "Community trust",
      "Content that fuels ads",
    ],
    features: [
      "Content calendars",
      "Graphic and reel production",
      "Community management",
      "Influencer collaborations",
      "Hashtag and trend strategy",
      "Monthly analytics",
    ],
    process: defaultProcess,
    tech: ["Meta Suite", "Instagram", "LinkedIn", "TikTok", "Canva", "Later"],
    faqs: [
      {
        q: "Which platforms do you manage?",
        a: "Instagram, Facebook, LinkedIn, TikTok, YouTube and X depending on your audience.",
      },
      {
        q: "How many posts per month?",
        a: "Plans typically range from 12 to 30 pieces of content monthly.",
      },
      {
        q: "Do you reply to comments?",
        a: "Yes, community management is included on managed plans.",
      },
    ],
  },
  {
    slug: "video-production",
    title: "Promotional Video Production",
    short: "Professional promotional videos for businesses.",
    description:
      "Scripted, shot and edited brand videos, ads and short-form content designed to stop the scroll and sell.",
    category: "Creative",
    benefits: [
      "Higher ad engagement",
      "Stronger brand recall",
      "Reusable content library",
      "Platform-native formats",
    ],
    features: [
      "Concept and scripting",
      "Motion graphics & animation",
      "Product and brand films",
      "Short-form reels",
      "Subtitling and localization",
      "Ad creative variations",
    ],
    process: defaultProcess,
    tech: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Figma", "Illustrator", "Audition"],
    faqs: [
      {
        q: "Do you shoot on location?",
        a: "Yes, and we also produce fully remote animated and stock-based videos.",
      },
      {
        q: "What formats do you deliver?",
        a: "16:9, 1:1 and 9:16 cuts optimized for each platform.",
      },
      {
        q: "How many revisions?",
        a: "Two rounds are included on standard packages.",
      },
    ],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    short: "Convert visitors into loyal, repeat customers.",
    description:
      "Lifecycle email and automation programs that nurture leads, recover revenue and increase customer lifetime value.",
    category: "Marketing",
    benefits: [
      "Highest ROI channel",
      "Automated revenue",
      "Better retention",
      "Owned audience",
    ],
    features: [
      "Welcome and nurture flows",
      "Abandoned cart recovery",
      "Newsletter design",
      "Segmentation strategy",
      "A/B subject line testing",
      "Deliverability monitoring",
    ],
    process: defaultProcess,
    tech: ["Klaviyo", "Mailchimp", "HubSpot", "Postmark", "GA4", "Figma"],
    faqs: [
      {
        q: "Which platform do you recommend?",
        a: "Klaviyo for ecommerce, HubSpot for B2B, Mailchimp for simple newsletters.",
      },
      {
        q: "Can you migrate our list?",
        a: "Yes, including cleanup, segmentation and deliverability warm-up.",
      },
      {
        q: "How often should we send?",
        a: "Most brands do well with 2–4 campaigns monthly plus always-on automations.",
      },
    ],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    short: "Keep your site fast, secure and always online.",
    description:
      "Proactive care plans covering updates, security, backups, uptime monitoring and continuous improvements.",
    category: "Development",
    benefits: [
      "Zero-surprise uptime",
      "Security patched weekly",
      "Fast issue resolution",
      "Continuous improvements",
    ],
    features: [
      "Core & plugin updates",
      "Daily backups",
      "Uptime monitoring",
      "Malware scanning",
      "Speed optimization",
      "Monthly health reports",
    ],
    process: defaultProcess,
    tech: ["Cloudflare", "WordPress", "UptimeRobot", "Sentry", "GA4", "Git"],
    faqs: [
      {
        q: "What is the response time?",
        a: "Critical issues are acknowledged within a few business hours on managed plans.",
      },
      {
        q: "Do you maintain non-WordPress sites?",
        a: "Yes, including custom React and Next.js applications.",
      },
      {
        q: "Are content edits included?",
        a: "A monthly allowance of edit hours is included on most plans.",
      },
    ],
  },
];

export const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 145, suffix: "+", label: "Upwork Reviews" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Focus" },
];

export const team = [
  {
    name: "Rokon Uz Zaman",
    role: "Founder & CEO",
    skills: ["Growth Strategy", "SEO", "Leadership"],
    initials: "RZ",
    image: founderPhoto,
  },
  {
    name: "Abu Sayeed",
    role: "Senior Software Developer",
    skills: ["JS", "PHP", "React Native"],
    initials: "SK",
    image: softwareDev,
  },
  {
    name: "Al Helal",
    role: "Senior Web Developer",
    skills: ["Node JS", "WordPress", "WP Plugin"],
    initials: "AH",
    image: helalPhoto,
  },

  {
    name: "Nahid Islam",
    role: "Web Designer",
    skills: ["WordPress", "Content", "Web design"],
    initials: "NI",
    image: nahidPhoto,
  },
  {
    name: "A. I. Aziz",
    role: "Web Developer",
    skills: ["Web Design", "WordPress", "Vibe Code"],
    initials: "AI",
    image: azizPhoto,
  },

  {
    name: "Sheikh Farid",
    role: "Web Designer & Developer",
    skills: ["Web Design", "WordPress", "Vibe Code"],
    initials: "FH",
    image: faridPhoto,
  },
  
  {
    name: "Mehedi Hasan",
    role: "Ads Specialist",
    skills: ["Meta Ads", "Google Ads", "Lead Generation Ads"],
    initials: "MH",
    image: mehediPhoto,
  },

  
  {
    name: "Jashim Uddin",
    role: "SEO Specialist",
    skills: ["SEO", "Local SEO", "Technical SEO"],
    initials: "JU",
    image: jashimPhoto,
  },

  {
    name: "A. R. Badsha",
    role: "SEO Specialist",
    skills: ["SEO", "Local SEO", "Technical SEO"],
    initials: "AB",
    image: badshaPhoto,
  },

  {
    name: "M. H. Masum",
    role: "Video Editor",
    skills: ["Premiere Pro", "After Effects", "Motion"],
    initials: "MM",
    image: masumPhoto,
  },

];

export const techGroups = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "PHP", "Laravel"] },
  { group: "CMS", items: ["WordPress", "Elementor", "Webflow", "Wix"] },
  {
    group: "Marketing",
    items: ["Google Ads", "Meta Ads", "GA4", "Google Tag Manager", "Search Console"],
  },
  { group: "Design", items: ["Figma", "Adobe Creative Suite"] },
  { group: "Videography", items: ["Premiere Pro", "After Effects","CapCut", "Lightroom"]
  },

];

export const portfolio = [
  {
    title: "Sellmora",
    slug: "sellmora",
    industry: "Amazon FBA",
    category: "Branding",
    services: ["Development", "SEO", "Branding"],
    result: "A premium, high-performance website with a strong brand presence, smooth user experience, responsive design, SEO-ready structure, and a conversion-focused layout built to support Sellmora’s growth.",
    accent: "from-primary/40 to-accent/30",
    image: sellmoraWebsite,
    description:
      "We designed, developed, and manage the Sellmora website as a modern, conversion-focused digital platform for an Amazon growth agency. The project was built with a strong focus on premium UI/UX design, custom website development, responsive functionality, smooth animations, performance, SEO, and brand presentation. We created the website structure and visual experience from the ground up, using full custom code rather than depending on a page builder, giving us greater control over the design, functionality, responsiveness, and overall performance. The website features a carefully designed homepage with a strong hero section, clear calls to action, performance statistics, service presentation, process section, case studies, client testimonials, brand showcase, founder section, articles, FAQ, booking functionality, and a detailed footer structure. The Sellmora website also presents its Amazon-focused positioning through sections covering global expansion, catalog management, brand management, PPC management, and graphic design, while maintaining a consistent dark-green, gold, and white visual identity throughout the experience.     df0584ca-9ece-47ae-9cdf-7602b34… From the development side, we implemented the website using fully custom frontend development, ensuring that layouts work smoothly across desktop, tablet, and mobile devices. We paid particular attention to spacing, typography, card layouts, navigation, CTA elements, responsive breakpoints, interactive components, and smooth visual transitions to create a polished experience. The website also includes interactive sections such as service cards, case-study presentation, testimonial areas, FAQ interactions, article sections, and an appointment/meeting booking experience. The project incorporates performance-focused development and speed optimization to provide a fast and smooth browsing experience, while the technical structure was prepared with SEO optimization in mind, including search-friendly page structure, content hierarchy, metadata, and optimized user experience. We also worked on the branding and visual consistency of Sellmora, maintaining its recognizable green-and-gold identity across the website, buttons, cards, headings, navigation, CTAs, and supporting sections. The website's case studies, client results, testimonials, articles, and service information were organized to build credibility and guide visitors toward actions such as requesting a free audit or scheduling a call.     df0584ca-9ece-47ae-9cdf-7602b34… Overall, the Sellmora project represents our work in custom UI/UX design, full custom-code web development, responsive website development, smooth animations, branding, SEO optimization, speed boosting, conversion-focused design, interactive functionality, booking integration, content structure, and ongoing website management—creating a professional, high-performance website that Sellmora can use as its primary online presence.",
    link: "https://thesellmora.com/",
  },



  {
    title: "Easy Being Green",
    slug: "easy-being-green",
    industry: "Renewable Energy",
    category: "Website Development",
    services: ["Web Design", "WordPress", "Development"],
    result: "Conversion-focused solar solutions website",
    accent: "from-primary/40 to-accent/30",
    image: easyBeingGreen,
    description:
      "Easy Being Green is an Australian renewable energy and energy-efficiency company website developed as a professional, service-focused corporate platform for solar, battery storage, commercial LED lighting and energy-efficiency solutions. The website is built with WordPress as the CMS, using BeTheme as the underlying WordPress theme and Elementor as the page builder for creating and managing the visual layouts. The front end also uses PHP, jQuery, jQuery UI and jQuery Migrate, while Google Site Kit and HubSpot Analytics support analytics and marketing tracking, and Google reCAPTCHA helps protect forms from spam. The website features responsive layouts for desktop, tablet and mobile, dedicated service pages, commercial solar project showcases, educational blog content, customer-focused information, consultation and quote forms, contact/phone CTAs, testimonials, FAQs and strong conversion-focused sections. The overall website structure is designed to clearly explain complex renewable-energy services, establish trust through company experience and completed projects, and guide visitors toward requesting a consultation or quote.",
    link: "https://easybeinggreen.com.au/",
  },
  {
    title: "Robin Dev Hospitality",
    slug: "robin-dev-hospitality",
    industry: "Hospitality",
    category: "Website Development",
    services: ["WIX", "Branding", "Web Design"],
    result: "A premium personal-brand website with a strong visual identity, engaging user experience, clear service positioning, and a professional platform designed to generate strategy-session inquiries and strengthen Robin Deb’s authority in the hospitality industry.",
    accent: "from-accent/35 to-primary/30",
    image: robindev,
    description:
      "We designed and developed the Robin Deb website as a premium personal-brand and hospitality consulting platform, with a strong focus on modern UI/UX, website development, branding, visual storytelling, and conversion-focused structure. Our work included creating a distinctive visual identity for Robin’s hospitality and longevity consulting brand, designing a clear content hierarchy, and developing interactive sections that present his expertise, services, leadership experience, Longevity Hotel Framework™, speaking topics, and target audiences in a professional way. The website structure guides visitors from Robin’s vision and hospitality opportunity through his services, framework, experience, and finally toward booking a strategy conversation. robindeb.com We also focused on responsive development, polished typography, spacing, visual transitions, strong calls to action, and an engaging user experience to give the site a high-end consultancy feel. Overall, our work combined UI/UX Design, Web Development, Branding, Responsive Design, Content Structure, Interactive Experience, and Conversion Optimization to create a modern digital presence that positions Robin as a hospitality executive, consultant, speaker, and creator of the Longevity Hotel Framework™.",
    link: "http://robindeb.com/",
  },
  {
    title: "Maid It Cleaning Service",
    slug: "maid-it-cleaning-service",
    industry: "Cleaning Service",
    category: "Paid Ads",
    services: ["WordPress", "Paid Ads", "SEO"],
    result: "A professional, conversion-focused cleaning website with a customized quote system, detailed service structure, responsive user experience, clear customer journey, and a stronger online presence designed to turn visitors into cleaning-service inquiries.",
    accent: "from-gold/35 to-primary/30",
    image: maidit,
    description:
      "We designed and developed the Maid It website as a professional, conversion-focused cleaning service platform, with a strong emphasis on modern UI/UX, responsive web design, service presentation, quote functionality, and customer convenience. Our work focused on creating a clean and trustworthy digital experience that clearly presents Maid It’s residential cleaning services while making it easy for visitors to understand their options and request a customized estimate. The website includes a detailed “Calculate Your Own Quote” experience where users can provide information such as bedrooms, bathrooms, kitchens, home size, cleaning extras, address, preferred date and time, and contact information before submitting their request. maidit.net We also structured dedicated service information for basic house cleaning, move-in/move-out cleaning, short-term rental cleaning, and rental turnover cleaning, with detailed service inclusions. maidit.net In addition, we organized important customer-support content including FAQs, booking information, service limitations, terms and conditions, and contact details, creating a more complete and trustworthy user journey. maidit.net The website was built with a responsive approach to provide a smooth experience across desktop, tablet, and mobile devices, while the overall design and content structure were focused on generating quote requests and making the booking process easier for customers.",
    link: "https://maidit.net/",
  },

  {
    title: "Tree Removal & Pruning Service",
    slug: "tree-removal-pruning-service",
    industry: "Tree Service",
    category: "Website Development",
    services: ["WordPress", "Theme Customize", "branding"],
    result: "A professional, locally focused tree-service website with clear service presentation, strong conversion paths, responsive design, and an SEO-friendly structure built to help generate more local service inquiries.",
    accent: "from-primary/35 to-gold/25",
    image: greenleaf,
    description:
      "We designed and developed the Green Leaf Tree Experts website as a professional, service-focused digital platform for a local tree care company serving Lafayette, Broussard, Youngsville, Abbeville, New Iberia, and surrounding areas. Our work focused on creating a clean, trustworthy and conversion-oriented website that makes it easy for customers to understand the company's tree care services and request professional assistance. The website was structured around key services including tree removal, tree pruning, debris pickup and hauling, container-grown trees, arborist consulting and emergency tree services, with dedicated service-focused content to improve both usability and local search visibility. greenleaftreeexperts.com We also created clear calls to action such as Make an Appointment, Call Us and Free Estimate, along with service information, business hours and location details to guide visitors toward contacting the company. greenleaftreeexperts.com The website was designed with a strong emphasis on responsive UI/UX, clear service presentation, local customer acquisition and conversion-focused page structure, helping potential customers quickly find the right tree service and take action. Overall, our work focused on website design, web development, responsive design, service-page structure, local SEO-friendly content, conversion optimization and lead-generation strategy, creating a professional online presence for Green Leaf Tree Experts.",
    link: "https://greenleaftreeexperts.com/",
  },

  {
    title: "Junk Robbers Cleaning",
    slug: "junk-robbers-cleaning",
    industry: "Cleaning Service",
    category: "SEO",
    services: ["Paid Ads", "SEO", "Web Development"],
    result: "A professional, high-converting local-service website with an advanced quote system, strong Google review presence, SEO-focused service architecture, and a smoother path from local search visitor to qualified junk removal lead.",
    accent: "from-accent/40 to-gold/25",
    image: junkRobbers,
    description:
      "We designed and developed the Junk Robbers website as a modern, conversion-focused local service platform for a Chicago-based junk removal company. Our work focused on creating a professional and trustworthy online presence while making it extremely easy for customers to request junk removal services. We built a clear service structure covering junk removal, furniture removal, appliance removal, light demolition, construction debris removal, yard debris removal, cleanout services and bed bug junk removal, along with dedicated service-area content for Chicago neighborhoods and surrounding suburbs. Junk Robbers Inc. A major part of our work was developing a multi-step online quote system, allowing visitors to enter their ZIP code, select the items they need removed, upload photos, provide property-access details, choose their preferred timing, and submit their contact information for a quote. Junk Robbers Inc. We also integrated and presented Google customer reviews and trust signals, including the company's 5-star rating, hundreds of reviews, licensed-and-insured messaging, and customer testimonials to strengthen credibility and conversions. Junk Robbers Inc. The website was structured with clear CTAs, service pages, location pages, FAQs, process sections, business information and mobile-friendly layouts, while the content architecture supports local SEO and organic search visibility across Chicago and its surrounding service areas. Overall, our work focused on UI/UX Design, Web Development, Local SEO, Service & Location Page Development, Quote Form Development, Google Review Integration, Lead Generation, Conversion Optimization and Responsive Design.",
    link: "https://junkrobbers.com/",
  },

  {
    title: "GLORIA CLEANING",
    slug: "gloria-cleaning",
    industry: "Cleaning Service",
    category: "Paid Ads",
    services: ["Web Development", "Branding", "SEO", "Paid Ads"],
    result: "A professional branded website with clear conversion paths and a lead-focused structure, built to support Gloria Cleaning's online advertising and customer acquisition efforts.",
    accent: "from-primary/45 to-accent/25",
    image: gloriaCleaning,
    description:
      "We designed and developed the Gloria Cleaning website as a professional, conversion-focused cleaning service platform using WordPress, with a strong focus on branding, lead generation and advertising support. Our work included creating a clean and trustworthy visual identity, developing responsive WordPress layouts, organizing the website around residential, commercial, janitorial and specialized cleaning services, and creating clear service-focused sections that help visitors quickly understand what Gloria Cleaning offers. The website also includes strong Free Quote, Contact and Call-to-Action elements designed to turn website visitors into potential customers. gloriacleaning.com We worked on the site's branding and visual presentation to create a consistent professional image across the website, while structuring service and location content to support local customer acquisition across New York and surrounding areas. gloriacleaning.com Alongside the website development, our work included lead-generation strategy and advertising support, using the website's quote and contact pathways as conversion points for paid traffic and potential customer acquisition. Overall, the project combined WordPress Development, UI/UX Design, Branding, Responsive Design, Lead Generation, Advertising Support, Service-Page Development and Conversion Optimization to build a stronger digital presence for Gloria Cleaning.",
    link: "https://gloriacleaning.com/",
  },

  {
    title: "Clean iQ Foxcity",
    slug: "clean-iq-foxcity",
    industry: "Cleaning Service",
    category: "Website Development",
    services: ["SEO", "Web Development", "Branding"],
    result: "A modern cleaning service website designed to showcase services and improve online presence.",
    accent: "from-primary/45 to-accent/25",
    image: cleanIQ,
    description: "CleanIQ Fox Cities is a professional cleaning service website developed on WordPress, with a service-focused structure designed to generate cleaning-service inquiries and quote requests. The website includes dedicated service pages, an online “Calculate Your Own Quote” flow, FAQ content, contact information, responsive navigation and conversion-focused calls to action. The site also uses Revolution Slider (RevSlider) for its visual slider/hero functionality, which is confirmed by the site's publicly exposed WordPress plugin assets. CleanIQ The development process involved planning the website structure and user journey, designing a professional cleaning-service interface, creating responsive layouts for desktop, tablet and mobile, developing service-specific content sections, integrating the quote/request functionality, adding FAQ and contact sections, optimizing calls to action and ensuring the website clearly communicates the company's service area and booking process. The overall approach was focused on WordPress-based business website development, responsive UI design, lead generation, service presentation and conversion optimization. The exact WordPress theme and complete plugin list are not reliably exposed by the publicly accessible page, so I would not claim a specific theme without confirmation from the site's backend.",
    link: "https://cleaniqfoxcities.com/",
  },

  {
    title: "Sire Sounds DJ",
    slug: "sire-sounds-dj",
    industry: "Sound Equipment Rental",
    category: "Website Development",
    services: ["SEO", "Web Development", "Branding"],
    result: "A eyecatching and functional website for a sound equipment rental business, designed to showcase services, equipment and booking options.",
    accent: "from-primary/45 to-accent/25",
    image: sireSoundsDJ,
    description:
      "We designed and developed the SireSounds Mobile DJ website as a fully custom-coded, modern and responsive web experience for a professional DJ and event entertainment business. The entire website was built from scratch using React.js and TypeScript, without relying on WordPress or a pre-built CMS theme. Our work included planning the website structure and user journey, creating a visually engaging interface, developing responsive layouts for desktop, tablet and mobile, building dedicated service and equipment sections, implementing event and wedding-focused content, creating reusable UI components, adding interactive elements and smooth user interactions, and developing clear calls to action for inquiries and bookings. We also focused on presenting services, equipment, testimonials, galleries and business information in an organized way while maintaining a consistent visual system throughout the website. The project was managed through GitHub for version control, code management and deployment workflow, allowing the website to be continuously updated and maintained through a structured development process. Overall, the project focused on custom React development, TypeScript, responsive UI/UX, component-based architecture, performance, interactive design and conversion-focused website development.",
    link: "https://siresoundsdj.com/",
  },

  {
    title: "We Haul Raleigh",
    slug: "we-haul-raleigh",
    industry: "Junk Removal & Moving Services",
    category: "Website Development",
    services: ["SEO", "Web Development", "Branding"],
    result: "A modern business website with clean ui/ux and responsive design.",
    accent: "from-primary/45 to-accent/25",
    image: weHaulRaleigh,
    description:
      "We developed the We Haul Raleigh website as a professional, service-focused digital platform for a local junk removal, delivery and moving labor business in Raleigh, North Carolina. Our work focused on creating a clear and conversion-oriented website structure that makes it easy for visitors to understand the company's services and request a quote. We organized the website around junk removal, furniture delivery, moving labor, property cleanouts and delivery services, while also developing dedicated sections for service information, customer testimonials, client types, the work process and strong quote/contact calls to action. The website was designed with a responsive user interface for desktop, tablet and mobile devices, with emphasis on clear navigation, service presentation, trust-building content and lead generation. We also integrated the client's online quote/request workflow, contact and call-to-action elements, and structured the content to support local search visibility in Raleigh and surrounding Triangle areas. Our development process included planning the information architecture, designing the UI/UX, developing responsive components, optimizing content placement and conversion paths, integrating external booking/quote functionality, testing the user experience across devices, and deploying and managing the project through our development workflow. Overall, our work focused on custom website development, responsive UI/UX, local SEO structure, service presentation, lead generation and conversion-focused design for a local service business. The live website confirms the service structure, quote workflow, testimonials, work process and Raleigh-focused business content.",
    link: "https://wehaulraleigh.com/",
  },

  {
    title: "JCSU 100 Club",
    slug: "jcsu-100-club",
    industry: "Nonprofit & University Booster Club",
    category: "Website Development",
    services: ["Web Development", "Branding"],
    result: "A modern business website with clean ui/ux and responsive design.",
    accent: "from-primary/45 to-accent/25",
    image: jcsu100Club,
    description:
      "We designed and developed the JCSU 100 Club website as a professional nonprofit and university booster-club platform using WordPress and Elementor, with a strong focus on membership, fundraising, events and community engagement. Our work included designing and building the website structure, creating responsive Elementor layouts, setting up membership and interest forms, implementing event management and event listing functionality, configuring booking/registration workflows, and integrating donation and payment options to support the organization’s fundraising activities. We also organized membership levels and contribution information, created dedicated sections for the organization’s history, leadership, governance, Hall of Fame, photo gallery and athletic-support initiatives, and added clear calls to action for joining, donating and participating in events. The website includes membership payment information and donation options such as PayPal and Cash App, while its events section provides searchable event listings and calendar views. jcsu100club.com Overall, our work focused on WordPress development, Elementor design, form setup, event management, booking/registration, donation integration, membership functionality, responsive UI/UX and nonprofit-focused conversion optimization to create an easy-to-manage digital platform for the JCSU 100 Club. View JCSU 100 Club",
    link: "https://jcsu100club.com/",
  },

  {
    title: "CFE Accounting",
    slug: "cfe-accounting",
    industry: "Tax & Financial Services",
    category: "Paid Ads",
    services: ["Web Development", "Paid Ads", "SEO"],
    result: "A modern business website with clean ui/ux and responsive design.",
    accent: "from-primary/45 to-accent/25",
    image: cfeAccounting,
    description:
      "We designed and developed the CFE Accounting website as a fully custom-coded, modern digital platform for a professional tax and financial services company. The website was built from scratch using React.js, Next.js and TypeScript, without relying on WordPress, pre-built themes or template-based website builders. Our work included planning the complete website architecture and user journey, designing a clean and professional financial-services interface, developing reusable React components, creating responsive layouts for desktop, tablet and mobile, and building dedicated sections for services, companies, specialties, why choose us, testimonials, latest news, client resources and contact/quote requests. We also implemented dynamic portfolio/content routing, SEO-friendly page structures, metadata, responsive navigation, interactive UI elements, forms, calls to action and reusable design components to maintain consistency throughout the website. The project was managed through GitHub for source-code management and version control, followed by deployment and production setup to make the website live and accessible. Overall, our work focused on fully custom React/Next.js development, TypeScript, responsive UI/UX, component-based architecture, SEO structure, performance, dynamic routing, lead generation and professional financial-services website development.",
    link: "https://www.cfeaccounting.com/",
  },

  {
    title: "4C Integrated Health",
    slug: "4c-integrated-health",
    industry: "Healthcare",
    category: "Website Development",
    services: ["Web Development", "Branding", "SEO"],
    result: "A modern healthcare website with SEO friendly structure and responsive design.",
    accent: "from-primary/45 to-accent/25",
    image: IntegratedHealth,
    description:
      "We designed and developed the 4C Integrated Health website as a professional healthcare platform using WordPress and Elementor, with a strong focus on trust, accessibility, user experience and online growth. Our work included creating a complete brand-aligned visual identity, designing and developing responsive Elementor layouts, organizing the website into clear healthcare service categories, and creating dedicated pages for services such as primary care, behavioral health, home and community care, weight management, telehealth and wellness programs. 4C INTEGRATED HEALTH We also implemented and configured contact and inquiry forms, structured clear calls to action, improved the navigation and user journey, and created a consistent visual system across the website. From an SEO perspective, we worked on on-page SEO, service-page structure, keyword-focused content organization, headings, metadata and search-friendly website architecture to improve the site's organic visibility. We also worked on branding and website speed optimization, focusing on a faster, cleaner and more user-friendly experience across desktop, tablet and mobile devices. The project was developed with an emphasis on scalable content management, allowing the client to easily manage and update healthcare information through WordPress and Elementor. Overall, our work focused on WordPress development, Elementor design, branding, responsive UI/UX, form integration, SEO, speed optimization and organic growth, creating a professional healthcare website designed to build credibility and generate patient inquiries.",
    link: "https://4cintegratedhealth.com/",
  },

  {
    title: "Cable Guy",
    slug: "cableguy",
    industry: "Electrical Services",
    category: "Website Development",
    services: ["Web Development", "Branding", "SEO"],
    result: "A modern electrical services website with SEO friendly structure and responsive design.",
    accent: "from-primary/45 to-accent/25",
    image: cableGuy,
    description:
      "We designed and developed the Cable Guy Com website as a professional, service-focused digital platform for a Dallas-based low-voltage cabling and communication company. Our work focused on creating a modern and trustworthy online presence while making a wide range of technical services easy for customers to understand and navigate. We structured the website around Cat6 Network Cabling, Low Voltage Cabling, Home Theater Installation, Video Camera Surveillance, Landline Phone Service and Telephone Technician services, with dedicated service pages and location-focused content. Cable Guy Com We developed a complete user journey including an engaging hero section, company introduction, service cards, Why Choose Us section, business statistics, pricing/package presentation, step-by-step installation process, professional team section, project showcase, testimonials, FAQs and multiple contact/booking calls to action. Cable Guy Com We also implemented a quote/inquiry form, service-focused navigation, responsive layouts and clear conversion paths so visitors can quickly understand the services and contact the company. The website was structured with SEO-friendly service and location content targeting Dallas and nearby areas, helping individual services such as low-voltage cabling and telephone technician services have their own dedicated search-focused pages. Cable Guy Com The project was developed, customized and managed by Rok Online, with our agency credited in the website footer as the development partner. Cable Guy Com Overall, our work focused on custom website design and development, responsive UI/UX, service-page architecture, local SEO structure, lead generation, quote/inquiry functionality, conversion optimization, project showcasing and ongoing website management.",
    link: "https://cableguycom.com/",
  },

  {
    title: "VPD Contracting",
    slug: "vpdcontracting",
    industry: "Residential Remodeling & Contracting",
    category: "SEO",
    services: ["Web Development", "Branding", "SEO"],
    result: "A modern residential remodeling and contracting website with SEO friendly structure and responsive design.",
    accent: "from-primary/45 to-accent/25",
    image: vpdContracting,
    description:
      "We designed and developed the VPD Contracting website as a professional, lead-generation-focused platform for a residential remodeling and contracting company serving Stormville, Putnam County, Westchester County and surrounding areas in New York. Our work was completed using WordPress and Elementor, with a strong focus on creating a trustworthy online presence and generating qualified leads for the business. We structured the website around key services including kitchen remodeling, bathroom remodeling, home renovations, home additions, basement finishing and interior/exterior remodeling, with dedicated service and location-focused pages to strengthen the site's organic search visibility. VPD Contracting We developed clear Free Quote and consultation CTAs, contact and inquiry pathways, service sections, testimonials, FAQs, project/gallery sections, trust signals and step-by-step process sections to guide potential customers from discovering the service to requesting an estimate. VPD Contracting On the SEO side, we worked on service-page optimization, local SEO structure, location targeting, keyword-focused content organization, internal page structure and search-friendly content to help attract homeowners actively looking for remodeling services in the target service areas. Our lead-generation strategy focused on client hunting and qualified lead acquisition, using targeted service and location pages, strong conversion points, quote forms and prominent call/contact options. We also worked on the website's overall user experience, responsive design and performance to ensure visitors could easily explore services and contact the company from desktop, tablet or mobile devices. Overall, our work focused on WordPress development, Elementor design, SEO, local client acquisition, lead generation, responsive UI/UX, service-page architecture and conversion optimization, creating a scalable digital platform designed to turn local search traffic into remodeling inquiries.",
    link: "https://vpdcontracting.com/",
  },

  {
    title: "B&F Junk Removal",
    slug: "bnfjunkremoval",
    industry: "Junk Removal & Dumpster Rental",
    category: "Paid Ads",
    services: ["Web Development", "Branding", "SEO"],
    result: "A modern business website with SEO friendly structure and responsive design.",
    accent: "from-primary/45 to-accent/25",
    image: bnfJunkRemoval,
    description:
      "We designed and developed the B&F Junk Removal website as a professional, conversion-focused local service website using WordPress and Elementor, with the primary goal of generating more junk removal and dumpster rental leads across Portsmouth and the wider Hampton Roads area. Our work included designing and building responsive Elementor layouts, structuring the website around individual junk removal services and service areas, creating clear Free Quote and Call Now conversion points, and setting up contact/quote forms to make it easy for potential customers to request service. We also integrated and displayed Google customer reviews throughout the website to strengthen trust and credibility, including the company's 220+ five-star review messaging and individual customer testimonials. B&F Junk Removal We developed the service and location content structure, organized pricing information, FAQs, the junk removal process and trust-building sections, and optimized the overall website experience for local customers searching for services such as furniture removal, appliance removal, house cleanouts, commercial cleanouts, construction debris removal and dumpster rental. B&F Junk Removal We also worked on website speed optimization, improving the site's performance and creating a cleaner, faster experience across desktop, tablet and mobile devices. Overall, our work focused on WordPress development, Elementor design, responsive UI/UX, form integration, Google review integration, service-page development, local SEO structure, speed optimization, lead generation and conversion optimization.",
    link: "https://bnfjunkremoval.com/",
  },

  {
    title: "A&H Appliance Repair & Install",
    slug: "ahappliance-repair",
    industry: "Appliance Repair & Installation",
    category: "Website Development",
    services: ["Web Development", "Branding", "SEO"],
    result: "A modern business website with SEO friendly structure and responsive design.",
    accent: "from-primary/45 to-accent/25",
    image: ahApplianceRepair,
    description:
      "We designed and developed the A&H Appliance Repair & Install website as a professional local-service website for an appliance installation and repair company serving Austin, Texas. The website was built using WordPress and Elementor, with our work focused on creating a clean, trustworthy and easy-to-navigate experience that helps customers quickly understand the company's services and request assistance. We structured the website around key appliance services including washing machine, refrigerator, microwave, filter cleaning and electric stove repair, while also presenting the company's broader appliance installation and repair capabilities. A & H Repair Services We created clear service-focused sections, strong Call for Service / Service Booking calls to action, an informative company introduction, special-offer messaging, testimonials, partner/company information, FAQ and project navigation, and contact information to support customer inquiries. A & H Repair Services The website was also designed with a responsive layout and a clear local-service user journey so visitors can quickly move from understanding the service to contacting the business. Overall, our work focused on WordPress development, Elementor design, responsive UI/UX, service-page structure, conversion-focused CTA placement, trust-building content and local business website development.",
    link: "https://ahrepairservices.com",
  },

  {
    title: "Arosa Within",
    slug: "arosawithin",
    industry: "Wellness & Retreats",
    category: "Branding",
    services: ["Web Development", "Branding", "SEO"],
    result: "A modern business website with SEO friendly structure and responsive design.",
    accent: "from-primary/45 to-accent/25",
    image: arosaWithin,
    description:
      "We designed and developed the Arosa Within website as a premium, modern digital experience for a luxury longevity retreat based in Arosa, Switzerland, with a strong focus on wellness, lifestyle, retreat experiences and corporate health. The website was built using Wix, with our work focused on creating a sophisticated UI/UX design that reflects the premium positioning of the brand while keeping the experience clean, intuitive and easy to navigate. We developed a strong visual content structure around the BEST Retreat concept, including Movement, Nutrition, Sleep and Deep Recovery, along with dedicated sections for the retreat program, BEST Assessment, individual programs, group retreats, corporate health, the team, the Arosa experience and the overall brand methodology. Arosa Within We carefully organized the user journey so visitors can move naturally from understanding the BEST concept to exploring the program and ultimately taking action through “Start a Conversation,” “Register Your Interest” and corporate retreat inquiries. Arosa Within Our development process also included creating a modern responsive interface, optimizing the website for speed and performance, improving content hierarchy and navigation, implementing SEO-friendly page structure and content organization, optimizing calls to action and ensuring a consistent premium visual identity across desktop, tablet and mobile. The website was structured to communicate the brand's positioning clearly while making a complex wellness/retreat offering feel simple, elegant and engaging. Overall, our work focused on Wix development, premium UI/UX design, modern website design, responsive development, speed optimization, SEO, content architecture, conversion-focused UX and brand presentation.",
    link: "https://arosawithin.ch/",
  },

  {
    title: "Effortless Mind Meditation",
    slug: "effortlessmindmeditation",
    industry: "Meditation & Wellness",
    category: "Website Development",
    services: ["Web Development", "Subscription", "SEO"],
    result: "Created an easy-to-manage online platform for meditation education, paid memberships, digital content and personalized meditation services.",
    accent: "from-primary/45 to-accent/25",
    image: effortlessMindMeditation,
    description:
      "We designed and developed the Effortless Mind Meditation website as a complete online meditation and membership platform using WordPress and Elementor, with a strong focus on content delivery, subscriptions, course access and user engagement. Our work included designing a modern and user-friendly interface, building responsive Elementor layouts, organizing meditation programs and courses into clear categories, and creating dedicated pages for beginner and advanced meditation programs. The website also required a more advanced content structure than a standard business website, so we implemented membership and subscription-based content, allowing users to access different levels of meditation instruction and guided content based on their membership. The platform includes multiple membership levels such as Shanti, Ananda, Jñāna and Siddha, with different content and course access depending on the selected level. Effortless Mind Meditation We also worked on booking functionality for private meditation instruction and retreats, along with contact and inquiry forms, course registration, membership sign-up flows and payment/subscription pathways. The website includes online courses, prerecorded video/audio meditation content, guided sessions, live Zoom sessions and advanced course materials, requiring a structured user experience for both free and paid content. Effortless Mind Meditation Overall, our work focused on WordPress development, Elementor design, membership/subscription functionality, protected content, course structure, booking, forms, payment integration, responsive UI/UX and content management, creating a scalable platform where users can discover meditation programs, subscribe to memberships, access premium educational content and book personalized services.",
    link: "https://effortlessmindmeditation.com/",
  },

  {
    title: "Agape Cleaning Services",
    slug: "agapecleaningservices",
    industry: "Cleaning Services",
    category: "Website Development",
    services: ["Web Development", "Subscription", "SEO"],
    result: "Improved local search visibility, increase website speed and generate more qualified cleaning-service leads.",
    accent: "from-primary/45 to-accent/25",
    image: agapeCleaningServices,
    description:
      "We designed and developed the Agape Cleaning Services website as a professional, modern and conversion-focused cleaning service platform using WordPress and Elementor, with a strong focus on SEO, website speed and local lead generation. Our work included creating a clean and trustworthy visual interface, developing responsive Elementor layouts, organizing the website around residential and commercial cleaning services, and building dedicated service pages for areas such as house cleaning, office cleaning, deep cleaning, standard cleaning, window cleaning, kitchen cleaning, vacation rental cleaning, janitorial services, post-construction cleaning and move-in/move-out cleaning. Agape Cleaning Services We also structured clear Free Estimate and booking calls to action, contact and quote forms, service-process sections, trust elements and Google review integration to make it easier for potential customers to take action. The homepage currently includes a quote form with fields for name, phone, email, service, address, preferred date and additional details, supporting the site's lead-generation objective. Agape Cleaning Services On the SEO side, our work focused on local SEO, service-page optimization, location-focused content, keyword targeting, internal website structure, headings and search-friendly content architecture to strengthen visibility for cleaning-related searches in Palm Desert and the surrounding Coachella Valley. We also worked on website speed optimization and responsive performance, ensuring the site provides a cleaner and faster experience across desktop, tablet and mobile devices. Overall, our work focused on WordPress development, Elementor design, local SEO, service-page development, speed optimization, responsive UI/UX, lead generation, conversion optimization and ongoing website growth.",
    link: "https://agapecleaningservices.us",
  },

  {
    title: "Nissi Cleaning Service",
    slug: "nissicleaningservice",
    industry: "Cleaning Services",
    category: "Website Development",
    services: ["Web Development", "Subscription", "SEO"],
    result: "Created a professional online presence and make it easy for local businesses to explore services and request a quote.",
    accent: "from-primary/45 to-accent/25",
    image: nissiCleaningService,
    description:
      "We designed and developed the Nissi Cleaning Service website as a professional, service-focused cleaning business website using WordPress and Elementor. Our work included creating a clean and trustworthy visual interface, developing responsive Elementor layouts, and structuring the website around the company's commercial cleaning services in Bolingbrook, Illinois. We organized the website into clear service sections and dedicated pages for services such as medical clinic cleaning, dental office cleaning, gym cleaning, church cleaning, school cleaning, daycare cleaning, warehouse cleaning, apartment common-area cleaning and office cleaning, making it easier for potential customers to find the service relevant to their business. Nissi Cleaning Service We also developed supporting sections such as Why Choose Us, Our Process, pricing information, FAQs, contact/quote sections and strong calls to action, creating a clear journey from discovering a service to requesting a free quote. Nissi Cleaning Service The website was built with a responsive approach so the content and layouts work effectively across desktop, tablet and mobile devices, while Elementor provides the client with an easy-to-manage visual editing experience. Overall, our work focused on WordPress development, Elementor design, responsive UI/UX, service-page architecture, professional content presentation and conversion-focused website design for a local commercial cleaning company.",
    link: "https://nissicleaningservice.com/",
  },
  

];



export const portfolioCategories = [
  "All",
  "Website Development",
  "SEO",
  "Paid Ads",
  "Branding",
] as const;

export const testimonials = [
  {
    quote:
      "I've been working with Rokon for over 4 years, and I can't recommend him highly enough. He helped us migrate our membership website to a new domain and built a complex site with multiple membership levels, a large amount of content, and custom functionality. Everything works! I was very especially happy about the design, and Rokon was patient, collaborative, and delivered a website I'm delighted with. Whenever he encountered something new, he learned it quickly and found a solution. What stands out most is his honesty, professionalism, and dedication. Even with the time difference between Bangladesh and the U.S., he was always responsive and made himself available whenever needed. Communication was excellent throughout the project.If you're looking for someone who is skilled, reliable, trustworthy, and truly cares about doing great work, I highly recommend Rokon. It's been a pleasure working with him, and I look forward to continuing our partnership.",
    name: "Ajayan Borys",
    company: "Effortless Mind Meditation",
    initials: "AB",
  },
  {
    quote:
      "I've been working with Rokon and Rok Online for over a year, and I couldn't be happier with the experience. He built the website for my beauty studio and has been incredibly responsive, professional, and helpful every step of the way. Whenever I need updates or have questions, he responds quickly and gets things done efficiently. He always takes the time to understand my goals and offers great suggestions to improve my website and online presence. If you're looking for someone reliable, knowledgeable, and easy to work with, I highly recommend Rokon and Rok Online.",
    name: "Elena",
    company: "I Perfect Studio",
    initials: "E",
  },
  {
    quote:
      "We’ve had a great experience working with ROK Online. They handle the SEO and Google Ads for our company, B&F Junk Removal, and we’ve been very pleased with both their service and the results. Their team is knowledgeable, responsive, and always willing to answer questions or make adjustments when needed. They do a great job keeping our business visible online and helping us reach new customers. It’s obvious they understand digital marketing and know how to create strategies that work for local service businesses. One thing we really appreciate is their communication. They keep us informed, respond promptly, and genuinely care about helping our business grow. It’s refreshing to work with a company that follows through on what they promise. If you’re looking for a marketing company that knows SEO, manages Google Ads professionally, and truly wants to help your business succeed, I highly recommend ROK Online. They’ve been a valuable partner for B&F Junk Removal, and we look forward to continuing to work with them.",
    name: "Brian Turner",
    company: "B&F Junk Removal",
    initials: "BT",
  },
  {
    quote:
      "Rokon and the Rok Online team have done an amazing job for my permanent makeup business. Since they built my website and started managing my Meta Ads, I've been getting more clients and my business has grown significantly. Professional, responsive, and highly recommended!",
    name: "Salima Zurmanova",
    company: "Permanent Makeup NYC",
    initials: "SZ",
  },

    {
    quote:
      "I have been working with Rokon for a few years now and he has gone above and beyond to set up and monitor my website. He has kept track of when updates are needed and makes any changes that I need to make on my site in reasonable time for a very reasonable price. I trust Rokon for all my technical needs and he has never let me down.",
    name: "Sire Nelson",
    company: "Sire Sounds DJ",
    initials: "SN",
  },
      {
    quote:
      "I am writing to share my review and recommendation for Rok online. I have known this company for over 6 years, and they consistently deliver excellent results and help companies to grow. I highly recommend their services.",
    name: "Tina",
    company: "GLoria Cleaning",
    initials: "T",
  },
      {
    quote:
      "Ryan provides great service and is very responsive. We have been with his company for 3 years now and have plans to continue growing using his services",
    name: "Alingizer1",
    company: "Maid IT",
    initials: "A",
  },
      {
    quote:
      "Rok Online has done a great job with our cleaning business website. The team is responsive and highly professional, the services are reasonably priced. Would recommend Rok Online to anyone looking for business website development.",
    name: "Yuna Martin",
    company: "Clean IQ Foxcity",
    initials: "YM",
  },

];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    text: "We dig into your market, competitors and numbers to build a growth plan tied to revenue, not vanity metrics.",
  },
  {
    step: "02",
    title: "Planning & Design",
    text: "Information architecture, wireframes and high-fidelity design crafted around your customer journey.",
  },
  {
    step: "03",
    title: "Development",
    text: "Clean, fast, accessible builds with SEO fundamentals and analytics wired in from the first commit.",
  },
  {
    step: "04",
    title: "Launch & Marketing",
    text: "Coordinated launch with tracking, search and paid campaigns turned on to capture demand immediately.",
  },
  {
    step: "05",
    title: "Growth Optimization",
    text: "Continuous CRO, content and campaign testing so results compound month after month.",
  },
];

export const timeline = [
  { year: "2018", title: "Company Founded", text: "Rok Online launches as a focused web development studio." },
  {
    year: "2020",
    title: "Expanded Development Services",
    text: "Custom development, ecommerce and app teams join the roster.",
  },
  {
    year: "2023",
    title: "150+ Projects Completed",
    text: "A milestone year with 145+ five-star Upwork reviews.",
  },
  {
    year: "2026",
    title: "Full Digital Growth Agency",
    text: "An integrated team covering development, SEO, paid media and creative.",
  },
];

export const trustLogos = [
  "WordPress",
  "Google Ads",
  "Meta Ads",
  "Shopify",
  "Next.js",
  "Upwork",
  "HubSpot",
  "Klaviyo",
];
