import React from 'react';

interface TimelineItem {
  period: string;
  title: string;
  description: string;
  tags?: string[];
}

const items: TimelineItem[] = [
  {
    period: 'Basis',
    title: 'Grafisch Ontwerp',
    description: 'De start van mijn creatieve basis en visueel denken.',
  },
  {
    period: 'Vroegere Ervaring',
    title: 'Retail & Organisatie',
    description: 'Focus op klantgericht werken, verantwoordelijkheid en procesmatig organiseren.',
  },
  {
    period: 'Structuur',
    title: 'Medische Administratie',
    description: 'Ervaring opbouwen in een strikt gestructureerde en nauwkeurige omgeving.',
  },
  {
    period: 'De Switch',
    title: 'Omscholing naar IT',
    description: 'De bewuste keuze om mijn analytische vaardigheden technisch te onderbouwen.',
  },
  {
    period: 'Portugal (Erasmus)',
    title: 'Water Data Platform',
    description: 'Mijn eerste grote IT-project: Django, PostgreSQL en Grafana in een internationale setting.',
    tags: ['Django', 'PostgreSQL', 'Docker', 'Grafana']
  },
  {
    period: 'Heden',
    title: 'Functioneel Analist',
    description: 'Blijvend groeien, bouwen en structureren op het snijvlak van mens en technologie.',
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="relative border-l border-portfolio-accent/20 ml-4 md:ml-0 md:pl-0">
      {items.map((item, index) => (
        <div key={index} className="mb-12 ml-6 relative">
          <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-portfolio-accent border-4 border-portfolio-bg shadow-sm" />
          <span className="text-xs font-bold uppercase tracking-widest text-portfolio-accent/60 mb-1 block">
            {item.period}
          </span>
          <h3 className="text-xl font-bold text-portfolio-text mb-2">{item.title}</h3>
          <p className="text-portfolio-text/70 leading-relaxed max-w-2xl">
            {item.description}
          </p>
          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tags.map(tag => (
                <span key={tag} className="text-[10px] bg-portfolio-accent/5 text-portfolio-accent px-2 py-0.5 rounded border border-portfolio-accent/10 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
