import React from "react";
import { connect } from "react-redux";
import Messages from "./Messages";


function Chat(props) {
  const { active: activeChannel } = props;
  return (
    <section className="homepage-chat">
        <Messages name={activeChannel.name} />
    </section>
  );
}

export default connect((state) => ({ ...state.channels }), null)(Chat);
