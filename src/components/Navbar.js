import Link from 'next/link'
import React, { Component } from 'react';
import Select from 'react-select';
import posts from '../../public/data/posts.json'


const stuff = posts.map(opt => ({ label: opt.title, value: opt.slug }));

export default function Navbar() {
  return (
    <nav className="navbar main-navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">   
          <img src="/logo.png" alt="" />              
          </a>
        </Link>
      </div>
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <Link href="/blog">
            <a className="navbar-item">
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a className="navbar-item">
              About
            </a>
          </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-search" >
          <Select
              onChange={opt => window.location.href = "/blog/" + opt.value}
              placeholder={'Search Posts'}
              menuPlacement="auto"
              menuPosition="right"
              options={stuff} />
        </div>
       
        
        </div>

        </div>
      </div>
    </nav>
  )
}

