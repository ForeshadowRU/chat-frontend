import React from "react";
import { connect } from "react-redux";

function Chat(props) {
  const { active: activeChannel } = props;
  return (
    <section className="homepage-chat">
      <span className="homepage-chat-channelname">{activeChannel.name}</span>
    </section>
  );
}

export default connect((state) => ({ ...state.channels }), null)(Chat);
