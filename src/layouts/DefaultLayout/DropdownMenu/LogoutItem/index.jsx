import React from "react";
import { SvgFactory } from "assets/SvgFactory";
import { connect } from "react-redux";
import { logout } from "redux/user/actions";

function LogoutItem(props) {
  const { children, logout } = props;
  return (
    <li className="dropdown-item" onClick={() => logout()}>
      <span className="dropdown-lefticon">{SvgFactory.logout()}</span>
      <div className="dropdown-text">
        <span className="dropdown-title">{children}</span>
      </div>
      <span className="dropdown-righticon"></span>
    </li>
  );
}
export default connect((state) => ({}), {
  logout: logout,
})(LogoutItem);
