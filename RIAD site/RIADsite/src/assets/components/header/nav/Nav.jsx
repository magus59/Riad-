import React from 'react'
import './nav.css';


const Nav = () => {
  return (
    <nav className="navbar">      
        <ul className="menu-items">
            <div className="carre"></div>
            <li><a className="cmn-t-underline" href="#formation">Nos prestations</a></li>
            <li><a className="cmn-t-underline" href="#">Contact</a></li>
        </ul>       
        <p className="logo">Riad Bouzenad</p>
    </nav>
  )
}

export default Nav