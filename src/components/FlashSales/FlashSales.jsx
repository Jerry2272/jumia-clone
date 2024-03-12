import React from 'react'
import './FlashSales.css'
import Slide from 'react-slick'
import { FlashS } from '../../util/data'
import { FaAngleRight }  from 'react-icons/fa'

function FlashSales() {
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
    <div className='FlashSalesContainer'>
    <div className="header">
        <h2 style={{color: 'white'}}>Flash Sale</h2>
         <p>Time Left: 14h:23m: 01 </p>
         <a href="#" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide  {...settings} >
            {
                FlashS.map((FlashSales, index) => (
                    <div key={index.id} className="FlashSalesContent">
                      <div className="FlashSalesItem">
                      <img src={FlashSales.productImg} alt="" />
                      </div>
                        <p>{FlashSales.productTitle}</p>
                        <small>₦ {FlashSales.productPrice}</small>
                        <div className='small'>
                           <small>₦ {FlashSales.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                FlashSales.percent
                            }
                            </div>  
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default FlashSales