import {
  ServiceItem,
  ProjectItem,
  TestimonialItem,
  PricingPlan,
  FAQItem,
  BlogPost,
  IndustrySpec
} from '../types';

export const CLIENT_LOGOS = [
  { name: 'Aura Health & Med', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80', tag: 'Healthcare' },
  { name: 'Vanguard Realty Group', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&w=200&q=80', tag: 'Real Estate' },
  { name: 'Savor & Spice Bistro', logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80', tag: 'Restaurant' },
  { name: 'Pulse Athletic Club', logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=200&q=80', tag: 'Fitness' },
  { name: 'Luxe Salon & Spa', logo: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=200&q=80', tag: 'Beauty' },
  { name: 'Apex Global Logistics', logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=200&q=80', tag: 'Enterprise' },
  { name: 'Starlight Academy', logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=200&q=80', tag: 'Education' },
  { name: 'Velocity Media', logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=200&q=80', tag: 'Marketing' }
];

export const WHY_CHOOSE_US = [
  {
    id: 'custom-design',
    title: 'Custom Design',
    desc: 'Bespoke UI/UX crafted specifically for your brand identity — no generic templates or cookie-cutter solutions.',
    icon: 'Palette',
    badge: '100% Unique'
  },
  {
    id: 'seo-optimized',
    title: 'SEO Optimized',
    desc: 'Built with clean semantic HTML, structured Schema markup, and meta strategy to dominate Google search results.',
    icon: 'TrendingUp',
    badge: 'Top Rankings'
  },
  {
    id: 'mobile-responsive',
    title: 'Mobile Responsive',
    desc: 'Pixel-perfect layout fluidity across smartphones, tablets, laptops, and ultra-wide desktop displays.',
    icon: 'Smartphone',
    badge: 'Mobile-First'
  },
  {
    id: 'lightning-fast',
    title: 'Lightning Fast',
    desc: 'Optimized assets, clean code architecture, and CDN integration for 98+ Core Web Vitals performance scores.',
    icon: 'Zap',
    badge: '<1s Load Time'
  },
  {
    id: 'secure',
    title: 'Ironclad Security',
    desc: 'SSL encryption, regular automated security audits, DDoS protection, and secure form processing.',
    icon: 'ShieldCheck',
    badge: 'Bank-Grade'
  },
  {
    id: 'affordable',
    title: 'Affordable Pricing',
    desc: 'Transparent pricing packages with flexible payment plans tailored for small businesses and growing startups.',
    icon: 'DollarSign',
    badge: 'Max ROI'
  },
  {
    id: 'unlimited-support',
    title: 'Unlimited Support',
    desc: 'Dedicated technical team providing ongoing updates, security patches, backups, and 24/7 emergency care.',
    icon: 'Headphones',
    badge: '24/7 Dedicated'
  },
  {
    id: 'modern-uiux',
    title: 'Modern UI/UX',
    desc: 'Apple-inspired minimalism, subtle glassmorphism, micro-interactions, and conversion-focused customer journeys.',
    icon: 'Sparkles',
    badge: 'Awwwards Level'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-website',
    title: 'Business Website',
    category: 'Corporate',
    iconName: 'Building2',
    shortDesc: 'Establish instant credibility, showcase services, and convert corporate visitors into loyal high-value clients.',
    fullDesc: 'A flagship digital presence for corporate firms, consultancies, agencies, and B2B enterprises designed to communicate value, build high authority, and drive qualified inquiries.',
    features: ['Custom Corporate UI', 'Interactive Lead Generation Forms', 'Team Profiles & Case Studies', 'CRM & ERP Integrations', 'Multi-Language Support'],
    deliverables: ['Responsive Web Application', 'SEO Meta Suite', 'CMS Content Management', 'Analytics Dashboard', 'Staff Training'],
    startingPrice: 1499,
    timeline: '2 - 3 Weeks',
    popularFor: 'Small Businesses & Corporate Firms'
  },
  {
    id: 'restaurant-website',
    title: 'Restaurant Website',
    category: 'Hospitality',
    iconName: 'Utensils',
    shortDesc: 'Mouth-watering digital menus, online table reservation engine, food ordering integration, and venue tours.',
    fullDesc: 'Transform online foodies into dining room guests with interactive visual menus, direct commission-free reservation engines, and OpenTable/Toast integrations.',
    features: ['Interactive Digital Menu with Filters', 'Direct Table Booking Engine', 'Online Delivery Integration', 'Google Maps Location Finder', 'Special Events & Catering Forms'],
    deliverables: ['Mobile-Optimized Menu System', 'Table Reservation Portal', 'Instagram Feed Sync', 'QR Code Menu Generator'],
    startingPrice: 1299,
    timeline: '1 - 2 Weeks',
    popularFor: 'Restaurants, Cafes, Bars & Bakeries'
  },
  {
    id: 'salon-website',
    title: 'Salon & Spa Website',
    category: 'Beauty',
    iconName: 'Scissors',
    shortDesc: 'Automated 24/7 appointment scheduling, staff selection, service menu showcases, and client reviews.',
    fullDesc: 'Eliminate missed calls and double bookings with a seamless online appointment scheduler tailored for hair salons, luxury spas, nail studios, and aesthetic clinics.',
    features: ['24/7 Real-Time Booking Calendar', 'Staff Selection & Availability', 'Service Package Builder', 'Deposit Payment Processing', 'SMS & Email Appointment Reminders'],
    deliverables: ['Integrated Booking Portal', 'Client Care Dashboard', 'Gift Card Purchase System', 'Stylist Gallery'],
    startingPrice: 1199,
    timeline: '1 - 2 Weeks',
    popularFor: 'Hair Salons, Spas & Aesthetic Clinics'
  },
  {
    id: 'gym-website',
    title: 'Gym & Fitness Website',
    category: 'Fitness',
    iconName: 'Dumbbell',
    shortDesc: 'Class timetable scheduling, membership signups, trainer bio showcases, and free pass lead funnels.',
    fullDesc: 'Power up member acquisition with high-impact video hero sections, live class schedule calendars, membership tier comparison tables, and automated trial pass forms.',
    features: ['Live Class Schedule Grid', 'Membership Subscription Funnel', 'Personal Trainer Directory', 'BMI & Fitness Calculators', 'Member Portal Login'],
    deliverables: ['Membership Booking Engine', 'Trainer Booking Module', 'Virtual Tour Integration', 'Lead Magnets'],
    startingPrice: 1399,
    timeline: '2 Weeks',
    popularFor: 'Gyms, Yoga Studios & CrossFit Boxes'
  },
  {
    id: 'ecommerce-store',
    title: 'Ecommerce Store',
    category: 'E-Commerce',
    iconName: 'ShoppingBag',
    shortDesc: 'High-converting online shopping experiences with automated inventory, Stripe/PayPal checkout, and cart recovery.',
    fullDesc: 'Scale revenue with custom Shopify or WooCommerce online storefronts featuring instant product search, filtered catalogs, guest checkout, and automated abandoned cart funnels.',
    features: ['Custom Product Filtering & Search', 'Secure One-Click Checkout', 'Inventory & Order Tracking', 'Automated Cart Recovery Emails', 'Customer Loyalty & Coupon System'],
    deliverables: ['Custom E-Commerce Store', 'Payment Gateway Integration', 'Product Import Setup', 'Sales Analytics Dashboard'],
    startingPrice: 2499,
    timeline: '3 - 4 Weeks',
    popularFor: 'Retail Brands, DTC Stores & Fashion Outlets'
  },
  {
    id: 'school-website',
    title: 'School & Academy Website',
    category: 'Education',
    iconName: 'GraduationCap',
    shortDesc: 'Parent portals, course catalog management, admissions application forms, and event announcements.',
    fullDesc: 'Clean, accessible digital campuses for K-12 schools, universities, language academies, and online course creators built to streamline student admissions and parent communication.',
    features: ['Online Admissions Application', 'Academic Course Directory', 'School Calendar & News Feed', 'Parent-Teacher Portal', 'Virtual Campus Tour'],
    deliverables: ['Educational Web Portal', 'Document Download Hub', 'Event Notification Engine', 'Staff Directory'],
    startingPrice: 1899,
    timeline: '2 - 3 Weeks',
    popularFor: 'Schools, Colleges, Academies & Tutors'
  },
  {
    id: 'hotel-website',
    title: 'Hotel & Resort Website',
    category: 'Hospitality',
    iconName: 'Hotel',
    shortDesc: 'Direct room booking system, virtual suite tours, amenity showcases, and local area recommendations.',
    fullDesc: 'Bypass third-party OTA commissions with a direct hotel booking engine, seasonal rate calculators, room availability calendars, and immersive luxury imagery.',
    features: ['Direct Room Booking Engine', 'Seasonal Rate & Date Selector', 'Interactive Room 360 Gallery', 'Amenity & Concierge Showcase', 'Multilingual & Multi-Currency'],
    deliverables: ['Direct Reservation System', 'Booking Engine Integration', 'Guest Portal', 'Local Attractions Guide'],
    startingPrice: 2299,
    timeline: '3 Weeks',
    popularFor: 'Hotels, Boutique Resorts & Airbnbs'
  },
  {
    id: 'healthcare-website',
    title: 'Healthcare & Doctor Website',
    category: 'Medical',
    iconName: 'Stethoscope',
    shortDesc: 'HIPAA-compliant appointment booking, medical service directories, patient portal links, and doctor profiles.',
    fullDesc: 'Build patient trust with a reassuring, easy-to-navigate medical website featuring online appointment requests, doctor credentials, accepted insurance lists, and emergency information.',
    features: ['Patient Appointment Request Engine', 'Doctor Credentials Directory', 'Accepted Insurance Finder', 'Patient Intake Form Downloads', 'Telehealth Meeting Integration'],
    deliverables: ['Accessible Medical Portal', 'Patient Form Handler', 'Emergency Contact Bar', 'Service Directory'],
    startingPrice: 1699,
    timeline: '2 - 3 Weeks',
    popularFor: 'Clinics, Dentists, Doctors & Specialists'
  },
  {
    id: 'landing-page',
    title: 'High-Converting Landing Page',
    category: 'Marketing',
    iconName: 'Rocket',
    shortDesc: 'Laser-focused single-page funnels engineered to convert paid ad traffic into instant sales and appointments.',
    fullDesc: 'Maximize ROI on Google & Meta Ads with ultra-fast, persuasive landing pages featuring compelling copywriting, lead forms, countdown timers, social proof, and A/B testing readiness.',
    features: ['Conversion-Focused Layout', 'Lead Capture Form & Webhook', 'A/B Testing Ready Architecture', 'Fast Sub-Second Loading', 'Pixel & Analytics Integration'],
    deliverables: ['Single Page Web App', 'Thank You / Sales Confirmation Page', 'Lead Notification Integration', 'Ad Tracking Setup'],
    startingPrice: 799,
    timeline: '3 - 5 Days',
    popularFor: 'Product Launches, Ad Campaigns & Lead Gen'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Creative',
    iconName: 'Layout',
    shortDesc: 'Showcase your creative work, case studies, client reviews, and direct inquiry forms in stunning layout.',
    fullDesc: 'Stand out in competitive creative fields with a gallery portfolio designed for architects, photographers, designers, agencies, and consultants looking for elite clientele.',
    features: ['Interactive Gallery & Filter System', 'Case Study Deep-Dives', 'Client Testimonial Highlights', 'Downloadable Resume / Deck', 'Direct Inquiry Contact Form'],
    deliverables: ['Personal Portfolio Site', 'CMS Project Manager', 'Social Link Hub', 'Optimized Image CDN'],
    startingPrice: 999,
    timeline: '1 - 2 Weeks',
    popularFor: 'Photographers, Designers, Architects & Freelancers'
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    category: 'Optimization',
    iconName: 'RefreshCw',
    shortDesc: 'Revamp outdated websites with modern aesthetics, modern tech stacks, mobile optimization, and boosted conversions.',
    fullDesc: 'Transform sluggish, outdated sites into modern, high-converting revenue drivers while preserving domain authority, existing SEO rankings, and customer data.',
    features: ['UI/UX Complete Overhaul', 'SEO Ranking Preservation', 'Mobile & Speed Optimization', 'Content Modernization', 'Conversion Rate Optimization (CRO)'],
    deliverables: ['Redesigned Web Application', 'SEO Redirect Map', 'Performance Benchmark Report', 'Brand Style Guide'],
    startingPrice: 1399,
    timeline: '2 Weeks',
    popularFor: 'Existing Businesses Needing a Fresh Upgrade'
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Care',
    category: 'Support',
    iconName: 'Wrench',
    shortDesc: 'Ongoing security monitoring, daily cloud backups, content updates, speed optimization, and technical support.',
    fullDesc: 'Peace of mind for business owners. We handle all software updates, security patches, uptime monitoring, backups, content tweaks, and emergency fixes 24/7.',
    features: ['Daily Cloud Backups', '24/7 Uptime & Security Monitoring', 'Core & Plugin Software Updates', 'Unlimited Content Tweak Hours', 'Emergency Support Hotline'],
    deliverables: ['Monthly Health Report', 'Dedicated Support Manager', 'Speed Optimizations', 'Security Audit'],
    startingPrice: 199,
    timeline: 'Ongoing Support',
    popularFor: 'All Business Owners Wanting Hassle-Free Site Management'
  }
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'savoria-bistro',
    title: 'Savoria Fine Dining',
    category: 'Restaurant',
    clientName: 'Savoria Culinary Group',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    summary: 'A luxurious digital dining showcase with direct table reservations and interactive food menus.',
    challenge: 'Savoria was paying 15% commissions to third-party reservation platforms and lost customers due to slow mobile menus.',
    solution: 'Designed an elegant, dark-mode visual menu with direct OpenTable integration and sub-second page loads.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'OpenTable API'],
    results: [
      { label: 'Direct Reservations', value: '+240%', change: 'in 60 days' },
      { label: 'Commission Saved', value: '$4,200', change: 'per month' },
      { label: 'Mobile Bounce Rate', value: '-62%', change: 'improvement' }
    ],
    testimonial: {
      quote: 'Infosedia transformed our online image completely. Our table bookings doubled within the first month alone!',
      author: 'Chef Marco Rossi',
      role: 'Executive Chef & Owner'
    },
    features: ['Interactive Filterable Menu', 'Instant Reservation Engine', 'Private Dining Inquiry Form', 'Wine List Viewer'],
    year: '2025'
  },
  {
    id: 'lumiere-salon',
    title: 'Lumière Hair & Spa',
    category: 'Salon',
    clientName: 'Lumière Beauty Labs',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Sleek luxury salon website with integrated 24/7 client booking and stylist portfolio galleries.',
    challenge: 'Front desk receptionists spent 4+ hours daily answering calls for appointments and package prices.',
    solution: 'Built an intuitive 3-step online booking portal integrated with Square Appointments and SMS notifications.',
    techStack: ['TypeScript', 'Tailwind CSS', 'Square API', 'Vite'],
    results: [
      { label: 'Online Bookings', value: '88%', change: 'of total appointments' },
      { label: 'Phone Inquiry Reduction', value: '-75%', change: 'time saved' },
      { label: 'New Client Growth', value: '+180%', change: 'quarter over quarter' }
    ],
    testimonial: {
      quote: 'Our clients constantly compliment how sleek and easy our online booking is. Infosedia exceeded all expectations!',
      author: 'Elena Vance',
      role: 'Founder & Master Stylist'
    },
    features: ['24/7 Appointment Booking', 'Stylist Portfolio Grid', 'Service Pricing Calculator', 'Digital Gift Cards'],
    year: '2025'
  },
  {
    id: 'apex-fitness',
    title: 'Apex Performance Gym',
    category: 'Gym',
    clientName: 'Apex Fitness LLC',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    summary: 'High-energy fitness club web app featuring live class timetables, membership signups, and trial passes.',
    challenge: 'High drop-off rate on membership signup pages due to confusing multi-step forms.',
    solution: 'Reengineered the membership funnel into an energetic 1-minute checkout experience with instant 3-day pass downloads.',
    techStack: ['React', 'Tailwind CSS', 'Stripe Billing', 'Motion'],
    results: [
      { label: 'Trial Pass Conversions', value: '+310%', change: 'increase' },
      { label: 'Monthly Recurring Rev', value: '+145%', change: 'growth' },
      { label: 'Page Load Speed', value: '0.6s', change: 'Lighthouse score 99' }
    ],
    testimonial: {
      quote: 'Infosedia created a website that matches the electric energy of our gym. Leads have soared!',
      author: 'Marcus Vance',
      role: 'Head Trainer & Director'
    },
    features: ['Live Class Timetable', 'Trial Pass Generator', 'Trainer Profiles', 'Membership Pricing Toggle'],
    year: '2025'
  },
  {
    id: 'dr-vanguard-health',
    title: 'Vanguard Heart Clinic',
    category: 'Doctor',
    clientName: 'Vanguard Cardiovascular Associates',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    summary: 'Trustworthy medical website with appointment requests, physician bios, and patient intake resources.',
    challenge: 'Patients struggled to find accepted health insurance plans and doctor availability on mobile devices.',
    solution: 'Created an accessible, reassuring UI with an instant Insurance Search Tool and streamlined patient intake portal.',
    techStack: ['TypeScript', 'Tailwind CSS', 'WCAG 2.1 AA', 'Formspree'],
    results: [
      { label: 'Patient Inquiries', value: '+195%', change: 'growth' },
      { label: 'Mobile Accessibility', value: '100%', change: 'WCAG AAA score' },
      { label: 'Form Completion Rate', value: '94%', change: 'industry leading' }
    ],
    testimonial: {
      quote: 'Our medical practice needed a clean, compliant, and easy-to-use site. Infosedia delivered beyond our dreams.',
      author: 'Dr. Alistair Sterling',
      role: 'Chief Medical Officer'
    },
    features: ['Insurance Verification Tool', 'Doctor Specialty Directory', 'Patient Intake Portal', 'Emergency Contacts'],
    year: '2024'
  },
  {
    id: 'haven-real-estate',
    title: 'Haven Luxury Real Estate',
    category: 'Real Estate',
    clientName: 'Haven Realty Group',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    summary: 'High-end luxury property showcase with interactive virtual tours, mortgage calculator, and agent booking.',
    challenge: 'Luxury buyers expected interactive, full-screen property walkthroughs and instant agent consultation scheduling.',
    solution: 'Built a cinematic real estate portal with 4K video background hero, interactive map search, and property valuation form.',
    techStack: ['React', 'Tailwind CSS', 'Mapbox GL', 'Framer Motion'],
    results: [
      { label: 'Property Inquiries', value: '+280%', change: 'increase' },
      { label: 'Avg Time On Site', value: '4m 12s', change: '+180% engagement' },
      { label: 'High-Value Lead Gen', value: '$12M+', change: 'closed volume' }
    ],
    testimonial: {
      quote: 'Infosedia built us the most stunning real estate website in South Florida. The return on investment has been incredible!',
      author: 'Victoria Sterling',
      role: 'Managing Partner'
    },
    features: ['Interactive Property Map', '4K Video Walkthroughs', 'Mortgage Rate Estimator', 'Private Viewing Scheduler'],
    year: '2025'
  },
  {
    id: 'wanderlust-travel',
    title: 'Wanderlust Luxury Expeditions',
    category: 'Travel',
    clientName: 'Wanderlust Travel Co.',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    summary: 'Immersive travel itinerary platform with custom trip builder, client reviews, and direct deposit payments.',
    challenge: 'Travelers wanted bespoke trip customization and instant pricing quotes without lengthy back-and-forth emails.',
    solution: 'Engineered an interactive "Build Your Dream Trip" step-by-step calculator connected directly to CRM lead routing.',
    techStack: ['React', 'Tailwind CSS', 'Stripe', 'Google Maps API'],
    results: [
      { label: 'Qualified Leads', value: '+215%', change: 'growth' },
      { label: 'Custom Trip Bookings', value: '+160%', change: 'increase' },
      { label: 'SEO Organic Traffic', value: '45,000+', change: 'monthly visitors' }
    ],
    testimonial: {
      quote: 'Infosedia brought our luxury travel vision to life. Our clients love customizing their itineraries online!',
      author: 'Julian Thorne',
      role: 'Director of Operations'
    },
    features: ['Interactive Itinerary Builder', 'Destination Guides', 'Custom Currency Converter', 'Trip Deposit Portal'],
    year: '2024'
  },
  {
    id: 'starlight-academy',
    title: 'Starlight International School',
    category: 'School',
    clientName: 'Starlight Education Trust',
    location: 'Boston, MA',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    summary: 'Modern educational web portal with online admissions, parent news feeds, and course curriculum guides.',
    challenge: 'Parents struggled to submit admissions forms and locate school event schedules on mobile devices.',
    solution: 'Designed a warm, welcoming digital campus hub with digital application forms and automated event calendars.',
    techStack: ['TypeScript', 'Tailwind CSS', 'Lucide React', 'Express'],
    results: [
      { label: 'Online Admissions', value: '+170%', change: 'increase' },
      { label: 'Parent Engagement', value: '92%', change: 'satisfaction rate' },
      { label: 'Paperwork Reduction', value: '-90%', change: 'efficiency gain' }
    ],
    testimonial: {
      quote: 'Infosedia made school communications effortless. Parents love our new modern website!',
      author: 'Dr. Rebecca Croft',
      role: 'Head of School'
    },
    features: ['Online Admissions Portal', 'Academic Calendar Feed', 'Virtual Campus Tour', 'Parent Document Hub'],
    year: '2025'
  },
  {
    id: 'apex-build-construction',
    title: 'Apex Prime Construction',
    category: 'Construction',
    clientName: 'Apex Infrastructure Group',
    location: 'Denver, CO',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Rugged yet sophisticated commercial construction showcase with project portfolios and quote estimators.',
    challenge: 'High-value commercial developers needed to evaluate past engineering projects and request complex tenders online.',
    solution: 'Built a heavy-duty corporate portfolio with before/after project sliders and a project bid request engine.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    results: [
      { label: 'Commercial Tenders', value: '+260%', change: 'growth' },
      { label: 'Average Contract Size', value: '$1.8M', change: '+40% value' },
      { label: 'Site Performance', value: '99', change: 'Lighthouse score' }
    ],
    testimonial: {
      quote: 'Infosedia positioned us as the premiere commercial builder in Colorado. Our pipeline is full!',
      author: 'David Kowalski',
      role: 'VP of Business Development'
    },
    features: ['Before/After Project Slider', 'Commercial Bid Request Engine', 'Safety Credentials Showcase', 'Equipment Fleet Tour'],
    year: '2024'
  },
  {
    id: 'velocity-marketing',
    title: 'Velocity Digital Marketing',
    category: 'Digital Marketing',
    clientName: 'Velocity Growth Partners',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    summary: 'A futuristic digital agency portfolio featuring interactive ROI calculators, client case studies, and live stats.',
    challenge: 'Needed an award-winning web design to prove their creative authority to enterprise CMO clients.',
    solution: 'Designed an Awwwards-caliber site with dark mode glow effects, 3D interactive graphs, and instant audit request tools.',
    techStack: ['React', 'Tailwind CSS', 'Recharts', 'Motion'],
    results: [
      { label: 'Enterprise Inquiries', value: '+340%', change: 'increase' },
      { label: 'Conversion Rate', value: '8.4%', change: 'top 1% industry' },
      { label: 'Awwwards Nomination', value: 'Honorable Mention', change: '2025' }
    ],
    testimonial: {
      quote: 'Infosedia built us an absolute masterpiece. Our prospective clients are blown away during sales calls!',
      author: 'Sophia Chen',
      role: 'Founder & CMO'
    },
    features: ['Interactive Audit Widget', 'Live Metrics Dashboard', 'Client Results Grid', 'Interactive Pricing Calculator'],
    year: '2025'
  },
  {
    id: 'lumina-fashion',
    title: 'Lumina High Fashion',
    category: 'Fashion',
    clientName: 'Lumina Couture Paris',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
    summary: 'Minimalist luxury fashion ecommerce experience with lookbook galleries and quick add-to-bag.',
    challenge: 'Slow image loading on mobile phones caused high cart abandonment during seasonal drop releases.',
    solution: 'Implemented Next-Gen AVIF image compression, edge caching, and a frictionless slide-out shopping cart.',
    techStack: ['React', 'Tailwind CSS', 'Shopify Storefront API', 'Motion'],
    results: [
      { label: 'Checkout Conversion', value: '+210%', change: 'boost' },
      { label: 'Page Speed Index', value: '0.5s', change: 'instant load' },
      { label: 'Seasonal Drop Revenue', value: '$450K+', change: 'in first 24h' }
    ],
    testimonial: {
      quote: 'Infosedia captured our Parisian aesthetic while making the shopping experience blisteringly fast!',
      author: 'Camille Laurent',
      role: 'Creative Director'
    },
    features: ['Lookbook Video Grid', 'Slide-Out Express Cart', 'Pre-Order Management', 'Size Recommendation Quiz'],
    year: '2025'
  },
  {
    id: 'grand-azure-hotel',
    title: 'Grand Azure Boutique Hotel',
    category: 'Hotel',
    clientName: 'Grand Azure Hospitality',
    location: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    summary: 'Cinematic luxury hotel showcase with direct room selection, weather widget, and VIP concierge portal.',
    challenge: 'Paying 22% commissions to Booking.com and Expedia was cutting deeply into profit margins.',
    solution: 'Created a direct-booking web app with exclusive perk incentives (free breakfast, late checkout) for direct guests.',
    techStack: ['React', 'Tailwind CSS', 'Stripe', 'Framer Motion'],
    results: [
      { label: 'Direct Hotel Bookings', value: '74%', change: 'of total room nights' },
      { label: 'Commission Savings', value: '$85,000', change: 'annual savings' },
      { label: 'Avg Reservation Value', value: '+32%', change: 'increase' }
    ],
    testimonial: {
      quote: 'Infosedia saved us tens of thousands in OTA fees by creating a website guests want to book directly on!',
      author: 'Nikolaos Pappas',
      role: 'General Manager'
    },
    features: ['Direct Room Booking Engine', 'Live Weather & Sunset Times', 'Concierge Tour Scheduler', 'Multilingual Currency Toggle'],
    year: '2025'
  },
  {
    id: 'artisans-coffee',
    title: 'Artisans Roasters & Cafe',
    category: 'Coffee Shop',
    clientName: 'Artisans Coffee Co.',
    location: 'Portland, OR',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    previewUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    summary: 'Charming specialty coffee roaster site featuring coffee bean subscriptions, location maps, and order ahead.',
    challenge: 'Wanted to sell coffee bean subscription boxes nationwide while serving local foot traffic.',
    solution: 'Designed a warm, craft-aesthetic web store with monthly coffee bean subscription selector and store locator.',
    techStack: ['React', 'Tailwind CSS', 'Stripe Subscriptions', 'Mapbox'],
    results: [
      { label: 'Subscription Subscribers', value: '1,200+', change: 'active members' },
      { label: 'Online Bean Sales', value: '+290%', change: 'growth' },
      { label: 'Local Store Traffic', value: '+65%', change: 'increase' }
    ],
    testimonial: {
      quote: 'Infosedia helped us launch our nationwide bean subscription business effortlessly. Our coffee is everywhere now!',
      author: 'Oliver Vance',
      role: 'Head Roaster & Founder'
    },
    features: ['Coffee Bean Subscription Engine', 'Roast Profile Quiz', 'Interactive Store Locator', 'Mobile Order Ahead'],
    year: '2024'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    subtitle: 'Understanding Your Business Goals',
    desc: 'We analyze your target audience, competitors, brand goals, and conversion benchmarks to craft a winning project blueprint.',
    deliverables: ['Strategy Workshop', 'Competitor Analysis', 'Conversion Funnel Map'],
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Research & Architecture',
    subtitle: 'Structuring the Blueprint',
    desc: 'We map out user flows, information hierarchy, wireframes, and SEO keyword targets to ensure effortless navigation.',
    deliverables: ['Information Architecture', 'Wireframe Sketches', 'SEO Keyword Plan'],
    icon: 'Map'
  },
  {
    step: '03',
    title: 'UI/UX Design',
    subtitle: 'Awwwards-Level Visual Crafting',
    desc: 'Our design team creates bespoke Figma prototypes with custom typography, glassmorphic UI elements, and motion concepts.',
    deliverables: ['Interactive Figma Prototype', 'Design System', 'Mobile & Desktop Mockups'],
    icon: 'PenTool'
  },
  {
    step: '04',
    title: 'Development & Code',
    subtitle: 'Clean, High-Performance Engineering',
    desc: 'We code your website using modern frameworks (React, Vite, Tailwind CSS) for sub-second speeds and bulletproof security.',
    deliverables: ['Production React Codebase', 'CMS Integration', 'API & CRM Sync'],
    icon: 'Code2'
  },
  {
    step: '05',
    title: 'Testing & Quality Audit',
    subtitle: 'Rigorous Cross-Device Validation',
    desc: 'We perform multi-device testing, accessibility (WCAG) checks, Lighthouse speed benchmarks, and security audits.',
    deliverables: ['Cross-Device QA Test', 'Core Web Vitals Audit', 'SEO Meta Audit'],
    icon: 'CheckCircle2'
  },
  {
    step: '06',
    title: 'Launch & SEO Deployment',
    subtitle: 'Going Live with Zero Downtime',
    desc: 'We deploy your site to global Cloud Run / CDN servers, index with Google Search Console, and set up analytics tracking.',
    deliverables: ['Domain & SSL Setup', 'Google Analytics & Tag Manager', 'Zero-Downtime Launch'],
    icon: 'Rocket'
  },
  {
    step: '07',
    title: 'Growth & Support',
    subtitle: 'Continuous Optimization',
    desc: 'We provide ongoing technical maintenance, security backups, content tweaks, and performance monitoring 24/7.',
    deliverables: ['24/7 Uptime Monitoring', 'Monthly Analytics Reports', 'Dedicated Care Plan'],
    icon: 'ShieldCheck'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Co-Founder & CEO',
    company: 'Nexus Digital Agency',
    industry: 'Marketing',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    content: 'Infosedia built a website that completely elevated our agency position. We closed 3 enterprise clients within two weeks of launching our new site!',
    metric: '+310%',
    metricLabel: 'Lead Conversion Boost',
    projectCategory: 'Digital Agency'
  },
  {
    id: 'test-2',
    name: 'Chef Marco Rossi',
    role: 'Owner & Executive Chef',
    company: 'Savoria Culinary Group',
    industry: 'Hospitality',
    avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    content: 'Our online table reservations skyrocketed. Eliminating third-party booking commissions saved us over $4,000 every single month.',
    metric: '$4,200/mo',
    metricLabel: 'Commission Saved',
    projectCategory: 'Restaurant'
  },
  {
    id: 'test-3',
    name: 'Dr. Alistair Sterling',
    role: 'Chief Medical Officer',
    company: 'Vanguard Cardiovascular',
    industry: 'Healthcare',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    content: 'Professional, responsive, and deeply knowledgeable about medical compliance and speed. Our patients love how clean the site is on mobile.',
    metric: '99/100',
    metricLabel: 'Google Performance',
    projectCategory: 'Healthcare'
  },
  {
    id: 'test-4',
    name: 'Victoria Sterling',
    role: 'Managing Partner',
    company: 'Haven Luxury Real Estate',
    industry: 'Real Estate',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    content: 'The 4K video walkthroughs and interactive mortgage tools set us apart in Miami. Infosedia delivers true 6-figure agency quality at fair prices.',
    metric: '$12M+',
    metricLabel: 'Properties Closed',
    projectCategory: 'Real Estate'
  },
  {
    id: 'test-5',
    name: 'Marcus Vance',
    role: 'Fitness Director',
    company: 'Apex Athletic Club',
    industry: 'Fitness',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    content: 'The trial pass funnel is a lead-generating machine! We went from 20 leads/month to over 150 qualified gym signups in month one.',
    metric: '150+',
    metricLabel: 'Monthly New Members',
    projectCategory: 'Gym'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    subtitle: 'Perfect for small local businesses, freelancers, and single-location startups needing a fast, professional online presence.',
    priceOneTime: 999,
    priceMonthly: 89,
    turnaroundTime: '5 - 7 Business Days',
    idealFor: 'Small Local Businesses, Salons, Cafes, Doctors',
    ctaText: 'Get Started with Starter',
    features: [
      { text: 'Custom 5-Page Responsive Website', included: true },
      { text: 'Mobile-First Responsive UI/UX', included: true },
      { text: 'On-Page SEO & Google Indexing', included: true },
      { text: 'Contact Form & Google Maps Setup', included: true },
      { text: 'Sub-Second Speed Optimization', included: true },
      { text: 'SSL Security Certificate', included: true },
      { text: 'Social Media & WhatsApp Links', included: true },
      { text: 'CMS Content Editing Capabilities', included: true },
      { text: 'Custom Online Booking / E-Commerce', included: false, detail: 'Available in Business' },
      { text: 'CRM / Automated Funnel Sync', included: false, detail: 'Available in Premium' },
      { text: 'Dedicated 24/7 Priority Hotline', included: false, detail: 'Standard Support' }
    ]
  },
  {
    id: 'business',
    name: 'Business Package',
    subtitle: 'Engineered for growing companies, restaurants, gyms, real estate firms, and e-commerce stores wanting maximum leads & sales.',
    priceOneTime: 1899,
    priceMonthly: 149,
    popular: true,
    turnaroundTime: '10 - 14 Business Days',
    idealFor: 'Growing Businesses, E-Commerce, Gyms, Real Estate',
    ctaText: 'Choose Business Package',
    features: [
      { text: 'Custom 10-Page Modern Web Application', included: true },
      { text: 'Awwwards-Level Framer Animations & Motion', included: true },
      { text: 'Advanced Technical SEO & Schema Markup', included: true },
      { text: 'Custom Online Booking OR E-Commerce Store', included: true },
      { text: 'Interactive Lead Magnets & Quote Calculator', included: true },
      { text: 'CMS & Blog System Setup', included: true },
      { text: 'Sub-Second Speed & 98+ Core Web Vitals', included: true },
      { text: 'Google Analytics 4 & Meta Pixel Integration', included: true },
      { text: 'WhatsApp & Live Chat Widget Integration', included: true },
      { text: '3 Months Free Maintenance & Backups', included: true },
      { text: 'Dedicated Priority Account Manager', included: true }
    ]
  },
  {
    id: 'premium',
    name: 'Enterprise / Custom',
    subtitle: 'Bespoke web applications, complex multi-location platforms, advanced web apps, and custom SaaS software.',
    priceOneTime: 3499,
    priceMonthly: 249,
    turnaroundTime: '3 - 4 Weeks',
    idealFor: 'Large Corporations, Franchises, High-Volume E-Commerce',
    ctaText: 'Request Custom Proposal',
    features: [
      { text: 'Unlimited Custom Pages & Unique Views', included: true },
      { text: 'Full Custom Web Application Development', included: true },
      { text: 'Custom API, ERP, CRM & Payment Gateways', included: true },
      { text: 'Multi-Location / Multi-Language Support', included: true },
      { text: 'AI Chatbot & Lead Automation Systems', included: true },
      { text: 'Custom Interactive Calculators & Portals', included: true },
      { text: 'A/B Conversion Rate Optimization (CRO)', included: true },
      { text: 'Dedicated Cloud Run Server Infrastructure', included: true },
      { text: '12 Months Complete Care & Maintenance', included: true },
      { text: '24/7 SLA Guarantee & VIP Hotline', included: true },
      { text: 'Quarterly Strategy & SEO Performance Audits', included: true }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How long does it take to design and build a website?',
    answer: 'Our average timeline is 5 to 7 days for a Starter 5-page website, 10 to 14 days for a Business website, and 3 to 4 weeks for custom enterprise platforms. We follow an agile process with clear milestones to ensure prompt delivery.'
  },
  {
    id: 'faq-2',
    category: 'Pricing',
    question: 'Are there any hidden fees or recurring monthly charges?',
    answer: 'No hidden fees whatsoever! We provide transparent fixed-price proposals. You can choose a one-time project payment or an affordable monthly plan that includes hosting, security, backups, and ongoing support.'
  },
  {
    id: 'faq-3',
    category: 'Design & Process',
    question: 'Will my website be mobile-friendly and fast loading?',
    answer: '100% yes! Every Infosedia website is designed mobile-first with responsive layouts and engineered for sub-second load times. We optimize all code, fonts, and images to achieve 95+ scores on Google Lighthouse.'
  },
  {
    id: 'faq-4',
    category: 'SEO',
    question: 'Does Infosedia handle search engine optimization (SEO)?',
    answer: 'Yes! Every project includes fundamental on-page SEO: clean semantic H1-H6 tags, optimized meta titles and descriptions, Google Search Console indexing, Schema.org structured markup, and XML sitemaps.'
  },
  {
    id: 'faq-5',
    category: 'Maintenance',
    question: 'Can I easily update content on my website myself later?',
    answer: 'Absolutely! We build with intuitive Content Management Systems (CMS) or user-friendly admin panels. We also provide full video walkthroughs and documentation so your team can edit text, images, products, and blog posts effortlessly.'
  },
  {
    id: 'faq-6',
    category: 'Features',
    question: 'Can you integrate online booking, appointment scheduling, or payments?',
    answer: 'Yes, we specialize in integrating booking platforms (Calendly, Square, Acuity, OpenTable), e-commerce checkout engines (Stripe, PayPal, Shopify), and CRM lead funnels.'
  },
  {
    id: 'faq-7',
    category: 'Redesign',
    question: 'I already have a website. Can Infosedia redesign it without losing my Google rankings?',
    answer: 'Yes! We perform full website redesigns while preserving your existing URLs through 301 redirect mappings, maintaining your keyword rankings, and upgrading your visual appeal and speed.'
  },
  {
    id: 'faq-8',
    category: 'Process',
    question: 'What do I need to provide before starting my website project?',
    answer: 'To get started, we simply need your brand logo, high-level business info, and any existing images or text. If you do not have copy or photography ready, our team provides professional copywriting assistance and curated photography!'
  },
  {
    id: 'faq-9',
    category: 'Support',
    question: 'What happens after my website goes live?',
    answer: 'We offer post-launch support and maintenance packages. We monitor uptime 24/7, run automated cloud backups, install security patches, and provide quick content edits whenever you need them.'
  },
  {
    id: 'faq-10',
    category: 'General',
    question: 'Why should I choose Infosedia over a cheap freelancer or DIY builder?',
    answer: 'DIY builders (Wix, Squarespace) often produce slow, generic sites that fail to convert visitors or rank on Google. Cheap freelancers frequently disappear after launch. Infosedia delivers Awwwards-caliber UI/UX, sub-second custom code, proven CRO lead funnels, and dedicated long-term partnership.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: '7 Crucial Web Design Elements That Boost Conversion Rates in 2026',
    slug: 'web-design-elements-boost-conversions-2026',
    excerpt: 'Discover how modern micro-interactions, sub-second speed, trust signals, and clear calls-to-action turn casual website visitors into paying customers.',
    category: 'Conversion Optimization',
    date: 'July 28, 2026',
    readTime: '5 min read',
    author: {
      name: 'Alex Thorne',
      role: 'Lead UI/UX Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="mb-4 text-slate-600 dark:text-slate-300">In 2026, a website is no longer just a digital business card — it is your 24/7 primary sales generator. Consumers expect instant gratification, seamless mobile interfaces, and crystal-clear value propositions.</p>
      <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">1. Sub-Second Page Velocity</h3>
      <p class="mb-4 text-slate-600 dark:text-slate-300">Every 100ms delay in page load time decreases conversion rates by up to 7%. Utilizing modern React, Vite, and CDN edge caching ensures your site renders instantly on any mobile device.</p>
      <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">2. Frictionless Micro-Interactions</h3>
      <p class="mb-4 text-slate-600 dark:text-slate-300">Subtle hover feedback, magnetic button effects, and smooth scroll transitions reassure users and make navigation feel organic and pleasurable.</p>
      <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">3. Clear High-Contrast CTAs</h3>
      <p class="mb-4 text-slate-600 dark:text-slate-300">Primary buttons should stand out visually with high contrast colors, helpful helper copy, and instant response feedback.</p>
    `
  },
  {
    id: 'post-2',
    title: 'How Local SEO & Schema Markup Drive Free Organic Traffic to Small Businesses',
    slug: 'local-seo-schema-markup-small-business',
    excerpt: 'Learn how structured data, Google Business Profile optimization, and fast local websites get your business to rank #1 on Google Search & Maps.',
    category: 'SEO & Search',
    date: 'July 22, 2026',
    readTime: '6 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Head of SEO Strategy',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="mb-4 text-slate-600 dark:text-slate-300">Over 82% of smartphone users perform "near me" searches when looking for local services, restaurants, salons, or doctors. If your website lacks structured Schema markup, Google cannot accurately index your business offerings.</p>
      <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">What is JSON-LD Schema?</h3>
      <p class="mb-4 text-slate-600 dark:text-slate-300">JSON-LD is a structured code snippet embedded in your website that explicitly tells search engines your exact business category, operating hours, geographical coordinates, price ranges, and verified client reviews.</p>
    `
  },
  {
    id: 'post-3',
    title: 'Why Custom React Websites Outperform Drag-and-Drop Website Builders in 2026',
    slug: 'custom-react-vs-drag-and-drop-builders',
    excerpt: 'An honest comparison between custom code web development vs. Wix, Squarespace, and WordPress page builders regarding speed, security, and scalability.',
    category: 'Tech & Architecture',
    date: 'July 15, 2026',
    readTime: '4 min read',
    author: {
      name: 'David Vance',
      role: 'Senior Full-Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="mb-4 text-slate-600 dark:text-slate-300">Generic drag-and-drop builders force browsers to download megabytes of unnecessary plugin code, resulting in sluggish load times, security vulnerabilities, and limited customization options.</p>
      <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">The Clean Code Advantage</h3>
      <p class="mb-4 text-slate-600 dark:text-slate-300">Custom React + Vite web architecture only loads the precise code needed for your specific pages. This delivers lightning-fast speed scores, zero bloat, and total freedom for custom API integrations.</p>
    `
  }
];

export const TARGET_AUDIENCES: IndustrySpec[] = [
  {
    id: 'restaurants',
    name: 'Restaurants & Cafes',
    icon: 'Utensils',
    tagline: 'Mouth-watering digital menus & commission-free table bookings.',
    growthMetric: '+240% Direct Bookings',
    keyFeatures: ['Interactive Menu Filter', 'Commission-Free Reservations', 'QR Code Menus', 'Google Maps Sync'],
    recommendedPages: ['Visual Menu', 'Reservations', 'Private Dining', 'Contact & Hours'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'salons',
    name: 'Salons & Spas',
    icon: 'Scissors',
    tagline: '24/7 automated appointment booking and stylist portfolios.',
    growthMetric: '-75% Phone Calls',
    keyFeatures: ['Live Booking Calendar', 'Stylist Selection', 'Deposit Payments', 'SMS Reminders'],
    recommendedPages: ['Services & Pricing', 'Book Appointment', 'Stylist Gallery', 'Gift Cards'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gyms',
    name: 'Gyms & Fitness',
    icon: 'Dumbbell',
    tagline: 'Class schedule booking & trial pass lead generation.',
    growthMetric: '+310% Free Pass Leads',
    keyFeatures: ['Live Class Grid', 'Membership Tiers', 'Trainer Profiles', 'Instant Trial Passes'],
    recommendedPages: ['Class Schedule', 'Membership Tiers', 'Personal Trainers', 'Free Trial'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'doctors',
    name: 'Doctors & Clinics',
    icon: 'Stethoscope',
    tagline: 'HIPAA-compliant patient booking & medical services directory.',
    growthMetric: '100% Mobile Accessibility',
    keyFeatures: ['Insurance Finder', 'Patient Booking Portal', 'Physician Credentials', 'Intake Downloads'],
    recommendedPages: ['Medical Specialties', 'Request Appointment', 'Doctors Bio', 'New Patients'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'realestate',
    name: 'Real Estate Companies',
    icon: 'Home',
    tagline: 'Cinematic luxury property showcases & virtual walkthroughs.',
    growthMetric: '+280% High-Net Lead Volume',
    keyFeatures: ['Interactive Property Maps', '4K Video Tours', 'Mortgage Rate Estimator', 'Private Tour Form'],
    recommendedPages: ['Featured Listings', 'Property Search', 'Mortgage Calculator', 'Schedule Viewing'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce Brands',
    icon: 'ShoppingBag',
    tagline: 'High-converting online store with seamless Stripe/PayPal checkout.',
    growthMetric: '+210% Checkout Conversions',
    keyFeatures: ['Instant Product Search', 'One-Click Checkout', 'Cart Recovery', 'Coupon Engine'],
    recommendedPages: ['Shop All Catalog', 'Product Details', 'Cart & Express Checkout', 'Track Order'],
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'smallbiz',
    name: 'Small Businesses',
    icon: 'Briefcase',
    tagline: 'Establish instant authority, rank on Google, and get daily inquiries.',
    growthMetric: '99/100 Speed Benchmark',
    keyFeatures: ['Local SEO Setup', 'Quote Request Forms', 'Customer Reviews', 'Sub-Second Loading'],
    recommendedPages: ['Home', 'Services Overview', 'About Us', 'Contact & Quote'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotels',
    name: 'Hotels & Resorts',
    icon: 'Hotel',
    tagline: 'Direct room booking engine saving tens of thousands in OTA fees.',
    growthMetric: '$85,000/yr OTA Fees Saved',
    keyFeatures: ['Direct Room Booking', 'Seasonal Rate Engine', 'Amenity Showcase', 'Currency Converter'],
    recommendedPages: ['Rooms & Suites', 'Direct Booking', 'Resort Amenities', 'Location Guide'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'schools',
    name: 'Schools & Academies',
    icon: 'GraduationCap',
    tagline: 'Online admissions, parent news feeds, and academic course catalogs.',
    growthMetric: '-90% Paper Admissions',
    keyFeatures: ['Digital Application Form', 'Academic Calendar', 'Virtual Campus Tour', 'Parent Portal'],
    recommendedPages: ['Admissions', 'Academic Programs', 'School Calendar', 'Virtual Tour'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'agencies',
    name: 'Digital Agencies',
    icon: 'Megaphone',
    tagline: 'Awwwards-caliber web design that impresses corporate clients.',
    growthMetric: '+340% Enterprise Deals',
    keyFeatures: ['Interactive ROI Calculator', 'Case Study Deep-Dives', '3D Interactive Graphics', 'Audit Request Widget'],
    recommendedPages: ['Client Case Studies', 'Services & Tech', 'Audit Request', 'Contact Agency'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
  }
];
