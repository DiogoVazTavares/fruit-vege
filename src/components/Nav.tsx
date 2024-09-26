import { Dispatch, SetStateAction } from 'react';

type ProductType = 'fruit' | 'vegetables';

type NavProps = {
  activeProduct: ProductType;
  setActiveProduct: Dispatch<SetStateAction<ProductType>>;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

const Nav = ({ activeProduct, setActiveProduct, setSearchQuery, setSearchTerm }: NavProps) => {
  const handleOnClick = (product: ProductType) => {
    setActiveProduct(product);
    setSearchQuery('');
    setSearchTerm('');
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <nav className="space-y-2">
        <button
          className={`w-full p-2 rounded ${activeProduct === 'fruit' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleOnClick('fruit')}
        >
          Fruits
        </button>
        <button
          className={`w-full p-2 rounded ${activeProduct === 'vegetables' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleOnClick('vegetables')}
        >
          Vegetables
        </button>
      </nav>
    </>
  );
};

export default Nav;
