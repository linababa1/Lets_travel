import React from 'react';
import '././Guide.scss';

// import img
import mainImage from '../Guide/choice.jpg';
import mainImage2 from '../Guide/payment.jpg';
import mainImage3 from '../Guide/airport.jpg';

function Guide() {
  return (
    <div className="Guide container section">
      <div className="secContainer flex">
        <div className="textDiv grid">
          <div className="secHeader">
            <span>Easy and Fast</span>
            <h2>Book Your Next Trip</h2>
          </div>

          <div className="secContent grid">
            <div className="singleSection flex">
              <img src={mainImage} alt="" className="img" />
              <div className="text">
                <span className="span">
                  Make a choice
                </span>
                <p className="p">When booking a flight, prioritize convenience, optimal departure times and airline reputation for a seamless travel experience </p>
              </div>
            </div>

            <div className="singleSection flex">
              <img src={mainImage2} alt="" />
              <div className="text">
                <span>
                  Make a payment
                </span>
                <p className="p">Complete your booking swiftly and securely by making a seamless payment through trusted online platform </p>
              </div>
            </div>

            <div className="singleSection flex">
              <img src={mainImage3} alt="" />
              <div className="text">
                <span>
                  Reach Airport on Selected Date
                </span>
                <p className="p">Ensure a smooth journey by reaching the airport on the selected date, allowing ample time for check-in and pre-flight preparations </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Guide;