 import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './../../App.css';

function Navbar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = React.useState(false);
  const [isUserAccountOpen, setIsUserAccountOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCategoriesDropdown = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const toggleUserAccountDropdown = () => {
    setIsUserAccountOpen(!isUserAccountOpen);
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeNavbar = () => {
    setIsCollapsed(true);
  };

  return (
    <div className='navbar3'>
      <nav className="navbar navbar-expand-lg   bg-info">
        <div className="container">
          <Link className="nav-link" to="/">
            LOGO
          </Link>

          <form className="form-inline my-2 my-lg-0">
            <div className="row">
              <div className="col">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}>
            <ul className="navbar-nav mr-auto">
              <li
                className={`nav-item dropdown ${isCategoriesOpen ? 'show' : ''}`}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownCategories"
                  role="button"
                  onClick={toggleCategoriesDropdown}
                >
                  Categories
                </Link>
                <div
                  className={`dropdown-menu ${isCategoriesOpen ? 'show' : ''}`}
                  aria-labelledby="navbarDropdownCategories"
                >
                  <Link className="dropdown-item" to="/electronics">
                    Electronic
                  </Link>
                  <Link className="dropdown-item" to="/house">
                    House
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order">
                  Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item useraccount dropdown ${isUserAccountOpen ? 'show' : ''}`}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownUserAccount"
                  role="button"
                  onClick={toggleUserAccountDropdown}
                >
                  User Account
                </Link>
                <div
                  className={`dropdown-menu ${isUserAccountOpen ? 'show' : ''}`}
                  aria-labelledby="navbarDropdownUserAccount"
                >
                  <Link className="dropdown-item" to="/Login">
                    Login
                  </Link>
                  <Link className="dropdown-item" to="/register">
                    Create Account
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;