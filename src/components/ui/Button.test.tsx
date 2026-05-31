import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Button from './Button';

describe('Button Component', () => {
  it('renders a button when no to/href is provided', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('renders a Link when "to" is provided', () => {
    render(
      <BrowserRouter>
        <Button to="/about">About</Button>
      </BrowserRouter>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/about');
  });

  it('renders an anchor when "href" is provided', () => {
    render(<Button href="https://google.com">Google</Button>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://google.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
