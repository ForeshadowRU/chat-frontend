import React, { Component } from "react";
import "./index.sass";

class UserPreview extends Component {
  renderImage = () => {
    const { firstname, lastname, avatar } = this.props;
    let initials = this.props.initials || `${firstname[0]}${lastname[0]}`;
    if (avatar)
      return <img src={avatar} className="user-preview__image" alt="user" />;
    return <div className="user-preview__default-image">{initials}</div>;
  };
  render() {
    const { firstname, lastname, username, active } = this.props;
    return (
      <div className={`user-preview${active ? "-active" : ""}`}>
        {this.renderImage()}
        <div className="user-preview__info">
          <span className="user-preview__name">
            {firstname} {lastname}
          </span>
          <span className="user-preview__username">@{username}</span>
        </div>
      </div>
    );
  }
}

export default UserPreview;
