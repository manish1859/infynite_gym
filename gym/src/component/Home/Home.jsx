import { Dumbbell, Utensils, HeartPulse, Activity} from 'lucide-react';
import { FaDollarSign } from "react-icons/fa";
import{ useState, useEffect } from 'react';
import { RxCross1 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import class1 from '../../assets/class-1.jpg'
import class2 from '../../assets/class-2.jpg'
import class3 from '../../assets/class-3.jpg'
import class4 from '../../assets/class-4.jpg'
import class5 from '../../assets/class-5.jpg'
import img1 from '../../assets/team-1.jpg'
import img2 from '../../assets/team-2.jpg'
import team1 from '../../assets/team-1.jpg'
import team2 from '../../assets/team-2.jpg'
import team3 from '../../assets/team-3.jpg'
import team4 from '../../assets/team-4.jpg'
import team5 from '../../assets/team-5.jpg'
import team6 from '../../assets/team-6.jpg'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaRegImage } from "react-icons/fa";
import "./Home.css";

import { Navigation, Autoplay } from "swiper/modules";

const Home = () => {

const [activeIndex, setActiveIndex] = useState(0);
const [isTransition, setIsTransition] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);

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
    const galleryImages = [
      { id: 1, src: img1, className: 'col-lg-6' }, 
      { id: 2, src: img2, className: 'col-lg-3' },
      { id: 3, src: img1, className: 'col-lg-3' },
      { id: 4, src: img2, className: 'col-lg-3' },
      { id: 5, src: img1, className: 'col-lg-3' },
      { id: 6, src: img2, className: 'col-lg-6' }, 
      { id: 7, src: img1, className: 'col-lg-6' }, 
      { id: 8, src: img2, className: 'col-lg-3' },
      { id: 9, src: img1, className: 'col-lg-3' },
    ];

 const trainers = [
  { id: 1, name: "Athart Rachel", role: "GYM TRAINER", img: team1 },
  { id: 2, name: "John Doe", role: "FITNESS COACH", img: team2 },
  { id: 3, name: "Sarah Jenkins", role: "YOGA EXPERT", img: team3 },
  { id: 4, name: "Mike Tyson", role: "BOXING TRAINER", img: team4 },
  { id: 5, name: "Emma Watson", role: "CARDIO TRAINER", img: team5 },
  { id: 6, name: "David Warner", role: "BODY BUILDER", img: team6 },
];

const trainersLoop = [...trainers, ...trainers];

/* AUTO SLIDE */


useEffect(() => {

  const slider = setInterval(() => {

    setActiveIndex((prev) => prev + 1);

  }, 3000);

  return () => clearInterval(slider);

}, []);

useEffect(() => {

  if (activeIndex === trainers.length) {

    setTimeout(() => {

      // transition band
      setIsTransition(false);

      // hidden reset
      setActiveIndex(0);

    }, 800);

  } else {

    setIsTransition(true);

  }

}, [activeIndex, trainers.length]);
    const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  e.currentTarget.style.setProperty("--x", `${x}px`);
  e.currentTarget.style.setProperty("--y", `${y}px`);
};


  return (
    <>

      <div className="home">



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
                  BE <span className="highlight"> STRONG </span><br />
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
                  BE <span className="highlight"> STRONG </span><br />
                  TRAINING HARD
                </h1>
                <button>GET INFO</button>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>


            <section className="choseus-section">
                <div className="container">
                    <div className="col-lg-10 mx-auto">

                    
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
                </div></div>
            </section>

      <section className="gym-section">
        <div className="container">
          <div className="col-lg-10 mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="gym-header-box">
                <p className="gym-subtitle">OUR CLASSES</p>
                <h2 className="gym-title">WHAT WE CAN OFFER</h2>
              </div>
            </div>
          </div>

          <div className="row g-4">

            {/* CARD 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="gym-class-card">

                <div className="gym-image-box">
                  <img src={class1} alt="" />

                  <div className="gym-diagonal-border"></div>
                  <div className="gym-diagonal-fill"></div>
                </div>

                <div className="gym-info-box">

                  <div>
                    <span className="gym-category">
                      STRENGTH
                    </span>

                    <h3 className="gym-class-name">
                      WEIGHTLIFTING
                    </h3>
                  </div>

                  <div className="gym-arrow-icon"></div>

                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="gym-class-card">

                <div className="gym-image-box">
                  <img src={class2} alt="" />

                  <div className="gym-diagonal-border"></div>
                  <div className="gym-diagonal-fill"></div>
                </div>

                <div className="gym-info-box">

                  <div>
                    <span className="gym-category">
                      CARDIO
                    </span>

                    <h3 className="gym-class-name">
                      INDOOR CYCLING
                    </h3>
                  </div>

                  <div className="gym-arrow-icon"></div>

                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="gym-class-card">

                <div className="gym-image-box">
                  <img src={class3} alt="" />

                  <div className="gym-diagonal-border"></div>
                  <div className="gym-diagonal-fill"></div>
                </div>

                <div className="gym-info-box">

                  <div>
                    <span className="gym-category">
                      STRENGTH
                    </span>

                    <h3 className="gym-class-name">
                      KETTLEBELL POWER
                    </h3>
                  </div>

                  <div className="gym-arrow-icon"></div>

                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-lg-6 col-md-6">
              <div className="gym-class-card">

                <div className="gym-image-box">
                  <img src={class4} alt="" />

                  <div className="gym-diagonal-border"></div>
                  <div className="gym-diagonal-fill"></div>
                </div>

                <div className="gym-info-box">

                  <div>
                    <span className="gym-category">
                      CARDIO
                    </span>

                    <h3 className="gym-class-name">
                      BODY BUILDING
                    </h3>
                  </div>

                  <div className="gym-arrow-icon"></div>

                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="col-lg-6 col-md-6">
              <div className="gym-class-card">

                <div className="gym-image-box">
                  <img src={class5} alt="" />

                  <div className="gym-diagonal-border"></div>
                  <div className="gym-diagonal-fill"></div>
                </div>

                <div className="gym-info-box">

                  <div>
                    <span className="gym-category">
                      TRAINING
                    </span>

                    <h3 className="gym-class-name">
                      BOXING
                    </h3>
                  </div>

                  <div className="gym-arrow-icon"></div>

                </div>
              </div>
            </div></div>

          </div>
        </div>
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


     <section className="gallery-section">
      <div className="container">
        <div className="col-lg-10 mx-auto">

        <div className="row">
      <div className="gallery-grid">
        {galleryImages.map((img) => (
          <div 
            key={img.id} 
            className={`gallery-item ${img.className}`}
            onClick={() => setSelectedImg(img.src)}
          >
            <img src={img.src} alt="Gym Gallery" />
            <div className="gallery-hover">
              <FaRegImage size={40} color="#f36100" />
            </div>
          </div>
        ))}
                </div></div>
      </div>
      </div>

      {selectedImg && (
        <div className="gallery-modal" onClick={() => setSelectedImg(null)}>
          <button className="close-modal"><RxCross1 size={40} color="#fff" /></button>
          <img src={selectedImg} alt="Enlarged" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section> 



<section className="trainers-section">

  <div className="container">
    <div className="col-lg-10 mx-auto ">

    {/* HEADER */}
    <div className="trainer-top">

      <div className="trainer-heading">

        <p className="sub-header">
          OUR TEAM
        </p>

        <h2 className="main-header">
          TRAIN WITH EXPERTS
        </h2>

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

    {/* SLIDER */}
  <div className="css-slider-viewport">

  <div
    className="css-slider-wrapper"
    style={{
      transform: `translateX(-${activeIndex * 400}px)`,
      transition: isTransition
        ? "transform 0.8s ease-in-out"
        : "none"
    }}
  >

    {trainersLoop.map((trainer, index) => (

      <div className="trainer-card" key={index}>

        <div className="trainer-image-box">

          <img src={trainer.img} alt={trainer.name} />

          <div className="trainer-info-overlay">

            <h3>{trainer.name}</h3>

            <p>{trainer.role}</p>

          </div>

        </div>

      </div>

    ))}

  </div>

</div>

    {/* LINES */}
    <div className="trainer-lines">

      {[0, 1, 2].map((line, index) => (

        <span
          key={index}
          className={activeIndex === index ? "active-line" : ""}
          onClick={() => setActiveIndex(index)}
        ></span>

      ))}

    </div>
</div>
  </div>

</section>

    </>
  )
}

export default Home