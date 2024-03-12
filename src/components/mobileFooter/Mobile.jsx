import React from 'react'
import './Mobile.css'

function Mobile() {
  return (
    <div className='mobileFooter'>   
  <div>
  <div>
      <ul>
                <li><a href="#">chat with us</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
                <li><a href="#">Terms & conditions</a></li>
                <li><a href="#">Privacy Notice</a></li>
                <li><a href="#">Cookie Notice</a></li>
            </ul>
            <ul>
                <li><a href="#">Become a seller</a></li>
                <li><a href="#">report a product</a></li>
            </ul>
      </div>
      <h5 style={{marginBottom: '10px', fontSize: '10px', textTransform: 'uppercase'}}>Jumia Anniversary 2024</h5>
      <hr style={{border: '1px solid gray'}} />
      <p style={{marginTop: '6px', fontSize: '10px', textTransform: 'uppercase'}}>All Right Reserved</p>
  </div>
    </div>
  )
}

export default Mobile