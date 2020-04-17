import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  const { icon } = props;
  return (
    <li className="navbar-item">
      <Link to="#" className="navbar-icon">
        {icon}
      </Link>
    </li>
  );
}

export default NavItem;
