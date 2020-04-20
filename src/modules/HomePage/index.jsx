import React, { Component } from "react";
import Channels from "./Channels";
import "./index.sass";
class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-sidebar">
          <div>
            <span className="homepage-channels-name">Channels :</span>
            <Channels />
          </div>
          <div>
            <span className="homepage-channels-name">Private Messges :</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
