import React from "react";
import NavItem from "./NavItem";
import DropdownMenu from "../DropdownMenu";
import DropdownItem from "../DropdownMenu/DropdownItem";
import { SvgFactory } from "assets/SvgFactory";
import ProfileItem from "../DropdownMenu/ProfileItem";
import NavbarProfileItem from "./ProfileItem";
import { Link } from "react-router-dom";
import LogoutItem from "../DropdownMenu/LogoutItem";
function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <Link className="navbar-name" to="/">
          SC
        </Link>
        <NavbarProfileItem />
        <NavItem icon={SvgFactory.bell()}></NavItem>
        <NavItem icon={SvgFactory.caret()}>
          <DropdownMenu>
            <ProfileItem />

            <DropdownItem leftIcon={SvgFactory.cog()}>Settings</DropdownItem>
            <LogoutItem>Log Out</LogoutItem>
          </DropdownMenu>
        </NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
