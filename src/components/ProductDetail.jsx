import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../dist/product.css';
import '../dist/review.css';
import { Container, Row, Col, Alert } from "react-bootstrap";
import { IoIosArrowBack, IoIosStar } from "react-icons/io";
import LoginPopup from '../pages/login&regis/LoginPage';
import ReviewList from './ReviewList'; // Pastikan ReviewList diupdate

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [stockError, setStockError] = useState('');
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError('Produk tidak ditemukan');
      } finally {
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/reviews', {
          params: { product_id: id } // Mengirim product_id sebagai query parameter
        });
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchProduct();
    fetchReviews();
  }, [id]);

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + increment;
      if (newQuantity > product.stock) {
        return product.stock;
      } else {
        return Math.max(1, newQuantity);
      }
    });
  };

  const handleAddToCart = async () => {
    const token = sessionStorage.getItem('auth_token');
    const userId = sessionStorage.getItem('user_id');
    if (!token || !userId) {
      setShowLoginPopup(true);
      return;
    }

    if (quantity > product.stock) {
      setStockError('Stok tidak mencukupi');
      return;
    }

    try {
      setAddingToCart(true);

      await axios.post('http://127.0.0.1:8000/api/shopping-carts', {
        user_id: userId,
        product_id: product.product_id,
        quantity: quantity
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setProduct((prevProduct) => ({
        ...prevProduct,
        stock: prevProduct.stock - quantity
      }));

      setTimeout(() => {
        setAddingToCart(false);
        navigate('/cart');
      }, 20);
    } catch (error) {
      console.error('Error menambahkan item ke keranjang', error);
      setAddingToCart(false);
    }
  };

  if (loading) {
    return (
      <div>
        <iframe 
          src="https://lottie.host/embed/dab1fdc9-95bd-43e5-a48f-a8c1337af734/bbtTW96qa6.json"
          style={{ border: 'none', width: '100%', height: '400px' }}
        ></iframe>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const subtotal = product.price * quantity;

  return (
    <Container>
      <div className="product-detail w-100">
        <Link to="/product">
          <IoIosArrowBack 
            size={40} 
            className='backIcon'
            onMouseOver={({target})=>target.style.color="var(--third-color)"}
            onMouseOut={({target})=>target.style.color="var(--secondary-color)"}
          />
        </Link>
        <div className="cardDet">
          <Row>
            <Col>
              <img src={product.image_url} alt={product.product_name} />
              <h1>{product.product_name}</h1>
              <div className="rate-det">
                <IoIosStar color='orange' className='star-det' /> {product.rate}
              </div>
              <p>{product.description}</p>
              <h2><b>{product.price}</b></h2>
            </Col>
          </Row>
          <Row className='side-det'>
            <Col className='jmlh'>
              <h5 className='atur'>Atur Jumlah</h5>
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <h5>{quantity}</h5>
              <button onClick={() => handleQuantityChange(1)}>+</button>
              <h5 className='stock'>Stok: {product.stock}</h5>
            </Col>
            <Row>
              <Col className='grs'>
                <hr />
                <h5>Subtotal: <b>{subtotal}</b></h5>
              </Col>
            </Row>
            <Col className='side-det-btn'>
              <button onClick={() => navigate('/checkout')}>Beli Sekarang</button>
              <button className='btn-cart' onClick={handleAddToCart}>+ Keranjang</button>
            </Col>
          </Row>
        </div>
        {addingToCart && (
          <div>
            <iframe 
              src="https://lottie.host/embed/dab1fdc9-95bd-43e5-a48f-a8c1337af734/bbtTW96qa6.json"
              style={{ border: 'none', width: '100%', height: '400px' }}
            ></iframe>
          </div>
        )}
        {stockError && (
          <Alert variant="danger" onClose={() => setStockError('')} dismissible>
            {stockError}
          </Alert>
        )}
        <ReviewList reviews={reviews} />
        <LoginPopup
          show={showLoginPopup}
          onHide={() => setShowLoginPopup(false)}
          onLogin={() => setShowLoginPopup(false)} // Handle login success
        />
      </div>
    </Container>
  );
};

export default ProductDetail;
