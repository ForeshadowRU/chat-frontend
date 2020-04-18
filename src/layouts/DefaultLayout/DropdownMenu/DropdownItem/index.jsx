import React from "react";

function DropdownItem(props) {
  const { leftIcon, rightIcon, children } = props;
  return (
    <li className="dropdown-item">
      <span className="dropdown-lefticon">{leftIcon}</span>
      {children}
      <span className="dropdown-righticon">{rightIcon}</span>
    </li>
  );
}

export default DropdownItem;
