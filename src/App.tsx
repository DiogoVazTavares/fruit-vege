import { useState } from 'react';
import Nav from './components/Nav';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header';

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
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <main className="flex flex-1">
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
