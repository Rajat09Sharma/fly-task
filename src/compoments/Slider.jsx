import React, { useState } from 'react'
import Home from './Home'
import Hover from './Hover'

export default function Slider() {

  return (
    <div className="what-do-section">
      <p className="h5 first-title-color">WHAT WE DO</p>
      <div className="row">
        <div className="col-lg-5">
          <h1 className="display-4 font-weight-bold">SERVICES PROVIDE FOR YOU</h1>
        </div>
        <div className="col-lg-5">
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum
          </p>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide w-25 mx-auto mt-4" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/slider-image-1.jpg" className="d-block w-100" alt="..." />
            <div className="hover-content">
              <Hover />
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/slider-image-2.jpg" className="d-block w-100" alt="..." />
            <div className="hover-content">
              <Hover />
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/slider-image-3.jpg" className="d-block w-100" alt="..." />
            <div className="hover-content">
              <Hover />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

// ImageSlider.js
// import React, { useState, useEffect, useRef } from 'react';

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     { src: 'images/home-image.png', hoverContent: 'Content for Image 1' },
//     { src: 'images/home-image.png', hoverContent: 'Content for Image 2' },
//     { src: 'images/home-image.png', hoverContent: 'Content for Image 3' },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="slider">
//       <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {images.map((image, index) => (
//           <div key={index} className="slide">
//             <img
//               src={image.src}
//               alt={`Slide ${index + 1}`}
//               className="slide-image"
//               onMouseEnter={(e) => (e.currentTarget.nextSibling.style.display = 'block')}
//               onMouseLeave={(e) => (e.currentTarget.nextSibling.style.display = 'none')}
//             />
// <div className="hover-content" style={{ display: 'none' }}>
//   {image.hoverContent}
// </div>
//           </div>
//         ))}
//       </div>
//       <div className="dots">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`dot ${index === currentIndex ? 'active' : ''}`}
//             onClick={() => handleDotClick(index)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
