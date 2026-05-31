import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Seo from '@/components/seo/Seo';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const CV: React.FC = () => {
  const experiences = [
    {
      role: "Functioneel Analist",
      company: "Konato / Cronos",
      period: "2026 – heden",
      tasks: [
        "Analyseren van gebruikersnoden en applicatiegedrag",
        "Structureren van functionele flows, open vragen en requirements",
        "Opstellen en onderhouden van functionele documentatie",
        "Ondersteunen van testing en validatie",
        "Samenwerken met stakeholders en technische teams om systeemgedrag te verduidelijken"
      ]
    },
    {
      role: "Erasmusstage – Water Data Platform",
      company: "IPBeja (Portugal)",
      period: "2025",
      tasks: [
        "Onderzoeken van gebruikersprocessen en knelpunten",
        "Vertalen van requirements naar functionele oplossingen",
        "Ontwikkelen van een waterdata-platform",
        "Werken met Django, PostgreSQL, Docker en Grafana",
        "Verwerken van feedback in een iteratief ontwikkelproces"
      ]
    },
    {
      role: "Administratieve & Klantgerichte Ervaring",
      company: "Diverse sectoren",
      period: "2009 – 2022",
      description: "Ervaring opgebouwd in zowel administratieve als klantgerichte functies, met een sterke focus op: Structuur, Nauwkeurigheid, Communicatie, Verantwoordelijkheid en Organisatie."
    }
  ];

  const technologies = [
    {
      title: "Analyse & Samenwerking",
      tools: ["Jira", "Confluence", "Postman", "Bruno", "Swagger"]
    },
    {
      title: "Ontwikkeling",
      tools: ["Python", "Django", "TypeScript", "React", "Angular", "PostgreSQL", "SQL"]
    },
    {
      title: "Platformen & Tools",
      tools: ["Docker", "Linux", "Grafana", "Git", "Bitbucket"]
    }
  ];

  return (
    <PageContainer>
      <Seo 
        title="Professioneel Overzicht | Sarah Janssen" 
        description="Bekijk het professionele profiel, de ervaring en de expertise van Sarah Janssen." 
      />
      
      <section className="container mx-auto px-4 py-20 md:py-32 flex justify-center animate-fade-in">
        <div className="max-w-4xl w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-20 gap-6">
            <SectionHeading 
              title="Professioneel Overzicht" 
              level="h1"
              subtitle="Mijn professionele achtergrond en technische fundament."
              className="!mb-0"
            />
            {/* De-promoted CV Download Button (V2.4 KISS) */}
            <Button href="/documents/cv-sarah-janssen.pdf" variant="outline" className="text-xs py-2 px-4">
              Download CV (PDF)
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-16">
              <section>
                <h3 className="text-xl font-bold border-b border-portfolio-accent/20 pb-2 mb-8 uppercase tracking-wider text-portfolio-accent">Ervaring</h3>
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-lg">{exp.role}</h4>
                        <span className="text-sm text-portfolio-text/60 whitespace-nowrap ml-4">{exp.period}</span>
                      </div>
                      <p className="text-portfolio-accent font-medium mb-4">{exp.company}</p>
                      {exp.tasks ? (
                        <ul className="list-disc ml-5 space-y-2 text-portfolio-text/70">
                          {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
                        </ul>
                      ) : (
                        <p className="text-portfolio-text/70">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold border-b border-portfolio-accent/20 pb-2 mb-8 uppercase tracking-wider text-portfolio-accent">Opleiding</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-lg">Graduaat Programmeren</h4>
                      <span className="text-sm text-portfolio-text/60 whitespace-nowrap ml-4">2023 – 2025</span>
                    </div>
                    <p className="text-portfolio-accent font-medium mb-4">Thomas More Hogeschool</p>
                    <p className="text-portfolio-text/70 mb-2">Focus op:</p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-portfolio-text/70 list-inside list-disc">
                      <li>Softwareontwikkeling</li>
                      <li>Databases</li>
                      <li>Webtechnologieën</li>
                      <li>Analyse</li>
                      <li>Probleemoplossend denken</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-16">
              <section>
                <h3 className="text-lg font-bold border-b border-portfolio-accent/20 pb-2 mb-8 uppercase tracking-wider text-portfolio-accent">Technologieën</h3>
                <div className="space-y-10">
                  {technologies.map((tech, index) => (
                    <div key={index}>
                      <h4 className="text-sm font-bold text-portfolio-text/60 uppercase tracking-widest mb-4">{tech.title}</h4>
                      <ul className="space-y-2 text-portfolio-text/80 font-medium">
                        {tech.tools.map(tool => <li key={tool}>{tool}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold border-b border-portfolio-accent/20 pb-2 mb-8 uppercase tracking-wider text-portfolio-accent">Sterke Punten</h3>
                <ul className="space-y-3 text-portfolio-text/80 italic leading-snug">
                  <li>Analytisch denken</li>
                  <li>Gestructureerd werken</li>
                  <li>Snel nieuwe materie opnemen</li>
                  <li>Complexe informatie begrijpbaar maken</li>
                  <li>Oplossingsgericht denken</li>
                  <li>Brug tussen business & techniek</li>
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default CV;
