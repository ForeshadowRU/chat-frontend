import React, { Component } from "react";
import Channels from "./Sidebar/Channels";
import "./index.sass";
import PrivateMessages from "./Sidebar/PrivateMessages";
class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-sidebar">
          <div>
            <Channels />
          </div>
          <div>
            <PrivateMessages />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
