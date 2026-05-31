import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary',
  className = '',
  ariaLabel
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-portfolio-accent text-white hover:opacity-90',
    secondary: 'bg-portfolio-secondary text-white hover:opacity-90',
    outline: 'border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/5',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={combinedClassName} aria-label={ariaLabel}>{children}</Link>;
  }

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName} aria-label={ariaLabel}>{children}</a>;
  }

  return (
    <button type="button" onClick={onClick} className={combinedClassName} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;
