import React from 'react';

interface InterestCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const InterestCard: React.FC<InterestCardProps> = ({ title, description, icon }) => {
  return (
    <div className="p-8 bg-white border border-portfolio-accent/10 rounded-lg hover:border-portfolio-accent/30 hover:shadow-sm transition-all duration-300 animate-slide-up">
      {icon && <div className="mb-4 text-portfolio-accent">{icon}</div>}
      <h3 className="text-xl font-bold text-portfolio-text mb-3">{title}</h3>
      <p className="text-portfolio-text/60 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default InterestCard;
