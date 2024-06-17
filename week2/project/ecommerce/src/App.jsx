import { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Categories from './Categories';
import Products from './Products';
import Product from './Product';

import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(false);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const [errorCategories, setErrorCategories] = useState(false);
  const [errorProducts, setErrorProducts] = useState(false);
  const [errorMessageCategories, setErrorMessageCategories] = useState('');
  const [errorMessageProducts, setErrorMessageProducts] = useState('');

  // Download categories by API
  const fetchCategories = async () => {
    setLoadingCategories(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setErrorCategories(true);
      setErrorMessageCategories(error.message);
    } finally {
      setLoadingCategories(false);
    }
  };

  // Download products by API (based on a category that someone chooses)
  const fetchProducts = async () => {
    setLoadingProducts(true);
    const url = selectedCategory 
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : 'https://fakestoreapi.com/products';

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error fetching products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setErrorProducts(true);
      setErrorMessageProducts(error.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchProducts(selectedCategory);
    } else fetchProducts();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <h1>Products</h1>
              {loadingCategories ? (
                <p>Loading categories...</p>
              ) : errorCategories ? (
                <p>{errorMessageCategories}</p>
              ) : (
                <Categories
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryClick={handleCategoryClick}
                />
              )}
              {loadingProducts ? (
                <p>Loading products...</p>
              ) : errorProducts ? (
                <p>{errorMessageProducts}</p>
              ) : (
                <Products products={products} />
              )}
            </>
          } />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;