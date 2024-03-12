import React from 'react'
import './Hero.css'
import ImageSlider from './SlideShow/SlideShow'

function Hero() {
  return (
    <div className='heroSection' style={{width: '100%', position: 'relative'}}>
       <div className="heroNav">
        <ul>
          <li><a href="#">Supermarket</a></li>
          <li><a href="#">Supermarket</a></li>
          <li><a href="#">Supermarket</a></li>
          <li><a href="#">Supermarket</a></li>
          <li><a href="#">Supermarket</a></li>
          <li><a href="#">Supermarket</a></li>
          <li><a href="#">Supermarket</a></li>
          <li><a href="#">Supermarket</a></li>
          <li><a href="#">Supermarket</a></li>
          <li><a href="#">Supermarket</a></li>
          <li><a href="#">Supermarket</a></li>
        </ul>
       </div>
        <ImageSlider />
    </div>
  )
}

export default Hero