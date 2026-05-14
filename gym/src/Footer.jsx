// import React from 'react';
import './Footer.css';
import logo from './assets/logo.png'
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram,FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";



const Footer = () => {
  return (
    <>

 
    <footer className="footer-section">
      {/* Top footer Bar */}
      <div className="container">
        <div className="col-lg-10 mx-auto">

       
      <div className="footer-bar">
        <div className="container">
          <div className="footer-item">
            <div className="footer-icon"><FaMapMarkerAlt size={24}  style={{color:"white"}}/></div>
            <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
          </div>
          <div className="footer-item">
            <div className="footer-icon"><FaPhoneAlt size={24}  style={{color:"white"}} /></div>
            <p>125-711-811  |  125-668-886</p>
          </div>
          <div className="footer-item">
            <div className="footer-icon"><FaEnvelope size={24}  style={{color:"white"}} /></div>
            <p>Support.gymcenter@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            
            {/* Column 1: Logo & Info */}
            <div className="footer-col about-col">
              <img src={logo} alt="Gym Logo" className="footer-logo" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.</p>
              <div className="social-links">
                <a href="#"><FaFacebookF size={18} /></a>
                <a href="#"><FaTwitter size={18} /></a>
                <a href="#"><FaYoutube size={18} /></a>
                <a href="#"><FaInstagram size={18} /></a>
                <a href="#"><FaEnvelope size={18} /></a>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div className="footer-col">
              <h4>Useful links</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Classes</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">My account</a></li>
                <li><a href="#">Subscribe</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Column 4: Tips & Guides */}
            <div className="footer-col tips-col">
              <h4>Tips & Guides</h4>
              <div className="tip-item">
                <p className="tip-title">Physical fitness may help prevent depression, anxiety</p>
                <span>3 min read  |  20 Comment</span>
              </div>
              <div className="tip-item">
                <p className="tip-title">Fitness: The best exercise to lose belly fat and tone up...</p>
                <span>3 min read  |  20 Comment</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar">
        <div className="container">
          <p>Copyright ©2026 All rights reserved | This template is made with ❤️ by <span className="highlight1">Colorlib</span></p>
        </div>
      </div> </div>
      </div>
    </footer>

    </>
  );
};

export default Footer;