import React from 'react'
import './Section3.css'
import img from './Ellipsee.png'
import img1 from './lighthouse 1.png'
import img2 from './Rectangle 25.png'
import { LuUserSquare } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { LuHeadphones } from "react-icons/lu";
import image from './image.png'
import place1 from './place-2 1.png'
import place2 from './place-3 1.png'
import review from './reviews.png'

export default function Section3() {
  return (
    <div className='section3'>
      <div className="text">
        <div className="maint">
          <h1 className='maint_h1'>We Offering In Total 793 <br /> Tours Out The World</h1>
        </div>
        <div className="best">
          <h3 className='best_h3'><span><LuUserSquare /></span> Best Travel Guide Always For Your Services</h3>
          <p className="best_p">Travel has helped us to understandsa the meaning of life and it has helped us <br /> become better people. Each time we travel, we see the world with new eyes. <br /> Travel has helped us to understand the meaning of life</p>
        </div>
        <div className="world">
          <h3 className="world_h3"><span><TbWorld /></span> World Class Services Provide For You</h3>
        </div>
        <div className="headphones">
          <h3 className="h_h3"><span><LuHeadphones /></span> 24/7 Strong Customer Support</h3>
        </div>
      </div>
      <div>
        <div className='ff'>
          <img className='nf' src={img2} alt="Mansur rasm qo'ymagan" />
        </div>
        <div className='ft'>
          <img className='tf' src={img} alt="Mansur rasm qo'ymagan" />
        </div>
        <div className='fr'>
          <img className='rf' src={img1} alt="Mansur rasm qo'ymagan" />
        </div>
      </div>



      <div className='sect3'>
        <div className="main">
          <h1 className="h11">Choose Your Destination</h1>
        </div>


        <div className="sec3">
          <div className="cards">
            <div className="card1">
              <img src={image} alt="" />
              <div className="minicard">
                <div className='d'>
                  <h6 className="h6">
                    Santorini, Oia Greece
                  </h6>
                  <p className="p">
                    $2000
                  </p>
                  <img src={review} alt="" />
                  <button className="plus">
                    ➕
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card1">
              <img src={place1} alt="" />
              <div className="minicard">
                <div className='d'>
                  <h6 className="h6">
                    Santorini, Oia Greece
                  </h6>
                  <p className="p">
                    $2000
                  </p>
                  <img src={review} alt="" />
                  <button className="plus">
                    ➕
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card1">
              <img src={place2} alt="" />
              <div className="minicard">
                <div className='d'>
                  <h6 className="h6">
                    Santorini, Oia Greece
                  </h6>
                  <p className="p">
                    $2000
                  </p>
                  <img src={review} alt="" />
                  <button className="plus">
                    ➕
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
