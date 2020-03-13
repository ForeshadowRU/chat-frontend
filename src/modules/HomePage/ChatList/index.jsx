import React, { Component } from "react";
import Search from "./Search";
import { getMockedData } from "./chatlist.mock";
import UserPreview from "ui/UserPreview";

class ChatList extends Component {
  render() {
    return (
      <div className="homepage__chatlist">
        <Search />

        <ul className="homepage__chatlist__separator">
          <span>Private messages</span>
          {getMockedData().map((user, index) => (
            <li className="homepage__chatlist__item">
              <UserPreview {...user} active={index === 0} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ChatList;
