import React from 'react'
import './FooterLink.css'
import {  FaFacebookF, FaInstagram, FaTwitter, FaYoutube }  from 'react-icons/fa'
import Cash from '../../../assets/cash.png'
import Master from '../../../assets/masterCard.png'
import Verve from '../../../assets/verve.png'
import Iter from '../../../assets/interSwitch.png'
import dhl from '../../../assets/dhl.png'
import Max from '../../../assets/max.png'


function FooterLinks() {
  return (
    <div className='Linkcontainer'>
        <div className="Linkcontent">
                <ul style={{marginLeft: '0'}}>
                    <h5>NEED HELP</h5>
                    <li><a href="#">Chat With us</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <h5>USEFULL LINK</h5>
                    <li><a href="#">Service Center</a></li>
                    <li><a href="#">How to shop on Jumia?</a></li>
                    <li><a href="#">Delivery options and timelines</a></li>
                    <li><a href="#">How to return a product on Jumia?</a></li>
                    <li><a href="#">Corporate and bulk purchases</a></li>
                    <li><a href="#">Report a Product</a></li>
                    <li><a href="#">Dispute Resolution Policy</a></li>
                    <li><a href="#">Returns & Refund Timeline</a></li>
                    <li><a href="#">Return Policy</a></li>
                </ul>

                <ul>
                    <h5>ABOUT JUMIA</h5>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Jumia careers</a></li>
                    <li><a href="#">Jumia Express</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Privacy Notice</a></li>
                    <li><a href="#">Jumia Store Credit Terms & Conditions</a></li>
                    <li><a href="#">Jumia Payment Information Guidelines</a></li>
                    <li><a href="#">Cookie Notice
</a></li>
                    <li><a href="#">
Jumia Global</a></li>
                    <li><a href="#">
Official Stores</a></li>
                    <li><a href="#">
Flash Sales</a></li>
                </ul>

                <ul>
                    <h5>MAKE MONEY WITH JUMIA</h5>
                    <li><a href="#">Sell on Jumia</a></li>
                    <li><a href="#">Vendor hub</a></li>
                    <li><a href="#">
Become a Sales Consultant</a></li>
                    <li><a href="#">Become a Logistics Service Partner
</a></li>
                    <li><a href="#">Join the Jumia DA Academy</a></li>
                    <li><a href="#">Join the Jumia KOL Program</a></li>
                </ul>

               <div className='h5'>
               <h5>JUMIA INTERNATIONAL</h5>
                <div style={{display: 'flex'}}>
                    <ul>
                        <li><a href="#">Algeria</a></li>
                        <li><a href="#">Egypt</a></li>
                        <li><a href="#">Ghana</a></li>
                        <li><a href="#">Ivory</a></li>
                        <li><a href="#">Coast</a></li>
                        <li><a href="#">Kenya</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Morocco</a></li>
                        <li><a href="#">Senegal</a></li>
                        <li><a href="#">Tunisia</a></li>
                        <li><a href="#">Uganda</a></li>
                        <li><a href="#">Zando</a></li>
                    </ul>
                </div>
               </div>
        </div>
        
        <div className="payMe">
            <ul style={{marginLeft: '0'}}>
                <h5>JOIN US ON</h5>
                <li style={{marginLeft: '0'}}>
                     <a href="#" >
                        <FaFacebookF style={{color: 'white', scale: '1.70'}} />
                     </a>
                </li>
                <li><a href="#">
                    <FaYoutube style={{color: 'white', scale: '1.70'}} />    
                </a></li>
                <li><a href="#">
                    <FaInstagram  style={{color: 'white', scale: '1.70'}} />    
                </a></li>
                <li><a href="#">
                    <FaTwitter  style={{color: 'white', scale: '1.70'}} />    
                </a></li>
            </ul>
            <ul>
                <h5>PAYMENT METHODS & DELIVERY PARTNERS </h5>
               <div className="img">
               <img src={Cash} alt="" style={{height: '24px'}} />
                    <img src={Master} alt=""  style={{height: '44px'}} />
                    <img src={Verve} alt=""  style={{height: '54px'}} />
                <img src={Iter} alt=""  style={{height: '64px'}} />
                <img src={dhl} alt=""  style={{height: '44px'}} />
                <img src={Max} alt=""  style={{height: '44px'}} />
                <img src={Verve} alt=""  style={{height: '44px'}} />
               </div>
            </ul>
        </div>
        <hr style={{border: '0.45px solid gray'}} />

        <div style={{textAlign: 'center', paddingTop: '10px'}}>
            <p>PayMe</p>
        </div>
    </div>
  )
}

export default FooterLinks