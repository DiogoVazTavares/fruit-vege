import { useState } from 'react';
import { mockData } from '../mock-data/mockData';
import ProductCard from './ProductCard';

type ProductType = 'fruit' | 'vegetables';

interface ProductListProps {
  activeProduct: ProductType;
}

const ProductList = ({ activeProduct }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const products = mockData[activeProduct];
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="flex-1 p-4">
      <h1 className="text-3xl font-bold mb-4">{activeProduct === 'fruit' ? 'Fruits' : 'Vegetables'}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            unit={product.unit}
            image={product.image}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProductList;
