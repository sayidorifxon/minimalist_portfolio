import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import img1 from '../img/portfolio1.jpg'
import img2 from '../img/portfolio2.jpg'
import img3 from '../img/portfolio3.jpg'
import img4 from '../img/portfolio4.jpg'
import Projects from '../components/Projects'
function Portfolio() {
  return (
    <main>
      <PortfolioCard image={img1} title="Manage" text='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.' link={"/manage"}/>
      <PortfolioCard image={img2} title="Bookmark" text='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.' link={"/bookmark"} reversed={true}/>
      <PortfolioCard image={img3} title="Insure" text='This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.' link={"/insure"}/>
      <PortfolioCard image={img4} title="Fylo" text='This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.' link={"/fylo"} reversed={true}/>
      <Projects/>
    </main>
  )
}

export default Portfolio
