import { useState } from 'react';
import Nav from './components/Nav';
import ProductList from './components/ProductList';

type ProductType = 'fruit' | 'vegetables';

function App() {
  const [activeProduct, setActiveProduct] = useState<ProductType>('fruit');

  return (
    <main className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <Nav activeProduct={activeProduct} setActiveProduct={setActiveProduct} />
      </aside>
      <section className="flex-1 p-4">
        <ProductList activeProduct={activeProduct} />
      </section>
    </main>
  );
}

export default App;
