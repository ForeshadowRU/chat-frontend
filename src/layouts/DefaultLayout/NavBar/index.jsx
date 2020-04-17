import React from "react";
import NavItem from "./NavItem";
function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon="😂"></NavItem>
        <NavItem icon="😂"></NavItem>
        <NavItem icon="😂"></NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
