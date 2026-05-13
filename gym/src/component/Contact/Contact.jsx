// import React from 'react'
import './Contact.css'
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
            <section className="about-hero-section">
                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <h2>OUR TEAM</h2>
                        <div className="breadcrumb">
                            <p>
                                <NavLink to="/" className="nav-item">Home <FaAngleRight /> </NavLink><NavLink to="/" className="nav-item">Pages</NavLink> <span><FaAngleRight /> Our Team</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>



<section className="contact-section">
  <div className="container">
    <div className="row justify-content-center">

      <div className="col-lg-10">
        <div className="contact-container">

          {/* Left Side */}
          <div className="contact-info">
            <span className="contact-sub">CONTACT US</span>
            <h2 className="contact-title">GET IN TOUCH</h2>

            <div className="contact-details">

              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt size={22}  style={{color:"#f36100"}} />
                </div>

                <div className="info-text">
                  <p>
                    333 Middle Winchendon Rd, Rindge,
                    <br />
                    NH 03461
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhoneAlt size={20} style={{color:"#f36100"}} />
                </div>

                <div className="info-text">
                  <p>125-711-811 | 125-668-886</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope size={22} style={{color:"#f36100"}} />
                </div>

                <div className="info-text">
                  <p>Support.gymcenter@gmail.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="contact-form-container">
            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Website" />
              <textarea placeholder="Comment" rows="5"></textarea>

              <button type="submit" className="submit-btn">
                SUBMIT NOW
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
<section className="map-section">
  <div className="container">
    <div className="row justify-content-center">

      <div className="col-lg-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23255.024377489808!2d76.19164464999999!3d27.70466275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1778565750521!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

    </div>
  </div>
</section>
    </>
  )
}

export default Contact