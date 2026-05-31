# Sprint Planning: Portfolio Sarah Janssen V1
**Project:** Portfolio Local-First (BlueprintV1)
**Fleet Orchestrator:** VorstersNV Architect Agent
**Datum:** 31 mei 2026

---

## 1. Doel van de Sprint
Het opleveren van een volledig functionele, lokaal draaiende portfolio website die Sarah Janssen positioneert als **Functional Analyst / Application Specialist** met een sterke focus op structuur en AI.

## 2. Sprint Backlog (Gegroepeerd per Dag/Fase)

### Dag 1: Foundation & Infrastructure (GEREALISEERD)
*   [x] Initialisatie Vite + React + TypeScript.
*   [x] Tailwind CSS configuratie (Analytisch kleurenpalet).
*   [x] DDD-mappenstructuur (`src/components`, `src/data`, `src/types`).
*   [x] SEO Setup (`react-helmet-async`).
*   [x] Basis Layout (Header, Footer, PageContainer).
*   [x] Home & NotFound pagina placeholders.

### Dag 2: Design Foundation & UI Kit
*   [ ] Bouwen van Atomic Components:
    *   `Tag.tsx`: Voor skills en thema's (Sage/Tan varianten).
    *   `Button.tsx`: Primaire en secundaire acties.
    *   `HighlightSection.tsx`: Voor AI-focus blokken.
    *   `SectionHeading.tsx`: Consistente typografie voor secties.
*   [ ] Implementatie van de `ProjectCard.tsx` in de Portfolio Context.

### Dag 3: Content Implementation
*   [ ] **Over mij:** Volledige uitwerking van Sarah's professionele verhaal.
*   [ ] **Projectenoverzicht:** Mapping van `projects.ts` naar de UI.
*   [ ] **CV Pagina:** Interactieve versie van de CV met download-link.
*   [ ] **Contact Pagina:** Social links en e-mail integratie.

### Dag 4: Feature Deep-Dive: Unclutter Mind
*   [ ] Ontwikkeling van `ProjectDetail.tsx`.
*   [ ] Content-mapping voor Unclutter Mind (Probleem -> Rol -> AI-aanpak).
*   [ ] Visuele weergave van "Privacy-first" en "Local AI" aspecten.

### Dag 5: Quality Gate & Deployment Prep
*   [ ] Lighthouse Audit & Performance optimalisatie.
*   [ ] Responsive Design check (Mobile/Tablet/Desktop).
*   [ ] Tone-of-voice review (check op "Junior" vs "Analyst").
*   [ ] Final Local Build & README documentatie.

---

## 3. Architecturale Richtlijnen (VorstersNV Standards)
1.  **Strict Typing:** Geen `any`. Gebruik de interfaces in `src/types/`.
2.  **KISS:** Geen overbodige animaties of zware bibliotheken.
3.  **SEO-First:** Elke pagina *moet* een unieke `<Seo />` component hebben.
4.  **Local-Only:** Geen API calls naar externe services in V1.

---

## 4. Definitie van Done (DoD)
*   Code is type-safe en lint-vrij.
*   Lighthouse score > 90 op Performance en Accessibility.
*   Website werkt foutloos in de lokale browser (`npm run dev`).
*   Alle onbekende routes leiden naar de `NotFound` pagina.
