import React from 'react'
import './TopSelling.css'
import Slide from 'react-slick'
import { tSales } from '../../util/data'
import { FaAngleRight }  from 'react-icons/fa'

function TopSelling() {
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
    <div className='topSellingContainer'>
        <div className="header">
    <h2>Top Selling Items</h2>
    <a href="#" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide {...settings}>
            {
                tSales.map((topSelling, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                            <img src={topSelling.productImg} alt="" />
                        </div>
                        
                        <p>{topSelling.productTitle}</p>
                        <small>₦ {topSelling.productPrice}</small>
                        <div className='small'>
                           <small>₦ {topSelling.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                topSelling.percent
                            }
                            </div>  
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default TopSelling