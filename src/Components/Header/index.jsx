import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header({ title }) {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <div className="cont-title-page">
        <h2>{title}</h2>
      </div>
    </header>
  );
}

export default Header;
