import React from 'react';
import style from './navbar.css';
import img_logo from './logo.svg'
import { useState } from 'react';
import { LuUser } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
export default function Navbar() {
  const [active, setactive] = useState("navbar__ul");
  const [toggleIcon, setToggleIcon] = useState("navbar__toggle")
  const navToggle = () => {
    active === 'navbar__ul' 
    ? setactive('navbar__ul navbar__active') 
    : setactive('navbar__ul')


    toggleIcon === 'navbar__toggle'
    ? setToggleIcon('navbar__toggle toggler')
    : setToggleIcon('navbar__toggle') 
  }

  return (
    <header>
      <nav className='navbar__nav'>
        <div className="logo"><img src={img_logo} alt="" /></div>
        <ul className={active}>
          <li><a href="#">Destination</a></li>
          <li><a href="#">Offer</a></li>
          <li><a href="#">Tour</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <div className='navbar__account'>
          <div><span className='usericon'> <LuUser /></span> My Account</div>
          <span>|</span>
          <div><span className='searchicon'><FiSearch /></span></div>
        </div>
        <div onClick={navToggle} className={toggleIcon}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>
  </header>
  )
}