import React from 'react'
import "../styles/hero.css"
import arrow from '../img/arrowdown.svg'
function Hero() {
  return (
    <section className='hero'>
        <div className="hero__content">
            <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
            <div className="hero__btn">
            <span className='span_btn'><img src={arrow} alt="arrowdown" /></span>
            <span className='span__anc'><a href="#!">ABOUT ME</a></span>
            </div>
        </div>
    </section>
  )
}

export default Hero
