import React from 'react';
import './Footer.css';

// icons




function Footer() {
  return (
    <div className="Footer container">
      <div className="secContainer grid">
        <div className="singleSection">
          <h2 className="h2">Lets Travel</h2>
          <p className="p">Book your trip minute, get full control for each longer</p>
        </div>

        <div className="singleSection">
          <h3 className="h3">Company</h3>
          <li className="li">About</li>
          <li className="li">Careers</li>
          <li className="li">Support</li>
        </div>

        <div className="singleSection">
          <h3 className="h3">Contact</h3>
          <li className="li">Help/FAQ</li>
          <li className="li" >Press</li>
          <li className="li">Affliates</li>
        </div>

        <div className="singleSection">
          <h3 className="h3">More</h3>
          <li className="li">Guildlines</li>
          <li className="li">Insurance</li>
          <li className="li">Hotels</li>
        </div>

        <div className="singleSection">
          <h3 className="h3">Contact</h3>
          <li className="li">Help/FAQ</li>
          <li className="li" >Press</li>
          <li className="li" >Affliates</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;