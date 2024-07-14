import { Container, Row, Col, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { CgTrophy } from 'react-icons/cg';
import { LuBadgeCheck } from 'react-icons/lu';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { BiSupport } from 'react-icons/bi';
import { IoIosStar } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import '../dist/home.css';

import furni1 from '../assets/furni1.jpg';
import furni2 from '../assets/furni2.jpg';
import furni3 from '../assets/furni3.jpg';
import furni4 from '../assets/furni4.jpg';
import furni5 from '../assets/furni5.jpg';

import inspi1 from '../assets/inspi1.jpg';
import inspi2 from '../assets/inspi2.jpg';
import inspi3 from '../assets/inspi3.jpg';
import inspi4 from '../assets/inspi4.jpg';
import inspi5 from '../assets/inspi5.jpg';
import inspi6 from '../assets/inspi6.jpg';
import inspi7 from '../assets/inspi7.jpg';
import inspi8 from '../assets/inspi8.jpg';
import inspi9 from '../assets/inspi9.jpg';

import NavbarComp from '../components/NavbarComp';
import RoomsList from '../components/RoomsList.jsx';

const rooms = [
  {
    id: 1,
    image: 'https://i.pinimg.com/236x/1b/b0/0a/1bb00aa188fb8f3a70c5e4e372056a62.jpg',
    nomor: 1,
    nama: 'Ruang Kerja',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nulla fugit.',
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSORZ4wIgK6px8D31GraFtx6cnakwn5YIgpNQTOwzfPDa-8_PMi',
    nomor: 2,
    nama: 'Ruang Dapur',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nulla fugit.',
  },
  {
    id: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_TBfvIwGsnVXBhH0Ckzl5KGZd-o1OiFDjn5T3Lbt54uPfxtL',
    nomor: 3,
    nama: 'Ruang Keluarga',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nulla fugit.',
  },
];

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false); // Tambahkan state loading
  const [error, setError] = useState(null); // Tambahkan state error
  const navigate = useNavigate();

  const goToPayment = () => {
    navigate('/product');
  };

  const goToInspiration = () => {
    navigate('/inspiration');
  };

  const handleRoomsClick = (room) => {
    navigate(`/Rdetail/${room.id}`);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]); // Fetch products whenever the page state changes

  const fetchProducts = async () => {
    
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/products?limit=8&page=${page}`);
      const newProducts = response.data.data;

      setProducts((prevProducts) => {
        const productIds = new Set(prevProducts.map((product) => product.product_id));
        const uniqueNewProducts = newProducts.filter((product) => !productIds.has(product.product_id));

        return [...prevProducts, ...uniqueNewProducts];
      });

      setHasMore(response.data.current_page < response.data.last_page);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  const loadMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleProductClick = (product) => {
    navigate(`/Pdetail/${product.product_id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  

  return (
    <div className="homepage">
      <NavbarComp />
      <header className="w-100 min-vh-100">
        <div className="bGreen"></div>

        <div className="sub-menu">
          <p>
            <a className="steal" href="#product">
              🧨Steal Deals!
            </a>
            <a href="#inspirations">inspiration</a>
            <a href="#rooms">rooms</a>
          </p>
          <center>
            <hr />
          </center>
        </div>

        {/* slideFoto */}
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={furni1} alt="sliderimg1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={furni2} alt="sliderimg2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={furni3} alt="sliderimg2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={furni4} alt="sliderimg2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={furni5} alt="sliderimg2" />
          </SwiperSlide>
        </Swiper>
        {/* slideFoto */}

        {/* kotak atas slideFoto */}
        <div className="kotak1">
          <h1>
            <b>
              High-Quality Furniture Just <br /> For You{' '}
            </b>
          </h1>
          <p>
            Our furniture is made from selected and best quality materials that are suitable for
            your dream home
          </p>
          <button onClick={() => goToPayment()}>Shop Now</button>
        </div>
        {/* kotak atas slideFoto */}
      </header>

      {/* warranty */}
      <div className="productH w-100 min-vh-100">
        <Container fluid="xl" id="product">
          <Row className="garansi">
            <Col>
              <div className="iconG">
                <CgTrophy />
              </div>
              <h5>High Quality</h5>
              <p>crafted from top materials</p>
            </Col>
            <Col>
              <div className="iconG">
                <LuBadgeCheck />
              </div>
              <h5>Warrany Protection</h5>
              <p>over 2 years</p>
            </Col>
            <Col>
              <div className="iconG">
                <LiaShippingFastSolid />
              </div>
              <h5>Free Shipping</h5>
              <p>order over 150$</p>
            </Col>
            <Col>
              <div className="iconG">
                <BiSupport />
              </div>
              <h5>24/7 Support</h5>
              <p>dedicated support</p>
            </Col>
          </Row>
          {/* warranty */}

          {/* produk tawaran */}
          <Row>
            {products.map((product, index) => (
              <Col key={product.product_id}>
                <div className="kotakP" onClick={() => handleProductClick(product)}>
                  <img src={product.image_url} alt={product.product_name} className="product-img" />
                  <p>
                    <b>{product.product_name}</b>
                  </p>
                  <p>Rp {product.price}</p>
                  <div className="star">
                    {[...Array(5)].map((_, i) => (
                      <IoIosStar key={i} color="orange" />
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {hasMore && (
            <Row>
              <Col>
                <Button onClick={loadMoreProducts}>View More</Button>
              </Col>
            </Row>
          )}
        </Container>
      </div>
      {/* produk tawaran */}

      {/* inspirasi ruangan */}
      <div className="inspirationH w-100">
        <Container fluid id="inspirations">
          <Row xs={1} className="titleIns">
            <Col>
              <h1>
                50+ Beautiful rooms <br />
                inspiration
              </h1>
            </Col>
            <Col>
              {/* slideFoto Inspiration */}
              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper swiper2"
              >
                <SwiperSlide>
                  <img src={inspi1} alt="sliderInspi1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={inspi2} alt="sliderInspi2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={inspi3} alt="sliderInspi3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={inspi4} alt="sliderInspi4" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={inspi5} alt="sliderInspi5" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={inspi6} alt="sliderInspi6" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={inspi7} alt="sliderInspi7" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={inspi8} alt="sliderInspi8" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={inspi9} alt="sliderInspi9" />
                </SwiperSlide>
              </Swiper>
              {/* slideFoto Inspiration */}
            </Col>
            <Col>
              <p>
                Our designer already made a lot of beautiful <br />
                prototipe of rooms that inspire you
              </p>
            </Col>
            <Col>
              <button onClick={() => goToInspiration()}>Explore More</button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* inspirasi ruangan */}

      {/* rooms */}
      <div className="roomsH w-100">
        <RoomsList rooms={rooms} onRoomsClick={handleRoomsClick} />
      </div>
      {/* rooms */}
    </div>
  );
};

export default HomePage;