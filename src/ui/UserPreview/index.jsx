import React, { Component } from "react";

class UserPreview extends Component {
  renderImage = () => {
    const { fullname } = this.props;
    return fullname;
  };

  render() {
    return <div className="user-preview__container"></div>;
  }
}

export default UserPreview;
