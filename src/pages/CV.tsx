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

  const expertise = [
    {
      title: "Analyse & Structuur",
      skills: ["Functionele analyse", "Requirementsanalyse", "Procesoptimalisatie", "Functionele documentatie", "UML-diagrammen", "Stakeholdercommunicatie"]
    },
    {
      title: "Digitale Oplossingen",
      skills: ["Webapplicaties", "Dashboards", "Dataplatformen", "Frontendontwikkeling", "Datamodellering"]
    },
    {
      title: "AI & Automatisatie",
      skills: ["AI-ondersteunde workflows", "Onderzoek en validatie", "Documentatieondersteuning", "Prototyping", "Productiviteitsoptimalisatie"]
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
        description="Bekijk het professionele profiel van Sarah Janssen: Functional Analyst gespecialiseerd in AI Workflows, functionele analyse en IT-oplossingen." 
      />
      
      <section className="container mx-auto px-4 py-20 md:py-32 flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 gap-6">
            <SectionHeading 
              title="Professioneel Overzicht" 
              level="h1"
              subtitle="Mijn professionele profiel, ervaring en technische expertise."
              className="!mb-0"
            />
            <Button href="/documents/cv-sarah-janssen.pdf" variant="primary">
              Download CV (PDF)
            </Button>
          </div>

          <div className="prose prose-lg text-portfolio-text/80 mb-20 max-w-none">
            <h2 className="text-2xl font-bold text-portfolio-text mb-4">Over mij</h2>
            <p>
              Ik ben een nieuwsgierige IT-professional met een sterke interesse in analyse, digitale oplossingen en continue ontwikkeling.
            </p>
            <p>
              Ik haal energie uit het begrijpen van complexe vraagstukken, het creëren van structuur en het vertalen van ideeën naar praktische oplossingen. 
              Dankzij mijn combinatie van analytisch denken, technische kennis en sterke communicatieve vaardigheden sla ik bruggen tussen gebruikers, processen en technologie.
            </p>
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

              <section>
                <h3 className="text-xl font-bold border-b border-portfolio-accent/20 pb-2 mb-8 uppercase tracking-wider text-portfolio-accent">Expertise</h3>
                <div className="grid grid-cols-1 gap-8">
                  {expertise.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-bold mb-3">{item.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map(skill => (
                          <span key={skill} className="text-sm bg-portfolio-accent/5 text-portfolio-accent px-3 py-1 rounded-full border border-portfolio-accent/10">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
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
                  <li>Combinatie business & techniek</li>
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
