import React from 'react'
import './Footer.css'
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";


function Footer() {
  return (
    <>
      <footer>
        <div>
          <img src='/img/logo.png' alt="" />
          <p>You can dream, create, design, and buildsa the most wonderful place.</p><br />
          <FiPhoneCall /><span> +0123 456 987, +0123 456 987</span><br /> <br />
          <FiMail /><span> yourmailaddress@gmail.com</span> <br /> <br />
          <GrLocation /><span> 123 Street, New York, USA</span>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>- About Us</li>
            <li>- Destinations</li>
            <li>- Latest blog</li>
            <li>- our team</li>
            <li>- contact us</li>
          </ul>
        </div>
        <div>
          <h2>Support</h2>
          <ul>
            <li>- customer support</li>
            <li>- privacy & policy</li>
            <li>- terms & conditions</li>
            <li>- forum</li>
            <li>- tour guide</li>
          </ul>
        </div>
        <div>
          <h2>Newsletter</h2>
          <input type="text" />
          <button>Subscribe Now</button>
        </div>
      </footer >
      <hr />
      <p>Copyright @2020 Ravel. Designed By </p></>
  )
}

export default Footer