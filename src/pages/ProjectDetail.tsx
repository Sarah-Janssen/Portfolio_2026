import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import Seo from '@/components/seo/Seo';
import HighlightSection from '@/components/ui/HighlightSection';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import ImageCarousel from '@/components/project/ImageCarousel';
import { projects } from '@/data/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageContainer>
      <Seo 
        title={`${project.title} | Sarah Janssen`} 
        description={project.shortDescription} 
      />
      
      {/* 1. Hero / Intro */}
      <section className="container mx-auto px-4 pt-20 pb-12 flex justify-center">
        <div className="max-w-4xl w-full">
          <Link to="/projects" className="text-portfolio-accent text-sm font-medium mb-8 inline-flex items-center hover:underline">
            <svg className="w-4 h-4 mr-1 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Terug naar overzicht
          </Link>
          
          <h1 className="text-5xl font-bold mb-6 text-portfolio-text">{project.title}</h1>
          <p className="text-xl text-portfolio-text/70 leading-relaxed mb-8">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag variant="tan">{project.category}</Tag>
            {project.themes?.map((theme) => (
              <Tag key={theme} variant="outline">{theme}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Project Visuals (Nu strakker aansluitend) */}
      {project.images && project.images.length > 0 && (
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <ImageCarousel images={project.images} />
          </div>
        </section>
      )}

      {/* 3. Projectverhaal */}
      <section className="container mx-auto px-4 py-20 border-t border-portfolio-accent/10 flex justify-center bg-portfolio-accent/5">
        <div className="max-w-3xl w-full prose prose-lg prose-portfolio prose-headings:text-portfolio-text prose-p:text-portfolio-text/80">
          <h2 className="text-3xl font-bold mb-12 text-portfolio-text text-center">Projectverhaal</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Uitdaging</h3>
              <p>{project.challenge}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Aanpak</h3>
              <p>{project.approach}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Oplossing</h3>
              <p>{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Wat dit project toont & Leertraject */}
      <section className="container mx-auto px-4 py-20 flex justify-center">
        <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-portfolio-accent/60 mb-8">Wat dit project toont</h2>
              <ul className="space-y-4 text-portfolio-text/80">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-portfolio-accent mr-2 mt-1">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={!project.highlights || project.highlights.length === 0 ? "md:col-span-2" : ""}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-portfolio-accent/60 mb-8">Wat ik geleerd heb</h2>
            <p className="text-portfolio-text/80 italic leading-relaxed border-l-4 border-portfolio-secondary/30 pl-6">
              {project.learnings}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Speciale AI Sectie (indien van toepassing) */}
      {project.slug === 'unclutter-mind' && (
        <HighlightSection title="AI & Privacy-First">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-text">Slimme Categorisatie</h3>
              <p>
                De applicatie gebruikt een hybride sorteerlogica. Eerst worden duidelijke patronen herkend via rule-first analyse, 
                waarna <strong>lokale AI (Ollama)</strong> ondersteunt bij complexere interpretaties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-text">Absolute Privacy</h3>
              <p>
                Geen externe cloudverwerking. Data blijft 100% lokaal op het toestel van de gebruiker. 
                Privacy is hier de architecturale basis, geen bijzaak.
              </p>
            </div>
          </div>
        </HighlightSection>
      )}

      {/* 6. Subtiele Technische Details (Onderaan) */}
      <section className="container mx-auto px-4 py-20 border-t border-portfolio-accent/10 flex justify-center bg-portfolio-bg">
        <div className="max-w-4xl w-full">
          <h2 className="text-sm font-bold uppercase tracking-widest text-portfolio-accent/60 mb-12 text-center">Technische details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
            <div>
              <h3 className="font-bold text-portfolio-text mb-4 uppercase tracking-wider text-xs">Mijn Rol</h3>
              <p className="text-portfolio-text/60 leading-relaxed italic">
                {project.role.join(' · ')}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-portfolio-text mb-4 uppercase tracking-wider text-xs">Skills</h3>
              <p className="text-portfolio-text/60 leading-relaxed italic">
                {project.skills.join(' · ')}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-portfolio-text mb-4 uppercase tracking-wider text-xs">Stack</h3>
              <p className="text-portfolio-text/60 leading-relaxed italic">
                {project.stack.join(' · ')}
              </p>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Button to="/contact">
              Interesse in mijn aanpak? Neem contact op
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default ProjectDetail;
