import React from 'react'
import './AppUpgrade.css'
import Slide from 'react-slick'
import { APP } from '../../util/data'
import { FaAngleRight }  from 'react-icons/fa'

function AppUpgrade() {
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
    <div className='AppUpgradeContainer'>
    <div className="header">
        <h2>Appliance Upgrade</h2>
        <a href="#" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide {...settings}>
            {
                APP.map((AppUpgrade, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                            <img src={AppUpgrade.productImg} alt="" />  
                        </div>
                      
                        <p>{AppUpgrade.productTitle}</p>
                        <small>₦ {AppUpgrade.productPrice}</small>
                        <div className='small'>
                           <small>₦ {AppUpgrade.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                AppUpgrade.percent
                            }
                            </div>     
                       
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default AppUpgrade