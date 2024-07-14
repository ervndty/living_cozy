import {Container, Row, Col} from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom';
import NavbarComp from "../components/NavbarComp"


// import promo1 from '../assets/promo1.png'
import promo2 from '../assets/promo2.png'
import promo3 from '../assets/promo3.png'
import promo4 from '../assets/promo4.png'
import '../dist/promo.css'


  
const PromoPage = () => {
  // let navigate = useNavigate();
  return (
        <div className="promo">
        <NavbarComp />
          <div className='Intro'>
        <Container className='text-black text-left d-flex
        justify-content-left alight-item-left'>
          <Row>
            <Col>
                <h1>Promo/Penawaran</h1>
                <>Selamat datang di promo/penawaran Living Cozy, 
                        bisa dilihat dibawah apa saja promonya 👍</>
            </Col>
          </Row>
        </Container>
        <hr className='hr'></hr>
        <Container>
          <Row>              
          <div className="product">
            <div className="PRO">
              <h5>Promo PRODUCT</h5>
            </div>
          </div>
            <Col md={4} className='productPro'>
              <card className ="productImage text-left">
              <img src={promo2} alt="promo2" className='image'/>
              <div className="Promo2">
                <div className='content-section'>
                    {/* <button onClick={() => navigate('/isi')}>Selengkapnya.</button> */}
                </div>
              </div>
              </card>
            </Col>
            <Col md={4} className='productPro'>
              <card className ="productImage text-left">
              <img src={promo3} alt="promo3" className='image'/>
              <div className="Promo2">
                <div className='content-section'>
                {/* <button onClick={() => navigate('/isi')}>Selengkapnya.</button> */}
                </div>
              </div>
              </card>
            </Col>
          </Row>
          <Row>
          <Col md={4} className='productPro'>
              <card className ="productImage text-left">
              <img src={promo4} alt="promo2" className='imagePro'/>
              <div className="Promo2">
                <div className='content-section'>
                {/* <button onClick={() => navigate('/isi')}>Selengkapnya.</button> */}
                </div>
              </div>
              </card>
            </Col>
          </Row>
        </Container>
        <hr className='hr'></hr>
        <Container>
          <Row>
          <div className="ROM">
            <h5>Promo ROOMS</h5>
          </div>
            <Col md={4} className='productPro'>
              <card className ="productImage text-left">
              <img src={promo4} alt="promo2" className='imagePro'/>
              <div className="Promo2">
                <div className='content-section'>
                {/* <button onClick={() => navigate('/isi')}>Selengkapnya.</button> */}
                </div>
              </div>
              </card>
            </Col>
          </Row>
        </Container>
    </div>
    </div>
    )
}

export default PromoPage