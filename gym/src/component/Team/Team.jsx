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
    const loopData = [...teamMembers, ...teamMembers];

  return (
    <>
                <section className="about-hero-section">
                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <h2>OUR TEAM</h2>
                        <div className="breadcrumb">
                            <p>
                                <NavLink to="/" className="nav-item">Home</NavLink> <span>&gt; Our Team</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

<section className="team-section">
  <div className="container">

    <div className="row justify-content-center">
      <div className="col-lg-10">

        <div className="team-container">

          {/* Header */}
          <div className="team-header">

            <div className="header-left">
              <span>OUR TEAM</span>
              <h2>TRAIN WITH EXPERTS</h2>
            </div>

            <div className="header-right">
              <button
                className="appointment-btn"
                onMouseMove={handleMouseMove}
              >
                <div className="btn-hover"></div>
                <span>APPOINTMENT</span>
              </button>
            </div>

          </div>

          {/* Team Grid */}
          <div className="team-grid">

            {teamMembers.map((member) => (
              <div className="team-card" key={member.id}>

                <img src={member.img} alt={member.name} />

                <div className="member-info">
                  <h4>{member.name}</h4>

                  <p>{member.role}</p>

                  <div className="member-social">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>

  </div>
</section>
    </>
  )
}

export default Team