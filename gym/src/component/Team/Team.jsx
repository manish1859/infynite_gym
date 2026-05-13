import React from 'react'
import './Team.css'

import team1 from '../../assets/team-1.jpg'
import team2 from '../../assets/team-2.jpg'
import team3 from '../../assets/team-3.jpg'
import team4 from '../../assets/team-4.jpg'
import team5 from '../../assets/team-5.jpg'
import team6 from '../../assets/team-6.jpg'

import { NavLink } from 'react-router-dom'

const Team = () => {

  const teamMembers = [
    { id: 1, name: "Athart Rachel", role: "GYM TRAINER", img: team1 },
    { id: 2, name: "Athart Rachel", role: "GYM TRAINER", img: team2 },
    { id: 3, name: "Athart Rachel", role: "GYM TRAINER", img: team3 },
    { id: 4, name: "Athart Rachel", role: "GYM TRAINER", img: team4 },
    { id: 5, name: "Athart Rachel", role: "GYM TRAINER", img: team5 },
    { id: 6, name: "Athart Rachel", role: "GYM TRAINER", img: team6 },
  ];

  const handleMouseMove = (e) => {

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <>

      {/* HERO SECTION */}

      <section className="about-hero-section">

        <div className="about-hero-content">

          <h2>OUR TEAM</h2>

          <div className="breadcrumb">
            <p>
              <NavLink to="/" className="nav-item">
                Home
              </NavLink>

              <span>&gt; Our Team</span>
            </p>
          </div>

        </div>

      </section>

      {/* TEAM SECTION */}

<section className="our-team-section">

  <div className="container">
    <div className="col-lg-10 mx-auto">

    <div className="our-team-container">

      {/* HEADER */}

      <div className="our-team-header">

        <div className="our-team-left">

          <span>OUR TEAM</span>

          <h2>TRAIN WITH EXPERTS</h2>

        </div>

<div className="header-right">
  <button
    className="appointment-btn"
    onMouseMove={handleMouseMove}>
    <div className="btn-hover"></div>
    <span>APPOINTMENT</span>
  </button>
</div>   

      </div>

      {/* GRID */}

      <div className="our-team-grid">

        {teamMembers.map((member) => (

          <div className="our-team-card" key={member.id}>

            <img src={member.img} alt={member.name} />

            <div className="our-team-info">

              <h4>{member.name}</h4>

              <p>{member.role}</p>

              <div className="our-team-social">

                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div></div>

  </div>

</section>

    </>
  )
}

export default Team