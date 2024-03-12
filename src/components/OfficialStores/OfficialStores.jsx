import React from 'react'
import './OfficialStore.css'
import { OfStore } from '../../util/data'

function OfficialStores() {
  return (
    <div className="shopContainers">
    <div className="textContainers">
      <h2>Official Stores</h2>
    </div>
   <div className='shopContents'>
      {
          OfStore.map((shopItem, index) =>(
            <div key={index.id} className="shopItems">
              <div className="imgContents">
              <img src={shopItem.productImg} alt={shopItem.itemName} />
              </div>
            </div>
          ))
      }
  </div>
 </div>
  )
}

export default OfficialStores