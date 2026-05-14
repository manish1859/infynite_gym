import React, { useState } from 'react'
import './Gallery.css'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import img1 from '../../../assets/team-1.jpg'
import img2 from '../../../assets/team-2.jpg'


const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
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
  return (
    <>
     <section className="about-hero-section">
                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <h2>OUR GALLERY</h2>
                        <div className="breadcrumb">
                            <p>
                                <NavLink to="/" className="nav-item">Home <FaAngleRight /> </NavLink><NavLink to="/" className="nav-item">Pages</NavLink> <span><FaAngleRight />Our Gallery</span>
                            </p>
                        </div>
                    </div>
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
    </>
  )
}

export default Gallery