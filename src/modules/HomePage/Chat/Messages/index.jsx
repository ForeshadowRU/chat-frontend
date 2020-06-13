import React from "react";
import Message from "./Message";

function Messages(props) {
  const { name, messages } = props;
  console.log(messages);
  return (
    <section className="homepage-chat-messages">
      <span className="homepage-chat-channelname">{name}</span>
      {messages.map((msg) => {
        return <Message key={msg.id} {...msg} id={msg.id} />;
      })}
    </section>
  );
}

export default Messages;
