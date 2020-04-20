import React, { Component } from "react";
import Channels from "./Channels";
import "./index.sass";
import PrivateMessages from "./PrivateMessages";
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
