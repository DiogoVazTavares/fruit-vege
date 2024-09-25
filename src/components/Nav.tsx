import { Dispatch, SetStateAction } from 'react';

type ProductType = 'fruit' | 'vegetables';

interface NavProps {
  activeProduct: ProductType;
  setActiveProduct: Dispatch<SetStateAction<ProductType>>;
}

const Nav = ({ activeProduct, setActiveProduct }: NavProps) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Product Type</h2>
      <nav className="space-y-2">
        <button
          className={`w-full p-2 rounded ${activeProduct === 'fruit' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveProduct('fruit')}
        >
          Fruits
        </button>
        <button
          className={`w-full p-2 rounded ${activeProduct === 'vegetables' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveProduct('vegetables')}
        >
          Vegetables
        </button>
      </nav>
    </>
  );
};

export default Nav;
