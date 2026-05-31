import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-portfolio-bg border-t border-portfolio-accent/10 py-12 mt-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-portfolio-text/60">
        <p>© {new Date().getFullYear()} Sarah Janssen | Analyse · Structuur · Digitale oplossingen</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/sarah-janssen-27566a266/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent transition-colors">LinkedIn</a>
          <a href="https://github.com/Sarah-Janssen" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent transition-colors">GitHub</a>
          <a href="mailto:janssen.sarah1991@gmail.com" className="hover:text-portfolio-accent transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
