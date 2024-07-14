import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { FaTimes } from 'react-icons/fa';
import '../../dist/payment.css';
import NavbarComp from "../../components/NavbarComp";
import FooterComp from "../../components/FooterComp";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = sessionStorage.getItem('auth_token');
        if (!token) {
          throw new Error('User not authenticated');
        }

        const response = await axios.get('http://127.0.0.1:8000/api/shopping-carts', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setCartItems(response.data.shopping_carts || []);
      } catch (error) {
        setError('Failed to fetch cart items');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleDelete = async (cart_id) => {
    try {
      const token = sessionStorage.getItem('auth_token');
      if (!token) {
        throw new Error('User not authenticated');
      }

      await axios.delete(`http://127.0.0.1:8000/api/shopping-carts/${cart_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCartItems((prevItems) => prevItems.filter((item) => item.cart_id !== cart_id));
      window.dispatchEvent(new Event('cartUpdate'));
    } catch (error) {
      setError('Failed to delete cart item');
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const user_id = sessionStorage.getItem('user_id');
      const token = sessionStorage.getItem('auth_token');
      if (!user_id || !token) {
        throw new Error('User not authenticated');
      }

      const product_ids = cartItems.map((item) => item.product.product_id);

      const response = await axios.post('http://127.0.0.1:8000/api/payment', {
        user_id,
        product_id: product_ids,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.data.token) {
        const { token: paymentToken } = response.data;
        window.snap.pay(paymentToken, {
          onSuccess: (result) => {
            console.log('Transaction success', result);
            // Clear cart on successful payment
            setCartItems([]);
            window.dispatchEvent(new Event('cartUpdate'));
          },
          onPending: (result) => {
            console.log('Transaction pending', result);
          },
          onError: (result) => {
            console.log('Transaction error', result);
          },
          onClose: () => {
            console.log('Customer closed the popup without finishing the payment');
          }
        });
      } else {
        setError('Token not found in the response.');
      }
    } catch (error) {
      setError(`Error creating transaction: ${error.response ? error.response.data.message : error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
      <NavbarComp />
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {cartItems.length} items
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      {cartItems.map((item) => (
                        <MDBRow key={item.cart_id} className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src={item.product.image_url}
                                fluid
                                className="rounded-3"
                                alt={item.product.product_name}
                              />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-muted">
                              {item.product.product_name}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="2" className="d-flex align-items-center">
                            <MDBInput
                              type="number"
                              min="1"
                              value={item.quantity}
                              className="form-control form-control-sm"
                              onChange={(e) => handleQuantityChange(item.cart_id, e.target.value)}
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              Rp {item.product.price.toLocaleString('id-ID')}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <MDBIcon fas icon="times" className="text-muted" onClick={() => handleDelete(item.cart_id)} />
                          </MDBCol>
                        </MDBRow>
                      ))}

                      <hr className="my-4" />
                    </div>
                  </MDBCol>

                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          Rp {calculateTotalPrice().toLocaleString('id-ID')}
                        </MDBTypography>
                      </div>

                      <MDBBtn color="dark" block size="lg" onClick={handleCheckout}>
                        Checkout
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <FooterComp />
    </section>
  );
};

export default CartPage;
