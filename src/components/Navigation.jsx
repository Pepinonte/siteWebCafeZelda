import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import "font-awesome/css/font-awesome.min.css";

const Navigation = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="navigation">
      <nav className="navbar">
        <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/">
          <h1 className="caf-zelda jost-bold-white-32px">CAFÉ ZELDA</h1>
        </NavLink>
        <div
          className={`navbar-1 montserrat-semi-bold-white-16px ${
            navbarOpen ? "open" : ""
          }`}
        >
          <NavLink
            className="navlink"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/LeCafeZelda"
          >
            <div className="navbar-link">QUI SOMMES-NOUS ?</div>
          </NavLink>

          <NavLink
            className="navlink"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/LesArticles"
          >
            <div className="navbar-link">NOS ARTICLES</div>
          </NavLink>
        </div>
        <button className="navbar-toggle" onClick={handleNavbarToggle}>
          <i
            className={`fa fa-${navbarOpen ? "times" : "bars"}`}
            aria-hidden="true"
          ></i>
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
