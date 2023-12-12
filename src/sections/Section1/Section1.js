import React from "react";
import Button from './pages/Button.jsx'
import { HiChevronDown } from "react-icons/hi";
import pagination from "./img/pagination.png"
import line from "./img/line.png"
import calendar from './img/calender.png'
import dollar from './img/dollar sign.png'
import './Section1.css'



function Section1() {
  return (
    <div className="section-1 container">
      <div className="section-1-img-part">
        <div className="background-img-section-1">

        </div>
        <div className="text-part-section-1">
          <p className="section-1-main-text">
            It’s Time To <br />Explore The World
          </p>
          <div className="g_btn_1">   <Button textColor={'#FFFFFF'} color={'#FF715B'} text={'Plan Your Trip'} /> </div>
        </div>
      </div>
      <div className="section-1-pagination-part">
        <div className="img-pagination-section-1">
          <img src={pagination} alt="salom" />
        </div>
        <div className="section-1-statistic-part">
          <div className="section-1-desctination-1">
            <p className="section-1-desctination-1-text-1">
              Destinations
            </p>
            <span className="section-1-desctination-1-text-2">
              Arab Egypt
            </span> <span className="icon-1-section-1"><HiChevronDown /></span> <br />
            <img src={line} alt="..." />

          </div>
          <div className="section-1-desctination-1">
            <p className="section-1-desctination-1-text-1">
              Check In
            </p>
            <span className="section-1-desctination-1-text-2">
              01 Feb, 2021
            </span> <span><img src={calendar} alt="salom" /></span> <br />
            <img src={line} alt="..." />

          </div>
          <div className="section-1-desctination-1">
            <p className="section-1-desctination-1-text-1">
              Price Range
            </p>
            <span className="section-1-desctination-1-text-2">
              $500 - $10,0000
            </span> <span><img src={dollar} alt="salom" /></span> <br />
            <img src={line} alt="..." />


          </div>
          <Button textColor={'#FFFFFF'} color={'#FF715B'} text={'Discover Now'} />
        </div>
      </div>
    </div>
  )
}
export default Section1;