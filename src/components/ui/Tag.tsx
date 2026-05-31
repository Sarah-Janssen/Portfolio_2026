import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'sage' | 'tan' | 'outline';
}

const Tag: React.FC<TagProps> = ({ children, variant = 'sage' }) => {
  const variants = {
    sage: 'bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/20',
    tan: 'bg-portfolio-secondary/10 text-portfolio-secondary border-portfolio-secondary/20',
    outline: 'bg-transparent text-portfolio-text/60 border-portfolio-text/20',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Tag;
