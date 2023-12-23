import React, { useState } from 'react';
import './Header.css';

// import icons

import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb"

function Header() {

    const [active, setActive] = useState('menu');
    const showNavbar = () => {
        setActive("menu showMenu");
    };

    // remove navbar

    const removeNavbar = () => {
        setActive("menu");
    }

    // background color to menu

    const [transparent, setTransparent] = useState('Navbar');
    const adding = () => {
        if(window.scrollY >= 10){
            setTransparent("Navbar activeHeader");
        } else{
            setTransparent("Navbar");
        }
    }
    window.addEventListener("scroll", adding);

  return (
    <div className={transparent}>
        <div className="logoDiv">
            <h1 className="logo">Lets Travel</h1>
        </div>
        
        <div className={active}>
            <div className="lists flex">
                <li>
                    <a href="">Destinations</a>
                </li>
                <li>
                    <a href="">Hotels</a>
                </li>
                <li>
                    <a href="">Flights</a>
                </li>
                <li>
                    <a href="">Bookings</a>
                </li>
            </div>

            <div className="btns flex">
                <button className="btn">Login</button>
                <button className="btn">Register</button>   
            </div>

            <div className="closeIcon" onClick={removeNavbar}><AiFillCloseCircle className="icon" /></div>
        </div>
        <div className="toggleIcon" onClick={showNavbar}><TbGridDots className="icon" /></div>
    </div>
  )
}

export default Header;