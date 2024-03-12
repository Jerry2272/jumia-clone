import React from 'react'
import './ExploreMore.css'
import { exploreMore1 , exploreMore2 } from '../../util/data'

function ExploreMore () {
  return (
   <div className="exploreMoreContainer">

  <div>
  <div className="textExplore">
        <h2>Explore More</h2>
      </div>
     <div className='exContent'>
        {
            exploreMore1.map((exploreItem, index) =>(
              <div key={index.id} className="exploreContent">
                <div className="exploreImg">
                <img src={exploreItem.shopImg} alt={exploreItem.itemName} />
                </div>
              </div>
            ))
        }
    </div>
  </div>

   <div>
     <div className='exContent term'>
        {
            exploreMore2.map((exploreItem, index) =>(
              <div key={index.id} className="exploreContent">
                <div className="exploreImg">
                <img src={exploreItem.shopImg} alt={exploreItem.itemName} />
                </div>
              </div>
            ))
        }
    </div>
  </div>
   </div>
  )
}

export default ExploreMore