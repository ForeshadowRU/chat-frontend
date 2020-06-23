import React, { Component } from "react";
import Channels from "./Sidebar/Channels";
import Members from "./Sidebar/Members";
import "./index.sass";

import Chat from "./Chat";
class HomePage extends Component {
  render() {
    return (
      <main className="homepage">
        <aside className="homepage-sidebar ant-collapse">
          <Channels />
          <Members />
        </aside>
        <Chat />
      </main>
    );
  }
}

export default HomePage;
