import React from 'react'
import './FooterNews.css'
import FooterLogo from '../../../assets/footerLogo.png'
import Icon from '../../../assets/icon.png'

function FooterNews() {
  return (
    <div className='FooterNews'>
        <div className="logoPath" style={{paddingLeft: '20px'}}>
           <img src={FooterLogo} alt="" style={{width: '140px', height: '32px'}} />
        </div>

        <div className="formSection">
            <h4>NEW TO JUMIA?</h4>
            <p>Subscribe to our newsletter to get updates on our latest offers!</p>
            <form class="-form">
        <div className="inputForm">
        <div class="fi-w _ic">
                    <input placeholder="Enter E-mail Address"   class="fi" type="email" />
                </div>
        <div class="-df -pvs -plxs">
            <button name="gender" value="male" class="brd-btn _sqr -phl -mhxs">Male</button>
            <button name="gender" value="female" class="brd-btn _sqr -phl -mhxs">Female</button>
        </div>
        </div>
        <div className='check'>
            <input type="checkbox" value="1" id='text' style={{width: '16px', height: '16px', marginTop: '6px'}} />
            <div>
            <label  for="text">
                I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe <br /> from newsletters at any time.
                </label>
                    <a  href="https://www.jumia.com.ng/sp-privacy/" style={{color: 'orange', fontSize: '12px'}}>I accept the Legal Terms</a>
                    </div>
         </div>

</form>


        </div>

        <div className="appDownload">
            <div style={{display: 'flex'}}>
                <img src={Icon} style={{width: '90px', height: '50px'}} alt="" />
                <div className="textA" style={{paddingTop: '6px'}}>
                    <h5 style={{fontSize: '.75rem', fontWeight: '500', color: 'white'}}>DOWNLOAD JUMIA FREE APP</h5>
                    <p style={{fontSize: '10px',paddingLeft: '4px', color: 'white'}}>Get access to exclusive offers</p>
                </div>
            </div>

            <div className='appStore'>
                    {/* <img src={appStore} style={{width: '100px', height: '40px'}} alt="" />
                    <img src={googlePlay} style={{width: '100px', height: '40px'}} alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default FooterNews