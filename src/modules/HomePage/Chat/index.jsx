import React from "react";
import { connect } from "react-redux";
import Messages from "./Messages";
import Quill from "./Quill";

function Chat(props) {
  const { active, messages } = props;
  return (
    <>
      <section className="homepage-chat">
        <Messages name={active ? active.name : "nichego"} messages={messages} />
      </section>
      <section className="homepage-quill">
        <Quill />
      </section>
    </>
  );
}

export default connect(
  (state) => ({
    active: state.channels.active,
    messages: state.messages.values,
  }),
  null
)(Chat);
