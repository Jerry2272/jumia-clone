import React from 'react'
import './RecentSearch.css'
import Slide from 'react-slick'
import { FaAngleRight }  from 'react-icons/fa'
import { RecentL } from '../../util/data'

function RecentSearch() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
       autoplay: false,
       showArrows: false,
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
    <div className='RecentSearchContainer'>
    <div className="top">
        <h2>Your Recent Search | laptop</h2>
        <a href="#" style={{color : 'orange', display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>See all <FaAngleRight className='faRight' /> </a>
    </div>
        <Slide {...settings}>
            {
                RecentL.map((RecentSearch, index) => (
                    <div key={index.id} className="FlashSalesContent">
                        <div className="FlashSalesItem">
                            <img src={RecentSearch.productImg} alt="" />
                        </div>
                        <p>{RecentSearch.productTitle}</p>
                        <small>₦ {RecentSearch.productPrice}</small>
                        <div className='small'>
                           <small>₦ {RecentSearch.productPice}</small> 
                        </div>
                        <div className="percent">
                            {
                                RecentSearch.percent
                            }
                            </div> 
                    </div>            
                ))
            }
        </Slide>       
        
    </div>
  )
}

export default RecentSearch