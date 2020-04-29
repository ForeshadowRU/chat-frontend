import React, { Component } from "react";
import Channels from "./Sidebar/Channels";
import "./index.sass";
import PrivateMessages from "./Sidebar/PrivateMessages";
import Chat from "./Chat";
class HomePage extends Component {
  render() {
    return (
      <main className="homepage">
        <aside className="homepage-sidebar">
          <div>
            <Channels />
          </div>
          <div>
            <PrivateMessages />
          </div>
        </aside>
        <Chat />
      </main>
    );
  }
}

export default HomePage;
