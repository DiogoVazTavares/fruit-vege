import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

describe('', () => {
  const mockProduct = {
    name: 'Apple',
    price: 1.99,
    unit: 'kg',
    image: '/images/apple.jpg',
  };

  it('renders product information correctly', () => {
    render(<ProductCard {...mockProduct} />);

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('$1.99 per kg')).toBeInTheDocument();
    const image = screen.getByRole('img') as HTMLImageElement;
    expect(image).toHaveAttribute('src', '/images/apple.jpg');
    expect(image).toHaveAttribute('alt', 'Apple');
  });
});
