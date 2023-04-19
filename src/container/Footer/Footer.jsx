import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div>
    <div className="app__footer section__padding" id="footer">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links"> 
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">4968 Snyder Avenue, Charlotte NC, 28202</p>
          <p className="p__opensans">(704) 670-5630</p>
          <p className="p__opensans">(704) 507-8296</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.flipiya} alt="footer_logo" />
          <p className="p__opensans">See more of us</p>
          <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }}/>
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Open Hours</h1>
          <p className="p__opensans">Monday-Friday</p>
          <p className="p__opensans">8:00 AM - 10:00 PM</p>
          <p className="p__opensans">Saturday-Sunday</p>
          <p className="p__opensans">9:00 AM - 11:00 PM</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2023 Flipiya. All Rights Reserved.</p>
      </div>
    </div>
  </div>
);

export default Footer;
