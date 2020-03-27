import React, { Component } from "react";
import TopActionBar from "./TopActionBar";

class MessageContainer extends Component {
  render() {
    return (
      <div key="message-container" className="homepage__message-container">
        <TopActionBar />
      </div>
    );
  }
}

export default MessageContainer;
