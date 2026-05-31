import React from 'react';

interface ProcessStep {
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  { title: 'Begrijpen', description: 'Het doorgronden van de essentie van een complex vraagstuk.' },
  { title: 'Structureren', description: 'Chaos omzetten in heldere kaders en logische verbanden.' },
  { title: 'Vereenvoudigen', description: 'De kern overhouden door overbodige complexiteit te verwijderen.' },
  { title: 'Realiseren', description: 'Ideeën vertalen naar werkende, praktische oplossingen.' },
  { title: 'Verbeteren', description: 'Blijven leren en optimaliseren op basis van inzichten.' },
];

const ProcessFlow: React.FC = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex flex-col items-center text-center group">
            {/* Step Number/Circle */}
            <div className="w-12 h-12 rounded-full bg-portfolio-accent/10 border-2 border-portfolio-accent/30 flex items-center justify-center text-portfolio-accent font-bold mb-4 group-hover:bg-portfolio-accent group-hover:text-white transition-all duration-300">
              {index + 1}
            </div>
            
            {/* Connector Line (Desktop) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-portfolio-accent/10 -z-10" />
            )}
            
            <h3 className="font-bold text-lg mb-2 text-portfolio-text">{step.title}</h3>
            <p className="text-sm text-portfolio-text/60 leading-relaxed px-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
