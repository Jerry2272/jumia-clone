import React from 'react'
import './LimitedStock.css'
import Slide from 'react-slick'
import { FaAngleRight }  from 'react-icons/fa'
import { LimitedStockSales } from '../../util/data'

function LimitedStock() {
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
    <div className='LimitedStockContainer'>
    <div className="header" style={{backgroundColor: 'rgb(150, 210, 200)'}}>
        <h2>Limited Stock Deals</h2>
        <a href="#" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide {...settings}>
            {
                LimitedStockSales.map((LimitedStock, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                        <img src={LimitedStock.productImg} alt="" />
                        </div>
                        <p>{LimitedStock.productTitle}</p>
                        <small>₦ {LimitedStock.productPrice}</small>
                        <div className='small'>
                           <small>₦ {LimitedStock.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                LimitedStock.percent
                            }
                            </div> 
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default LimitedStock