import React from "react";
import { useState } from "react";

function NavItem(props) {
  const { icon, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <li className="navbar-item">
      <div className="navbar-icon" onClick={() => setOpen(!open)}>
        {icon}
      </div>
      {open && children}
    </li>
  );
}

export default NavItem;
