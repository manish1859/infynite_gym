// import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './component/Home/Home'
import Team from './component/Team/Team'

// Future Pages
import About from './component/About/About'
import Footer from './Footer'
import { useEffect } from 'react'
import Calculater from './component/Page/Calculater/Calculater'
import Gallery from './component/Page/Gallery/Gallery'
import Classes from './component/Classes/Class'
import Service from './component/Service/Service'
import Timetable from './component/Page/Time/Timetable'
import Contact from './component/Contact/Contact'
import Blog from './component/Page/Blog/Blog'
import Page from './component/Page/Page'

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
        <Route path="/classes" element={<Classes />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/bmi" element={<Calculater />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fitness-blog" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App