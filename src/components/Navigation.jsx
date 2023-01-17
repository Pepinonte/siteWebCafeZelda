import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <nav>
        <NavLink to="/">home</NavLink>

        <NavLink to="/test">test</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
