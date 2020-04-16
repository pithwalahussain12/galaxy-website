import React, { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";

import "./Navigation.scss";
import galaxyLogo from "../../assets/logo/galaxy-logo.svg";

import { secondaryColor, activeClassName } from "../../global/global";

export default function Navigation({ type }) {
  const [pos, setPos] = useState(0)

  const links = [
  
    { label: 'HOME', url: '/home' },
    { label: 'MISSION', url: '/mission' },
    { label: 'PRODUCTS', url: '/productpage' },
    { label: 'FOUNDERS', url: '/founders' },
    { label: 'EVENTS', url: '/events' },
    { label: 'BLOG', url: '/blog' },
    { label: 'CONTACT', url: '/Contact' },
   
  ]

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setPos(window.pageYOffset)
    })
  }, [])

  return(
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar"  style={{
      backgroundColor: type ? secondaryColor : null,
      position: type ? "relative" : null, paddingTop: type ? "30px" : null,
      paddingBottom: type ? "30px" : null,
    }}>
      <div className="container">
      <Link className="navbar-brand" to="/">
   
        <img  src={galaxyLogo} alt="no" className="img-custom img-header"/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fa fa-bars" style={{
      color:"#fff", fontSize:"18px",
    }}></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        {/* <li className="nav-item">
              <a className="nav-link active" href="">Home</a>
            </li> */}
          { links.map((e, i)=>(
            <li key={ i } className="nav-item">
              <NavLink className="navigation__item" to={ e.url }>{ e.label }</NavLink>
            </li>
          ))}
             <li className="nav-item dropdown">
            <a className="navigation__btn" href="#a">
               Login
            </a>
           
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link" href="#a" id="navbardrop" data-toggle="dropdown">
               English
            </a>
           
          </li> */}
         
        </ul>
      </div>
      </div>
    </nav>
  );
}
