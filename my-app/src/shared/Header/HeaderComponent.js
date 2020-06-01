import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const HeaderComponent = () => {
  return (
    <div className="header page">
      <div className="wrapper">
        <div className="logo">
          <h1>
            <span className="green">Weather</span>App
          </h1>
        </div>
        <div className="links">
          <Link to="/">Bucuresti</Link>
          <Link to="/cluj">Cluj</Link>
          <Link to="/London">London</Link>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
