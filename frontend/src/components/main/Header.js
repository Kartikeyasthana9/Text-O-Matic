import React from "react";
import  { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Style.css";
import mysecondimg from "./img/second.png";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <>
        {/* Navbar */}
        <header className="header">
          <NavLink to="#">
            <img className="logo" alt="TEXTOMATIC" src={mysecondimg} />
          </NavLink>
          
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
                <NavLink className="main-nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className="main-nav-link" to="/user/summarizer">
                  Summarizer
                </NavLink>
              </li>
              <li>
                <NavLink className="main-nav-link" to="/user/audiobook">
                  Audiobook
                </NavLink>
              </li>
              <li>
                <NavLink className="main-nav-link" to="/user/sentiment">
                  SentimentAnalysis
                </NavLink>
              </li>
              <li>
                <NavLink className="main-nav-link nav-cta" to="/main/login">
                  Login
                 
                </NavLink>
              </li>
              <li>
                <NavLink className="main-nav-link nav-cta" to="/main/signup">
                  Sign up for free
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className="btn-mobile-nav">
            <ion-icon className="icon-mobile-nav" name="menu-outline" />
            <ion-icon className="icon-mobile-nav" name="close-outline" />
          </button>
        </header>
        

        {/* Navbar */}
      </>
    </div>
  );
};

export default Header;
