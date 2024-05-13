import React, { useRef } from 'react'
import "../styles/header.css"
import logo from '../img/logo.svg'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
function Header() {
  let modal = useRef()
  let burger = useRef()
  let close = useRef()
  function openModal(){
    modal.current.classList.add("db")
    console.log("ok");
    burger.current.classList.add("dn")
    close.current.classList.add("db")
  }
  function closeModal(){
    modal.current.classList.remove("db")
    burger.current.classList.remove("dn")
   close.current.classList.remove("db")
  }
  return (
    <header>
      <div className="container">
        <div ref={modal} className="modal">
          <ul>
            <li><NavLink className="navlink" to="/">HOME</NavLink></li>
            <li><NavLink className="navlink" to="/portfolio">PORTFOLIO</NavLink></li>
            <li><NavLink className="navlink" to="/contact">CONTACT ME</NavLink></li>
          </ul>
        </div>
        <div className="header__wrapper">
            <NavLink to="/"><img src={logo} alt="" /></NavLink>
            <nav>
                <ul>
                    <li><NavLink className="navlink" to="/">HOME</NavLink></li>
                    <li><NavLink className="navlink" to="/portfolio">PORTFOLIO</NavLink></li>
                    <li><NavLink className="navlink" to="/contact">CONTACT ME</NavLink></li>
                </ul>
            </nav>
            <div ref={burger} onClick={openModal}  className='burger'><RxHamburgerMenu /></div>
            <div ref={close} onClick={closeModal} className='close'><IoCloseOutline /></div>
        </div>
      </div>
    </header>
  )
}

export default Header
