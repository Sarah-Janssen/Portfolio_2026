import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '@/types/project';
import Tag from '@/components/ui/Tag';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white border border-portfolio-accent/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-portfolio-accent/30">
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <Tag variant="tan">{project.category}</Tag>
          {project.themes?.slice(0, 2).map((theme) => (
            <Tag key={theme} variant="outline">{theme}</Tag>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-portfolio-text mb-2 group-hover:text-portfolio-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-portfolio-text/70 text-sm mb-6 line-clamp-2">
          {project.shortDescription}
        </p>
        
        <Link 
          to={`/projects/${project.slug}`}
          className="text-portfolio-accent font-medium text-sm flex items-center hover:underline"
        >
          Lees case study
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
