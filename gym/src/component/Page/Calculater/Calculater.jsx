import React, { useState } from 'react'
import './Calculater.css'
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'

const Calculater = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBmi = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
    }
  };
  return (
    <>
                <section className="about-hero-section">
                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <h2>OUR TEAM</h2>
                        <div className="breadcrumb">
                            <p>
                                <NavLink to="/" className="nav-item">Home <FaAngleRight /> </NavLink><NavLink to="/" className="nav-item">Pages</NavLink> <span><FaAngleRight />BMI calculator</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
<section className="bmi-section">
  <div className="container">
    <div className="col-lg-10 mx-auto">
  
      <div className="bmi-container">
        
        {/* Left Side: BMI Chart */}
        <div className="bmi-chart-area">
          <span className="bmi-sub">CHECK YOUR BODY</span>
          <h2 className="bmi-title">BMI CALCULATOR CHART</h2>
          
          <table className="bmi-table">
            <thead>
              <tr>
                <th>BMI</th>
                <th>WEIGHT STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Below 18.5</td>
                <td>Underweight</td>
              </tr>
              <tr>
                <td>18.5 - 24.9</td>
                <td>Healthy</td>
              </tr>
              <tr>
                <td>25.0 - 29.9</td>
                <td>Overweight</td>
              </tr>
              <tr>
                <td>30.0 - and Above</td>
                <td>Obese</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Side: Calculator Form */}
        <div className="bmi-form-area">
          <span className="bmi-sub">CHECK YOUR BODY</span>
          <h2 className="bmi-title">CALCULATE YOUR BMI</h2>
          <p className="bmi-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
            Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>

          <form className="bmi-form" onSubmit={calculateBmi}>
            <div className="bmi-input-group">
              <input 
                type="number" 
                placeholder="Height / cm" 
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <input 
                type="number" 
                placeholder="Weight / kg" 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="bmi-input-group">
              <input type="number" placeholder="Age" />
              <input type="text" placeholder="Sex" />
            </div>
            <button type="submit" className="bmi-calculate-btn">CALCULATE</button>
          </form>

          {bmi && (
            <div className="bmi-result">
              Your BMI is: <span>{bmi}</span>
            </div>
          )}
        </div>
</div></div>
      </div>
    </section>
    </>
  )
}

export default Calculater