import React from 'react';
import '../dist/product.css'
import { IoIosStar } from "react-icons/io";

const AfterRoomList = ({ arooms, onAroomClick }) => {
  return (
    <div className="product-list">   
      {arooms.map((aroom) => (
        <div className="cont-product">
        <div key={aroom.id} className="product-item" onClick={() => onAroomClick(aroom)}>
          <img src={aroom.image} alt={aroom.name} />
          <h2 className='text-product'>{aroom.name}</h2> 
          <h6><b>{aroom.price}</b></h6>
          <div className="rate-product">
          <IoIosStar color='orange' className='star'/> {aroom.rate}
          </div>
        </div>
        </div> 
      ))} 
      </div>
  );
};

export default AfterRoomList;