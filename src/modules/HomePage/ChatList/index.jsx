import React, { Component } from "react";
import Search from "./Search";

class ChatList extends Component {
  render() {
    return (
      <div className="homepage__chatlist">
        <Search />

        <ul className="homepage__chatlist__separator">
          <span>Private messages</span>
          <li className="homepage__chatlist__item"></li>
        </ul>
      </div>
    );
  }
}

export default ChatList;
