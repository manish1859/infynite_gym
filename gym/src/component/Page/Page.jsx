import React from 'react';
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaYoutube, FaHeart, FaShareAlt, FaQuoteRight } from "react-icons/fa";
import "./Page.css"; // CSS file niche di gayi hai

const FitnessBlog = () => {
  return (
    <div className="fitness-blog-wrapper">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-container text-center">
          <h2>BLOG DETAILS</h2>
          <div className="breadcrumb justify-content-center">
            <NavLink to="/" className="nav-item">Home <FaAngleRight /></NavLink>
            <NavLink to="/blog" className="nav-item">Pages <FaAngleRight /></NavLink>
            <span>Blog Details</span>
          </div>
        </div>
      </section>

      <section className="blog-details-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            {/* col-lg-10 Constraint */}
            <div className="col-lg-10 blog-main-content">
              
              <p className="description">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accusantium doloremque laudantium. Excepteur sint occaecat cupidatat non proident sculpa .</p>


<p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat anim id est laborum.</p>

              <h2 className="section-title text-center my-4">You Can Buy For Less Than A College Degree</h2>

              <p className="description">
                Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur officia deserunt mollit.
              </p>

              {/* Image Grid */}
              <div className="row g-4 my-4">
                <div className="col-md-6">
                  <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48" className="img-fluid rounded shadow" alt="workout" />
                </div>
                <div className="col-md-6">
                  <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" className="img-fluid rounded shadow" alt="nutrition" />
                </div>
              </div>

              {/* Quote Section */}
            <div className="quote-container my-5 text-center">
  <div className="quote-box">
    {/* Floating Orange Icon */}
    <div className="quote-icon-wrapper">
      <FaQuoteRight />
    </div>
    
    <h4 className="quote-text">
      The whole family of tiny legumes, whether red, green, yellow, or black, 
      offers so many possibilities to create an exciting lunch.
    </h4>
    <p className="quote-author">MEIKE PETERS</p>
  </div>
  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in. . Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

  <p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt laboris nisi ut aliquip commodo consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vel magna ex. Integer gravida tincidunt accumsan. Vestibulum nulla mauris, condimentum id felis ac, volutpat volutpat mi qui dolorem.</p>
</div>

              {/* Tags and Share */}
              <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom border-secondary pb-4 mb-5">
                <div className="blog-tags">
                  <span className="tag">Body building</span>
                  <span className="tag">Yoga</span>
                  <span className="tag">Weightloss</span>
                  <span className="tag">Stretching</span>
                </div>
                <div className="blog-share d-flex align-items-center gap-3">
                  <span>SHARE</span>
                  <FaFacebookF /> 82 <FaTwitter /> 24 <FaInstagram /> 08
                </div>
              </div>

              {/* Author Box */}
              <div className="author-card text-center mb-5">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="author" className="author-img mb-3" />
                <h4 className="text-white">LENA MOLLEIN.</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="social-links d-flex justify-content-center gap-3">
                  <FaFacebookF /> <FaTwitter /> <FaGooglePlusG /> <FaInstagram /> <FaYoutube />
                </div>
              </div>

              {/* Comments & Form Section */}
              <div className="row mt-5">
                <div className="col-md-6 mb-5">
                  <h3 className="section-subtitle mb-4">COMMENT</h3>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="comment-item d-flex gap-3 mb-4">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="user-avatar" />
                      <div className="w-100">
                        <div className="d-flex justify-content-between">
                          <h6 className="text-white mb-1">Brandon Kelley</h6>
                          <div className="comment-actions">
                            <FaHeart className="me-2" /> <FaShareAlt />
                          </div>
                        </div>
                        <p className="small text-muted">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit dolore.</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-md-6">
                  <h3 className="section-subtitle mb-4">LEAVE A COMMENT</h3>
                  <form className="comment-form">
                    <input type="text" placeholder="Name" className="form-input" />
                    <input type="email" placeholder="Email" className="form-input" />
                    <input type="text" placeholder="Website" className="form-input" />
                    <textarea placeholder="Comment" rows="4" className="form-input"></textarea>
                    <button type="submit" className="submit-btn">SUBMIT</button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FitnessBlog;