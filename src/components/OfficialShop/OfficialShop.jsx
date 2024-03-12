import React from 'react'
import './OfficialShop.css'
import { officialShop } from '../../util/data'

function OfficialShop() {
  return (
   <div className="shopContainer">
      <div className="textContainer">
        <h2>Shop From Our Collections</h2>
      </div>
     <div className='shopContent'>
        {
            officialShop.map((shopItem, index) =>(
              <div key={index.id} className="shopItem">
                <div className="imgContent">
                <img src={shopItem.shopImg} alt={shopItem.itemName} />
                </div>
                <span>{shopItem.itemName}</span>
              </div>
            ))
        }
    </div>
   </div>
  )
}

export default OfficialShop