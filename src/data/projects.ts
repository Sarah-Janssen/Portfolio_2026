import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    slug: "unclutter-mind",
    title: "Unclutter Mind",
    shortDescription:
      "Privacy-first MVP die ongestructureerde gedachten omzet naar rustige categorieën met lokale AI-ondersteuning.",
    category: "AI & Automatisatie",
    challenge:
      "Mensen ervaren vaak mentale ruis doordat taken, zorgen, vragen en ideeën door elkaar lopen. Wanneer alles door elkaar loopt, wordt het moeilijk om te bepalen wat belangrijk is.",
    approach:
      "Een hybride sorteerlogica waarbij rule-first analyse wordt gecombineerd met lokale AI (Ollama). De focus lag op een 'Privacy-first' en 'Local-only' architectuur zonder cloud-sync.",
    solution:
      "Een functionele MVP die vrije input omzet naar zeven heldere categorieën, waardoor de gebruiker direct meer overzicht en rust ervaart.",
    learnings:
      "Dit project leerde me hoe ik abstracte privacy-eisen kan vertalen naar een concrete technische architectuur en hoe AI een 'human-in-the-loop' proces kan ondersteunen zonder de controle over te nemen.",
    role: [
      "Conceptontwikkeling",
      "Functionele analyse",
      "Scope-afbakening",
      "MVP-flow",
      "Privacy-first uitgangspunten",
      "AI-ondersteunde categorisatielogica",
      "Gebruikerservaring"
    ],
    skills: [
      "Functional analysis",
      "Information structuring",
      "AI-assisted classification",
      "MVP scoping",
      "User flow design",
      "Documentation",
      "Functional validation"
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Dexie.js",
      "IndexedDB",
      "Ollama",
      "Docker",
      "Nginx",
      "Vitest",
      "Playwright"
    ],
    highlights: [
      "Abstracte problemen vertalen naar een concrete oplossing.",
      "Bewaken van scope en eenvoud binnen een MVP.",
      "Kritisch denken over privacy, UX en AI.",
      "Combineren van analyse, structuur en technologie."
    ],
    featured: true,
    audience: "both",
    type: "ai-experiment",
    themes: [
      "Local AI",
      "Privacy-first AI",
      "Information structuring",
      "Functional analysis",
      "Human-in-the-loop"
    ],
    images: [
      {
        url: "/images/projects/unclutter-mind/screenshot-1.png",
        caption: "Dashboard overzicht van Unclutter Mind.",
        type: "screenshot"
      },
      {
        url: "/images/projects/unclutter-mind/screenshot-2.png",
        caption: "Invoer van ongestructureerde gedachten.",
        type: "screenshot"
      },
      {
        url: "/images/projects/unclutter-mind/screenshot-3.png",
        caption: "Gecategoriseerde resultaten weergave.",
        type: "screenshot"
      },
      {
        url: "/images/projects/unclutter-mind/screenshot-4.png",
        caption: "Details van een specifieke categorie.",
        type: "screenshot"
      },
      {
        url: "/images/projects/unclutter-mind/screenshot-5.png",
        caption: "Instellingen en privacy configuratie.",
        type: "screenshot"
      },
      {
        url: "/images/projects/unclutter-mind/screenshot-6.png",
        caption: "Mobiele weergave van de applicatie.",
        type: "screenshot"
      },
      {
        url: "/images/projects/unclutter-mind/screenshot-7.png",
        caption: "Technische flow en categorisatielogica.",
        type: "diagram"
      }
    ]
  },
  {
    slug: "waterdata-platform",
    title: "Water Data Platform",
    shortDescription: "Ontwikkeling van een dashboard voor het visualiseren van waterkwaliteit en verbruik in Portugal.",
    category: "Software & Applicaties",
    challenge: "Complexe data van verschillende sensoren begrijpelijk maken voor eindgebruikers.",
    approach: "Gebruik van Django en PostgreSQL voor de backend, en Grafana voor de visualisatielaag.",
    solution: "Een gecentraliseerd platform waar data in real-time wordt getoond via overzichtelijke dashboards.",
    learnings: "Ervaring met internationale samenwerking en het werken met real-time data sensoren.",
    role: ["Full-stack development", "Data visualisatie"],
    skills: ["Python", "SQL", "Docker"],
    stack: ["Django", "PostgreSQL", "Grafana", "Docker"],
    highlights: [
      "Real-time data visualisatie van complexe sensoren.",
      "Gebruikersvriendelijke dashboards voor technische data.",
      "Schaalbare architectuur voor groeiende datasets.",
      "Internationale samenwerking en afstemming."
    ],
    featured: true,
    type: "case-study",
    themes: ["Data Visualisation", "Real-time Data"]
  }
]
