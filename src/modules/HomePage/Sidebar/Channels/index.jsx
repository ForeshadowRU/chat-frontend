import React from "react";
import { connect } from "react-redux";
import Channel from "./Channel";
import Spoiler from "ui/Spoiler";
import { useEffect } from "react";
import { getChannels } from "redux/channels/actions";

function Channels(props) {
  const { values, getChannels } = props;
  useEffect(() => {
    if (!values.length) {
      getChannels();
    }
  });
  if (!values.length) return null;
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

export default connect((state) => ({ ...state.channels }), {
  getChannels: getChannels,
})(Channels);
