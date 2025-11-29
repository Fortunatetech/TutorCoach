// ============================================
// CORE SERVICE TYPES
// ============================================

export type AudienceType = 'kids' | 'students' | 'professionals';

export type AudienceContent = {
  key: AudienceType;
  label: string;
  headline: string;
  description: string;
  focusPoints: string[];
  outcomes: string[];
  whySuitable: string[];
  testimonial?: {
    name: string;
    text: string;
    result: string;
  };
};

export type SessionPack = {
  id: string;
  name: string;
  sessions: number;
  description: string;
  price: number;
  originalPrice: number;
  savings: number;
  popular?: boolean;
};

export type LessonPlan = {
  duration: string;
  activity: string;
};

export interface Service {
  // Basic Info
  id: string;
  title: string;
  category: string;
  subservices: string[];
  desc: string;
  shortDesc: string;
  detailedDesc: string;
  icon: string;
  
  // Pricing
  priceOriginal: string;
  price: string;
  popular?: boolean;
  
  // New: Session Structure
  whatWeCover?: string[];
  lessonPlan?: LessonPlan[];
  whatYouGet?: string[];
  
  // New: Audience-Specific Content
  audienceContent?: AudienceContent[];
  
  // New: Pricing Packages
  sessionPacks?: SessionPack[];
  
  // Existing: Service Details
  features: string[];
  outcomes: string[];
  whoIsItFor: string[];
  
  // Process & Support
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  
  faqs: {
    q: string;
    a: string;
  }[];
  
  testimonial?: {
    text: string;
    author: string;
    service: string;
  };
}

// ============================================
// TESTIMONIAL TYPES
// ============================================

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  location?: string;
  text: string;
  rating: number;
  avatar: string;
  metrics?: string[];
  verified?: boolean;
}

// ============================================
// BLOG TYPES
// ============================================

export interface BlogPost {
  slug: string;
  title: string;
  hook: string;
  readTime: number;
  date: string;
  author: string;
  category: string;
  image?: string;
  content: string;
}

// ============================================
// FORM TYPES
// ============================================

export interface BookingFormData {
  name: string;
  email: string;
  service: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}