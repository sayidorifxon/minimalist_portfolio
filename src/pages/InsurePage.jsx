import React from 'react'
import img from '../img/heroimg3.jpg'
import HeroImage from '../components/HeroImage'
import Info from '../components/Info'
import info5 from '../img/info5.jpg'
import info6 from '../img/info6.jpg'
import Swipers from '../components/Swipers'
import Projects from '../components/Projects'
function InsurePage() {
  return (
    <main>
      <HeroImage image={img}/>
      <Info left_title="Insure" left_text="This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation." right__title="Project Background" right__text="This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style." info1={info5} info2={info6}/>
      <Swipers prev_text={"Bookmark"} next_text={"Fylo"} pagelink1={"/bookmark"} pagelink2={"/fylo"}/>
      <Projects/>
    </main>
  )
}

export default InsurePage
