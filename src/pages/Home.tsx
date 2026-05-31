import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Seo from '@/components/seo/Seo';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/project/ProjectCard';
import ProcessFlow from '@/components/ui/ProcessFlow';
import InterestCard from '@/components/ui/InterestCard';
import { projects } from '@/data/projects';

const Home: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <PageContainer>
      <Seo 
        title="Sarah Janssen | Nieuwsgierig, Analytisch, Praktisch" 
        description="Portfolio van Sarah Janssen. Ik haal energie uit het begrijpen van complexe vraagstukken en het creëren van praktische oplossingen." 
      />
      
      {/* V2 Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex justify-center">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl">
          <div className="flex-1 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-sm font-bold uppercase tracking-widest text-portfolio-accent mb-4">Sarah Janssen</h1>
            <SectionHeading 
              title={"Complexiteit begrijpen.\nStructuur creëren.\nIdeeën realiseren."}
              level="h1"
              className="!mb-6 whitespace-pre-line"
            />
            <p className="text-xl text-portfolio-text/70 mb-10 leading-relaxed">
              Ik haal energie uit het begrijpen van complexe vraagstukken, 
              het creëren van structuur en het omzetten van ideeën in bruikbare oplossingen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button to="/projects">Bekijk mijn werk</Button>
              <Button to="/about" variant="outline">Leer mij kennen</Button>
            </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-portfolio-accent/10 border-4 border-white shadow-lg overflow-hidden order-1 md:order-2 flex-shrink-0">
            {/* Placeholder for professional photo */}
            <div className="w-full h-full flex items-center justify-center text-portfolio-accent/40 font-bold italic">
              Profielfoto
            </div>
          </div>
        </div>
      </section>

      {/* Mijn Aanpak (ProcessFlow) */}
      <section className="bg-portfolio-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Mijn Aanpak" 
            subtitle="Hoe ik van een abstract probleem naar een werkende oplossing ga."
            centered
          />
          <ProcessFlow />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <SectionHeading 
          title="Uitgelichte projecten" 
          subtitle="Een selectie van oplossingen die mijn manier van werken illustreren."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center md:text-left">
          <Button to="/projects" variant="outline">Bekijk alle projecten</Button>
        </div>
      </section>

      {/* Interessegebieden */}
      <section className="bg-portfolio-text text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Interessegebieden" 
            subtitle="Waar ik mijn tanden graag in zet."
            className="[&_h2]:text-white [&_p]:text-white/60"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InterestCard 
              title="Analyse & Structuur" 
              description="Procesanalyse, requirements, en het documenteren van de kern van de zaak."
            />
            <InterestCard 
              title="Software & Apps" 
              description="Ideeën omzetten naar bruikbare digitale oplossingen door analyse, technologie en AI slim te combineren."
            />
            <InterestCard 
              title="AI & Automatisatie" 
              description="AI-workflows en automatisatie inzetten als slimme productiviteitspartners."
            />
            <InterestCard 
              title="Continu Leren" 
              description="Blijvend groeien, nieuwe technieken doorgronden en mezelf uitdagen."
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center">
        <h2 className="text-3xl font-bold mb-6">Klaar om iets te bouwen of te structureren?</h2>
        <p className="text-lg text-portfolio-text/60 mb-10 max-w-2xl mx-auto">
          Of je nu een werkgever bent, een freelance opdracht hebt, of gewoon van gedachten wilt wisselen: 
          mijn deur staat open voor analytische uitdagingen.
        </p>
        <Button to="/contact">Neem contact op</Button>
      </section>
    </PageContainer>
  );
};

export default Home;
