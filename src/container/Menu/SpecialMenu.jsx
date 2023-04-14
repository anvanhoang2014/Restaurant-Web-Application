import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu"> 
    <div className="app__specialMenu-title">
      <SubHeading title="Enjoy our menu" />
      <h1 className="headtext__cormorant">Chef's Special</h1>
    </div>
    
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_sushi">
        <p className="app__specialMenu-menu_heading">Sushi Roll</p>
        <div className="app__specialMenu-menu_items">
          {data.sushis.map((sushi, index) => (
            <MenuItem key={sushi.title + index} title={sushi.title} price={sushi.price} tags={sushi.tags}/>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img"/>
      </div>

      <div className="app__specialMenu-menu_appetizer">
        <p className="app__specialMenu-menu_heading">Appetizers</p>
        <div className="app__specialMenu-menu_items">
          {data.appetizers.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags}/>
          ))}
        </div>
      </div>

    </div>
    <div style={{marginTop: '15px'}}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
