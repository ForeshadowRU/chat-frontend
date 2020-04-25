import React from "react";
import Message from "./Message";

function Messages(props) {
  const { name, messages } = props;
  return (
    <section className="homepage-chat-messages">
      <span className="homepage-chat-channelname">{name}</span>
      {messages.map((msg, id) => (
        <Message key={id} {...msg} />
      ))}
    </section>
  );
}

export default Messages;
