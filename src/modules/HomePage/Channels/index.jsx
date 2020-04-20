import React from "react";
import { connect } from "react-redux";
import Channel from "./Channel";

function Channels(props) {
  const { values } = props;
  return (
    <ul className="homepage-channels">
      {values.map((channel) => (
        <Channel {...channel} />
      ))}
    </ul>
  );
}

export default connect((state) => ({ ...state.channels }))(Channels);
