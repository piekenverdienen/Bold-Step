import { Language } from '../../constants';

export interface ArchetypeTimeline {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  tips: string[];
  shoeRecommendation?: {
    product: string;
    reason: string;
    link: string;
  };
}

export interface CostItem {
  category: string;
  label: string;
  lowEstimate: number;
  highEstimate: number;
  perPerson?: boolean;
  note?: string;
}

export interface VenueRecommendation {
  name: string;
  location: string;
  description: string;
  priceRange: string;
}

export interface ArchetypeContent {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    headline: string;
    subline: string;
  };
  identity: {
    title: string;
    description: string;
    traits: string[];
  };
  timeline: ArchetypeTimeline[];
  costBreakdown: CostItem[];
  defaultGuestCount: number;
  totalBudgetRange: { low: number; high: number };
  styleGuide: {
    suit: { recommendation: string; details: string };
    shoes: { recommendation: string; details: string; products: string[] };
    accessories: { recommendation: string; details: string };
  };
  venues: VenueRecommendation[];
  practicalTips: { title: string; content: string }[];
  cta: {
    headline: string;
    subline: string;
    buttonText: string;
    buttonLink: string;
  };
}

export type ArchetypeData = Record<Language, ArchetypeContent>;
