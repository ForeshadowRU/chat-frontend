import React from "react";

import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8080");

function Channel(props) {
  const { id, name } = props;

  return (
    <li
      className="homepage-channel"
      onClick={() => {
        console.log(`channel ${id} selected`);
        socket.emit("message", { message: "debil" });
      }}
    >
      #{name}
    </li>
  );
}

export default Channel;
