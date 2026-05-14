import React, { useState } from "react";
import "./Timetable.css";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";


const Timetable = () => {
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

  // const handleMouseMove = (e) => {
  //   const rect = e.currentTarget.getBoundingClientRect();

  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;

  //   e.currentTarget.style.setProperty("--x", `${x}px`);
  //   e.currentTarget.style.setProperty("--y", `${y}px`);
  // };

  return (
<>
<section className="about-hero-section">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h2>Timetable</h2>
            <div className="breadcrumb">
                            <p>
                                <NavLink to="/" className="nav-item">Home <FaAngleRight /> </NavLink><NavLink to="/" className="nav-item">Pages</NavLink> <span><FaAngleRight /> Timetable</span>
                            </p>
                        </div>
          </div>
        </div>
      </section>

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
  );
};

export default Timetable;