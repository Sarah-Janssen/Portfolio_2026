import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Over mij', path: '/about' },
    { name: 'Projecten', path: '/projects' },
    { name: 'Overzicht', path: '/cv' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-portfolio-bg/80 backdrop-blur-md border-b border-portfolio-accent/10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-portfolio-accent">
          Sarah Janssen
        </NavLink>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-portfolio-accent ${
                    isActive ? 'text-portfolio-accent underline underline-offset-4' : 'text-portfolio-text/70'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
