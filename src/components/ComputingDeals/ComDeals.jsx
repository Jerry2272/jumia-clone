import React from 'react'
import './ComDeals.css'
import Slide from 'react-slick'
import { officialShop } from '../../util/data'

function ComDeals() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
       autoplay: true,
       showArrows: true,
      };

  return (
    <div className='ComDealsContainer'>
    <div className="header">
        <h2>Top Computing Deals</h2>
        <a href="#">See all</a>
    </div>
        <Slide {...settings}>
            {
                officialShop.map((ComDeals, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                              <img src={ComDeals.productImg} alt="" />
                        </div>
                      
                        <p>{ComDeals.productTitle}</p>
                        <small>{ComDeals.productPrice}</small>
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default ComDeals