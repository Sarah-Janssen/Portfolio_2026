import React, { useState } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Seo from '@/components/seo/Seo';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/project/ProjectCard';
import { projects } from '@/data/projects';
import type { ProjectFilterCategory } from '@/types/project';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory | 'Alles'>('Alles');

  const filters: (ProjectFilterCategory | 'Alles')[] = ['Alles', 'Project', 'Leerervaring', 'Meetup'];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'Alles' || project.filterCategory === activeFilter
  );

  return (
    <PageContainer>
      <Seo 
        title="Projecten | Sarah Janssen" 
        description="Bekijk mijn werk, leerervaringen en meetups op het vlak van analyse, software en AI." 
      />
      
      <section className="container mx-auto px-4 py-20 md:py-32 animate-fade-in">
        <SectionHeading 
          title="Projecten & Ervaringen" 
          level="h1"
          subtitle="Een overzicht van cases die mijn manier van denken en werken illustreren."
          centered
        />
        
        {/* V2.4 Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === filter 
                  ? 'bg-portfolio-accent text-white border-portfolio-accent shadow-md scale-105' 
                  : 'bg-white text-portfolio-text/60 border-portfolio-accent/10 hover:border-portfolio-accent/30'
              }`}
            >
              {filter === 'Alles' ? 'Alles tonen' : `${filter}en`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-20 text-center text-portfolio-text/40 italic">
            Geen items gevonden voor deze categorie.
          </div>
        )}
      </section>
    </PageContainer>
  );
};

export default Projects;
