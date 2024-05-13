import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/projects.css"
function Projects() {
  return (
    <section className='projects'>
        <div className="container">
            <div className="projects__wrapper">
                <h2>Interested in doing a project together?</h2>
                <div className="projects__line"></div>
                <NavLink className="projects__btn" to="/contact"><p>CONTACT ME</p></NavLink>
            </div>
        </div> 
    </section>
  )
}

export default Projects
