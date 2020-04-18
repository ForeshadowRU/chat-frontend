import React from "react";
import NavItem from "./NavItem";
import { ReactComponent as CogIcon } from "assets/cog.svg";
import { ReactComponent as CaretIcon } from "assets/caret.svg";
import { ReactComponent as NotifyIcon } from "assets/plane.svg";
import DropdownMenu from "../DropdownMenu";
import DropdownItem from "../DropdownMenu/DropdownItem";
function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon={<CogIcon />}></NavItem>
        <NavItem icon={<CogIcon />}></NavItem>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu>
            <DropdownItem leftIcon={NotifyIcon}>Notifications</DropdownItem>
            <DropdownItem leftIcon={CogIcon}>Settings</DropdownItem>
          </DropdownMenu>
        </NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
