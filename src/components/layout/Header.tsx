import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Over mij', path: '/about' },
    { name: 'Projecten', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-portfolio-bg/80 backdrop-blur-md border-b border-portfolio-accent/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className="text-xl font-bold text-portfolio-accent"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sarah Janssen
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-bold tracking-wide transition-all hover:text-portfolio-accent ${
                      isActive 
                        ? 'text-portfolio-accent relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-portfolio-accent' 
                        : 'text-portfolio-text/60'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-portfolio-accent focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Menu sluiten" : "Menu openen"}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 text-base font-bold tracking-wide transition-all ${
                        isActive ? 'text-portfolio-accent' : 'text-portfolio-text/60'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
