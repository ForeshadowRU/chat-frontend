import React from "react";

function Channel(props) {
  const { id, name } = props;
  return (
    <li
      className="homepage-channel"
      onClick={() => console.log(`channel ${id} selected`)}
    >
      <span className="homepage-channel-name">#{name}</span>
    </li>
  );
}

export default Channel;
