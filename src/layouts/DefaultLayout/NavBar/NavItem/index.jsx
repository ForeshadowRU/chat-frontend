import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavItem(props) {
  const { icon, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <li className="navbar-item">
      <div to="#" className="navbar-icon" onClick={() => setOpen(!open)}>
        {icon}
      </div>
      {open && children}
    </li>
  );
}

export default NavItem;
