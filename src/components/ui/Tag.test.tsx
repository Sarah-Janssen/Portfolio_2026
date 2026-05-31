import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Tag from './Tag';

describe('Tag Component', () => {
  it('renders children correctly', () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('applies the correct variant classes', () => {
    const { container } = render(<Tag variant="tan">AI</Tag>);
    const span = container.querySelector('span');
    expect(span).toHaveClass('text-portfolio-secondary');
  });
});
