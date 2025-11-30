import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo"><img
    src="/images/cuLogo.png"
    alt="CU Logo"
    style={{ height: "40px", marginRight: "10px" }}
  />Engineering Faculty</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/notice">Notice</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-login">
        {/* <button>Login</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
