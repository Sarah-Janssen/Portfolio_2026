export type ProjectAudience = "employer" | "freelance" | "both"

export type ProjectType =
  | "case-study"
  | "product"
  | "concept"
  | "client-work"
  | "ai-experiment"

export type ProjectCategory = 
  | "Analyse & Structuur"
  | "Software & Applicaties"
  | "AI & Automatisatie"
  | "Leertraject"

export interface ProjectImage {
  url: string
  caption: string
  type: 'screenshot' | 'wireframe' | 'diagram' | 'mock-up' | 'photo'
}

export interface StorySection {
  title: string
  content: string
}

export interface CustomDetailSection {
  title: string
  items: string[]
}

export interface Project {
  slug: string
  title: string
  shortDescription: string
  category: ProjectCategory // V2: Verplicht veld
  challenge: string         // V2: Focus op probleem
  approach: string          // V2: Focus op werkwijze
  solution: string          // V2: Focus op resultaat (vervangt 'result')
  storySections?: StorySection[] // V2.3: Custom storytelling sections
  learnings: string         // V2: Focus op groei
  role: string[]
  skills: string[]
  stack: string[]
  footerTitle?: string      // V2.3: Custom titel voor de onderste sectie
  customDetails?: CustomDetailSection[] // V2.3: Custom datakolommen
  featured: boolean
  images?: ProjectImage[]   // V2: Visuals
  highlights?: string[]     // V2: Wat dit project toont
  audience?: ProjectAudience
  type?: ProjectType
  themes?: string[]
}
