import React from 'react';
import './Categories.css';

//image
import mainImage from '../Categories/weather.jpg';
import mainImage2 from '../Categories/plane.jpg';

function Categories() {
  return (
    <div className="Categories container section">
      <div className="secHeader">
      <span>
        Categories
      </span>
      <h2>
        We Offer best services
      </h2>
      </div>

      <div className="secContainer grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={mainImage} alt="" className="mainImage" />
          </div>
          <span className="span">Calculated weather </span>
          <p className="p">The marriage of data, algorithms, and human ingenuity has transformed weather forecasting into a calculated science, enriching our lives and safeguarding our ventures into the great doors</p>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={mainImage2} alt="" className="mainImage" />
          </div>
          <span className="span">Best Flights </span>
          <p className="p">In the ever-evoling world of aviation, the best flights go beyond reaching a destination - they encapsulate a holistic experience</p>
        </div>

        
      </div>
    </div>
  );
};

export default Categories;