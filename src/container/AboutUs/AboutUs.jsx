import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={ images.G } alt="g letter"/>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img"/>
        <p className="p__opensans">Whether you’re looking for a fun night out with friends, the perfect place for your next corporate party, or a place to unwind during the workweek, we have it all here at Flipiya Japanese Restaurant & Sushi Bar</p>
        <button type="button" className="custom__button">Read More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" className="knife_img"/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img"/>
        <p className="p__opensans">Flipiya Japanese & Sushi Bar was established in Charlotte, North Carolina in 1970. As a beloved staple in our community, we provide high-quality, delicious sushi and Japanese food with unique dining experience</p>
        <button type="button" className="custom__button">Read More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
