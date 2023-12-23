import React from 'react';
import './Destinations.css';

// import image

import mainImage from '../Destinations/capetown.jpg';
import mainImage2 from '../Destinations/jozi.jpg';
import mainImage3 from '../Destinations/pretoria.jpg';

// icon 
import { FaLocationArrow } from 'react-icons/fa';

function Destinations() {
  return (
    <div className="Destinations container section">
      <div className="secHeader">
        <span>Top Selling</span>
        <h2>Top Destinations</h2>
      </div>

      <div className="secContainer grid">
        <div className="singleCard grid">
          <div className="imgDiv">
            <img src={mainImage} alt="" />
          </div>
          <div className="infoDiv">
            <div className="upperSpan flex">
              <span className="location">Cape Town, South Africa</span>
              <span className="amount">R3000</span>
            </div>
            <div className="lowerSpan flex">
              <FaLocationArrow className="icon"/>
              <span className="distance">10 days Trip</span>
            </div>
          </div>
        </div>

        <div className="singleCard grid">
          <div className="imgDiv">
            <img src={mainImage2} alt="" />
          </div>
          <div className="infoDiv">
            <div className="upperSpan flex">
              <span className="location">Johannesburg, South Africa</span>
              <span className="amount">R2500</span>
            </div>
            <div className="lowerSpan flex">
              <FaLocationArrow className="icon"/>
              <span className="distance">15 days Trip</span>
            </div>
          </div>
        </div>
        <div className="singleCard grid">
          <div className="imgDiv">
            <img src={mainImage3} alt="" />
          </div>
          <div className="infoDiv">
            <div className="upperSpan flex">
              <span className="location">Pretoria, South Africa</span>
              <span className="amount">R1500</span>
            </div>
            <div className="lowerSpan flex">
              <FaLocationArrow className="icon"/>
              <span className="distance">10 days Trip</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Destinations;