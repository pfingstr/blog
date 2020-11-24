import Link from 'next/link'
import React, { useState, Component } from 'react';

export default function Navbar() {
  const [isActive, setisActive] = useState(false);
  
  return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div>
            <a
                role="button"
                className={`navbar-burger burger${isActive ? "is-active" : ""}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarPopup"
                onClick={() => setisActive(!isActive)}
              >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            id="navbarPopup"
            className={`navbar-menu${isActive ? "is-active" : ""}`}
          >
            <div className="navbar-start">
              <Link href="/">
                <a className="navbar-item">   
                <img src="/logo.png" alt="" />              
                </a>
              </Link>
              <Link href="/blog"><a className="navbar-item">Blog</a></Link>
              <Link href="/about"><a className="navbar-item">About</a></Link>
            </div>
          </div>
        </nav>
  )
}
