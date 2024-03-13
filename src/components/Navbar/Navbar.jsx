import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/jumia-logo.png'
import { FaUser, FaQuestionCircle, FaShoppingCart, FaBars, FaTimes, FaAngleRight, FaFirstOrder, FaPennyArcade, FaSave, FaAppleAlt, FaSuperpowers, FaElementor, FaPhone, FaMoneyBill } from 'react-icons/fa';

function Navbar() {
  const navRef =  useRef();

  function navToggle () {
    navRef.current.classList.toggle('navHide');
  };
  return (
    <div className="navbar">
         <div className='logo'>
        <span><FaBars onClick={navToggle} className='bar' /></span> <img src={logo}  alt="" />
         </div>
        <div className="inputForm">
            <input type="text" placeholder='Search products, brands and categories' />
            <button>SEARCH</button>
        </div>
        <div className="navbarNav" ref={navRef}>
       <div className="logo" style={{ paddingBottom: '1.96em'}}>
       <span><FaTimes  onClick={navToggle} className='times' /></span> <img src={logo}  alt="" />
       </div>
       <hr />
        <ul>
          <li><a href="#">NEED HELP? <span><FaAngleRight /></span></a></li>
          <hr />
          <li><a href="#">MY JUMIA ACCOUNT  <span><FaAngleRight /></span></a></li>
          <li><a href="#"><FaFirstOrder /> Orders</a></li>
          <li><a href="#"><FaPennyArcade /> Pending Reviews</a></li>
          <li><a href="#"> Vocher</a></li>
          <li><a href="#"> <FaSave />  Saved Items</a></li>
          <hr />
          <li><a href="#">OUR CATEGORIES  <span style={{color: 'orange', fonSize: '12px'}}>SEE ALL</span></a></li>
          <li><a href="#"> <FaPhone />Phone & Tablets</a></li>
          <li><a href="#"><FaAppleAlt /> Appliances</a></li>
          <li><a href="#"> <FaElementor /> Electronics</a></li>
          <li><a href="#">  <FaSuperpowers /> Supermarket</a></li>
          <li><a href="#">Health & Beauty</a></li>
          <li><a href="#">Home & Office</a></li>
          <li><a href="#">Power</a></li>
          <li><a href="#">Computing</a></li>
          <li><a href="#">Women's Fashion</a></li>
          <li><a href="#">Men's Fashion</a></li>
          <li><a href="#">Baby Products</a></li>
          <li><a href="#">Gaming</a></li>
          <li><a href="#"> <FaShoppingCart /> Sporting Goods</a></li>
          <li><a href="#">Automoblie</a></li>
          <li><a href="#">OUR SERVICES</a></li>
          <li><a href="#">J-Force</a></li>
          <li><a href="#"><FaMoneyBill /> Pay Airtime & Bills</a></li>
          <li><a href="#">Pay Electricity Bills</a></li>
          <li><a href="#">Pay Internet Bills</a></li>
          <li><a href="#">But Data</a></li>
          <hr />
          <li><a href="#">Sell on Jumia</a></li>
          <li><a href="#">Service Center</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
       </div>
        <nav>
            <ul className='navbar-small'>
            <li>
        <FaUser />
      </li>
      <li>
        <FaShoppingCart /> 
      </li>
            </ul>

            <ul className='navbar-large'>
            <li>
        <FaUser /> Account
      </li>
      <li>
        <FaQuestionCircle /> Help
      </li>
      <li>
        <FaShoppingCart /> <a href="#">Cart</a>
      </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar