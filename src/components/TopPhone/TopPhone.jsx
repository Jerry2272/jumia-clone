import React from 'react'
import './TopPhone.css'
import Slide from 'react-slick'
import { Tphone } from '../../util/data'
import { FaAngleRight }  from 'react-icons/fa'

function TopPhone() {
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
    <div className='TopPhoneContainer'>
    <div className="header">
        <h2>Top Phone Deals</h2>
        <a href="#" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide {...settings}>
            {
                Tphone.map((TopPhone, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                        <img src={TopPhone.productImg} alt="" />
                        </div>
                        <p>{TopPhone.productTitle}</p>
                        <small>₦ {TopPhone.productPrice}</small>
                        <div className='small'>
                           <small>₦ {TopPhone.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                TopPhone.percent
                            }
                            </div>  
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default TopPhone