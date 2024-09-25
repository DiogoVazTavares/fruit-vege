import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from './ProductList';
import { vi } from 'vitest';

// Mock the mockData
vi.mock('../mock-data/mockData', () => ({
  mockData: {
    fruit: [
      { id: 1, name: 'Apple', price: 1.99, unit: 'kg', image: 'apple.jpg' },
      { id: 2, name: 'Banana', price: 0.99, unit: 'kg', image: 'banana.jpg' },
      { id: 3, name: 'Orange', price: 2.49, unit: 'kg', image: 'orange.jpg' },
      { id: 4, name: 'Strawberry', price: 3.99, unit: 'kg', image: 'strawberry.jpg' },
      { id: 5, name: 'Mango', price: 2.99, unit: 'kg', image: 'mango.jpg' },
    ],
    vegetables: [
      { id: 1, name: 'Carrot', price: 1.49, unit: 'kg', image: 'carrot.jpg' },
      { id: 2, name: 'Broccoli', price: 2.99, unit: 'kg', image: 'broccoli.jpg' },
      { id: 3, name: 'Tomato', price: 2.79, unit: 'kg', image: 'tomato.jpg' },
      { id: 4, name: 'Cucumber', price: 1.99, unit: 'kg', image: 'cucumber.jpg' },
      { id: 5, name: 'Lettuce', price: 1.79, unit: 'kg', image: 'lettuce.jpg' },
    ],
  },
}));

describe('', () => {
  it('renders fruit list correctly', () => {
    render(<ProductList activeProduct="fruit" searchQuery="" />);

    expect(screen.getByText('Fruits')).toBeInTheDocument();
    expect(screen.getByText('Fruits')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Orange')).toBeInTheDocument();
    expect(screen.getByText('Strawberry')).toBeInTheDocument();
    expect(screen.queryByText('Mango')).not.toBeInTheDocument();
  });

  it('renders vegetables list correctly', () => {
    render(<ProductList activeProduct="vegetables" searchQuery="" />);

    expect(screen.getByText('Vegetables')).toBeInTheDocument();
    expect(screen.getByText('Carrot')).toBeInTheDocument();
    expect(screen.getByText('Broccoli')).toBeInTheDocument();
    expect(screen.getByText('Tomato')).toBeInTheDocument();
    expect(screen.getByText('Cucumber')).toBeInTheDocument();
    expect(screen.queryByText('Lettuce')).not.toBeInTheDocument();
  });
});
