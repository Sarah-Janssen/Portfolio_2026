import { describe, it, expect } from 'vitest';
import { projects } from './projects';

describe('Projects Data Integrity', () => {
  it('should have a valid slug for every project', () => {
    projects.forEach(project => {
      expect(project.slug).toBeDefined();
      expect(project.slug.length).toBeGreaterThan(0);
      // Slug should be URL-friendly
      expect(project.slug).toMatch(/^[a-z0-9-]+$/);
    });
  });

  it('should have all required fields for every project', () => {
    projects.forEach(project => {
      expect(project.title).toBeDefined();
      expect(project.shortDescription).toBeDefined();
      expect(project.challenge).toBeDefined();
      expect(project.solution).toBeDefined();
      expect(Array.isArray(project.role)).toBe(true);
      expect(Array.isArray(project.skills)).toBe(true);
      expect(Array.isArray(project.stack)).toBe(true);
    });
  });

  it('should have unique slugs', () => {
    const slugs = projects.map(p => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(slugs.length).toBe(uniqueSlugs.size);
  });
});
