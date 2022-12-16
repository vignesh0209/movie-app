import React from 'react';
import './styles/NavBar.css';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [nav, setNav] = useState(false);
  return (
    <nav className="navbar">
      <div className="inner-navbar">
        <div className="logo">
          <h1>
            <strong>ELITE</strong> Streaming
          </h1>
        </div>
        <div className="navbar-content">
          <Link
            to="login"
            smooth
            duration={500}
            style={{ textDecoration: "none" }}
          >
            <div className="login">
              <span>Log in</span>
            </div>
          </Link>
          <div className="free-trail">
            <span>Start your free trail</span>
          </div>
        </div>
        <div onClick={() => setNav(!nav)} className="toggle-button">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <div className="navbar-content1">
            <Link
              to="login"
              smooth
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <span className="log">Log in</span>
            </Link>

            <span>
              <strong>Start your free trail</strong>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar