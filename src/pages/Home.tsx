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
        title="Sarah Janssen | Complexiteit begrijpen. Structuur creëren. Ideeën realiseren." 
        description="Portfolio van Sarah Janssen. Ik haal energie uit het begrijpen van complexe vraagstukken en het creëren van praktische oplossingen." 
      />
      
      {/* 1. Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex justify-center animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl">
          <div className="flex-1 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-sm font-bold uppercase tracking-widest text-portfolio-accent mb-4">Sarah Janssen</h1>
            <SectionHeading 
              title={"Complexiteit begrijpen.\nStructuur creëren.\nIdeeën realiseren."}
              level="h1"
              className="!mb-6 whitespace-pre-line"
            />
            <p className="text-xl text-portfolio-text/70 mb-10 leading-relaxed max-w-2xl">
              Ik haal energie uit het begrijpen van complexe vraagstukken, 
              het creëren van structuur en het omzetten van ideeën in bruikbare oplossingen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button to="/projects">Bekijk mijn werk</Button>
              <Button to="/about" variant="outline">Leer mij kennen</Button>
            </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-portfolio-accent/10 border-4 border-white shadow-lg overflow-hidden order-1 md:order-2 flex-shrink-0">
            <div className="w-full h-full flex items-center justify-center text-portfolio-accent/40 font-bold italic text-center px-4">
              Profielfoto
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mijn Aanpak (ProcessFlow) */}
      <section className="bg-portfolio-accent/5 py-20 md:py-32 animate-slide-up">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Mijn Aanpak" 
            subtitle="Hoe ik van een abstract probleem naar een werkende oplossing ga."
            centered
          />
          <ProcessFlow />
        </div>
      </section>

      {/* 3. Focusgebieden */}
      <section className="bg-portfolio-text text-white py-20 md:py-32 animate-slide-up">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Focus & Expertise" 
            subtitle="Mijn manier van kijken en werken."
            className="[&_h2]:text-white [&_p]:text-white/60"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InterestCard 
              title="Complexiteit Begrijpen" 
              description="Ik haal energie uit het analyseren van vraagstukken en het ontdekken van patronen."
            />
            <InterestCard 
              title="Structuur Creëren" 
              description="Ik vertaal informatie naar duidelijke processen, documentatie en werkbare oplossingen."
            />
            <InterestCard 
              title="Technologie Verkennen" 
              description="Ik onderzoek hoe software, AI en digitale tools mensen kunnen ondersteunen."
            />
            <InterestCard 
              title="Blijven Groeien" 
              description="Nieuwe technologieën, projecten en ervaringen zie ik als kansen om bij te leren."
            />
          </div>
        </div>
      </section>

      {/* 4. Uitgelichte projecten */}
      <section className="container mx-auto px-4 py-20 md:py-32 animate-slide-up">
        <SectionHeading 
          title="Uitgelichte projecten" 
          subtitle="Een selectie van oplossingen die mijn manier van werken illustreren."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button to="/projects" variant="outline">Bekijk alle projecten & ervaringen</Button>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="bg-portfolio-text text-white py-20 md:py-32 text-center animate-fade-in">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Klaar om iets te bouwen of te structureren?</h2>
          <p className="text-lg text-white/60 mb-10 leading-relaxed">
            Of je nu een werkgever bent, een partner, of een uitdagend project hebt: 
            mijn deur staat open voor analytische vraagstukken.
          </p>
          <Button to="/contact">Neem contact op</Button>
        </div>
      </section>
    </PageContainer>
  );
};

export default Home;
