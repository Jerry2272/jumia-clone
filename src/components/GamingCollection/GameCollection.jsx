import React from 'react'
import './GameCollection.css'
import Slide from 'react-slick'
import { RamadanE } from '../../util/data'
import { FaAngleRight }  from 'react-icons/fa'
function GameCollection() {
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
    <div className='GameCollectionContainer'>
    <div className="header">
        <h2>Ramadan Entertainment</h2>
        <a href="#" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide {...settings}>
            {
                RamadanE.map((GameCollection, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                            <img src={GameCollection.productImg} alt="" />
                        </div>
                        
                        <p>{GameCollection.productTitle}</p>
                        <small>₦ {GameCollection.productPrice}</small>
                        <div className='small'>
                           <small>₦ {GameCollection.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                GameCollection.percent
                            }
                            </div> 
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default GameCollection