import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import navlogo from "./img/navlogo.png";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <>
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ background: "#dff1ee" }}
        >
          {/* Container wrapper */}
          <div className="container">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>

            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <div className="">
                <img
                  src={navlogo}
                  className=""
                  height={40}
                  alt="MDB Logo"
                  loading="lazy"
                />
              </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5  ">
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
              </ul>
            </div>
            <div className="d-flex align-items-center">
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
            {/* Collapsible wrapper */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </>
    </div>
  );
};

export default Header;
