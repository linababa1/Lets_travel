import React from 'react';
import './Subscribe.css';

// import icon

import { HiOutlineMail } from 'react-icons/hi';

function Subscribe() {
  return (
    <div className="Subscribe container section">
      <div className="secContent grid">
        <h1 className='h1'>Subscribe for latest news and interesting offers</h1>
        <div className="inputDiv flex">
          <div className="input flex">
          <HiOutlineMail className="icon" />
          <input type="text" placeholder="your email" className="in" />
          </div>
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;