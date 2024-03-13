// Slider.js
import React from 'react';
import Fade from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.min.js'; 
import './Store.css';
import { StoreAPI } from '../../util/data'
// import { products } from '../../../util/data'; // Updated naming convention

// Slider.js

function Store() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true, // Enable fade effect
    autoplay: true,
    arrows: false
  };
 

  return (
    <div className="storeContainer">
      <Fade {...settings}>
        {StoreAPI.map((image, index) => (
          <div key={index.id}>
            <div className='storeContent' >
<img src={image.productImg} alt={`Slide ${index + 1}`} /> 
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Store;

