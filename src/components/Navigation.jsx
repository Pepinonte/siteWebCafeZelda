import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <nav className="navbar">
        <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/">
          <h1 className="caf-zelda jost-bold-white-32px">CAFÉ ZELDA</h1>
        </NavLink>
        <div className="navbar-1 montserrat-semi-bold-white-16px">
          <NavLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/LeCafeZelda"
          >
            <div className="navbar-link">QUI SOMMES-NOUS ?</div>
          </NavLink>

          <NavLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/LesArticles"
          >
            <div className="navbar-link">NOS ARTICLES</div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
