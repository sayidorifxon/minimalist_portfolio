import React from 'react'
import "../styles/info.css"

function Info({left_title, left_text, right__title, right__text, info1, info2 }) {
  return (
    <section className='info'>
      <div className="container">
        <div className="info__wrapper">
            <div className="info__left">
                <h3>{left_title}</h3>
                <p>{left_text}</p>
                <div className="left__cta">
                    <p>Interaction Design / Front End Development</p>
                    <p>HTML / CSS / JS</p>
                    <a href="#!">VISIT WEBSITE</a>
                </div>
            </div>
            <div className="info__right">
                <h2>{right__title}</h2>
                <h3>{right__text}</h3>
                <p>static previevs</p>
                <img src={info1} alt="" />
                <img src={info2} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Info
