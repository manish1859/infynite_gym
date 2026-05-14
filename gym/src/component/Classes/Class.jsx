import React, { useState } from 'react'
import './Class.css'
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/class-detailsl.jpg";
import { NavLink } from 'react-router-dom';


const Class = () => {
    const [activeTab, setActiveTab] = useState("all");
  
    const tableData = {
      all: [
        [
          "WEIGHT LOOSE",
          "CARDIO",
          "YOGA",
          "FITNESS",
          "",
          "BOXING",
          "BODY BUILDING",
        ],
        ["", "FITNESS", "WEIGHT LOOSE", "CARDIO", "BODY BUILDING", "KARATE", ""],
        ["BOXING", "KARATE", "BODY BUILDING", "", "YOGA", "CARDIO", "FITNESS"],
        ["CARDIO", "", "BOXING", "YOGA", "KARATE", "BOXING", "WEIGHT LOOSE"],
      ],
  
      fitness: [
        [" ", "CARDIO", " ", "FITNESS", "", " ", " "],
        ["", "FITNESS", " ", " ", " ", " ", ""],
        ["BOXING", " ", " ", "", " ", " ", "BOXING"],
        [" ", "", "BOXING", " ", " ", "BOXING", " "],
      ],
  
      motivation: [
        [" ", " ", " ", " ", "", "BOXING", " "],
        ["", " ", " ", "CARDIO", " ", "KARATE", ""],
        [" ", "KARATE", " ", "", " ", "CARDIO", " "],
        ["CARDIO", "", " ", " ", "KARATE", " ", " "],
      ],
  
      workout: [
        ["WORKOUT", " ", "YOGA", " ", "", " ", "BODY BULDING"],
        ["", " ", "WEIGHT LOOSE", " ", "BODY BULDING", " ", ""],
        [" ", " ", "BODY BULDING", "", "YOGA", " ", " "],
        [" ", "", " ", "YOGA ", "KARATE", " ", "  LOOSE"],
      ],
    };
  
   const trainers = {
    all: [
      ["RLefew D. Loee", "RLefew D. Loee", "Keaf Shen", "Kimberly Stone", "", "Rachel Adam", "Robert Cage"],
      ["", "Kimberly Stone", "RLefew D. Loee", "RLefew D. Loee", "Robert Cage", "Donald Grey", ""],
      ["Rachel Adam", "Donald Grey", "Robert Cage", "", "Keaf Shen", "RLefew D. Loee", "Kimberly Stone"],
      ["RLefew D. Loee", "", "Rachel Adam", "Keaf Shen", "Donald Grey", "Rachel Adam", "RLefew D. Loee"],
    ],
  
    fitness: [
      ["", "RLefew D. Loee", "", "Kimberly Stone", "", "", ""],
      ["", "Kimberly Stone", "", "", "", "", ""],
      ["Rachel Adam", "", "", "", "", "", "Rachel Adam"],
      ["", "", "Rachel Adam", "", "", "Rachel Adam", ""],
    ],
  
    motivation: [
      ["", "", "", "", "", "Rachel Adam", ""],
      ["", "", "", "RLefew D. Loee", "", "Donald Grey", ""],
      ["", "Donald Grey", "", "", "", "RLefew D. Loee", ""],
      ["RLefew D. Loee", "", "", "", "Donald Grey", "", ""],
    ],
  
    workout: [
      ["Rachel Adam", "", "Keaf Shen", "", "", "", "Robert Cage"],
      ["", "", "RLefew D. Loee", "", "Robert Cage", "", ""],
      ["", "", "Robert Cage", "", "Keaf Shen", "", ""],
      ["", "", "", "Keaf Shen", "Donald Grey", "", "RLefew D. Loee"],
    ],
  };
  
    const timings = [
      "6.00am - 8.00am",
      "10.00am - 12.00am",
      "5.00pm - 7.00pm",
      "7.00pm - 9.00pm",
    ];
  
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
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

    <div className='classes-main'>
      <Container >
        <div className="col-lg-10 mx-auto">
        <Row>
          {/* Left Side (8 columns) */}
          <Col md={8} className="class-img">
            <div>
              <img src={img} alt="gym" className="img-fluid rounded" />
            </div>,

            <h3 className='text-white'>Body Building</h3>
            <p style={{ color: '#bbbbbb' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accusantium doloremque laudantium. Excepteur sint occaecat cupidatat non proident sculpa.</p>
            <h3 className='text-white'>Trainer</h3>
            <p style={{ color: '#bbbbbb' }}>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur officia deserunt mollit.</p>


            <Row>
              <Col md={6} >
                <div className="img-box">
                  <img
                    src="https://themewagon.github.io/gymlife/img/classes/class-details/trainer-profile.jpg"
                    alt=""
                    className="w-100"
                  />
                </div>
              </Col>
              <Col md={6} >
                <div className='class-trainer'>
                  <h4 className=' text-white'>Athart Rachel</h4>
                  <p  style={{ color: '#c4c4c4',fontSize:'12px' }}>GYM TRAINER</p>
                  <p  style={{ color: '#e7e7e7' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra maecenas lacus vel facilisis.</p>
                  <div className="info-box">
                    <div className="info-row">
                      <p className='text-white'>Age</p>
                      <p style={{ color: '#c2c2c2' }}>35</p>
                    </div>

                    <div className="info-row">
                      <p className='text-white'>Weight</p>
                      <p style={{ color: '#c2c2c2' }}>148lbs</p>
                    </div>

                    <div className="info-row">
                      <p className='text-white'>Height</p>
                      <p style={{ color: '#c2c2c2' }}>10' 2''</p>
                    </div>

                    <div className="info-row">
                      <p className='text-white'>Occupation</p>
                      <p style={{ color: '#c2c2c2' }}>no-founder</p>
                    </div>
                  </div>
                  <p  style={{ color: '#e7e7e7' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra maecenas lacus vel facilisis.</p>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Right Side (4 columns) */}
{/* Right Side (4 columns) */}
<Col md={4} className="text-white class-img">

  <div className="sidebar-wrapper">

    <div className="categories-box">
      <h4 className="title">CATEGORIES</h4>

      <div className="cat-row">
        <p>Yoga</p>
        <p>12</p>
      </div>

      <div className="cat-row">
        <p>Runing</p>
        <p>32</p>
      </div>

      <div className="cat-row">
        <p>Weightloss</p>
        <p>86</p>
      </div>

      <div className="cat-row">
        <p>Cario</p>
        <p>25</p>
      </div>

      <div className="cat-row">
        <p>Body buiding</p>
        <p>36</p>
      </div>

      <div className="cat-row">
        <p>Nutrition</p>
        <p>15</p>
      </div>
    </div>

    <div className="latest-posts">
      <h4 className="title ">LATEST POSTS</h4>

      <div className="post-card">
        <img
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed"
          alt="post"
        />

        <div className="post-overlay">
          <h6>
            This Japanese Way of Making Iced Coffee Is a Game...
          </h6>

          <p>
            Aug 20, 2019 | 20 Comment
          </p>
        </div>
      </div>
    </div>

    <div className="latest-list mt-3">

      {/* Item 1 */}
      <div className="post-item d-flex">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
          alt=""
        />

        <div className="post-content">
          <h6>Grilled Potato and Green Bean Salad</h6>
          <p>Aug 15, 2019</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="post-item d-flex">
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a"
          alt=""
        />

        <div className="post-content">
          <h6>The $8 French Rosé I Buy in Bulk Every Summer</h6>
          <p>Aug 15, 2019</p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="post-item d-flex">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt=""
        />

        <div className="post-content">
          <h6>Ina Garten’s Skillet-Roasted Lemon Chicken</h6>
          <p>Aug 15, 2019</p>
        </div>
      </div>

      {/* Item 4 */}
      <div className="post-item d-flex">
        <img
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597"
          alt=""
        />

        <div className="post-content">
          <h6>The Best Weeknight Baked Potatoes, 3 Creative Ways</h6>
          <p>Aug 15, 2019</p>
        </div>
      </div>

    </div>

    <div className="sidebar-banner">
      <img
        src="https://images.unsplash.com/photo-1518611012118-696072aa579a"
        alt="banner"
      />

      <div className="banner-text">
        BANNER 300X300
      </div>
    </div>

  </div>

</Col>
        </Row>
        </div>
      </Container>

    </div>

      <section className="timetable-section">

  <div className="container">

    <div className="row justify-content-center">

      <div className="col-lg-10">

        <div className="timetable-top">

          <div>
            <span>FIND YOUR TIME</span>
            <h2>FIND YOUR TIME</h2>
          </div>

          <div className="tabs">

            <button
              className={activeTab === "all" ? "active" : ""}
              onClick={() => setActiveTab("all")}
            >
              All event
            </button>

            <button
              className={activeTab === "fitness" ? "active" : ""}
              onClick={() => setActiveTab("fitness")}
            >
              Fitness tips
            </button>

            <button
              className={activeTab === "motivation" ? "active" : ""}
              onClick={() => setActiveTab("motivation")}
            >
              Motivation
            </button>

            <button
              className={activeTab === "workout" ? "active" : ""}
              onClick={() => setActiveTab("workout")}
            >
              Workout
            </button>

          </div>

        </div>

        <div className="table-responsive">

          <table className="gym-table">

            <thead>
              <tr>

                <th></th>

                {days.map((day, index) => (
                  <th key={index}>{day}</th>
                ))}

              </tr>
            </thead>

            <tbody>

              {tableData[activeTab].map((row, rowIndex) => (

                <tr key={rowIndex}>

                  <td className="time-cell">
                    {timings[rowIndex]}
                  </td>

                  {row.map((item, colIndex) => (

                    <td
                      key={colIndex}
                      className={item === "" ? "empty-cell" : ""}
                    >

                      {item && (
                        <>
                          <h3>{item}</h3>

                          <p>
                            {trainers[activeTab][rowIndex][colIndex]}
                          </p>
                        </>
                      )}

                    </td>

                  ))}

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </div>

</section>
</>

  )
}

export default Class