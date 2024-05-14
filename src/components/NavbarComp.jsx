import {useRef, useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

import logo from "../assets/logo1.svg"
import searchIcon from "../assets/searchicon.png"
import "../dist/navbar.css"
import { CgProfile } from "react-icons/cg";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarComp = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10){ 
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <Navbar expand="xl" className={changeColor ? "active" : ""} fixed="top">
    <Container>
      <Navbar.Brand href="/"><img src={logo} alt="" className="logo-nav"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="navMenu me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <NavDropdown href="#product" title="Products" id="menu">
            <NavDropdown.Item href="#action1">Table</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Chairs</NavDropdown.Item>
            <NavDropdown.Item href="#action3">Storage & Shelf</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Mattress & Bed</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Sofa</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Set Furniture</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Kitchen Set</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Office Set</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#rooms" id="menu">Rooms</Nav.Link>
          <Nav.Link href="#product" id="menu">Promo</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Nav className="mx-4 my-2">
          <CgProfile className="profil"/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComp