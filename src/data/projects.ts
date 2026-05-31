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
    shortDescription: "Tijdens mijn Erasmusstage in Beja (Portugal) werkte ik mee aan de ontwikkeling van een watermonitoringplatform.",
    category: "Software & Applicaties",
    challenge: "De organisatie beschikte over verschillende watergerelateerde gegevens, maar had nood aan een centrale oplossing om deze informatie overzichtelijk te raadplegen en te analyseren. De uitdaging lag in het vertalen van gebruikersbehoeften naar een bruikbare toepassing.",
    approach: "Ik startte met het analyseren van bestaande processen en gebruikersfeedback. Op basis daarvan werkte ik functionele flows uit en vertaalde ik de informatie naar een gestructureerd datamodel en een gebruiksvriendelijke applicatie met een iteratief ontwikkelproces.",
    solution: "Het resultaat was een webplatform waarmee watergegevens konden worden opgehaald, verwerkt en gevisualiseerd via interactieve dashboards, waardoor gebruikers sneller inzicht kregen.",
    learnings: "Deze stage leerde me hoe belangrijk communicatie met gebruikers is, hoe analyse en ontwikkeling elkaar versterken en gaf me het vertrouwen om in een internationale omgeving multidisciplinaire uitdagingen aan te gaan.",
    role: [
      "Analyse van gebruikersbehoeften",
      "Functionele uitwerking",
      "Datamodellering",
      "Dashboardontwerp",
      "Documentatie",
      "Validatie met stakeholders"
    ],
    skills: [
      "Requirementsanalyse",
      "Probleemanalyse",
      "Informatie structureren",
      "Datavisualisatie",
      "Stakeholdercommunicatie",
      "Iteratief werken"
    ],
    stack: [
      "Django",
      "PostgreSQL",
      "Docker",
      "Grafana",
      "Python"
    ],
    highlights: [
      "Vertalen van gebruikersnoden naar digitale oplossingen.",
      "Functionele analyse combineren met technische realisatie.",
      "Structuur brengen in complexe informatie.",
      "Werken in een internationale en multidisciplinaire omgeving.",
      "Iteratief verbeteren op basis van feedback."
    ],
    featured: true,
    type: "case-study",
    themes: [
      "Erasmusstage",
      "Portugal",
      "Datavisualisatie",
      "International Collaboration"
    ],
    images: [], // Placeholders for future screenshots
    audience: "both"
  }
]
