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

export type ProjectFilterCategory = "Project" | "Leerervaring" | "Meetup"

export interface ProjectImage {
  url: string
  caption: string
  type: 'screenshot' | 'wireframe' | 'diagram' | 'mock-up' | 'photo' | 'video'
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
  category: ProjectCategory
  filterCategory: ProjectFilterCategory // V2.4: Verplicht voor filtering
  challenge?: string         // Optioneel als storySections gebruikt worden
  approach?: string          // Optioneel als storySections gebruikt worden
  solution?: string          // Optioneel als storySections gebruikt worden
  storySections?: StorySection[] 
  learnings: string         
  role: string[]
  skills: string[]
  stack: string[]
  footerTitle?: string      
  customDetails?: CustomDetailSection[] 
  featured: boolean
  images?: ProjectImage[]   
  highlights?: string[]     
  audience?: ProjectAudience
  type?: ProjectType
  themes?: string[]
}
