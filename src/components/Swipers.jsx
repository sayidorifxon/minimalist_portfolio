import React from 'react'
import "../styles/swipers.css"
import { NavLink } from 'react-router-dom'
import prev from '../img/prev.svg'
import next from '../img/next.svg'
function Swipers({prev_text, next_text, pagelink1, pagelink2}) {
  return (
    <section className='swipers'>
      <div className="container">
        <div className="swiper__wrapper">
            <div className="swiper__previous">
                <NavLink to={pagelink1}><img src={prev} alt="" /></NavLink>
                <div className="previous__content">
                    <h3>{prev_text}</h3>
                    <p>previous project</p>
                </div>
            </div>
            <div className="swiper__next">
                <div className="previous__content">
                    <h3>{next_text}</h3>
                    <p>next project</p>
                </div>
                <NavLink to={pagelink2}><img src={next} alt="" /></NavLink>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Swipers
