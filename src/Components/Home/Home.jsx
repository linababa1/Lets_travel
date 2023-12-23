import React from 'react';
import './Home.css';

//image

import mainImage from '../Home/pic.jpg';
//icons
import { FaPlay } from 'react-icons/fa';

function Home() {
  return (
    <div className="Home container section">
      <div className="textDiv grid">
        <span className="redText">Best Destinations in the world</span>
        <h2 className='h2'>Travel, enjoy and live a new and full life</h2>
        <p className="p">
          Beyond the destinations, we value sustainable and mindful travel. Join us on a journey where exploration meets responsibilty
        </p>
        <div className="button flex">
          <button className="btn">Find More</button>
          <div className="playBtn flex">
            <FaPlay className="icon" />
            <span>Play Demo</span>
          </div>
        </div>
      </div>
      <div className="imgDiv flex">
        <img src={mainImage} alt="MainImage" />
      </div>
    </div>
  )
}

export default Home;