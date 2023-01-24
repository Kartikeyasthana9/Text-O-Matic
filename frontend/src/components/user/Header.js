import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            {/* Left links */}
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" aria-current="page" to="/main/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="/user/summarizer">
                  Summarizer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="/user/sentiment">
                  Sentiement Analysis
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="/user/audiobook">
                  Audiobook
                </a>
              </li>
             
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
    </div>
  );
};

export default Header;
