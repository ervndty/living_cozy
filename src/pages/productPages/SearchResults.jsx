import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductList from '../../components/ProductList.jsx';
import NavbarComp from '../../components/NavbarComp.jsx';
import '../../dist/home.css';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchResults = async () => {
      const queryParams = new URLSearchParams(location.search);
      const query = queryParams.get('query');
      const minPrice = queryParams.get('min_price');
      const maxPrice = queryParams.get('max_price');

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products', {
          params: {
            search: query,
            min_price: minPrice,
            max_price: maxPrice,
          }
        });
        setProducts(response.data.data);
      } catch (error) {
        console.error('Failed to fetch search results', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [location.search]);

  const handleProductClick = (product) => {
    navigate(`/Pdetail/${product.product_id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavbarComp />
      <div className="search-pro">
        {products.length > 0 ? (
          <ProductList products={products} onProductClick={handleProductClick} />
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
