import React from 'react'
import './AppliancesUP.css'
import Slide from 'react-slick'
import { App } from '../../util/data'

function AppliancesUP() {
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
    <div className='AppliancesUPContainer'>
    <div className="textContainer">
        <h2>Appliance Upgrade</h2>
    </div>
        <Slide {...settings}>
            {
                App.map((AppliancesUP, index) => (
                    <div key={index.id} className="shopItem">
                        <div className="imgContent">
                             <img src={AppliancesUP.productImg} alt="" />
                        </div>
                       
                        <p>{AppliancesUP.productTitle}</p>
                        <small>{AppliancesUP.productPrice}</small>
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default AppliancesUP