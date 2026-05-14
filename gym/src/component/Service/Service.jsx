import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import "../Service/Service.css";
import { NavLink } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";


const Service = () => {
  const services = [
    {
      id: 1,
      type: "image",
      image:
        "https://themewagon.github.io/gymlife/img/services/services-1.jpg",
    },
    {
      id: 2,
      type: "content",
      title: "Personal training",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.",
    },
    {
      id: 3,
      type: "image",
      image:
        "https://themewagon.github.io/gymlife/img/services/services-2.jpg",
    },
    {
      id: 4,
      type: "content",
      title: "Group fitness classes",
      desc: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.",
    },
    {
      id: 5,
      type: "content",
      title: "Strength training",
      desc: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.",
    },
    {
      id: 6,
      type: "image",
      image:
        "https://themewagon.github.io/gymlife/img/services/services-3.jpg",
    },
    {
      id: 7,
      type: "content",
      title: "Body building",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.",
    },
    {
      id: 8,
      type: "image",
      image:
        "https://themewagon.github.io/gymlife/img/services/services-4.jpg",
    },
  ];
    const plans = [
    {
      title: "Class drop-in",
      price: "39.0",
      type: "SINGLE CLASS",
      features: ["Free riding", "Unlimited equipments", "Personal trainer", "Weight losing classes", "Month to mouth", "No time restriction"],
      active: false
    },
    {
      title: "12 Month unlimited",
      price: "99.0",
      type: "SINGLE CLASS",
      features: ["Free riding", "Unlimited equipments", "Personal trainer", "Weight losing classes", "Month to mouth", "No time restriction"],
      active: false
    },
    {
      title: "6 Month unlimited",
      price: "59.0",
      type: "SINGLE CLASS",
      features: ["Free riding", "Unlimited equipments", "Personal trainer", "Weight losing classes", "Month to mouth", "No time restriction"],
      active: false
    }
  ];

  return (
    <>
              <section className="about-hero-section">
                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <h2>Classes</h2>
                        <div className="breadcrumb">
                            <p>
                                <NavLink to="/" className="nav-item">Home</NavLink> <span>&gt; Classes</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

<section className="training-section mb-5">
      <Container>
        <div className="col-lg-10 mx-auto">
        {/* Heading */}
        <div className="section-title text-center">
          <span>WHAT WE DO?</span>
          <h2>PUSH YOUR LIMITS FORWARD</h2>
        </div>

        {/* Grid */}
        <Row className="g-0">

          {services.map((item) => (
            <Col lg={3} md={6} sm={12} key={item.id}>

              {item.type === "image" ? (
                <div className="training-img">
                  <img src={item.image} alt="" />
                </div>
              ) : (
                <div className="training-content">
                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <a href="/">EXPLORE</a>
                </div>
              )}

            </Col>
          ))}
        </Row>
</div>
      </Container>
    </section>

    <section className="hero-section">
      <Container fluid className="p-0">
        <div className="hero-banner">
          <div className="hero-overlay">
            <div className="hero-content text-center">
              
              <h1>EXERCISE UNTIL THE BODY OBEYS.</h1>

              <p>WHERE HEALTH, BEAUTY AND FITNESS MEET.</p>

              <button className="play-btn">
                <FaPlay />
              </button>

            </div>
          </div>
        </div>
      </Container>
    </section>

    
<section className="pricing-section">
        <div className="container">
          <div className="col-lg-10 mx-auto">
          <div className="pricing-header">
            <p className="sub-header">OUR PLAN</p>
            <h2 className="main-header">CHOOSE YOUR PRICING PLAN</h2>
          </div>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.active ? 'active-card' : ''}`}>
                <div className="card-content">
                  <h3 className="plan-title">{plan.title}</h3>
                  <div className="price-tag">
                    <div className="Price-container">
                    <span className="currency"><FaDollarSign /></span>
                    <span className="amount">{plan.price}</span>
                    </div>
                      <p className="plan-type">{plan.type}</p>
                  </div>
                

                  <ul className="feature-list">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <button className="enroll-btn">ENROLL NOW</button>
                </div>
              </div>
            ))}
          </div></div>
        </div>
      </section>

    </>

  );
};

export default Service;