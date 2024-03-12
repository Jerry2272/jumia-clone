import React from 'react'
import './HaeirSales.css'
import Slide from 'react-slick'
import { Dettol } from '../../util/data'

function HaeirSales() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
       autoplay: true,
       showArrows: true,
       responsive: [{
 
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true
        }
   
      }, {
   
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          dots: true,
          showArrows: false,
        }
   
      }, {
   
        breakpoint: 300,
        settings: "unslick" // destroys slick
   
      }]
      };

  return (
    <div className='HaeirSalesContainer'>
    <div className="header">
        <h2>Dettol Official Store Deals</h2>
        <a href="#">See all</a>
    </div>
        <Slide {...settings}>
            {
                Dettol.map((HaeirSales, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                            <img src={HaeirSales.productImg} />
                        </div>
                        
                        <p>{HaeirSales.productTitle}</p>
                        <small>₦ {HaeirSales.productPrice}</small>
                        <div className='small'>
                           <small>₦ {HaeirSales.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                HaeirSales.percent
                            }
                            </div> 
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default HaeirSales