import React from "react";
import { Avatar, Badge } from "antd";

function PrivateMessage(props) {
  const { firstname, lastname, avatar, online } = props;
  return (
    <li className="homepage-pm">
      <Badge dot color={online ? "green" : "gray"}>
        <Avatar src={avatar} />
      </Badge>
      <span style={{ marginLeft: "10px" }}>
        {firstname} {lastname}
      </span>
    </li>
  );
}

export default PrivateMessage;
