import React from 'react'
import './Payday.css'
import techDay from '../../../assets/techWeek.png'

function Payday() {
  return (
    <div className='payDay'>
         <img src={techDay} alt="" style={{width: '100%', height: '100%'}}  />
    </div>
  )
}

export default Payday