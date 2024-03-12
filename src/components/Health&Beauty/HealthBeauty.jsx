import React from 'react'
import './HealthBeauty.css'
import Slide from 'react-slick'
import { Health } from '../../util/data'

function HealthBeauty() {
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
    <div className='HealthBeautyContainer'>
    <div className="textContainer">
        <h2>Health & Beauty</h2>
    </div>
        <Slide {...settings}>
            {
                Health.map((HealthBeauty, index) => (
                    <div key={index.id} className="shopItem">
                        <div className="imgContent">
                            <img src={HealthBeauty.productImg} alt="" />
                        </div>
                        
                        <p>{HealthBeauty.productTitle}</p>
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default HealthBeauty