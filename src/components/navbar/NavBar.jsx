import React from 'react'
import CartWidget from '../CartWidget'
import './navbar.css'
//import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="header">
        {/* <a href="" className="logo"></a> */}
        <div className="navbar">
        <ul className="navbar-items">
            <li><a href="#logo">NP by NatiPina</a></li>
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>

        <div className="h-icons">
            <a href=""><i class='bx bx-search'></i></a>
            <a href="./menu.html"><i className='bx bx-cart' ></i></a>
            <div className="bx bx-menu" id="menu-icon"></div>
         </div>
         </div>
    </div>
    
    
    </>
  )
}

export default NavBar