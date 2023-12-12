import React, { useContext, useState } from 'react'
import style from "./Section4.module.css"
import { ContextData } from '../../context/Context'
export default function Section4() {

  const { user, setUser } = useContext(ContextData)
  const [sanoq, setSanoq] = useState(0)
  return (
    <>

      <div className="container">
        <center><div className={style.title}>What Our Happy Customers Say About Us</div></center>
        <section className={style.section4Part1}>
          <div className={style.specialImgs}>
          <img src="" alt="" />
          </div>

          <div className={style.card}>
            <div className={style.personImg}>
              <img src={user[sanoq].img} alt="rasm" />
              <div>
                <p>{user[sanoq].name}</p>
                <span>{user[sanoq].job}</span>
              </div>
            </div>
            <center><div className={style.information}>{user[sanoq].about}</div></center>
            <ul className={style.controllerBtn}>
              {user.map((i, ind) => (
                <li key={ind} onClick={() => setSanoq(ind)} className={sanoq === ind ? style.chosen : ""}></li>
              ))}
            </ul>
            <div className={style.circle}></div>
          </div>

          <div className={style.specialImgs}></div>
        </section>

        <section className={style.section4Part2}>
          <div className={style.part2Left}>
            <div className={style.titleRec}>Download Now Travel Community Apps</div>
            <div className={style.download}>
              <a><img src="./img/googlePlay.svg" alt="" /></a>
              <a><img src="./img/appleStore.svg" alt="" /></a>
            </div>
          </div>
          <div className={style.part2Right}>
            <div className={style.plane}><img src="./img/plane.png" alt="" /></div>
            <div className={style.phoneScreen}>
              <div><img src="./img/screen.png" alt="" /></div>
              <div className={style.screenBack}>
                <img src="./img/screenImg.png" alt="" />
                <br /><br />
                <center><img src="./img/logo.png" alt="" /></center>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}
