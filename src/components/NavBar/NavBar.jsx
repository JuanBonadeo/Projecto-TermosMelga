import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import '../NavBar/navbar.css';
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar expand="xl" className="navBar dark fixed-top" data-bs-theme="light" expanded={expanded}>
      <Container className='mobileContainerNav'>
        <Logo className='logo'/>
        <div className="mobileContainerNavRight">
          <CartIcon className="mobile"/>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks" onSelect={closeNavbar}>
            <Link to="/" className="primary" onClick={closeNavbar}>Inicio</Link>
            <Link to='/categoria/mates' className="primary" >Mates</Link>
            <Link to="/categoria/yerbas" className="primary" onClick={closeNavbar}>Yerbas</Link>
            <Link to="/categoria/bombillas" className="primary" onClick={closeNavbar}>Bombillas</Link>
            <Link to="/categoria/bolsos" className="primary" onClick={closeNavbar}>Bolsos Materos</Link>
            <Link to="/categoria/termos" className="primary" onClick={closeNavbar}>Termos</Link>
          </Nav>
        </Navbar.Collapse>
        <div className="desktopContainerNavRight">
          <CartIcon className="desktop" />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
