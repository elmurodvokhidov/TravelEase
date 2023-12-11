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
          <div></div>

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

          <div></div>
        </section>

        <section className={style.section4Part2}>

        </section>
      </div>

    </>
  )
}
