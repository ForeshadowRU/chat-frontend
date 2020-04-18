import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavItem(props) {
  const { icon } = props;
  const [open, setOpen] = useState(false);

  return (
    <li className="navbar-item">
      <Link to="#" className="navbar-icon" onClick={() => setOpen(!open)}>
        {icon}
      </Link>
    </li>
  );
}

export default NavItem;
