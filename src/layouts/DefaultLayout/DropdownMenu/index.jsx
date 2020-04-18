import React from "react";

function DropdownMenu(props) {
  const { children } = props;
  return <ul className="dropdown">{children}</ul>;
}

export default DropdownMenu;
