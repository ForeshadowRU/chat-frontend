import React from "react";
import { connect } from "react-redux";
import Channel from "./Channel";
import Spoiler from "ui/Spoiler";

function Channels(props) {
  const { values } = props;
  return (
    <Spoiler title="Channels">
      <ul className="homepage-channels">
        {values.map((channel, idx) => (
          <Channel {...channel} key={idx} />
        ))}
      </ul>
    </Spoiler>
  );
}

export default connect((state) => ({ ...state.channels }))(Channels);
