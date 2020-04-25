import React from "react";
import { connect } from "react-redux";
import { SvgFactory } from "assets/SvgFactory";

function Message(props) {
  const { own, sender, text } = props;
  const { image, firstname } = sender;
  return (
    <div className="homepage-chat-message-container">
      <div className="homepage-chat-message-profile">
        {!own && (
          <>
            <div className="homepage-chat-message-profile-image">
              <img src={image} alt=" avatar" width="70px" height="70px" />
            </div>
            <div className="homepage-chat-message-profile-fullname">
              <p>{firstname}</p>
            </div>
          </>
        )}
      </div>
      <div className="homepage-chat-message-wrapper">
        <span className="homepage-chat-message-icon">{SvgFactory.edit()}</span>
        <p className="homepage-chat-message-text">{text}</p>
        <span className="homepage-chat-message-date">21.04.2020</span>
      </div>
      <div className="homepage-chat-message-profile">
        {own && (
          <>
            <div className="homepage-chat-message-profile-image">
              <img src={image} alt=" avatar" width="70px" height="70px" />
            </div>
            <div className="homepage-chat-message-profile-fullname">
              <p>{firstname}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default connect((state) => ({ ...state.user.data }), {})(Message);
