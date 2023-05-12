import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import navlogo from "./img/navlogo.png";

const Header = () => {
  
  return (
    <div>
      <>
        {/* Navbar */}
        <div className="">
  <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <div className="container-fluid">
      <a href="#" className="navbar-brand">
        <img src={navlogo} height={28} alt="CoolBrand" />
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
        <li className="nav-item">
                  <NavLink className="nav-link" to="/main/home">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/user/summarizer">
                    Summmarizer
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user/sentiment">
                    Sentiment Analysis
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user/audiobook">
                    Audiobook
                  </NavLink>
                </li>
          
         
        </div>
        <div className="navbar-nav ms-auto">
        <NavLink
                type="button"
                className="btn btn-primary px-3 me-2"
                to="/main/login"
              >
                Login
              </NavLink>
              <NavLink
                type="button"
                className="btn btn-primary me-3"
                to="/main/signup"
              >
                Sign up for free
              </NavLink>
        </div>
      </div>
    </div>
  </nav>
</div>

        {/* Navbar */}
      </>
    </div>
  );
};

export default Header;
