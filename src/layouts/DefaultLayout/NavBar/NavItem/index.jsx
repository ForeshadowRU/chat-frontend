import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function NavItem(props) {
  const { icon, children } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      const { key } = event;
      if (key === "Escape" && open) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  });
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
