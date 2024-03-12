import React from 'react'
import './ClearanceSale.css'
import Slide from 'react-slick'
import { NewArrival } from '../../util/data'
import { FaAngleRight }  from 'react-icons/fa'

function ClearanceSale() {
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
    <div className='ClearanceSaleContainer'>
    <div className="header">
        <h2>New Arrival | Up to 60% Off</h2>
        <a href="#" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide {...settings}>
            {
                NewArrival.map((ClearanceSale, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                        <img src={ClearanceSale.productImg} alt=""  />
                        </div>
                        <p>{ClearanceSale.productTitle}</p>
                        <small>₦ {ClearanceSale.productPrice}</small>
                        <div className='small'>
                           <small>₦ {ClearanceSale.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                ClearanceSale.percent
                            }
                            </div>
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default ClearanceSale