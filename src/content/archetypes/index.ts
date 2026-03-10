import { Language } from '../../constants';
import { ArchetypeContent } from './types';
import { schlossArchetype } from './schloss';
import { auslandArchetype } from './ausland';
import { klassischArchetype } from './klassisch';

export type { ArchetypeContent, ArchetypeTimeline, CostItem, VenueRecommendation } from './types';

export const ARCHETYPES: Record<string, Record<Language, ArchetypeContent>> = {
  'schloss-braeutigam': schlossArchetype,
  'auslands-braeutigam': auslandArchetype,
  'klassischer-braeutigam': klassischArchetype,
};

export const ARCHETYPE_SLUGS = Object.keys(ARCHETYPES);

export function getArchetype(slug: string, lang: Language): ArchetypeContent | undefined {
  return ARCHETYPES[slug]?.[lang];
}

export function getAllArchetypes(lang: Language): ArchetypeContent[] {
  return ARCHETYPE_SLUGS.map(slug => ARCHETYPES[slug][lang]);
}
