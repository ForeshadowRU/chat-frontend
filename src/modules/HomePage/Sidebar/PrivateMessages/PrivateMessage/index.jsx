import React from "react";

function PrivateMessage(props) {
  const { fullname, id } = props;
  return <li className="homepage-pm">{fullname}</li>;
}

export default PrivateMessage;
