import React from 'react';
import '../dist/product.css'
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const arooms = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      image: 'https://i.pinimg.com/236x/23/04/83/23048382e1d6cb6f56cf4ae3ea301b2c.jpg',
      price: 'Rp300.000',
      rate: '4,9'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      image: 'https://i.pinimg.com/736x/51/2d/ff/512dff1b60dcf5dc91367e20e0839e79.jpg',
      price: 'Rp400.000',
      rate: '4,5'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      image: 'https://i.pinimg.com/736x/be/d0/4b/bed04b3058225693d3393f1502ba2676.jpg',
      price: 'Rp250.000',
      rate: '4,7'
    }
];

const AfterRoomsDetail = () => {
    const { id } = useParams();
    const aroom = arooms.find((aroom) => aroom.id === parseInt(id));
  
    if (!aroom) {
      return <h2>Product not found</h2>;
    }
  
    return (
      <Container>
      <div className="product-detail w-100">
          <Link to="/" >
          <IoIosArrowBack size={40} className='backIcon'
          onMouseOver={({target})=>target.style.color="var(--third-color)"}
          onMouseOut={({target})=>target.style.color="var(--secondary-color)"}/>
          </Link>
          <div className="cardDet">
            <Row>
              <Col>
                <img src={aroom.image} alt={aroom.name} />
                <h1>{aroom.name}</h1>
                <div className="rate-det">
                <IoIosStar color='orange' className='star-det'/> {aroom.rate}
                </div>
                <h2><b>{aroom.price}</b></h2>
                <p>{aroom.description}</p>
              </Col>
            </Row>
            <Row className='side-det'>
              <Col className='jmlh'>
                <h5 className='atur'>Atur Jumlah</h5>
                <button>+</button> 
                <h5>0</h5>
                <button>-</button>
              </Col>
                <Row>
                  <Col className='grs'>
                    <hr />
                    <h5>Subtotal: <b>{aroom.price}</b></h5>
                  </Col>
                </Row>
              <Col className='side-det-btn'>
                <button>Beli Sekarang</button>
                <button className='btn-cart'>+ Keranjang</button>
              </Col>
            </Row>
          </div>
      </div>
      </Container>
    );
  };
  
  export default AfterRoomsDetail;