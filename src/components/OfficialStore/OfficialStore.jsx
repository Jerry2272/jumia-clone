import React from 'react'
import './OfficialStore.css'
import Slide from 'react-slick'
import { Bofficial } from '../../util/data'
import { FaAngleRight }  from 'react-icons/fa'

function OfficialStore() {
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
    <div className='OfficialStoreContainer'>
    <div className="header">
        <h2>Brita Official Store Deals</h2>
        <a href="#" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide {...settings}>
            {
                Bofficial.map((OfficialStore, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                            <img src={OfficialStore.productImg} alt="" />
                        </div>
                        
                        <p>{OfficialStore.productTitle}</p>
                        <small>₦ {OfficialStore.productPrice}</small>
                        <div className='small'>
                           <small>₦ {OfficialStore.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                OfficialStore.percent
                            }
                            </div> 
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default OfficialStore