import { useState } from 'react';

import categories from './fake-data/all-categories';
import products from './fake-data/all-products';

import Categories from './categories';
import Products from './products';

import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(product => {
    return `FAKE: ${product.category}` === selectedCategory;
  });

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <Products products={filteredProducts} />
    </div>
  );
};

export default App;