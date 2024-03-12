import React from 'react'
import FooterNews from './FooterNewLetter/FooterNews'
import FooterLinks from './FooterLink/FooterLinks'
import Mobile from '../mobileFooter/Mobile'

function Footer() {
  return (
    <div style={{width: '100%', overflow: 'hidden'}}>
        <FooterNews />
        <FooterLinks />
        <Mobile />
    </div>
  )
}

export default Footer