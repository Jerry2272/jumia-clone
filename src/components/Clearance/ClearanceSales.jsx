import React from 'react'
import './ClearanceSales.css'
import CarouselSlide from './CarouselSlide/CarouselSlide'
import Payday from './PayDay/Payday'

function ClearanceSales() {
  return (
    <div className='clearanceContainer'>
        <CarouselSlide />
        <Payday />
    </div>
  )
}

export default ClearanceSales