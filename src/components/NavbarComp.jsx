import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import LoginPopup from '../pages/login&regis/LoginPage';
import logo from "../assets/logo1.svg";
import "../dist/foot&nav/navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';

const NavbarComp = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const navigate = useNavigate();

  const goToCart = () => {
    if (!isLoggedIn) {
      setShowLoginPopup(true);
    } else {
      navigate("/cart");
    }
  };

  const goToProfile = () => {
    if (!isLoggedIn) {
      setShowLoginPopup(true);
    } else {
      navigate("/profile");
    }
  };

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
    fetchCartItemCount(); // Fetch cart items when the user logs in
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      text: "You will need to log in again to access your account.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'No, stay logged in'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem('auth_token');
        setIsLoggedIn(false);
        setCartItemCount(0); // Reset cart item count on logout
        Swal.fire(
          'Logged out!',
          'You have been logged out successfully.',
          'success'
        );
      }
    });
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  const fetchCartItemCount = async () => {
    const token = sessionStorage.getItem('auth_token');
    if (token) {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/shopping-carts', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const totalItems = response.data.shopping_carts.reduce((total, item) => total + item.quantity, 0);
        setCartItemCount(totalItems);
        console.log('Cart item count:', totalItems);
      } catch (error) {
        console.error('Failed to fetch cart item count', error);
      }
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    const token = sessionStorage.getItem('auth_token');
    if (token) {
      setIsLoggedIn(true);
      fetchCartItemCount(); // Fetch cart items on initial render if logged in
    }

    window.addEventListener("scroll", changeBackgroundColor);

    // Event listener for cart item updates
    const updateCartItemCount = () => {
      console.log('cartUpdate event caught');
      fetchCartItemCount();
    };

    window.addEventListener('cartUpdate', updateCartItemCount);

    return () => {
      window.removeEventListener('scroll', changeBackgroundColor);
      window.removeEventListener('cartUpdate', updateCartItemCount);
    };
  }, []);

  return (
    <Navbar expand="xl" className={changeColor ? "active" : ""} fixed="top">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="Logo" className="logo-nav" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navMenu me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown href="#product" title="Products" id="menu">
              <NavDropdown.Item href="/product">All --</NavDropdown.Item>
              <NavDropdown.Item href="/table">Table</NavDropdown.Item>
              <NavDropdown.Item href="/chair">Chairs</NavDropdown.Item>
              <NavDropdown.Item href="/storage">Storage & Shelf</NavDropdown.Item>
              <NavDropdown.Item href="/mattress">Mattress & Bed</NavDropdown.Item>
              <NavDropdown.Item href="/sofa">Sofa</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Set Furniture</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Kitchen Set</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Office Set</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#rooms" id="menu">Rooms</Nav.Link>
            <Nav.Link href="/promo" id="menu">Promo</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Form className="d-flex me-2 search-form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
              <div className="search-input-wrapper">
                <Form.Control
                  type="search"
                  placeholder="Cari di Living Cozy"
                  className="search-input"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleChange}
                />
              </div>
            </Form>
            <Nav className="mx-4 my-2">
              <CgProfile className="profil" onClick={goToProfile} />
            </Nav>
            <div className="d-flex align-items-center mx-2 cart-container">
              <MdOutlineShoppingCart className="cart-icon" onClick={goToCart} />
              {cartItemCount > 0 && <Badge pill bg="danger" className="cart-badge">{cartItemCount}</Badge>}
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-center">
              <div className="separator"></div>
              {!isLoggedIn && (
                <>
                  <Button variant="outline-light" className="login-button me-2" onClick={() => setShowLoginPopup(true)}>
                    Masuk
                  </Button>
                  <Button variant="outline-light">
                    <Link className="signup-button" to="/register">Daftar</Link>
                  </Button>
                </>
              )}
              {isLoggedIn && (
                <Button variant="outline-light" onClick={handleLogout}>
                  Keluar
                </Button>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
      <LoginPopup onLogin={handleLogin} show={showLoginPopup} onHide={() => setShowLoginPopup(false)} />
    </Navbar>
  )
}

export default NavbarComp;
