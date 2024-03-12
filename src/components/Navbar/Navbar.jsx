import React from 'react'
import './Navbar.css'
import logo from '../../assets/jumia-logo.png'


function Navbar() {
  return (
    <div className="navbar">
         <div className='logo'>
         <img src={logo}  alt="" />
         </div>
        <div className="inputForm">
            <input type="text" placeholder='Search products, brands and categories' />
            <button>SEARCH</button>
        </div>
        <nav>
            <ul>
                <li>Account</li>
                <li>? Help</li>
                <li><a href="#">Cart</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar