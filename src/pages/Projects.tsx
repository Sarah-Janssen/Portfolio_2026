import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Seo from '@/components/seo/Seo';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/project/ProjectCard';
import { projects } from '@/data/projects';

const Projects: React.FC = () => {
  return (
    <PageContainer>
      <Seo 
        title="Projecten | Sarah Janssen" 
        description="Bekijk de projecten van Sarah Janssen, variërend van functionele analyse tot AI-experimenten." 
      />
      
      <section className="container mx-auto px-4 py-20 md:py-32">
        <SectionHeading 
          title="Projecten" 
          level="h1"
          subtitle="Een overzicht van cases die mijn manier van denken en werken illustreren."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {projects.length === 1 && (
          <div className="mt-12 p-8 border border-dashed border-portfolio-accent/30 rounded-lg text-center">
            <p className="text-portfolio-text/60 italic">
              Andere projecten (WaterData Dashboard, PortugeseBakker) worden momenteel voorbereid voor V1.
            </p>
          </div>
        )}
      </section>
    </PageContainer>
  );
};

export default Projects;
