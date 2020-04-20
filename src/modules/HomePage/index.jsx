import React, { Component } from "react";
import Channels from "./Channels";
import "./index.sass";
class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Channels />
      </div>
    );
  }
}

export default HomePage;
