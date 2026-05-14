import React from "react";
import "./Blog.css";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import blogImg1 from "../../../assets/blog-1.jpg";
import blogImg2 from "../../../assets/blog-2.jpg";
import blogImg3 from "../../../assets/blog-3.jpg";
import blogImg4 from "../../../assets/blog-4.jpg";
import blogImg5 from "../../../assets/blog-5.jpg";
import last1 from "../../../assets/latest-1.jpg";
import last2 from "../../../assets/latest-2.jpg";
import last3 from "../../../assets/latest-3.jpg";
import last4 from "../../../assets/latest-4.jpg";
import last5 from "../../../assets/latest-5.jpg";

const blogs = [
  {
    img: blogImg1,
    title: "Vegan White Peach Mug Cobbler With Cardam Vegan White Peach...",
  },
  {
    img: blogImg2,
    title: "Grilled Potato and Green Bean Salad",
  },
  {
    img: blogImg3,
    title: "The $8 French Rosé I Buy In Bulk Every Summer",
  },
  {
    img: blogImg4,
    title: "Ina Garten's Skillet Roasted Lemon Chicken",
  },
  {
    img: blogImg5,
    title: "Healthy Vegan Protein Bowl Recipe",
  },
];



const Blog = () => {
  return (
    <>
      <section className="about-hero-section">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h2>BLOG</h2>
            <div className="breadcrumb">
              <p>
                <NavLink to="/" className="nav-item">
                  Home <FaAngleRight />{" "}
                </NavLink>
                <NavLink to="/" className="nav-item">
                  Pages
                </NavLink>{" "}
                <span>
                  <FaAngleRight /> Blog
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
            <div className="col-lg-10 mx-auto">
          <div className="row">
            {/* Left Side: Blog List (col-lg-8) */}
            <div className="col-lg-8">
              {blogs.map((item, index) => (
                <div className="blog-card" key={index}>
                  <div className="blog-image">
                    <img src={item.img} alt="blog" />
                  </div>

                  <div className="blog-content">
                    <Link
                      to="/fitness-blog"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <h5 className="blog-title">{item.title}</h5>
                    </Link>

                    <div className="blog-meta">
                      <span className="blog-meta-span">by Admin</span> |
                      <span className="blog-meta-span"> Aug 15, 2019</span> |
                      <span className="blog-meta-span"> 20 Comment</span>
                    </div>

                    <p className="blog-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt ut labore et dolore magna
                      aliqua accumsan lacus facilisis.
                    </p>
                  </div>
                </div>
              ))}

              {/* Pagination */}

              <div className="blog-pagination">
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>NEXT</button>
              </div>
            </div>

            {/* Right Side: Sidebar (col-lg-4) */}
            <div className="col-lg-4">
              <div className="blog-sidebar">
                {/* Categories */}
                <div className="blog-widget">
                  <h4 className="blog-widget-title">CATEGORIES</h4>
                  <ul className="blog-categories">
                    <li>
                      Yoga <span className="blog-span">12</span>
                    </li>
                    <li>
                      Runing <span className="blog-span">32</span>
                    </li>
                    <li>
                      Weightloss <span className="blog-span">86</span>
                    </li>
                    <li>
                      Cario <span className="blog-span">25</span>
                    </li>
                    <li>
                      Body buiding <span className="blog-span">36</span>
                    </li>
                    <li>
                      Nutrition <span className="blog-span">15</span>
                    </li>
                  </ul>
                </div>

                {/* Feature Posts */}
                <div className="blog-widget">
                  <h4 className="blog-widget-title">FEATURE POSTS</h4>

                  {/* Main Feature Item */}
                  <div className="blog-feature-main">
                    <img src={last1} alt="feature-main" />
                    <div className="feature-overlay">
                      <h5>
                        This Japanese Way of Making Iced Coffee Is a Game...
                      </h5>
                      <span className="blog-meta-span">
                        Aug 20, 2019 | 20 Comment
                      </span>
                    </div>
                  </div>

                  {/* Small Feature Items List */}
                  <div className="blog-feature-list">
                    <div className="blog-feature-small">
                      <img src={last2} alt="post" />
                      <div className="small-post-info">
                        <h6>Grilled Potato and Green Bean Salad</h6>
                        <span className="blog-meta-span">Aug 15, 2019</span>
                      </div>
                    </div>
                    <div className="blog-feature-small">
                      <img src={last3} alt="post" />
                      <div className="small-post-info">
                        <h6>The $8 French Rosé I Buy in Bulk Every Summer</h6>
                        <span className="blog-meta-span">Aug 15, 2019</span>
                      </div>
                    </div>
                    <div className="blog-feature-small">
                      <img src={last4} alt="post" />
                      <div className="small-post-info">
                        <h6>Ina Garten's Skillet-Roasted Lemon Chicken</h6>
                        <span className="blog-meta-span">Aug 15, 2019</span>
                      </div>
                    </div>
                    <div className="blog-feature-small">
                      <img src={last5} alt="post" />
                      <div className="small-post-info">
                        <h6>
                          The Best Weeknight Baked Potatoes, 3 Creative Ways
                        </h6>
                        <span className="blog-meta-span">Aug 15, 2019</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="blog-widget">
                  <h4 className="blog-widget-title">POPULAR TAGS</h4>
                  <div className="blog-tags">
                    <span>Gyming</span>
                    <span>Body building</span>
                    <span>Yoga</span>
                    <span>Weightloss</span>
                    <span>Proffeponal</span>
                    <span>Streching</span>
                    <span>Cardio</span>
                    <span>Karate</span>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
        </div>
      </section>
    </>
  );
};

export default Blog;