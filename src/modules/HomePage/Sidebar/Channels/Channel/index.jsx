import React from "react";

function Channel(props) {
  const { id, name } = props;
  return (
    <li
      className="homepage-channel"
      onClick={() => console.log(`channel ${id} selected`)}
    >
      #{name}
    </li>
  );
}

export default Channel;
