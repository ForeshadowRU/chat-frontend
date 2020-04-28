import React from "react";
import { connect } from "react-redux";
import { getChannelMessages } from "redux/channels/actions";
function Channel(props) {
  const { getChannelMessages, ...rest } = props;

  return (
    <li
      className="homepage-channel"
      onClick={() => {
        getChannelMessages({ id: rest.id, active: rest });
      }}
    >
      #{rest.name}
    </li>
  );
}

export default connect(() => {}, {
  getChannelMessages,
})(Channel);
