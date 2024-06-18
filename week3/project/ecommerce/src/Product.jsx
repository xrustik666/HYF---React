import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [id]);

  if (loading) return <p>...Loading info about the product...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className = "product-details">
      <h2>{product.title}</h2>
      <div className = "product-description">
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} />
      </div>
    </div>
  );
};

export default Product;