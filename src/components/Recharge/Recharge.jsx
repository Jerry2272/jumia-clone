import React from 'react'
import Slide from 'react-slick'
import { FaAngleRight }  from 'react-icons/fa'
import { Recharge } from '../../util/data'

function Rechargeable() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
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
    <div className='TvSalesContainer'>
    <div className="header">
        <h2>Rechargeable Fan</h2>
        <a href="#" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide {...settings}>
            {
                Recharge.map((TvSales, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                        <img src={TvSales.productImg} alt="" />
                        </div>
                        <p>{TvSales.productTitle}</p>
                        <small>₦ {TvSales.productPrice}</small>
                        <div className='small'>
                           <small>₦ {TvSales.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                TvSales.percent
                            }
                            </div>                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default Rechargeable