import React from 'react'
import CartWidget from '../CartWidget'
import './navbar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="header">
        {/* <a href="" className="logo"></a> */}
        <div className="navbar">
        <ul className="navbar-items">
            <li><Link to={"/"}>NP by NatiPina</Link></li>
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/about"}>Acerca de</Link></li>
            <li><Link to={"/menu"}>Menu</Link></li>
            <li><Link to={"/contact"}>Contacto</Link></li>
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