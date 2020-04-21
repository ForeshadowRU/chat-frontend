import React from "react";
import Message from "./Message";

function Messages(props) {
    const {name} = props;
    return (
        <section className="homepage-chat-messages">
            <span className="homepage-chat-channelname">{name}</span>
            <Message/>
            <Message/>
            <Message/>
        </section>
    );
}

export default Messages;

