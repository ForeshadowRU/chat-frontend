import React from "react";
import NavItem from "./NavItem";
import DropdownMenu from "../DropdownMenu";
import DropdownItem from "../DropdownMenu/DropdownItem";
import { SvgFactory } from "assets/SvgFactory";
import ProfileItem from "../DropdownMenu/ProfileItem";
import NavbarProfileItem from "./ProfileItem";
import { Link } from "react-router-dom";
import LogoutItem from "../DropdownMenu/LogoutItem";
import { useEffect } from "react";
import { connect } from "react-redux";
import { me } from "redux/user/actions";
import { getChannelMessages, getChannels } from "redux/channels/actions";
function NavBar({ user, me, getChannelMessages, getChannels }) {
  useEffect(() => {
    console.log(user);
    if (!user.data) {
      me().then(() => getChannels().then(() => getChannelMessages()));
    }
  });
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <Link className="navbar-name" to="/">
          {SvgFactory.logo()}
        </Link>
        <NavbarProfileItem />
        <NavItem icon={SvgFactory.bell()}></NavItem>
        <NavItem icon={SvgFactory.caret()}>
          <DropdownMenu>
            <ProfileItem {...user.data} />

            <DropdownItem leftIcon={SvgFactory.cog()}>Settings</DropdownItem>
            <LogoutItem>Log Out</LogoutItem>
          </DropdownMenu>
        </NavItem>
      </ul>
    </nav>
  );
}

export default connect((state) => ({ user: state.user }), {
  me: me,
  getChannelMessages: getChannelMessages,
  getChannels: getChannels,
})(NavBar);
