// import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSearch, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Navbar.css';

const GymNavbar = () => {
  const menuItems = ['HOME', 'ABOUT US', 'CLASSES', 'SERVICES', 'OUR TEAM', 'PAGES', 'CONTACT'];

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="gym-navbar sticky-top">
      <Container fluid className="px-5">
        {/* Logo Section */}
        <Navbar.Brand href="#home" className="navbar-logo">
          <img src="/gym-logo.png" alt="GYM LOGO" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto nav-menu">
            {menuItems.map((item) => (
              <Nav.Link 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                className="nav-item-link px-3"
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>

          <div className="nav-right-icons d-flex align-items-center">
            <FaSearch className="text-white mx-2 pointer" />
            <span className="divider mx-2">|</span>
            <div className="social-links d-flex gap-3 ms-2">
              <a href="#" className="text-white"><FaFacebookF /></a>
              <a href="#" className="text-white"><FaTwitter /></a>
              <a href="#" className="text-white"><FaYoutube /></a>
              <a href="#" className="text-white"><FaInstagram /></a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GymNavbar;