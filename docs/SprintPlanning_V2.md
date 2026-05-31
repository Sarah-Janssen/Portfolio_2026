# Sprint Planning: Portfolio V2 - Sarah Janssen
**Project:** Person-Centric Portfolio Evolution
**Fleet Orchestrator:** VorstersNV Architect Agent
**Datum:** 31 mei 2026

---

## 1. Doel van de Sprint
Het transformeren van de portfolio van een functietitel-gecentreerde site naar een persoon-gecentreerde site die Sarah's manier van denken, leren en bouwen centraal stelt.

## 2. Sprint Backlog

### Sprint 1: De Fundering & Data (HUIDIG)
*   [x] Architecturaal plan opstellen (Blueprint V2).
*   [ ] Refactor `Project` types (toevoegen category, images, challenge, approach, learnings).
*   [ ] Migratie van bestaande projectdata naar V2-structuur.
*   [ ] Hero sectie redesign: Focus op "Nieuwsgierig, Analytisch, Praktisch".
*   [ ] `ProcessFlow` component: Visualisatie van Sarah's 5-staps aanpak.

### Sprint 2: Visual Storytelling & Detail
*   [ ] `ImageCarousel` component: Swipeable galerij voor projecten.
*   [ ] `ProjectDetail` template update: Structuur Uitdaging -> Aanpak -> Oplossing -> Resultaat -> Leertraject.
*   [ ] Toevoegen van visuele assets (screenshots, diagrammen) placeholders.

### Sprint 3: Het Persoonlijke Verhaal & AI
*   [ ] `About` pagina uitbreiding: Chronologische tijdlijn (Grafisch -> Retail -> Medisch -> IT).
*   [ ] "AI & Mijn Werkwijze" sectie: Uitleg over AI als leer- en productiviteitspartner.
*   [ ] Finale UX Review (KISS-principe check).

---

## 3. Architecturale Beslissingen (ADR V2)
*   **Data Model:** We stappen af van platte tekst naar gestructureerde blokken (`challenge`, `approach`, etc.) om storytelling te forceren.
*   **Visuals First:** Elk project *moet* een `images` array hebben. In V1 was dit optioneel/tekstueel.
*   **Personal Branding:** De homepagina wordt een "visitekaartje van het brein", niet een lijst van jobs.

---

## 4. Definitie van Done (V2)
*   Alle pagina's volgen de "Person-centric" visie van Blueprint V2.
*   Geautomatiseerde tests (Vitest) valideren de nieuwe data-velden.
*   Lighthouse score blijft > 90.
*   De site voelt "tijdloos" en niet gebonden aan één specifieke rol.
