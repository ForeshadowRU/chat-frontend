import React from "react";
import { connect } from "react-redux";
import { SvgFactory } from "assets/SvgFactory";
import { Popconfirm } from "antd";
import { deleteMessage } from "redux/messages/actions";

function Message(props) {
  const { id, sender, text, created_at, deleteMessage } = props;
  console.log(props);
  const { avatar, firstname } = sender;

  return (
    <div className="homepage-chat-message-container">
      <div className="homepage-chat-message-profile">
        <div className="homepage-chat-message-profile-image">
          <img src={avatar} alt=" avatar" width="70px" height="70px" />
        </div>
        <div className="homepage-chat-message-profile-fullname">
          <p>{firstname}</p>
        </div>
      </div>
      <div className="homepage-chat-message-wrapper">
        <div className="homepage-chat-message-services">
          <span className="homepage-chat-message-icon">
            {SvgFactory.edit()}
          </span>
          <Popconfirm
            title="Are you sure？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteMessage({ id })}
          >
            <span className="homepage-chat-message-icon">
              {SvgFactory.trash()}
            </span>
          </Popconfirm>
        </div>
        <p
          className="homepage-chat-message-text"
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
        <span className="homepage-chat-message-date">
          {new Date(created_at).toLocaleDateString("ru")}
        </span>
      </div>
      <div className="homepage-chat-message-profile"></div>
    </div>
  );
}

export default connect((state) => ({}), { deleteMessage })(Message);
