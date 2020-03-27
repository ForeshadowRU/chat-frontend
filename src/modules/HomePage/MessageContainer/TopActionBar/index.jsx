import React, { Component } from "react";

class TopActionBar extends Component {
  render() {
    return (
      <div className="homepage__message-container__top-action-bar">
        <span>USERNAME</span>
        <div className="homepage__message-container__top-action-bar__actions">
          <div>
            <label>
              Search :
              <input type="text" />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default TopActionBar;
