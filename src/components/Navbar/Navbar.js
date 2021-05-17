import React from "react";
import navElements from "./navbarConfig";

import "./Navbar.css";
import Container from "components/Container/Container";

const Navbar = () => {
  return (
    <header className="page-header header">
      <Container>
        <div className="header-wrapper">
          <span className="nav-logo logo">OK</span>

          <ul className="nav-list">
            {navElements.map((e) => (
              <li key={e.name} className="nav-list__item">
                <a className="nav-list__link" href={e.href}>
                  {e.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
