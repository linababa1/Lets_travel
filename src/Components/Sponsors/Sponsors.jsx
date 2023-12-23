import React from 'react';
import './Sponsors.css';

// import images
import logo1 from '../Sponsors/pic1.jpg';
import logo2 from '../Sponsors/pic2.jpg';
import logo3 from '../Sponsors/pic3.jpg';

function Sponsors() {
  return (
    <div className="Sponsors container">
      <div className="logos flex">
        <img src={logo1} alt="" className="img" />
        <img src={logo2} alt="" className="img" />
        <img src={logo3} alt="" className="img" />
        
      </div>
    </div>
  )
};

export default Sponsors;