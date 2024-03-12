import React from 'react'
import './PayDeal.css'
import Slide from 'react-slick'
import { InterWomenDeal } from '../../util/data'
import { FaAngleRight }  from 'react-icons/fa'

function PayDeal() {
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
    <div className='PayDealContainer'>
    <div className="header">
        <h2>International Women's Day Deals | Inspire Inclusion</h2>
        <a href="#" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide {...settings}>
            {
                InterWomenDeal.map((PayDeal, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                        <img src={PayDeal.productImg} alt="" />
                        </div>
                        <p>{PayDeal.productTitle}</p>
                        <small>₦ {PayDeal.productPrice}</small>
                        <div className='small'>
                           <small>₦ {PayDeal.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                PayDeal.percent
                            }
                            </div>     
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default PayDeal