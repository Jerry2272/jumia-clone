import React from 'react'
import Slider from 'react-slick'
import './CarouselSlide.css'
import { Clearance } from '../../../util/data';

function CarouselSlide() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1,
       autoplay: true,
       showArrows: false,
      };

      return (
        <div className="shopContainer" id='shop'>
          <div className='shopContent'>
             {
                  Clearance.map((shopItem, index) =>(
                   <div key={index.id} className="shopItem">
                     <div className="imgContent">
                     <img src={shopItem.productImg} alt={shopItem.itemName} />
                     </div>
                     <span>{shopItem.productTitle}</span>
                   </div>
                 ))
             }
         </div>
        </div>
       )
}

export default CarouselSlide