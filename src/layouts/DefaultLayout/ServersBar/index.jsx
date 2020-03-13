import React, { Component } from "react";
import "../index.sass";
class ServerSidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <ul className="server-list">
          <li className="sidebar__home">HOME</li>
          <li className="sidebar__item">SCP</li>
          <li className="sidebar__item">PSM</li>
          <li className="sidebar__item">A2</li>
          <li className="sidebar__item">DES</li>
          <li className="sidebar__item">ANI</li>
          <li className="sidebar__item-add">+</li>
        </ul>
      </aside>
    );
  }
}

export default ServerSidebar;
