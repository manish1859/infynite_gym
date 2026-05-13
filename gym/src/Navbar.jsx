import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png';

import {
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaBars,
  FaTimes
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="container full-container">
        <div className="col-lg-10 mx-auto w-100 ">


      <div className="navbar-container">
    
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Nav Links */}
        <ul
          className={isMobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <Link to="/" className="active">
              HOME
            </Link>
          </li>

          <li>
            <Link to="/about">
              ABOUT US
            </Link>
          </li>

          <li>
            <Link to="/classes">
              CLASSES
            </Link>
          </li>

          <li>
            <Link to="/service">
              SERVICES
            </Link>
          </li>

          <li>
            <Link to="/team">
              OUR TEAM
            </Link>
          </li>

          {/* Dropdown */}
          <li className="nav-item has-dropdown">

            <Link to="/pages">PAGES</Link>

            <ul className="dropdown-menu">

              <li>
                <Link to="/about">
                  About us
                </Link>
              </li>

              <li>
                <Link to="/timetable">
                  Classes timetable
                </Link>
              </li>

              <li>
                <Link to="/bmi">
                  Bmi calculate
                </Link>
              </li>

              <li>
                <Link to="/team">
                  Our team
                </Link>
              </li>

              <li>
                <Link to="/gallery">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/blog">
                  Our blog
                </Link>
              </li>

              <li>
                <Link to="/404">
                  404
                </Link>
              </li>

            </ul>
          </li>

          <li>
            <Link to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="navbar-icons">

          <div className="search-icon">
            <FaSearch />
          </div>

          <div className="divider"></div>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>

      </div>        </div>
      </div>
    </nav>
  );
};

export default Navbar;