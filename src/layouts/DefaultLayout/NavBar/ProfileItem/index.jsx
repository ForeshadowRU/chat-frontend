import React from "react";
import { connect } from "react-redux";

function NavbarProfileItem(props) {
  const { avatar, firstname } = props;
  return (
    <li className="navbar-profile">
      <div className="navbar-profile-image">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="navbar-profile-fullname">
        <span>{firstname}</span>
      </div>
    </li>
  );
}

export default connect(
  (state) => ({ ...state.user.data }),
  {}
)(NavbarProfileItem);
