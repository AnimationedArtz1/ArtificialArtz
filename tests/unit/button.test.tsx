import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Tap</Button>);
    fireEvent.click(screen.getByRole('button', { name: /tap/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
