import React from 'react';
import '../dist/product.css';
import { IoIosStar } from "react-icons/io";

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.product_id} className="cont-product">
          <div className="product-item" onClick={() => onProductClick(product)}>
            <img src={product.image_url} alt={product.product_name} />
            <h2 className='text-product'>{product.product_name}</h2>
            <h6><b>{product.price}</b></h6>
            <div className="rate-product">
              <IoIosStar color='orange' className='star' /> {product.rate || 0} {/* Add rate if available */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
