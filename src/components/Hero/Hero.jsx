import React from 'react'
import './Hero.css'
import ImageSlider from './SlideShow/SlideShow'
import { FaAppleAlt, FaShoppingCart, FaSuperpowers, FaElementor, FaPhone } from 'react-icons/fa';

function Hero() {
  return (
    <div className='heroSection' style={{width: '100%', position: 'relative'}}>
       <div className="heroNav">
        <ul>
        <li><a href="#"> <FaPhone />Phone & Tablets</a></li>
          <li><a href="#"><FaAppleAlt /> Appliances</a></li>
          <li><a href="#"> <FaElementor /> Electronics</a></li>
          <li><a href="#">  <FaSuperpowers /> Supermarket</a></li>
          <li><a href="#">Health & Beauty</a></li>
          <li><a href="#">Home & Office</a></li>
          <li><a href="#">Power</a></li>
          <li><a href="#">Computing</a></li>
          <li><a href="#">Women's Fashion</a></li>
          <li><a href="#">Men's Fashion</a></li>
          <li><a href="#">Baby Products</a></li>
        </ul>
       </div>
        <ImageSlider />
    </div>
  )
}

export default Hero