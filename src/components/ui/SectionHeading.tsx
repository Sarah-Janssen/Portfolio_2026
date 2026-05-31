import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  level?: 'h1' | 'h2';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '',
  level = 'h2'
}) => {
  const HeadingTag = level;
  const headingStyles = level === 'h1' ? 'text-4xl md:text-5xl' : 'text-3xl';

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <HeadingTag className={`${headingStyles} font-bold text-portfolio-text mb-4`}>{title}</HeadingTag>
      {subtitle && <p className={`text-lg text-portfolio-text/60 max-w-2xl ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
