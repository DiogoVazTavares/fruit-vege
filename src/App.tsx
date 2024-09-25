import { useState } from 'react';
import Nav from './components/Nav';
import ProductList from './components/ProductList';

type ProductType = 'fruit' | 'vegetables';

function App() {
  const [activeProduct, setActiveProduct] = useState<ProductType>('fruit');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm('');
    setSearchQuery(searchTerm);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-600 text-white p-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 sm:mb-0">Your favourite fruit&vege store</h1>
          <form onSubmit={handleSearch} className="w-full sm:w-auto">
            <div className="flex">
              <input
                type="text"
                placeholder="Search products...."
                className="w-full px-3 py-2 text-gray-700 border rounded-lg"
                value={searchTerm}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
                Search
              </button>
            </div>
          </form>
        </div>
      </header>
      <main className="flex min-h-screen">
        <aside className="w-64 bg-gray-100 p-4">
          <Nav activeProduct={activeProduct} setActiveProduct={setActiveProduct} />
        </aside>
        <section className="flex-1 p-8">
          <ProductList activeProduct={activeProduct} searchQuery={searchQuery} />
        </section>
      </main>
    </div>
  );
}

export default App;
