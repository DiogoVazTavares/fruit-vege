import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from './ProductList';
import { vi } from 'vitest';

// Mock the mockData
vi.mock('../../mock-data/mockData', () => ({
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
  beforeEach(() => {
    vi.restoreAllMocks();
  });

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

  it('pagination works correctly', () => {
    let pageToTest = 'Page 1 of 2';

    render(<ProductList activeProduct="fruit" searchQuery="" />);
    const paginationText = (_: string, node: Element | null) => {
      const hasText = (node: Element | null) => node?.textContent === pageToTest;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node?.children || []).every((child) => !hasText(child));

      return nodeHasText && childrenDontHaveText;
    };

    // Check initial page
    expect(screen.getByText(paginationText)).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.queryByText('Mango')).not.toBeInTheDocument();

    // Go to next page
    pageToTest = 'Page 2 of 2';
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText(paginationText)).toBeInTheDocument();
    expect(screen.getByText('Mango')).toBeInTheDocument();
    expect(screen.queryByText('Apple')).not.toBeInTheDocument();

    // Go back to previous page
    pageToTest = 'Page 1 of 2';
    fireEvent.click(screen.getByText('Previous'));
    expect(screen.getByText(paginationText)).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.queryByText('Mango')).not.toBeInTheDocument();
  });

  it('filters products based on search query', () => {
    render(<ProductList activeProduct="fruit" searchQuery="ap" />);

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.queryByText('Banana')).not.toBeInTheDocument();
    expect(screen.queryByText('Orange')).not.toBeInTheDocument();
    expect(screen.queryByText('Strawberry')).not.toBeInTheDocument();
    expect(screen.queryByText('Mango')).not.toBeInTheDocument();

    // Check pagination buttons
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
    expect(screen.queryByText('Previous')).not.toBeInTheDocument();
  });

  it('displays "No products found" message when search query yields no results', () => {
    render(<ProductList activeProduct="fruit" searchQuery="xyz" />);

    expect(screen.getByText('No products found')).toBeInTheDocument();
  });

  it('updates product list when activeProduct changes', () => {
    const { rerender } = render(<ProductList activeProduct="fruit" searchQuery="" />);

    expect(screen.getByText('Fruits')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();

    rerender(<ProductList activeProduct="vegetables" searchQuery="" />);

    expect(screen.getByText('Vegetables')).toBeInTheDocument();
    expect(screen.getByText('Carrot')).toBeInTheDocument();
    expect(screen.queryByText('Apple')).not.toBeInTheDocument();
  });
});
