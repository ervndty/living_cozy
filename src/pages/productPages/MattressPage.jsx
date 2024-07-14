import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavbarComp from "../../components/NavbarComp"
import ProductList from '../../components/ProductList.jsx';

import '../../dist/product.css'



const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of Product 2',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description of Product 3',
    image: 'https://via.placeholder.com/150'
  }
];


const MattressPage = () => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <div>
      <NavbarComp />
      <div className="recommended">
          <h2 className="recommended-title">Recommended</h2>
          <div className="recommended-flex">
            <button className='btn'>All Products</button>
            <button className='btn'>Chairs</button>
            <button className='btn'>Tables</button>
            <button className='btn'>Mattress</button>
            <button className='btn'>Shelf</button>
            <input type="button" value="" />
          </div>
      </div>
      <ProductList products={products} onProductClick={handleProductClick} />
    </div>
  );
}

export default MattressPage