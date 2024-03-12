import React from 'react'
import './GameCollections.css'
import Slide from 'react-slick'
import { Ramadan } from '../../util/data'

function GameCollections() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 4,
       autoplay: false,
       showArrows: false,
       responsive: [{
 
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          infinite: true
        }
   
      }, {
   
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          dots: true,
          showArrows: false,
        }
   
      }, {
   
        breakpoint: 300,
        settings: "unslick" // destroys slick
   
      }]
      };

  return (
    <div className='GameCollectionsContainer'>
    <div className="textContainer">
        <h2>Ramadan Ready</h2>
    </div>
        <Slide {...settings}>
            {
                Ramadan.map((GameCollections, index) => (
                    <div key={index.id} className="shopItem">
                        <div className="imgContent">
                            <img src={GameCollections.productImg} alt="" />
                        </div>
                        
                        <p>{GameCollections.productTitle}</p>
                        <small>{GameCollections.productPrice}</small>
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default GameCollections