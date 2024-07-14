import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

import '../dist/foot&nav/footer.css'

import { FaFacebookF, FaInstagram, FaGoogle  } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";


const FooterComp = () => {
  return (
    <div>
      <MDBFooter className='text-center' color='black' bgColor='light'>
      <MDBContainer className='p-4'>
        <section className='mb-4 ms-5'>
          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <FaFacebookF />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <FaInstagram />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <FaXTwitter />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <FaGoogle />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' placeholder='Email address' className='mb-1' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='dark' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className=''>
          <MDBContainer className='text-center mt-4'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='futLink mx-auto mb-4'>
                <h4 className='fw-bold mb-4'>
                  Living Cozy.
                </h4>
                <p>
                  Worldwide furniture store since 2024. <br />We sell over 1000+ branded products on our website
                </p>
                <p>
                  <FaLocationDot /> Los Santos, GTA
                </p>
                <p>
                  <BsFillTelephoneFill /> +62 814 6390 3111
                </p>
                <p>
                  <a href="#">www.livingcozy.com</a>
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='futLink mx-auto mb-2'>
                <h4 className='fw-bold mb-4'>Menu</h4>
                <p>
                  <a href='#product'>
                    Product
                  </a>
                </p>
                <p>
                  <a href='#rooms'>
                    Rooms
                  </a>
                </p>
                <p>
                  <a href='#product'>
                    Promo
                  </a>
                </p>
                <p>
                  <a href='#inspirations'>
                    Inspirations
                  </a>
                </p>
                <p>
                  <a href='#!'>
                    About Us
                  </a>
                </p>
                <p>
                  <a href='#!'>
                    Terms & Policy
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='futLink mx-auto mb-4'>
                <h4 className='fw-bold mb-4'>Account</h4>
                <p>
                  <a href='#!'>
                    My Account
                  </a>
                </p>
                <p>
                  <a href='#!'>
                    My Cart
                  </a>
                </p>
                <p>
                  <a href='#!'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!'>
                    My Catalog
                  </a>
                </p>
                <p>
                  <a href='#!'>
                    Help
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBContainer>
    </MDBFooter>
    </div>
  )
}

export default FooterComp