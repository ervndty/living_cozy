import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import NavbarComp from '../../components/NavbarComp';
import ProductList from '../../components/ProductList';
import '../../dist/product.css';

const ProductsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const params = new URLSearchParams(location.search);
      const category = params.get('category');
      let url = 'http://127.0.0.1:8000/api/products';
      if (category && category !== 'all') {
        url += `?category=${category}`;
      }

      try {
        const response = await axios.get(url);
        setProducts(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]);

  const handleProductClick = (product) => {
    navigate(`/Pdetail/${product.product_id}`);
  };

  const handleCategoryClick = (category) => {
    navigate(`/product?category=${category}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <NavbarComp />
      <div className="recommended">
        <div className="recommended-flex">
          <button className='btn' onClick={() => handleCategoryClick('all')}>All Products</button>
          <button className='btn' onClick={() => handleCategoryClick('chairs')}>Chairs</button>
          <button className='btn' onClick={() => handleCategoryClick('tables')}>Tables</button>
          <button className='btn' onClick={() => handleCategoryClick('mattress')}>Mattress</button>
          <button className='btn' onClick={() => handleCategoryClick('shelf')}>Shelf</button>
        </div>
      </div>
      <div>
        <ProductList products={products} onProductClick={handleProductClick} />
      </div>
    </div>
  );
};

export default ProductsPage;
