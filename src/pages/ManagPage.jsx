import React from 'react'
import HeroImage from '../components/HeroImage'
import img from '../img/heroimg1.png'
import Info from '../components/Info'
import info1 from '../img/info1.jpg'
import info2 from '../img/info2.jpg'
import Swipers from '../components/Swipers'
import Projects from '../components/Projects'
function ManagPage() {
  return (
    <main>
      <HeroImage image={img}/>
      <Info left_title="Manage" left_text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider." right__title="Project Background" right__text="This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style." info1={info1} info2={info2}/>
      <Swipers prev_text={"Fylo"} next_text={"Bookmark"} pagelink1={"/fylo"} pagelink2={"/bookmark"} />
      <Projects/>
    </main>
  )
}

export default ManagPage
