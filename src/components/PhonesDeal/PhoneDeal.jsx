import React from 'react'
import './Phone.css'
import Slide from 'react-slick'
import { PhoneDeals } from '../../util/data'


function PhoneDeal() {
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
    <div className='PhoneDealContainer'>
    <div className="textContainer">
        <h2>Phone Deals</h2>
    </div>
        <Slide {...settings}>
            {
                PhoneDeals.map((PhoneDeal, index) => (
                    <div key={index.id} className="shopItem">
                        <div className="imgContent">
                            <img src={PhoneDeal.productImg} alt="" />
                        </div>
                        
                        <p>{PhoneDeal.productTitle}</p>
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default PhoneDeal