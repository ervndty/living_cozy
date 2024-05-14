import {Container, Row, Col} from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode} from 'swiper/modules';
import { CgTrophy } from "react-icons/cg";
import { LuBadgeCheck } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import '../dist/home.css'

import furni1 from '../assets/furni1.jpg'
import furni2 from '../assets/furni2.jpg'
import furni3 from '../assets/furni3.jpg'
import furni4 from '../assets/furni4.jpg'
import furni5 from '../assets/furni5.jpg'

import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'
import product8 from '../assets/product8.png'

import inspi1 from '../assets/inspi1.jpg'
import inspi2 from '../assets/inspi2.jpg'
import inspi3 from '../assets/inspi3.jpg'
import inspi4 from '../assets/inspi4.jpg'
import inspi5 from '../assets/inspi5.jpg'
import inspi6 from '../assets/inspi6.jpg'
import inspi7 from '../assets/inspi7.jpg'
import inspi8 from '../assets/inspi8.jpg'
import inspi9 from '../assets/inspi9.jpg'

import rooms1 from '../assets/rooms1.jpg'
import rooms2 from '../assets/rooms2.jpg'
import rooms3 from '../assets/rooms3.jpg'


const HomePage = () => {
  return (
    <div className="homepage">
      <header className='w-100 min-vh-100'>
        
          <div className="bGreen"></div>
          <div className="bOrange"></div>

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
          <h1><b>High-Quality Furniture Just <br /> For You </b></h1>
          <p>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
          <button>Shop Now</button>
        </div>
        {/* kotak atas slideFoto */}
      </header>
      
      <div className="productH w-100 min-vh-100">
        <Container fluid="xl"  id="product" >
          <Row className='garansi'>
            <Col>
              <div className="iconG"><CgTrophy /></div>
              <h5>High Quality</h5>
              <p>crafted from top materials</p>
            </Col>
            <Col>
              <div className="iconG"><LuBadgeCheck /></div>
              <h5>Warrany Protection</h5>
              <p>over 2 years</p>
            </Col>
            <Col>
              <div className="iconG"><LiaShippingFastSolid /></div>
              <h5>Free Shipping</h5>
              <p>order over 150$</p>
            </Col>
            <Col>
              <div className="iconG"><BiSupport /></div>
              <h5>24/7 Support</h5>
              <p>dedicated support</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="kotakP">
                <img src={product1} alt="product1" className='p1'/>
                <p><b>Comfortable Chair</b></p>
                <p>Rp 500.000</p>
                <div className="star"><IoIosStar color='orange'/><IoIosStar color='orange'/><IoIosStar color='orange'/>
                <IoIosStar color='orange'/><IoIosStar color='orange'/></div>
              </div>
            </Col>
            <Col>
              <div className="kotakP">
              <img src={product3} alt="product1" className='p3'/>
                <p><b>Wodden Table</b></p>
                <p>Rp 500.000</p>
                <div className="star"><IoIosStar color='orange'/><IoIosStar color='orange'/><IoIosStar color='orange'/>
                <IoIosStar color='orange'/><IoIosStar color='orange'/></div>
              </div>
            </Col>
            <Col>
              <div className="kotakP">
              <img src={product5} alt="product1" className='p5'/>
                <p><b>Fine Wood Drawers</b></p>
                <p>Rp 500.000</p>
                <div className="star"><IoIosStar color='orange'/><IoIosStar color='orange'/><IoIosStar color='orange'/>
                <IoIosStar color='orange'/><IoIosStar color='orange'/></div>
              </div>
            </Col>
            <Col>
              <div className="kotakP">
              <img src={product7} alt="product1" className='p7'/>
                <p><b>Ash Sofa</b></p>
                <p>Rp 500.000</p>
                <div className="star"><IoIosStar color='orange'/><IoIosStar color='orange'/><IoIosStar color='orange'/>
                <IoIosStar color='orange'/><IoIosStar color='orange'/></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="kotakP">
              <img src={product2} alt="product1" className='p2'/>
                <p><b>Rattan Chair</b></p>
                <p>Rp 500.000</p>
                <div className="star"><IoIosStar color='orange'/><IoIosStar color='orange'/><IoIosStar color='orange'/>
                <IoIosStar color='orange'/><IoIosStar color='orange'/></div>
              </div>
            </Col>
            <Col>
              <div className="kotakP">
              <img src={product4} alt="product1" className='p4'/>
                <p><b>Black Table Glass</b></p>
                <p>Rp 500.000</p>
                <div className="star"><IoIosStar color='orange'/><IoIosStar color='orange'/><IoIosStar color='orange'/>
                <IoIosStar color='orange'/><IoIosStar color='orange'/></div>
              </div>
            </Col>
            <Col>
              <div className="kotakP">
              <img src={product6} alt="product1" className='p6'/>
                <p><b>Japanese Wooden Shelf</b></p>
                <p>Rp 500.000</p>
                <div className="star"><IoIosStar color='orange'/><IoIosStar color='orange'/><IoIosStar color='orange'/>
                <IoIosStar color='orange'/><IoIosStar color='orange'/></div>
              </div>
            </Col>
            <Col>
              <div className="kotakP">
              <img src={product8} alt="product1" className='p8'/>
                <p><b>Modern White Shelf</b></p>
                <p>Rp 500.000</p>
                <div className="star"><IoIosStar color='orange'/><IoIosStar color='orange'/><IoIosStar color='orange'/>
                <IoIosStar color='orange'/><IoIosStar color='orange'/></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>  

      <div className="inspirationH w-100">
        <Container fluid id="inspirations">
          <Row xs={1} className='titleIns'>
            <Col><h1>50+ Beautiful rooms <br />inspiration</h1></Col>
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
            <Col><p>Our designer already made a lot of beautiful <br />
                    prototipe of rooms that inspire you</p></Col>
            <Col><button>Explore More</button></Col>
          </Row>
      </Container>
      </div> 

      <div className="roomsH w-100">
        <Container id="rooms">
          <Row>
            <Col><h1><b>Rooms</b></h1></Col>
          </Row>
          <Row>
            <Col>
              <div className="kotakR">
                <img src={rooms1} alt="rooms1"/>
              </div>
              <div className="bulletR"><b>1.</b></div>
              <h5><b>Ruang Kerja</b></h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nulla fugit.</p>
            </Col>
            <Col>
              <div className="kotakR">
                <img src={rooms2} alt="rooms1"/>
              </div>
              <div className="bulletR"><b>2.</b></div>
              <h5><b>Ruang Dapur</b></h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nulla fugit.</p>
            </Col>
            <Col>
              <div className="kotakR">
                <img src={rooms3} alt="rooms1"/>
              </div>
              <div className="bulletR"><b>3.</b></div>
              <h5><b>Ruang Keluarga</b></h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nulla fugit.</p>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default HomePage
