 import React, { useState } from 'react';
import { FaDumbbell, FaAppleAlt, FaHeartbeat } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaSearch,FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaBars,} from "react-icons/fa";import logo from '../../assets/logo.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./Home.css";

import { Navigation, Autoplay } from "swiper/modules";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <> 
    
   <div className="home">

       <header className="home-navbar">
        <div className="home-nav-container">

          <div className="home-logo">
            <img src={logo} alt="logo" />
           </div>

          <ul className={`home-menu ${menuOpen ? "active" : ""}`}>
            <li className="active">HOME</li>
            <li>ABOUT US</li>
            <li>CLASSES</li>
            <li>SERVICES</li>
            <li>OUR TEAM</li>
            <li>PAGES</li>
            <li>CONTACT</li>
          </ul>

          <div className="home-icons">
            <FaSearch />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>

           <div className="home-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </div>

        </div>
      </header>

       <Swiper
  className="home-slider"
  loop={true}
  navigation={true}
  autoplay={{ delay: 3000 }}
  modules={[Navigation, Autoplay]}
>
  
   <SwiperSlide>
    <div className="home-slide home-slide1">
 
      <div className="home-content home-animate">
        <span>SHAPE YOUR BODY</span>
        <h1>
          BE <span className="highlight"> STRONG </span><br/>
           TRAINING HARD
        </h1>
        <button>GET INFO</button>
      </div>
    </div>
  </SwiperSlide>

   <SwiperSlide>
    <div className="home-slide home-slide2">
 
       <div className="home-content home-animate">
        <span>SHAPE YOUR BODY</span>
        <h1>
          BE <span className="highlight"> STRONG </span><br/>
           TRAINING HARD
        </h1>
        <button>GET INFO</button>
      </div>
    </div>
  </SwiperSlide>

</Swiper>
    </div>


    <section className="home-why">
 <div className="home-container container">
  
   <div className="row text-center">
    <div className="col-lg-12">
      <span className="home-subtitle">WHY CHOSE US?</span>
      <h2 className="home-title">PUSH YOUR LIMITS FORWARD</h2>
    </div>
  </div>

   <div className="row">

    <div className="col-lg-3 col-sm-6">
      <div className="home-card">
        <div className="home-icon"><FaDumbbell /></div>
        <h4>Modern equipment</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
      </div>
    </div>

    <div className="col-lg-3 col-sm-6">
      <div className="home-card">
        <div className="home-icon"><FaAppleAlt /></div>
        <h4>Healthy nutrition plan</h4>
        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>
    </div>

    <div className="col-lg-3 col-sm-6">
      <div className="home-card">
        <div className="home-icon"><GiWeightLiftingUp /></div>
        <h4>Professional training</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
      </div>
    </div>

    <div className="col-lg-3 col-sm-6">
      <div className="home-card">
        <div className="home-icon"><FaHeartbeat /></div>
        <h4>Unique to your needs</h4>
        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>
    </div>

  </div>

</div>
    </section>
  
    
    </>
  )
}

export default Home