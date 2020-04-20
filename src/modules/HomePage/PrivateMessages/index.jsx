import React from "react";
import { connect } from "react-redux";
import PrivateMessage from "./PrivateMessage";
import Spoiler from "ui/Spoiler";

function PrivateMessages(props) {
  const { values } = props;
  console.log(props.values);
  return (
    <Spoiler title="Private Messages">
      <ul className="homepage-pms">
        {values.map((pm, idx) => (
          <PrivateMessage {...pm} key={idx} />
        ))}
      </ul>
    </Spoiler>
  );
}

export default connect((state) => ({ ...state.pms }))(PrivateMessages);
