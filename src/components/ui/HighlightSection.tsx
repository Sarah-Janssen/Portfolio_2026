import React from 'react';

interface HighlightSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const HighlightSection: React.FC<HighlightSectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={`bg-portfolio-accent/5 py-20 md:py-32 ${className}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-portfolio-text">{title}</h2>
        <div className="text-lg text-portfolio-text/80 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
