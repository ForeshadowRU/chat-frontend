import React from "react";
import NavItem from "./NavItem";
import { ReactComponent as CogIcon } from "assets/cog.svg";
import { ReactComponent as CaretIcon } from "assets/caret.svg";
import DropdownMenu from "../DropdownMenu";
import DropdownItem from "../DropdownMenu/DropdownItem";
import { SvgFactory } from "assets/SvgFactory";
import ProfileItem from "../DropdownMenu/ProfileItem";
function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon={SvgFactory.bell()}></NavItem>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu>
            <ProfileItem />
            <DropdownItem leftIcon={SvgFactory.messenger()}>
              Feedback
            </DropdownItem>
            <DropdownItem leftIcon={SvgFactory.cog()}>Settings</DropdownItem>
          </DropdownMenu>
        </NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
