// Slider.js
import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './SlideShow.css'
import { HSlide } from '../../../util/data';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    fade: true, 
    autoplay: true,
    arrows: false
  };
 

  return (
    <div className="slideContainer">
      <Slider {...settings}>
        {HSlide.map((image, index) => (
          <div key={index.id}>
            <div className='slideContent' >
<img src={image.productImg} alt={`Slide ${index + 1}`} /> 
            </div>
            {/* */}
          </div>
        ))}
      </Slider>
      <div className="overLay"></div>
    </div>
  );
}

export default ImageSlider;

