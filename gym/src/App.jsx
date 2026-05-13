import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './component/Home/Home'
import Team from './component/Team/Team'

// Future Pages
import About from './component/About/About'
import Footer from './Footer'
import { useEffect } from 'react'
// import Classes from './component/Classes/Classes'
// import Service from './component/Service/Service'
// import Team from './component/Team/Team'

const App = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/classes" element={<Classes />} /> */}
        {/* <Route path="/service" element={<Service />} /> */}
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App