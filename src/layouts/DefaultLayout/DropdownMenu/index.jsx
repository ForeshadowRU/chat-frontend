import React from "react";

function DropdownMenu() {
  return (
    <ul className="dropdown">
      <DropdownMenu>Privet</DropdownMenu>
      <DropdownMenu>Poka</DropdownMenu>
    </ul>
  );
}

export default DropdownMenu;
