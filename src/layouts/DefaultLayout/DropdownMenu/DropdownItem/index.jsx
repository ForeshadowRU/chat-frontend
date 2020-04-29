import React from "react";

function DropdownItem(props) {
  const { leftIcon, rightIcon, children, description } = props;
  return (
    <li className="dropdown-item">
      <span className="dropdown-lefticon">{leftIcon}</span>
      <div className="dropdown-text">
        <span className="dropdown-title">{children}</span>
        {description && (
          <span className="dropdown-description">{description}</span>
        )}
      </div>
      <span className="dropdown-righticon">{rightIcon}</span>
    </li>
  );
}

export default DropdownItem;
