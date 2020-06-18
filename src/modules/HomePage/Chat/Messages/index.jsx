import React from "react";
import Message from "./Message";
import { PageHeader } from "antd";

function Messages(props) {
  const { name, messages } = props;
  return (
    <div className="homepage-chat-messages">
      <PageHeader
        title={`#${name}`}
        subTitle="5 members online"
        className="homepage-chat-title"
      />
      <div className="homepage-chat-container">
        {messages.map((msg) => {
          return <Message key={msg.id} {...msg} id={msg.id} />;
        })}
      </div>
    </div>
  );
}

export default Messages;
