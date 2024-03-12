import React from 'react'
import './TopBeauty.css'
import Slide from 'react-slick'
import { FaAngleRight }  from 'react-icons/fa'
import { TpBeauty } from '../../util/data'

function TopBeauty() {
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
    <div className='TopBeautyContainer'>
    <div className="header">
        <h2>Top Beauty Deals</h2>
        <a href="#" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide {...settings}>
            {
                TpBeauty.map((TopBeauty, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                        <img src={TopBeauty.productImg} alt="" />
                        </div>
                        <p>{TopBeauty.productTitle}</p>
                        <small>₦ {TopBeauty.productPrice}</small>
                        <div className='small'>
                           <small>₦ {TopBeauty.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                TopBeauty.percent
                            }
                            </div>  
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default TopBeauty