import React, { useState } from "react";
import "./Navbar.css"; // We'll create this file for additional styling

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light border-bottom sticky-top"
      style={{ backgroundColor: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
    >
      <div className="container py-2">
        <a className="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            style={{ width: "130px" }}
            alt="Zerodha"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} 
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Support</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link btn btn-outline-secondary px-3 py-1" href="#">Login</a>
            </li>
            <li className="nav-item ms-2">
              <a className="nav-link btn btn-primary text-white px-3 py-1" href="#">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


