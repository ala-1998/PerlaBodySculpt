export type Language = 'en' | 'fr' | 'ar';

export type ProcedureCategory = 
  | 'all' 
  | 'face' 
  | 'breast' 
  | 'silhouette' 
  | 'body' 
  | 'buttocks' 
  | 'obesity' 
  | 'dental' 
  | 'intimate' 
  | 'hair';

export interface InterventionCategory {
  id: string;
  categoryKey: ProcedureCategory;
  title: string;
  image: string;
  badgeNumber: string;
  interventions: string[];
  description: string;
  popular?: boolean;
}

export interface Procedure {
  id: string;
  category: ProcedureCategory;
  titleKey: string;
  descKey: string;
  duration: string;
  anesthesia: string;
  hospitalStay: string;
  recovery: string;
  image: string;
  popular?: boolean;
  indication?: string;
}

export interface BeforeAfterItem {
  id: string;
  category: ProcedureCategory;
  title: string;
  titleKey: string;
  procedure: string;
  badge: string;
  description: string;
  descKey: string;
  beforeImg: string;
  afterImg: string;
  fullCompositeImg?: string; // Image unique complète (Avant & Après dans la même photo)
  timeframe: string;
  surgeon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  procedure: string;
  rating: number;
  commentKey: string;
  date: string;
}

export interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  procedure: string;
  consultationType: 'clinic' | 'virtual';
  preferredDate: string;
  preferredTime: string;
  message: string;
}
