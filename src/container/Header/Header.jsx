import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Welcome To Flipiya Sushi"/>
      <h1 className="app__header-h1">JAPAN SUSHI BAR</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>Flipiya offers innovative sushi and Japanese cuisine. When you dine with us, you can expect a truly stimulating experience.</p>
      <a href="#menu">
        <button type="button" className="custom__button">Explore Menu</button>
      </a>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
