import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <h3 className="nav__logo">
            <Link to="/"> PHETMAJA</Link>
          </h3>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  <i className="bx bx-store nav__icon"></i>
                  <span className="nav__link-text">Home</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  <i className="bx bx-search nav__icon"></i>
                  <span className="nav__link-text">Search</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  <i className="bx bx-list-ul nav__icon"></i>
                  <span className="nav__link-text">List</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  <i className="bx bxs-user nav__icon"></i>
                  <span className="nav__link-text">Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
