import React from 'react'
import './SuperPayday.css'
import Slide from 'react-slick'
import { InterWomen } from '../../util/data'

function SuperPayday() {
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
    <div className='SuperPaydayContainer'>
    <div className="textContainer">
        <h2>International Women's Day</h2>
    </div>
        <Slide {...settings}>
            {
                InterWomen.map((SuperPayday, index) => (
                    <div key={index.id} className="shopItem">
                        <div className="imgContent">
                            <img src={SuperPayday.productImg} alt="" />
                        </div>
                        
                        <p>{SuperPayday.productTitle}</p>
                        <small>{SuperPayday.productPrice}</small>
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default SuperPayday