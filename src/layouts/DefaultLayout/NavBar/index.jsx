import React from "react";
import NavItem from "./NavItem";
import { ReactComponent as CogIcon } from "assets/cog.svg";
function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon={<CogIcon />}></NavItem>
        <NavItem icon={<CogIcon />}></NavItem>
        <NavItem icon={<CogIcon />}></NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
