import React from 'react'
import "../styles/portfolio.css"
import { NavLink } from 'react-router-dom'
function PortfolioCard({image, title, text, link, reversed}) {
  return (
    <section className='portfoliocard'>
      <div className="container">
        <div className={reversed ? "reversed" : "portfolio__wrapper"}>
            <img src={image} alt="" />
            <div className="portfolio__content">
                <h2>{title}</h2>
                <p>{text}</p>
                <NavLink className="portfolio__btn" to={link} >VIEW PROJECT</NavLink>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioCard
