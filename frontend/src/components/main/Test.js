import React from 'react'

const Test = () => {
  return (
    <div>
        <>
  {/*Main Navigation*/}
  <header>
    {/* Navbar */}
    <nav
      id="main-navbar"
      className="navbar navbar-expand-lg navbar-light bg-white"
    >
      {/* Container wrapper */}
      <div className="container-fluid">
        {/* Search form */}
        <form className="d-none d-md-flex input-group w-auto my-auto">
          <input
            autoComplete="off"
            type="search"
            className="form-control rounded"
            placeholder='Search (ctrl + "/" to focus)'
            style={{ minWidth: 225 }}
          />
          <span className="input-group-text border-0">
            <i className="fas fa-search" />
          </span>
        </form>
        {/* Right links */}
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
                <a className="dropdown-item" href="#">
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
      </div>
      {/* Container wrapper */}
    </nav>
    {/* Navbar */}
   
  </header>
  {/*Main Navigation*/}
</>

    </div>
  )
}

export default Test