import React, { Component } from "react";
import "../index.sass";
class ServerSidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <ul className="server-list">
          <li className="sidebar__item-add">+</li>
          <li className="sidebar__item">SCP</li>
          <li className="sidebar__item">PSM</li>
        </ul>
      </aside>
    );
  }
}

export default ServerSidebar;
