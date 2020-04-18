import React from "react";
import NavItem from "./NavItem";
import { ReactComponent as CogIcon } from "assets/cog.svg";
import { ReactComponent as CaretIcon } from "assets/caret.svg";
import DropdownMenu from "../DropdownMenu";
import DropdownItem from "../DropdownMenu/DropdownItem";
import { SvgFactory } from "assets/SvgFactory";
function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon={<CogIcon />}></NavItem>
        <NavItem icon={<CogIcon />}></NavItem>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu>
            <DropdownItem leftIcon={SvgFactory.bell()}>
              Notifications
            </DropdownItem>
            <DropdownItem leftIcon={SvgFactory.cog()}>Settings</DropdownItem>
          </DropdownMenu>
        </NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
