export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  deliverables: string[];
  startingPrice: number;
  timeline: string;
  popularFor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Restaurant' | 'Salon' | 'Gym' | 'Doctor' | 'Real Estate' | 'Travel' | 'School' | 'Construction' | 'Digital Marketing' | 'Fashion' | 'Hotel' | 'Coffee Shop';
  clientName: string;
  location: string;
  image: string;
  previewUrl: string;
  summary: string;
  challenge: string;
  solution: string;
  techStack: string[];
  results: {
    label: string;
    value: string;
    change: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  features: string[];
  year: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  avatar: string;
  rating: number;
  content: string;
  metric: string;
  metricLabel: string;
  projectCategory: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  priceOneTime: number;
  priceMonthly: number;
  popular?: boolean;
  features: { text: string; included: boolean; detail?: string }[];
  ctaText: string;
  idealFor: string;
  turnaroundTime: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  content: string;
}

export interface IndustrySpec {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  keyFeatures: string[];
  growthMetric: string;
  recommendedPages: string[];
  image: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  businessType: string;
  estimatedBudget: string;
  targetTimeline: string;
  servicesNeeded: string[];
  projectOverview: string;
}
