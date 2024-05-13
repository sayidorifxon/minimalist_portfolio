import React from 'react'
import "../styles/footer.css"
import logolight from '../img/logolight.png'
import linkedin from '../img/linkedin.png'
import twitter from '../img/twitter.png'
import github from '../img/github.png'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
        <NavLink to="/"><img src={logolight} alt="" /></NavLink>
            <nav>
                <ul>
                    <li><NavLink className="navlink" to="/">HOME</NavLink></li>
                    <li><NavLink className="navlink" to="/portfolio">PORTFOLIO</NavLink></li>
                    <li><NavLink className="navlink" to="/contact">CONTACT ME</NavLink></li>
                </ul>
            </nav>
            <div className="footer__links">
                <img src={github} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
