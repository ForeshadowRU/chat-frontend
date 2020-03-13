import React, { Component } from "react";
import "./index.sass";
import ChatList from "./ChatList";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <ChatList />
        <div key="message-container" className="homepage__message-container">
          12312312
        </div>
      </div>
    );
  }
}

export default HomePage;
