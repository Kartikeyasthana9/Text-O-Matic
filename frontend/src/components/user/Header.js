import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
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
                <NavLink
                  className="nav-link fw-bold"
                  aria-current="page"
                  to="/main/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="/user/summarizer">
                  Summarizer
                </a>
              </li>
              <li className="nav-item">
<<<<<<< HEAD
                <a className="nav-link  fw-bold" href="/user/sentiment">
                  SentimentAnalysis
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="/user/audiobook">
                  AudioBook
=======
                <a className="nav-link  fw-bold" href="/user/audiobook">
                  Audiobook
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="/user/sentiment">
                  Sentiment Analysis
>>>>>>> 2da9e3e163ead5ba7b0f7b4ebbfa0645f938fdd6
                </a>
              </li>
            </ul>
            {/* Left links */}
            
            
          </div>
          <ul className="navbar-nav ms-auto d-flex flex-row">
          {/* Notification dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell" />
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          {/* Icon dropdown */}
        
          {/* Avatar */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                className="rounded-circle"
                height={35}
                alt="Avatar"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="/user/UserProfile">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>

                      
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
    </div>
  );
};

export default Header;
