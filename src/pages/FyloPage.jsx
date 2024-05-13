import React from 'react'
import img from '../img/heroimg4.jpg'
import HeroImage from '../components/HeroImage'
import Info from '../components/Info'
import info7 from '../img/info7.jpg'
import info8 from '../img/info8.jpg'
import Swipers from '../components/Swipers'
import Projects from '../components/Projects'
function FyloPage() {
  return (
    <main>
      <HeroImage image={img}/>
      <Info left_title="Fylo" left_text="This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation." right__title="Project Background" right__text="This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style." info1={info7} info2={info8}/>
      <Swipers prev_text={"Insure"} next_text={"Manage"} pagelink1={"/insure"} pagelink2={"/manage"}/>
      <Projects/>
    </main>
  )
}

export default FyloPage
