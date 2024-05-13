import React from 'react'
import "../styles/contacts.css"
import github from "../img/github2.svg"
import twitter from "../img/twitter2.svg"
import linkedin from "../img/linkedin2.svg"
function ContactPage() {
  return (
    <main>
      <section className='contact'>
        <div className="container">
          <div className="contact__wrapper">
            <div className="contact__top">
              <h1>Get in Touch</h1>
              <div className="top__content">
                <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
                <div className="top__links">
                  <img src={github} alt="" />
                  <img src={twitter} alt="" />
                  <img src={linkedin} alt="" />
                </div>
              </div>
            </div>
            <div className="contact__bottom">
              <h1>Contact Me</h1>
              <div className="bottom__content">
                <h5>Name</h5>
                <input type="text" placeholder='Jane Appleseed' />
                <h5>Email Address</h5>
                <input type="text" placeholder='email@example.com'/>
                <h5>Message</h5>
                <input type="text" placeholder='How can I help?' />
                <button>SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
