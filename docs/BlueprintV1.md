# Masterplan Portfolio Sarah Janssen

## Local-first portfolio met AI-focus, analytische positionering en toekomstige freelance-uitbreidbaarheid

---

# 1. Doel van het project

Het doel is om een volledig nieuwe portfolio website lokaal uit te bouwen voor Sarah Janssen. De bestaande website `www.sarah-janssen.be` wordt voorlopig niet vervangen en hosting is geen onderdeel van deze fase.

De focus van deze versie ligt op:

* inhoudelijke scherpstelling
* lokale ontwikkeling
* sterke projectcases
* professionele positionering
* AI als onderscheidende interesse
* technisch correcte frontend
* heldere informatiearchitectuur
* uitbreidbare structuur voor latere freelance of zelfstandige diensten
* herbruikbare documentatie voor latere publicatie

De website moet Sarah positioneren als:

> Functional Analyst / Application Specialist met sterke administratieve nauwkeurigheid, analytisch denkvermogen, technische basiskennis en een duidelijke interesse in praktische AI-toepassingen.

De portfolio moet niet overkomen als een klassieke frontend-developer portfolio, maar als een professioneel bewijsstuk van hoe Sarah denkt, analyseert, structureert, documenteert en digitale oplossingen begrijpt.

De portfolio moet ook aantonen dat Sarah AI niet ziet als buzzword, maar als praktisch hulpmiddel om informatie, processen, ideeën en workflows sneller en duidelijker te structureren.

---

# 2. Strategische positionering

## 2.1 Gewenst professioneel profiel

De portfolio richt zich op functies zoals:

* Functional Analyst
* Application Specialist
* Business / Functional Support Analyst
* Process Analyst
* Digital Operations Support
* IT Support met analytische focus
* Administratief-technische rollen
* Testing / Functional Validation support
* Product / Application documentation roles
* AI-oriented support of analysis and documentation workflows

## 2.2 Waarom “junior” niet als hoofdtitel gebruiken

De term “junior” hoeft niet als primaire positionering gebruikt te worden.

De portfolio gebruikt daarom:

> Functional Analyst / Application Specialist

Niet:

> Junior Functional Analyst / Application Specialist

Motivatie:

* De ervaring, opleiding en projecten tonen vanzelf waar Sarah zich in haar loopbaan bevindt.
* De portfolio moet Sarahs waarde tonen, niet haar niveau verkleinen.
* De inhoud blijft eerlijk en realistisch.
* Er worden geen senior claims gemaakt.
* De focus ligt op concrete vaardigheden, projectaanpak en groeirichting.

## 2.3 Kernboodschap

De centrale boodschap van de portfolio:

> Ik breng structuur in digitale processen, gebruikersnoden en functionele documentatie, met een sterke interesse in hoe AI ideeën, workflows en digitale oplossingen kan versterken.

## 2.4 Rode draad

De rode draad doorheen de website:

> Structuur brengen in informatie, processen en digitale ideeën — met AI als slimme versterker.

Deze rode draad werkt voor drie richtingen:

1. Sollicitaties
   Sarah toont dat ze analytisch, gestructureerd en technisch onderbouwd werkt.

2. Freelance of zelfstandige opdrachten
   Sarah toont dat ze digitale ideeën kan helpen structureren en vertalen naar concrete plannen, flows of eenvoudige oplossingen.

3. AI-gerichte projecten
   Sarah toont dat ze experimenteert met AI, lokale AI, AI-workflows, contentgeneratie, classificatie, automatisering en digitale productconcepten.

---

# 3. Scope van de lokale versie

## 3.1 In scope voor V1 Local

De eerste lokale versie bevat:

1. Homepagina
2. Over mij
3. Projectenoverzicht
4. Projectdetailpagina: Unclutter Mind
5. CV / ervaring
6. Contactpagina
7. Downloadbare of lokaal bekijkbare CV
8. Lokale development setup
9. Responsive design voor desktop, tablet en mobiel
10. SEO-structuur in de code, voorbereid op latere publicatie
11. 404 / NotFound-pagina
12. Fallback route voor onbekende URL’s
13. Lokale assetstructuur voor afbeeldingen, screenshots en documenten
14. Lokaal testbare build
15. Consolevrij resultaat zonder warnings of errors
16. AI als zichtbare rode draad op Home, Over mij en projectcases
17. Toekomstbestendig datamodel voor projecten, freelance cases en AI-experimenten
18. Visuele tags voor projecttype, doelgroep en thema’s

## 3.2 Out of scope voor V1 Local

Niet opnemen in deze fase:

* hosting
* domeinkoppeling
* live publicatie
* analytics
* CMS
* backend
* database
* blogfunctionaliteit
* contactformulier met externe verwerking
* API-calls voor portfolio-content
* fake API-laag
* meertaligheid
* donkere modus
* complexe animaties
* automatische GitHub project imports
* filter- of zoekfunctionaliteit op de projectenpagina
* `/ai-lab` route
* aparte AI Lab-pagina
* `/services` route
* commerciële dienstenpagina
* zelfstandige/freelance verkoopflow

## 3.3 Belangrijke afbakening AI Lab

De datastructuur ondersteunt in V1 al het projecttype:

```ts
"ai-experiment"
```

Maar:

* er wordt nog geen aparte `/ai-lab` route gebouwd
* er wordt nog geen `AILab.tsx` pagina gemaakt
* AI-experimenten worden in V1 gewoon getoond op de algemene `/projects` pagina
* AI Lab blijft een toekomstige uitbreiding

## 3.4 Latere fase: publicatie

Hosting en domeinkoppeling worden pas over enkele maanden bekeken.

Latere opties:

* Vercel
* Netlify
* GitHub Pages
* custom domain via `www.sarah-janssen.be`

Voor V1 wordt niets live gezet.

---

# 4. Aanbevolen technische stack

## 4.1 Frontend

Aanbevolen stack:

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* react-helmet-async
* TypeScript datafiles voor content
* Vitest
* Playwright

## 4.2 Motivatie

React en TypeScript sluiten aan bij Sarahs technische basis en maken het mogelijk om componentgericht te werken.

Vite houdt het project licht, snel en geschikt voor lokale ontwikkeling.

Tailwind CSS maakt consistente styling mogelijk zonder zwaar design framework.

React Router zorgt voor duidelijke pagina’s en routes.

`react-helmet-async` wordt gebruikt om page titles en meta descriptions per route correct te beheren, ook al is de applicatie technisch een Single Page Application.

Projectdata wordt lokaal geïmporteerd uit datafiles. Er worden geen API-calls gesimuleerd in V1.

## 4.3 SEO in SPA

Omdat de portfolio gebouwd wordt als Single Page Application, moeten page titles en meta descriptions expliciet beheerd worden per route.

Daarom wordt `react-helmet-async` toegevoegd.

Deze library wordt gebruikt voor:

* unieke page titles
* unieke meta descriptions
* Open Graph metadata
* latere SEO-voorbereiding voor publicatie

Voorbeeld:

```tsx
<Seo
  title="Sarah Janssen | Functional Analyst"
  description="Portfolio van Sarah Janssen, Functional Analyst / Application Specialist met interesse in praktische AI-toepassingen."
/>
```

## 4.4 Lokale ontwikkelomgeving

De applicatie moet volledig lokaal kunnen draaien met:

```bash
npm install
npm run dev
```

De lokale development server draait standaard via Vite.

Voor buildcontrole:

```bash
npm run build
```

Voor linting en typecontrole, indien voorzien:

```bash
npm run lint
npm run typecheck
```

Voor tests:

```bash
npm run test
npm run test:e2e
```

---

# 5. Informatiearchitectuur

## 5.1 Navigatie V1

De hoofdnav bestaat uit:

* Home
* Over mij
* Projecten
* CV
* Contact

## 5.2 Sitemap V1 Local

```text
/
├── /about
├── /projects
│   └── /projects/unclutter-mind
├── /cv
├── /contact
└── /404
```

Daarnaast moet elke onbekende route opgevangen worden door een NotFound-pagina.

Voorbeelden:

```text
/project/bestaat-niet
/random-url
/old-page
```

Deze routes mogen geen lege pagina tonen.

## 5.3 Voorbereide toekomstige sitemap

Deze routes worden nog niet gebouwd in V1, maar de structuur moet later kunnen uitbreiden naar:

```text
/
├── /about
├── /projects
│   ├── /projects/unclutter-mind
│   ├── /projects/waterdata-dashboard
│   └── /projects/artisanal-ai-campaigns
├── /ai-lab
├── /services
├── /services/functional-analysis
├── /services/digital-structure
├── /services/simple-websites
├── /services/ai-visual-content
├── /cv
├── /contact
└── /404
```

## 5.4 Navigatiestrategie

Voor V1 blijft de navigatie professioneel en niet te commercieel.

De termen “Services”, “Diensten” en “AI Lab” worden nog niet in de hoofdnav opgenomen.

Ze worden pas toegevoegd wanneer Sarah effectief freelance opdrachten, zelfstandige diensten of een aparte AI-experimentensectie wil tonen.

---

# 6. Designrichting

## 6.1 Visuele stijl

De stijl moet professioneel, rustig en helder zijn.

Kernwoorden:

* rustig
* analytisch
* betrouwbaar
* menselijk
* gestructureerd
* niet te speels
* niet te technisch
* niet te druk

## 6.2 Kleuren

Aanbevolen richting:

* basis: warm wit of zeer lichtgrijs
* tekst: donker antraciet
* accent: zachte groen- of salietint
* secundair accent: zand, beige of licht terracotta
* vermijd felle kleuren en drukke gradients

## 6.3 Typografie

Aanbevolen:

* sans-serif font
* grote duidelijke headings
* comfortabele line-height
* voldoende witruimte
* korte tekstblokken

## 6.4 UI-principes

* één duidelijke boodschap per sectie
* geen overbodige animaties
* duidelijke cards voor projecten
* rustige call-to-actions
* scanbare layout
* mobielvriendelijk
* toegankelijk contrast
* geen visuele ruis

---

# 7. Contentstrategie

## 7.1 Tone of voice

De schrijfstijl moet zijn:

* professioneel
* helder
* bescheiden maar zelfzeker
* concreet
* analytisch
* menselijk
* niet overdreven commercieel

## 7.2 Vermijden

Vermijd:

* “Ik ben een gepassioneerde developer”
* “Ik bouw alles van A tot Z”
* “Full-stack expert”
* “AI expert”
* “Senior AI Consultant”
* “Prompt Engineer” als hoofdtitel
* te veel technische buzzwords zonder context

## 7.3 Wel gebruiken

Gebruik liever:

* “Ik analyseer”
* “Ik structureer”
* “Ik vertaal”
* “Ik documenteer”
* “Ik valideer”
* “Ik onderzoek hoe AI kan ondersteunen”
* “Ik maak complexe informatie begrijpelijk”
* “Ik gebruik AI als hulpmiddel om ideeën en workflows scherper te krijgen”

## 7.4 AI-positionering

AI wordt gepositioneerd als praktisch hulpmiddel, niet als hype.

Gebruik zinnen zoals:

* “Ik onderzoek hoe AI kan helpen om informatie sneller te structureren.”
* “Ik gebruik AI als denkpartner voor analyse, documentatie en conceptontwikkeling.”
* “Ik ben geïnteresseerd in lokale AI, privacy-first toepassingen en AI-ondersteunde workflows.”
* “Mijn focus ligt op praktische AI-toepassingen die processen duidelijker, sneller of gebruiksvriendelijker maken.”
* “Ik combineer functioneel denken met AI-experimenten om ideeën concreter en testbaarder te maken.”

---

# 8. Pagina-inhoud

## 8.1 Homepagina

### Doel

De homepagina moet in enkele seconden duidelijk maken:

* wie Sarah is
* waar ze professioneel naartoe wil
* wat haar onderscheidt
* dat AI haar interessegebied is
* welke projecten haar manier van werken tonen

### Structuur

1. Hero-sectie
2. Korte positionering
3. Kernsterktes
4. AI als praktisch hulpmiddel
5. Uitgelicht project: Unclutter Mind
6. Link naar projecten
7. Link naar CV/contact

### Hero-copy

**Titel:**

> Functional Analyst / Application Specialist

**Subtitel:**

> Ik breng structuur in digitale processen, gebruikersnoden en functionele documentatie, met een sterke interesse in hoe AI ideeën, workflows en digitale oplossingen kan versterken.

**Korte intro:**

> Mijn sterkte ligt op het kruispunt van analyse, documentatie, testing, technische basiskennis en praktische AI-toepassingen. Ik breng structuur in complexe input en vertaal die naar duidelijke flows, open vragen en bruikbare oplossingen.

### Sectie: AI als praktisch hulpmiddel

**Titel:**

> AI als praktisch hulpmiddel

**Tekst:**

> Mijn interesse ligt sterk bij praktische AI-toepassingen: niet als doel op zich, maar als manier om ideeën sneller te structureren, workflows duidelijker te maken en digitale oplossingen slimmer voor te bereiden. In mijn projecten onderzoek ik hoe AI kan ondersteunen bij analyse, documentatie, classificatie, contentconcepten en privacy-first toepassingen.

### Call-to-actions

* Bekijk mijn projecten
* Bekijk mijn CV
* Neem contact op

---

## 8.2 Over mij

### Doel

Deze pagina moet Sarah menselijk en professioneel positioneren.

### Inhoud

De pagina vertelt:

* dat Sarah een achtergrond heeft in administratie, communicatie en nauwkeurig werken
* dat ze later de stap naar IT heeft gezet
* dat ze sterk is in structuur, analyse en documentatie
* dat ze technische kennis gebruikt om beter te communiceren met developers
* dat ze zich richt op functionele analyse en applicatiegerichte rollen
* dat AI haar interesseert als praktisch hulpmiddel voor structuur, analyse en digitale workflows

### Belangrijke invalshoek

Niet focussen op:

> Ik ben junior developer.

Wel focussen op:

> Ik begrijp zowel de gebruiker als de technische context voldoende om ertussen te vertalen.

### Sectie: Waarom AI mij interesseert

**Titel:**

> Waarom AI mij interesseert

**Tekst:**

> Wat mij aantrekt in AI is niet alleen de technologie zelf, maar vooral wat ze mogelijk maakt: sneller verbanden zien, losse informatie structureren, ideeën concreter maken en workflows slimmer ondersteunen. Ik zie AI als een hulpmiddel dat menselijke analyse kan versterken, zolang de scope, controle en verantwoordelijkheid duidelijk blijven.

---

## 8.3 Projectenoverzicht

### Doel

De projectenpagina moet niet zomaar een lijst van technische projecten zijn, maar een overzicht van cases die Sarahs competenties aantonen.

### Projectkaart structuur

Elke projectkaart bevat:

* projectnaam
* korte probleemstelling
* Sarahs rol
* gebruikte skills
* projecttype als visuele tag
* thema’s als visuele tags
* link naar detailpagina

### Eerste projecten

Voor V1 minimaal:

1. Unclutter Mind
2. WaterData Dashboard
3. PortugeseBakker
4. TravelBlog

### Projectcategorieën

Projecten kunnen labels krijgen zoals:

* Functional analysis
* Process structure
* Documentation
* User flow
* Testing
* Data visualisation
* Frontend
* Privacy-first AI
* Local AI
* AI-assisted classification
* Human-in-the-loop

### Scope tags en filters

Voor V1 is er geen klikbare filter- of zoekfunctionaliteit nodig op de projectenpagina.

De velden `type`, `audience` en `themes` worden enkel gebruikt als visuele badges of tags op de projectkaarten.

Voorbeeld:

```text
AI Experiment
Privacy-first AI
Functional Analysis
Human-in-the-loop
```

Deze tags zijn niet klikbaar in V1.

---

# 9. Projectcase: Unclutter Mind

## 9.1 Doel van de case

Unclutter Mind moet de belangrijkste portfolio-case worden. Niet omdat het de meest complexe technische applicatie is, maar omdat het perfect toont hoe Sarah denkt:

* probleem begrijpen
* scope afbakenen
* flow bepalen
* categorieën definiëren
* gebruikerservaring vereenvoudigen
* privacy en lokale verwerking meenemen
* AI praktisch en gecontroleerd inzetten
* analyse vertalen naar een MVP

## 9.2 Positionering van de case

Unclutter Mind wordt gepresenteerd als:

> Een privacy-first MVP die ongestructureerde gedachten omzet naar rustige, duidelijke categorieën met lokale AI-ondersteuning.

De nadruk ligt op functionele analyse, productdenken, privacy en AI als ondersteunende laag.

Niet op AI-hype.

## 9.3 Detailpagina structuur

De detailpagina bevat:

1. Intro
2. Probleem
3. Doel
4. Mijn rol
5. Scope-afbakening
6. Gebruikersflow
7. Functionele categorieën
8. Technische aanpak
9. AI-aanpak
10. Privacy-first keuzes
11. Resultaat
12. Wat dit project aantoont
13. Mogelijke volgende stappen

## 9.4 Unclutter Mind — content voor detailpagina

### Intro

Unclutter Mind is een privacy-first webapplicatie die ongestructureerde gedachten omzet naar rust en overzicht. De gebruiker kan vrij schrijven in een breindump, waarna de applicatie de input structureert in duidelijke categorieën.

Het doel is niet om advies te geven, taken te beheren of beslissingen te nemen. De applicatie helpt enkel om mentale chaos overzichtelijker te maken.

### Probleem

Veel mensen hebben momenten waarop verschillende gedachten tegelijk door hun hoofd lopen: taken, zorgen, vragen, ideeën en beslissingen. Wanneer alles door elkaar loopt, wordt het moeilijk om te bepalen wat belangrijk is, wat actie vraagt en wat gewoon even geparkeerd mag worden.

Unclutter Mind vertrekt vanuit dat probleem en biedt een eenvoudige digitale ontlader.

### Doel

Het doel van de MVP is:

> Een gebruiker na één vrije invoer meer overzicht geven dan voor het schrijven.

De applicatie moet vooral rust brengen, niet extra complexiteit toevoegen.

### Mijn rol

Sarah werkte voor dit project aan:

* conceptontwikkeling
* functionele analyse
* scope-afbakening
* MVP-flow
* categorie-indeling
* privacy-first uitgangspunten
* AI-ondersteunde categorisatielogica
* gebruikerservaring
* testbare projectstructuur

### Scope-afbakening

Bewust wel in scope:

* vrije breindump
* automatische categorisatie
* lokaal bewaren van sessies
* correcties door gebruiker
* rustige resultatenweergave
* eenvoudige geschiedenis
* lokale AI-ondersteuning
* rule-first analyse

Bewust niet in scope:

* advies geven
* beslissingen nemen voor de gebruiker
* volwaardig taakbeheer
* cloudopslag
* account of login
* externe AI-verwerking
* medische of therapeutische claims
* complexe productiviteitssuite

### Gebruikersflow

De MVP bestaat uit drie kernonderdelen:

1. Ontlader
   De gebruiker schrijft vrij zonder verplichte velden of vooraf gekozen categorieën.

2. Resultaat
   De applicatie toont de input gestructureerd in vaste categorieën.

3. Geschiedenis
   Eerdere sessies worden lokaal bewaard zodat de gebruiker kan terugkijken.

### Functionele categorieën

De gedachten worden verdeeld over:

* Taken
* Beslissingen
* Open vragen
* Reflecties
* Ideeën
* Zorgen
* Parkeerzone

### Technische aanpak

De applicatie gebruikt een hybride sorteerlogica:

1. Rule-first analyse
   Duidelijke patronen zoals vragen, acties of boodschappen worden lokaal herkend.

2. Lokale AI-ondersteuning
   Ollama helpt complexere zinnen interpreteren zonder externe AI-diensten.

3. Gecontroleerde classificatie
   De AI ondersteunt, maar de applicatielogica bepaalt de uiteindelijke categorie.

4. Lokale leercorrecties
   Gebruikers kunnen categorieën aanpassen. Deze correcties worden lokaal opgeslagen.

### AI-aanpak

AI wordt in Unclutter Mind niet gebruikt om beslissingen over te nemen, maar om ongestructureerde input beter te helpen interpreteren.

De AI-laag:

* ondersteunt interpretatie
* helpt bij complexere zinnen
* blijft onder controle van de applicatielogica
* werkt lokaal via Ollama
* krijgt geen externe cloudverwerking
* wordt aangevuld met rule-first logica
* wordt corrigeerbaar gemaakt door de gebruiker

Belangrijke boodschap:

> AI neemt de controle niet over, maar ondersteunt het structureren van complexe input.

### Privacy-first keuzes

De applicatie is ontworpen rond lokale verwerking:

* geen cloudopslag
* geen externe AI-diensten
* geen account nodig
* geen tracking van persoonlijke inhoud
* data blijft op het toestel van de gebruiker
* lokale correcties blijven lokaal opgeslagen

### Resultaat

De MVP toont hoe vrije, ongestructureerde input kan worden omgezet naar heldere informatieblokken. De centrale ervaring is:

> “Mijn hoofd voelt rustiger aan dan voor ik begon.”

### Wat dit project aantoont

Deze case toont Sarahs sterktes in:

* functioneel denken
* scope bewaken
* gebruikersnoden vertalen naar een eenvoudige flow
* informatie structureren
* privacybewust ontwerpen
* technische concepten begrijpelijk maken
* MVP-denken
* documentatie en validatie
* praktische AI-toepassingen
* human-in-the-loop denken

Unclutter Mind toont ook hoe Sarah een abstract idee kan vertalen naar een concreet, bouwbaar en testbaar concept.

Dat maakt de case relevant voor:

* werkgevers
* technische teams
* zelfstandigen met een digitaal idee
* kleine organisaties die structuur zoeken
* toekomstige freelance opdrachten

---

# 10. CV-pagina

## 10.1 Doel

De CV-pagina moet de klassieke CV niet één-op-één kopiëren, maar online scanbaar maken.

## 10.2 Structuur

1. Professionele samenvatting
2. Kerncompetenties
3. Ervaring
4. Projecten
5. Opleiding
6. Tools & technologieën
7. Download CV

## 10.3 Belangrijke competentiegroepen

### Analyse & documentatie

* Requirements analysis
* Functional documentation
* Process optimisation
* Stakeholder communication
* UML diagramming
* Structured open questions

### Tools

* Jira
* Confluence
* Postman / Bruno
* Swagger
* Docker
* Git / Bitbucket
* Grafana

### Technische basis

* Python
* Django
* JavaScript / TypeScript
* Angular / React
* PostgreSQL / SQL
* Linux

### Testing

* Cypress
* Playwright
* Test documentation
* Functional validation

### AI-interesse

* AI-assisted analysis
* AI-supported documentation
* Local AI exploration
* Prompt structuring
* AI workflow thinking
* Privacy-first AI concepts

---

# 11. Contactpagina

## 11.1 Doel

De contactpagina moet eenvoudig en professioneel zijn.

## 11.2 Inhoud

* e-mailadres
* LinkedIn
* GitHub
* locatie: Turnhout, Belgium
* beschikbaar voor analytische, applicatiegerichte of AI-gerelateerde junior/groeirichtingen

## 11.3 Contactformulier

Voor V1 komt er geen contactformulier.

Aanbevolen aanpak:

* mailto-link
* LinkedIn-link
* downloadbare CV

Contactformulier wordt pas bekeken in een latere publicatiefase.

---

# 12. Functionele requirements

## FR-001 Homepagina

De gebruiker moet een duidelijke introductie van Sarah kunnen lezen.

### Acceptatiecriteria

* De homepagina toont Sarahs naam en professionele titel.
* De homepagina positioneert Sarah als Functional Analyst / Application Specialist.
* De homepagina bevat een korte positionering.
* De homepagina benoemt AI als praktische interesse.
* De homepagina bevat minstens één duidelijke call-to-action naar projecten.
* De homepagina bevat minstens één duidelijke call-to-action naar CV of contact.

## FR-002 Projectenoverzicht

De gebruiker moet een overzicht van Sarahs projecten kunnen bekijken.

### Acceptatiecriteria

* De projectenpagina toont projectkaarten.
* Elke projectkaart bevat titel, korte omschrijving, rol en tags.
* De gebruiker kan doorklikken naar de detailpagina van Unclutter Mind.
* Voor V1 is er geen klikbare filter- of zoekfunctionaliteit nodig op de projectenpagina.
* De velden `type`, `audience` en `themes` worden enkel getoond als visuele tags.
* De tags worden getoond via een herbruikbare `<Tag>` component.
* Tags zijn in V1 niet klikbaar.
* AI-gerelateerde projecten krijgen visueel herkenbare thema-tags zoals “AI Experiment”, “Local AI” of “Privacy-first AI”.

## FR-003 Projectdetail Unclutter Mind

De gebruiker moet de volledige case van Unclutter Mind kunnen lezen.

### Acceptatiecriteria

* De pagina bevat probleem, doel, rol, aanpak en resultaat.
* De pagina benadrukt functionele analyse en scope-afbakening.
* De pagina bevat de gebruikte stack.
* De pagina maakt duidelijk welke keuzes bewust out of scope zijn.
* De pagina legt uit welke rol AI speelt.
* De pagina toont dat AI ondersteunend is en niet autonoom beslist.
* De pagina benoemt privacy-first en lokale verwerking.

## FR-004 CV-pagina

De gebruiker moet Sarahs ervaring en vaardigheden online kunnen raadplegen.

### Acceptatiecriteria

* De pagina toont ervaring, opleiding, skills en projecten.
* De pagina bevat een knop om de CV lokaal te openen of te downloaden.
* De inhoud is scanbaar en niet te tekstzwaar.
* AI-interesse wordt vermeld zonder overdreven claims.

## FR-005 Contactpagina

De gebruiker moet Sarah makkelijk kunnen contacteren.

### Acceptatiecriteria

* De pagina toont e-mail, LinkedIn en GitHub.
* De links openen correct.
* Er wordt geen persoonlijke informatie onnodig prominent getoond.
* Er is geen contactformulier in V1.

## FR-006 Responsive design

De portfolio moet bruikbaar zijn op mobiel, tablet en desktop.

### Acceptatiecriteria

* Navigatie werkt op mobiel.
* Teksten blijven leesbaar.
* Projectkaarten schalen correct.
* Er is geen horizontale scroll.
* Tags blijven leesbaar en breken netjes af op kleinere schermen.

## FR-007 SEO-basis in lokale code

De website moet voorbereid zijn op basis-SEO voor latere publicatie.

### Acceptatiecriteria

* Elke pagina heeft een unieke title via `react-helmet-async`.
* Elke pagina heeft een meta description via `react-helmet-async`.
* De homepagina bevat relevante keywords zoals Functional Analyst, Application Specialist, AI, Portfolio en Documentation.
* Open Graph metadata wordt voorbereid voor latere publicatie.
* De SEO-implementatie werkt lokaal inspecteerbaar in de browser.

## FR-008 NotFound-pagina

De applicatie moet onbekende routes correct opvangen.

### Acceptatiecriteria

* Een onbekende URL toont een duidelijke NotFound-pagina.
* De gebruiker ziet geen lege pagina.
* De NotFound-pagina bevat een knop of link terug naar de homepagina.
* De algemene layout blijft behouden.
* De browserconsole toont geen errors.
* De routeconfiguratie bevat een fallback route met `*`.

### Voorbeeldtekst op de pagina

**Pagina niet gevonden**

De pagina die je zoekt bestaat niet of is verplaatst.

**Terug naar home**

## FR-009 Future-ready structuur

De portfolio moet zo opgebouwd worden dat later eenvoudig diensten, freelance cases of eigen producten kunnen worden toegevoegd.

### Acceptatiecriteria

* Projectdata bevat velden om doelgroep en projecttype te onderscheiden.
* De navigatie kan later uitgebreid worden zonder herstructurering.
* De componenten zijn generiek genoeg voor zowel projecten als toekomstige diensten.
* Er wordt geen tekst gebruikt die Sarah uitsluitend als jobzoekende positioneert.
* De homepagina blijft bruikbaar voor werkgevers én toekomstige klanten.
* De contentstructuur laat toe om later een `/services` pagina toe te voegen.
* De code bevat geen hardcoded aannames dat alle bezoekers recruiters zijn.

## FR-010 AI-interesse zichtbaar maken

De portfolio moet duidelijk aantonen dat Sarah interesse heeft in AI en praktische AI-toepassingen.

### Acceptatiecriteria

* De homepagina bevat een korte sectie over AI als praktisch hulpmiddel.
* De Over mij-pagina bevat een sectie over waarom AI Sarah interesseert.
* Minstens één projectcase toont concreet AI-gebruik.
* Unclutter Mind wordt gelabeld als AI-gerelateerd project.
* De tekst claimt geen senior AI-expertise.
* AI wordt gepositioneerd als ondersteuning voor analyse, structuur en digitale workflows.
* De portfolio maakt duidelijk dat Sarah AI bewust, kritisch en praktisch benadert.
* De content blijft relevant voor zowel werkgevers als toekomstige freelance klanten.

---

# 13. Non-functional requirements

## NFR-001 Performance

De website moet snel laden.

### Criteria

* Lighthouse performance score lokaal minimaal 90.
* Afbeeldingen worden geoptimaliseerd.
* Geen zware animatiebibliotheken in V1.
* Geen onnodige externe scripts.
* Projecttags veroorzaken geen layout shift of visuele drukte.

## NFR-002 Accessibility

De website moet toegankelijk zijn.

### Criteria

* Voldoende contrast.
* Semantische HTML.
* Duidelijke focus states.
* Alt-teksten voor afbeeldingen.
* Navigatie via toetsenbord mogelijk.
* Tags zijn visueel herkenbaar maar niet afhankelijk van kleur alleen.

## NFR-003 Maintainability

De website moet eenvoudig aanpasbaar zijn.

### Criteria

* Projectdata staat centraal in TypeScript datafiles.
* Componenten zijn herbruikbaar.
* Styling is consistent.
* Content en layout zijn logisch gescheiden.
* Er zijn geen hardcoded projectblokken verspreid over meerdere pagina’s.
* Nieuwe projecten kunnen toegevoegd worden zonder nieuwe componenten te bouwen.

## NFR-004 Privacy

De website mag geen onnodige persoonlijke data verzamelen.

### Criteria

* Geen tracking cookies in V1.
* Geen analytics in V1.
* Geen extern contactformulier.
* Geen persoonlijke adresgegevens prominent tonen.
* Contact via e-mail en LinkedIn staat centraal.

## NFR-005 Hosting cost

Voor V1 Local zijn er geen hostingkosten.

### Criteria

* Geen hosting nodig.
* Geen backend nodig.
* Geen CMS nodig.
* Geen database nodig.
* Geen externe betaalde diensten nodig.
* De applicatie werkt volledig lokaal.

## NFR-006 Local-first development

De applicatie moet volledig lokaal kunnen worden ontwikkeld, getest en beoordeeld.

### Criteria

* Project draait via `npm run dev`.
* Project bouwt lokaal via `npm run build`.
* Er zijn geen externe runtime-afhankelijkheden nodig voor de portfolio zelf.
* Alle content en assets zijn lokaal beschikbaar.
* De repository bevat duidelijke instructies in een README.

## NFR-007 Scalability of content

De website moet inhoudelijk kunnen groeien zonder technische herwerking.

### Criteria

* Projecten worden beheerd via lokale datafiles.
* Nieuwe projecten kunnen toegevoegd worden zonder nieuwe componenten te bouwen.
* Toekomstige services kunnen via een apart datafile worden beheerd.
* Navigatie-items zijn makkelijk uitbreidbaar.
* Projectdetailpagina’s werken op basis van slug.
* De layout ondersteunt meerdere projecttypes.
* De tone-of-voice blijft professioneel, ook wanneer freelance content wordt toegevoegd.

## NFR-008 AI-positionering blijft realistisch

De portfolio moet AI duidelijk tonen als interesse- en groeirichting, zonder overdreven claims.

### Criteria

* Geen gebruik van titels zoals AI Expert of Senior AI Consultant.
* AI-projecten worden concreet uitgelegd vanuit probleem, aanpak en resultaat.
* Er wordt duidelijk gemaakt welke rol AI speelt binnen elk project.
* Menselijke controle, privacy en scope-afbakening blijven zichtbaar.
* AI wordt verbonden met Sarahs bestaande sterktes: analyse, structuur, documentatie en technische basiskennis.

---

# 14. Contentmodel en lokale datalogica

## 14.1 Data-aanpak

Voor V1 wordt alle content lokaal beheerd.

Er worden geen API-calls gebruikt en er wordt geen backend gesimuleerd.

De portfolio-content wordt rechtstreeks geïmporteerd vanuit TypeScript datafiles.

Voorbeeld:

```ts
import { projects } from "../data/projects"
```

Deze aanpak volgt het KISS-principe:

* geen onnodige complexiteit
* geen fake API-laag
* geen backend zonder functionele noodzaak
* eenvoudig onderhoudbaar
* duidelijk voor een development team
* makkelijk later uitbreidbaar

## 14.2 Single Source of Truth: Project type

Dit is het enige geldige `Project` type voor V1.

```ts
export type ProjectAudience = "employer" | "freelance" | "both"

export type ProjectType =
  | "case-study"
  | "product"
  | "concept"
  | "client-work"
  | "ai-experiment"

export type Project = {
  slug: string
  title: string
  shortDescription: string
  problem: string
  role: string[]
  skills: string[]
  stack: string[]
  result: string
  featured: boolean
  audience?: ProjectAudience
  type?: ProjectType
  themes?: string[]
}
```

## 14.3 Toelichting optionele velden

De velden `audience`, `type` en `themes` zijn optioneel.

Reden:

* sommige oudere projecten zijn mogelijk nog niet volledig gelabeld
* de content kan stap voor stap uitgebreid worden
* V1 mag niet blokkeren op ontbrekende metadata
* de UI moet veilig omgaan met lege of ontbrekende arrays

## 14.4 Voorbeelddata Unclutter Mind

```ts
export const unclutterMind: Project = {
  slug: "unclutter-mind",
  title: "Unclutter Mind",
  shortDescription:
    "Privacy-first MVP die ongestructureerde gedachten omzet naar rustige categorieën met lokale AI-ondersteuning.",
  problem:
    "Mensen ervaren vaak mentale ruis doordat taken, zorgen, vragen en ideeën door elkaar lopen.",
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
  result:
    "Een lokale applicatie die vrije input omzet naar duidelijke categorieën zonder externe cloudverwerking.",
  featured: true,
  audience: "both",
  type: "ai-experiment",
  themes: [
    "Local AI",
    "Privacy-first AI",
    "Information structuring",
    "Functional analysis",
    "Human-in-the-loop"
  ]
}
```

## 14.5 Toekomstig Service type

Voor V1 hoeft er nog geen servicepagina te zijn, maar het project mag wel voorbereid worden op een later services datafile.

```ts
export type Service = {
  slug: string
  title: string
  shortDescription: string
  targetAudience: string[]
  problemsSolved: string[]
  deliverables: string[]
  relatedProjects: string[]
  active: boolean
}
```

Dit type wordt in V1 nog niet gebruikt in routing.

---

# 15. Asset & document management

## 15.1 Public map

Statische bestanden worden geplaatst in de `public/` map.

Aanbevolen structuur:

```text
public/
├── documents/
│   └── cv-sarah-janssen.pdf
├── images/
│   ├── profile/
│   │   └── sarah-janssen.webp
│   ├── projects/
│   │   └── unclutter-mind/
│   │       ├── overview.webp
│   │       ├── flow.webp
│   │       └── result.webp
│   └── icons/
│       └── favicon.svg
```

## 15.2 Richtlijnen

* Gebruik `.webp` voor foto’s en screenshots.
* Gebruik `.svg` voor iconen en eenvoudige illustraties.
* Gebruik lowercase bestandsnamen.
* Gebruik koppeltekens in plaats van spaties.
* Plaats de CV in `public/documents/`.
* Plaats projectafbeeldingen per project in een aparte map.
* Voeg voor elke afbeelding een betekenisvolle alt-tekst toe.
* Vermijd zware afbeeldingen.
* Comprimeer afbeeldingen voor gebruik.

## 15.3 CV-link

De CV-knop verwijst lokaal naar:

```text
/documents/cv-sarah-janssen.pdf
```

---

# 16. Componentstructuur

## 16.1 Aanbevolen structuur

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PageContainer.tsx
│   ├── seo/
│   │   └── Seo.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── HighlightSection.tsx
│   │   ├── Tag.tsx
│   │   └── SectionHeading.tsx
│   └── project/
│       ├── ProjectCard.tsx
│       ├── ProjectMeta.tsx
│       └── ProjectSection.tsx
├── data/
│   ├── projects.ts
│   ├── cv.ts
│   └── services.ts
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectDetail.tsx
│   ├── CV.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── routes/
│   └── AppRoutes.tsx
├── styles/
│   └── index.css
└── App.tsx
```

## 16.2 Seo.tsx

Er wordt een aparte SEO-component voorzien om metadata per pagina centraal en consistent te beheren.

Doel:

* herhaling vermijden
* page titles standaardiseren
* meta descriptions standaardiseren
* latere publicatie voorbereiden
* Open Graph metadata voorbereiden

Voorbeeldgebruik:

```tsx
<Seo
  title="Sarah Janssen | Functional Analyst"
  description="Portfolio van Sarah Janssen, Functional Analyst / Application Specialist met interesse in praktische AI-toepassingen."
/>
```

## 16.3 HighlightSection.tsx

Er wordt een herbruikbare `HighlightSection.tsx` component voorzien voor inhoud die extra nadruk mag krijgen.

Deze component kan gebruikt worden voor:

* “AI als praktisch hulpmiddel” op de homepagina
* “Waarom AI mij interesseert” op de Over mij-pagina
* toekomstige blokken rond freelance diensten
* toekomstige blokken rond AI Lab of conceptcases

Doel:

* visuele nadruk geven zonder aparte componenten per tekstblok te maken
* consistent design behouden
* content modulair houden
* toekomstige uitbreidingen eenvoudiger maken

## 16.4 Tag.tsx

Er wordt een herbruikbare `Tag.tsx` component voorzien.

Gebruik:

* projecttype tonen
* thema’s tonen
* AI-gerelateerde labels tonen
* skills visueel markeren

Belangrijk voor V1:

* tags zijn visueel
* tags zijn niet klikbaar
* tags hebben geen filterlogica
* tags moeten toegankelijk zijn
* tags mogen niet alleen op kleur vertrouwen

---

# 17. Development roadmap

## Fase 1 — Analyse en lokale setup

Doel: project technisch en inhoudelijk klaarzetten.

Taken:

* Nieuwe GitHub repository aanmaken
* React + Vite + TypeScript project opzetten
* Tailwind installeren
* React Router installeren
* `react-helmet-async` installeren
* `Seo.tsx` component voorzien
* basisroutes voorzien
* `NotFound.tsx` pagina voorzien
* fallback route `*` toevoegen
* `public/` map structureren
* CV-bestand lokaal toevoegen
* basiscomponenten aanmaken
* contentstructuur bepalen
* README met lokale run-instructies voorzien

Output:

* werkende lokale applicatie
* eerste routes
* basislayout
* repository klaar voor lokale ontwikkeling

## Fase 2 — Design foundation

Doel: visuele stijl vastleggen.

Taken:

* kleuren definiëren
* typografie bepalen
* layoutgrid maken
* Header en Footer bouwen
* Button-, Card-, Tag-, HighlightSection- en SectionHeading-componenten maken
* responsive basis voorzien
* focus states voorzien

Output:

* licht design system
* herbruikbare UI-componenten
* mobiele navigatie

## Fase 3 — Contentpagina’s bouwen

Doel: alle hoofdpagina’s vullen.

Taken:

* Homepagina bouwen
* Over mij pagina bouwen
* Projectenoverzicht bouwen
* CV-pagina bouwen
* Contactpagina bouwen
* AI-sectie toevoegen op Home
* AI-sectie toevoegen op Over mij
* SEO per pagina toevoegen

Output:

* volledige eerste inhoudelijke versie van de portfolio

## Fase 4 — Unclutter Mind case uitwerken

Doel: sterke casepagina maken.

Taken:

* Detailpagina voor Unclutter Mind bouwen
* Case structureren volgens probleem, rol, aanpak en resultaat
* AI-aanpak duidelijk beschrijven
* Stack en skills tonen
* Scope-afbakening visueel maken
* Privacy-first keuzes duidelijk tonen
* Call-to-action naar CV/contact toevoegen
* Projectdata uit `projects.ts` gebruiken
* Tags tonen via `Tag.tsx`

Output:

* volledige Unclutter Mind portfolio-case

## Fase 5 — Lokale kwaliteitscontrole

Doel: website professioneel en foutvrij maken.

Taken:

* responsive testen
* Lighthouse lokaal draaien
* accessibility check uitvoeren
* spelling en tone-of-voice review
* links controleren
* CV-download testen
* SEO metadata controleren
* browserconsole controleren
* TypeScript build controleren
* NotFound-route testen
* onbekende URL’s testen
* controleren dat er geen ongebruikte imports of warnings zijn
* controleren dat tags correct renderen zonder filtergedrag

Output:

* lokale release candidate

## Fase 6 — Lokale afronding

Doel: project klaarzetten voor latere publicatie.

Taken:

* README finaliseren
* screenshots toevoegen
* projectstructuur opschonen
* ongebruikte bestanden verwijderen
* final local build uitvoeren
* checklist invullen
* publicatiefase apart documenteren voor later

Output:

* volledig lokaal werkende portfolio
* klaar om later te hosten zonder grote herwerking

---

# 18. Definition of Done

De lokale portfolio is klaar wanneer:

* Alle hoofdpagina’s bestaan.
* De homepagina Sarah correct positioneert als Functional Analyst / Application Specialist.
* De term “junior” niet gebruikt wordt als primaire positionering.
* AI zichtbaar is als praktische interesse en groeirichting.
* De homepagina een sectie bevat over AI als praktisch hulpmiddel.
* De Over mij-pagina een sectie bevat over waarom AI Sarah interesseert.
* Unclutter Mind als sterke AI-gerelateerde case is uitgewerkt.
* Unclutter Mind duidelijk uitlegt welke rol AI speelt.
* AI nergens wordt gepresenteerd als autonome beslisser of overdreven expertiseclaim.
* De CV online scanbaar is binnen de lokale applicatie.
* De CV lokaal downloadbaar of bekijkbaar is.
* De website responsive werkt op desktop, tablet en mobiel.
* De website volledig lokaal draait.
* Er geen hosting of externe runtime nodig is.
* De NotFound-pagina werkt.
* Alle onbekende routes correct worden opgevangen.
* Alle statische assets in de juiste public-mappen staan.
* Afbeeldingen geoptimaliseerd zijn.
* Elke pagina een eigen title en meta description heeft.
* SEO wordt beheerd via `react-helmet-async`.
* Alle interne links correct werken.
* Alle externe links correct openen.
* Projecttags correct zichtbaar zijn.
* Tags zijn in V1 niet klikbaar.
* Er is geen zoek- of filterfunctionaliteit op projecten in V1.
* De `/ai-lab` route bestaat nog niet in V1.
* De `/services` route bestaat nog niet in V1.
* Er geen warnings of errors meer in de browserconsole staan.
* De applicatie lokaal succesvol buildt zonder TypeScript errors.
* Tests draaien zonder falende resultaten, indien testsetup voorzien is.
* Lighthouse lokaal minimaal 90 haalt voor performance, accessibility en best practices.
* De tone-of-voice professioneel, analytisch, zelfzeker en AI-bewust is.
* Er geen oude branding of oude portfolio-inhoud meer zichtbaar is.
* De repository een duidelijke README bevat.
* Het project later zonder structurele herwerking kan worden gehost.

---

# 19. Risico’s en mitigaties

## Risico 1 — Portfolio voelt te technisch

### Mitigatie

* Projecten uitleggen vanuit probleem, rol en resultaat.
* Niet starten met code of stack.
* Technische stack pas later tonen.
* AI altijd koppelen aan een concreet probleem.

## Risico 2 — Portfolio voelt te junior

### Mitigatie

* Focus op denkwijze, structuur en documentatie.
* Duidelijke cases tonen.
* Niet overdrijven met claims.
* Wel zelfzeker formuleren.
* “Junior” niet gebruiken als hoofdtitel.

## Risico 3 — Scope wordt te groot

### Mitigatie

* Geen CMS, backend of blog in V1.
* Geen AI Lab route in V1.
* Geen servicespagina in V1.
* Geen filters of zoekfunctie in V1.
* Eerst lokaal afronden.
* Publicatie pas later plannen.

## Risico 4 — Oude portfolio beïnvloedt de positionering

### Mitigatie

* Nieuwe portfolio volledig los uitwerken.
* Oude content niet hergebruiken zonder review.
* Nieuwe positionering consequent doorvoeren.
* Domein pas later koppelen wanneer de nieuwe versie sterk genoeg is.

## Risico 5 — Privacygevoelige CV-info staat te publiek

### Mitigatie

* In de webpagina geen volledig adres prominent tonen.
* Telefoonnummer optioneel minder zichtbaar maken.
* Contact via e-mail en LinkedIn centraal zetten.
* Downloadbare CV mag vollediger zijn dan de webpagina.
* Voor publicatie opnieuw privacyreview uitvoeren.

## Risico 6 — SEO wordt verkeerd voorbereid in SPA

### Mitigatie

* `react-helmet-async` gebruiken.
* Per pagina een Seo-component toevoegen.
* Metadata lokaal inspecteren.
* Open Graph metadata voorbereiden voor latere publicatie.

## Risico 7 — Onbekende routes tonen lege pagina

### Mitigatie

* `NotFound.tsx` toevoegen.
* Fallback route `*` voorzien.
* Manueel testen met foutieve URLs.

## Risico 8 — AI-positionering wordt te breed

### Mitigatie

AI wordt altijd gekoppeld aan concrete toepassingen:

* informatie structureren
* classificeren
* documentatie versnellen
* workflows ondersteunen
* contentconcepten uitwerken
* lokale privacy-first toepassingen bouwen

Niet:

* algemene AI-hype
* losse AI-prompts zonder context
* claims zonder projectbewijs

## Risico 9 — Portfolio wordt te commercieel

### Mitigatie

Voor V1 blijft de hoofdboodschap:

> Functional Analyst / Application Specialist

Freelance en zelfstandige mogelijkheden worden enkel voorbereid in de structuur, maar nog niet prominent verkocht.

Pas wanneer Sarah effectief zelfstandige opdrachten wil aantrekken, wordt een aparte `/services` pagina toegevoegd.

## Risico 10 — Artisanale idee voelt nog te vroeg

### Mitigatie

In V1 wordt het artisanale idee nog niet als dienst verkocht.

Het mag later worden toegevoegd als:

* conceptcase
* experiment
* R&D project
* future service
* aparte projectcase

Pas wanneer het aanbod concreet is, wordt het een echte servicepagina.

---

# 20. Aanbevolen lokale MVP-release

De eerste afgeronde lokale versie bevat minimaal:

* Home
* Over mij
* Projecten
* Unclutter Mind detailcase
* CV
* Contact
* NotFound
* Lokale assets
* Lokale CV
* SEO-component
* Lokale datafiles
* visuele projecttags
* AI-focusblok op Home
* AI-focusblok op Over mij
* README
* werkende lokale build

Niet wachten op:

* hosting
* domeinkoppeling
* blog
* CMS
* animaties
* meertaligheid
* contactformulier
* analytics
* projectfilters
* zoekfunctie
* AI Lab-pagina
* servicespagina

De prioriteit is een sterke, heldere en professionele portfolio die lokaal volledig klopt voordat ze later gepubliceerd wordt.

---

# 21. Toekomstige uitbreidingen

## 21.1 AI Lab

Later kan een aparte AI Lab-sectie toegevoegd worden.

Mogelijke route:

```text
/ai-lab
```

Doel:

* AI-experimenten tonen
* leertraject zichtbaar maken
* prototypes documenteren
* AI-workflows uitleggen
* lokale AI-projecten tonen
* concepten voor toekomstige diensten voorbereiden

## 21.2 Services

Later kan een services-sectie toegevoegd worden.

Mogelijke route:

```text
/services
```

Mogelijke diensten:

* Functional Analysis Support
* Digital Structure Support
* Simple Portfolio / Website Structure
* AI Visual Content Concepting
* AI-supported Documentation
* Workflow Structuring for Small Businesses

## 21.3 Artisanale AI-campagnes

Het artisanale idee kan later toegevoegd worden als:

* conceptcase
* AI Lab experiment
* R&D project
* future service
* commerciële dienst

Voor V1 wordt dit nog niet verkocht als dienst.

---

# 22. Eindvisie

De nieuwe portfolio moet aanvoelen als een professioneel digitaal dossier, niet als een visueel experiment.

De bezoeker moet na het bekijken van de website denken:

> Sarah begrijpt processen en informatie, kan die helder structureren en onderzoekt op een praktische manier hoe AI digitale oplossingen sterker kan maken.

Voor V1 is het doel niet om live te staan.

Voor V1 is het doel:

> Een lokaal volledig uitgewerkte, foutloze en professioneel opgebouwde portfolio die Sarah sterk positioneert als Functional Analyst / Application Specialist met duidelijke AI-interesse, en die later zonder structurele herwerking kan worden uitgebreid naar freelance diensten, eigen producten of AI-gerichte concepten.

De rode draad blijft altijd:

> Structuur brengen in informatie, processen en digitale ideeën — met AI als slimme versterker.
