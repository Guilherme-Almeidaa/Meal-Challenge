import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header({ title }) {
  const [statusMenu, setStatusMenu] = useState(false);
  const handlerChangeMenu = ({ target }) => {
    setStatusMenu(target.checked);
  };

  return (
    <header>
      <div className="menu-web">
        <Link className="link-header" to="/">
          Home
        </Link>
        <Link className="link-header" to="/search">
          Search
        </Link>
      </div>
      <div className="cont-title-page">
        <h2>{title}</h2>
      </div>
      <div className="menu-mobile">
        <input
          onChange={handlerChangeMenu}
          id="menu-hamburguer"
          type="checkbox"
          checked={statusMenu}
        />

        <label htmlFor="menu-hamburguer">
          <div className="menu">
            <span className="hamburguer"></span>
          </div>
          <div
            style={{ display: statusMenu ? "flex" : "none" }}
            className="cont-itens-menu"
          >
            <Link to="/" className="link-header">
              Home
            </Link>
            <Link to="/search" className="link-header">
              Search
            </Link>
          </div>
        </label>
      </div>
    </header>
  );
}

export default Header;
