import  { useEffect, useRef, useState } from 'react'
import './About.css'
import { NavLink } from 'react-router-dom';
import { Dumbbell, Utensils, HeartPulse, Activity,  Play, X, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Assets Imports
import aboutus from '../../assets/about-us.jpg'

import testimonial1 from '../../assets/testimonial-1.jpg'
import testimonial2 from '../../assets/testimonial-2.jpg'

const testimonialsData = [
    {
        id: 1,
        name: "MARSHMELLO GOMEZ",
        image: testimonial1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        rating: 5
    },
    {
        id: 2,
        name: "RACHEL ATHART",
        image:testimonial2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        rating: 5
    },
    {
        id: 3,
        name: "RACHEL ATHART",
        image:testimonial2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        rating: 5
    },
];

const About = () => {
    // Hooks hamesha top par hone chahiye
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const sliderRef = useRef(null);
    const length = testimonialsData.length;

    const features = [
        {
            icon: <Activity size={40} />,
            title: "Modern equipment",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis."
        },
        {
            icon: <Utensils size={40} />,
            title: "Healthy nutrition plan",
            desc: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            icon: <Dumbbell size={40} />,
            title: "Proffesponal training plan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis."
        },
        {
            icon: <HeartPulse size={40} />,
            title: "Unique to your needs",
            desc: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        }
    ];

    const skills = [
        { label: "Body building", percentage: 80 },
        { label: "Training", percentage: 85 },
        { label: "Fitness", percentage: 75 }
    ];



    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000); 

    return () => clearInterval(slideInterval);
  }, [current, nextSlide]);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let scrollAmount = 0;
        const autoScroll = () => {
            scrollAmount += 1;
            slider.scrollLeft = scrollAmount;
            if (scrollAmount >= slider.scrollWidth / 2) {
                scrollAmount = 0;
            }
        };

        const interval = setInterval(autoScroll, 15);
        return () => clearInterval(interval);
    }, []);
    const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  e.currentTarget.style.setProperty("--x", `${x}px`);
  e.currentTarget.style.setProperty("--y", `${y}px`);
};

    return (
        <>
            <section className="about-hero-section">
                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <h2>ABOUT US</h2>
                        <div className="breadcrumb">
                            <p>
                                <NavLink to="/" className="nav-item">Home</NavLink> <span>&gt; About</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choseus-section">
                <div className="container">
                    <div className="section-title">
                        <span>WHY CHOSE US?</span>
                        <h2>PUSH YOUR LIMITS FORWARD</h2>
                    </div>
                    <div className="features-grid">
                        {features.map((item, index) => (
                            <div className="feature-item" key={index}>
                                <div className="icon-box">{item.icon}</div>
                                <h3 className='about-icon'>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-percentage-section">
                <div className="about-percentage-container">
                    <div className="about-percentage-left">
                        <div className="about-percentage-video-box">
                            <img src={aboutus} alt="Gym Training" />
                            <div className="about-percentage-play-btn" onClick={toggleModal}>
                                <Play fill="white" size={30} />
                            </div>
                        </div>
                    </div>
                    <div className="about-percentage-right">
                        <span className="about-percentage-sub">ABOUT US</span>
                        <h2 className="about-percentage-title">WHAT WE HAVE DONE</h2>
                        <p className="about-percentage-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                            Risus commodo viverra maecenas accumsan lacus vel facilisis. Aliquip ex ea commodo 
                            consequat sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="about-percentage-skills">
                            {skills.map((skill, index) => (
                                <div className="about-percentage-skill-item" key={index}>
                                    <div className="about-percentage-skill-info">
                                        <h4>{skill.label}</h4>
                                        <span>{skill.percentage}%</span>
                                    </div>
                                    <div className="about-percentage-bar-bg">
                                        <div className="about-percentage-bar-fill" style={{ width: `${skill.percentage}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <div className="about-percentage-modal-overlay" onClick={toggleModal}>
                        <div className="about-percentage-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="about-percentage-close-btn" onClick={toggleModal}><X size={30} color="white" /></button>
                            <div className="about-percentage-video-wrapper">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* <section className="team-section">
                <div className="team-container">
                    <div className="team-header">
                        <div className="header-left"><span>OUR TEAM</span><h2>TRAIN WITH EXPERTS</h2></div>
<div className="header-right">
  <button
    className="appointment-btn"
    onMouseMove={handleMouseMove}>
    <div className="btn-hover"></div>
    <span>APPOINTMENT</span>
  </button>
</div>                    </div>
                    <div className="team-grid" ref={sliderRef}>
                        {loopData.map((member, index) => (
                            <div className="team-card" key={index}>
                                <img src={member.img} alt={member.name} />
                                <div className="member-info"><h4>{member.name}</h4><p>{member.role}</p></div>
                            </div>
                        ))}
                    </div>
                    <div className="team-dots"><span className="dot"></span><span className="dot active"></span><span className="dot"></span></div>
                </div>
            </section> */}

            <section className="registration-section">
                <div className="registration-overlay">
                    <div className="registration-container">
                        <h2 className="registration-title">REGISTRATION NOW TO GET MORE DEALS</h2>
                        <p className="registration-subtitle">WHERE HEALTH, BEAUTY AND FITNESS MEET.</p>
                        <div className="registration-action">
  <button
    className="appointment-btn"
    onMouseMove={handleMouseMove}>
    <div className="btn-hover"></div>
    <span>APPOINTMENT</span>
  </button>
</div>   
                        {/* <div className="registration-action"><button className="appointment-btn-lg "  onMouseMove={handleMouseMove}>APPOINTMENT</button></div> */}
                    </div>
                </div>
            </section>

            <section className="testimonial-section">
                <div className="testimonial-container">
                    <div className="testimonial-header"><span>TESTIMONIAL</span><h2>OUR CLIENT SAY</h2></div>
                    <div className="testimonial-slider">
                        <button className="slider-arrow left" onClick={prevSlide}><ChevronLeft size={30} color="#ffffff" /></button>
                        <div className="testimonial-content">
                            <div className="client-image"><img src={testimonialsData[current].image} alt={testimonialsData[current].name} /></div>
                            <p className="testimonial-text">"{testimonialsData[current].text}"</p>
                            <h3 className="client-name">{testimonialsData[current].name}</h3>
                            <div className="client-stars">
                                {[...Array(testimonialsData[current].rating)].map((_, i) => (<Star key={i} size={16} fill="#f36100" color="#f36100" />))}
                            </div>
                        </div>
                        <button className="slider-arrow right" onClick={nextSlide}><ChevronRight size={30} color="#ffffff" /></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;