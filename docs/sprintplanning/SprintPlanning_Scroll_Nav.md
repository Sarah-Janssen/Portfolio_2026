# Sprint Planning: UX Refinement - Navigation & Scroll
**Project:** Portfolio Sarah Janssen V4.0
**Fleet Orchestrator:** VorstersNV Fleet
**Datum:** 31 mei 2026

---

## 1. Doel van de Sprint
Het optimaliseren van de navigatie-ervaring door het garanderen van een 'Scroll-to-Top' gedrag bij paginawissels en het verbeteren van de flow op projectdetailpagina's met een 'back to overview' actie onderaan.

## 2. Sprint Backlog

### Sprint 1: Scroll Management (HUIDIG)
*   [ ] Ontwikkeling van de `ScrollToTop.tsx` utility component.
*   [ ] Integratie van `ScrollToTop` in de root van de applicatie (`App.tsx`).
*   [ ] Validatie van het gedrag bij navigatie tussen Home, Projecten en Details.

### Sprint 2: Navigation UX
*   [ ] Toevoegen van een 'Terug naar overzicht' link/knop onderaan de `ProjectDetail.tsx` pagina.
*   [ ] Styling van de footer-navigatie conform het minimalistische design.
*   [ ] Finale push naar GitHub.

---

## 3. Architecturale Richtlijnen
1.  **UX Flow:** Een bezoeker mag nooit op een 'dead-end' uitkomen; elke pagina moet een logische volgende stap of terugweg hebben.
2.  **State Management:** Gebruik de `useLocation` hook van React Router voor de scroll-reset logica.
