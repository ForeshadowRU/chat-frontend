import React from "react";
import { connect } from "react-redux";
import Messages from "./Messages";

function Chat(props) {
  const { active, messages } = props;
  return (
    <section className="homepage-chat">
      <Messages name={active.name} messages={messages} />
    </section>
  );
}

export default connect(
  (state) => ({
    active: state.channels.active,
    messages: state.messages.values,
  }),
  null
)(Chat);
