import React from 'react'
import HeroImage from '../components/HeroImage'
import img from '../img/heroimg2.jpg'
import Info from '../components/Info'
import info3 from '../img/info3.jpg'
import info4 from '../img/info4.jpg'
import Swipers from '../components/Swipers'
import Projects from '../components/Projects'
function BookmarkPage() {
  return (
    <main>
      <HeroImage image={img}/>
      <Info left_title="Bookmark" left_text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section." right__title="Project Background" right__text="This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style." info1={info3} info2={info4}/>
      <Swipers prev_text={"Manage"} next_text={"Insure"} pagelink1={"/manage"} pagelink2={"/insure"}/>
      <Projects/>
    </main>
  )
}

export default BookmarkPage
