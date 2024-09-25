import { useState } from 'react';
import { mockData } from './mock-data/mockData';

type ProductType = 'fruit' | 'vegetables';

function ProductCard({ name, price, unit, image }: { name: string; price: number; unit: string; image: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <p className="text-gray-700">
          ${price.toFixed(2)} per {unit}
        </p>
      </div>
    </div>
  );
}

function App() {
  const [activeProduct, setActiveProduct] = useState<ProductType>('fruit');

  return (
    <main className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Product Type</h2>
        <div className="space-y-2">
          <button
            className={`w-full p-2 rounded ${activeProduct === 'fruit' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveProduct('fruit')}
          >
            Fruits
          </button>
          <button
            className={`w-full p-2 rounded ${
              activeProduct === 'vegetables' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setActiveProduct('vegetables')}
          >
            Vegetables
          </button>
        </div>
      </aside>
      <section className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">{activeProduct === 'fruit' ? 'Fruits' : 'Vegetables'}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockData[activeProduct].map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              unit={product.unit}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
