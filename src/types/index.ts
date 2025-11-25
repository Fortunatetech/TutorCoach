export interface Service {
  id: string;
  title: string;
  category: string;
  subservices: string[];
  desc: string;
  shortDesc: string;
  icon: string;
  priceOriginal: string;
  price: string;
  popular?: boolean;
  detailedDesc: string;
  features: string[];
  outcomes: string[];
  whoIsItFor: string[];
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
    role: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location?: string;
  text: string;
  rating: number;
  avatar: string;
  metrics?: string[];
  verified?: boolean;
}

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
