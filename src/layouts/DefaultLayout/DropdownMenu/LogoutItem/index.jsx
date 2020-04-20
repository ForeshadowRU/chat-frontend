import React from "react";
import { SvgFactory } from "assets/SvgFactory";

function LogoutItem(props) {
  const { children } = props;
  return (
    <li className="dropdown-item">
      <span className="dropdown-lefticon">{SvgFactory.logout()}</span>
      <div className="dropdown-text">
        <span className="dropdown-title">{children}</span>
      </div>
      <span className="dropdown-righticon"></span>
    </li>
  );
}
export default LogoutItem;
