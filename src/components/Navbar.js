import Link from 'next/link'
import React, { useState, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Navbar({ isMobile }) {
  const [isActive, setisActive] = useState(false);
  return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
          <div className="navbar-brand">
          
          <Link href="/">
                <a className="navbar-item">   
                <img src="/logo.png" alt="" />              
                </a>
            </Link>
            <span
                role="button"
                className={`navbar-burger burger${isActive ? "is-active" : ""}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarDropdown"
                onClick={() => setisActive(!isActive)}
              >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
          
          <div
            id="navbarDropdown"
            className={`navbar-menu${isActive ? "is-active" : ""}`}
            >
            <div className="navbar-start">
              <Link href="/blog"><a className="navbar-item">Blog</a></Link>
              <Link href="/about"><a className="navbar-item">About</a></Link>
              <Link href="https://www.facebook.com/tamara.benedict.9"><a className="navbar-item"><FontAwesomeIcon icon={faFacebook} /></a></Link>
              <Link href="https://www.instagram.com/maraanne3"><a className="navbar-item"><FontAwesomeIcon icon={faInstagram} /></a></Link>
            </div>
          </div>
          </div>
        </nav>
    
  )
}
