import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Popconfirm, Comment, Avatar, Tooltip } from "antd";
import { deleteMessage } from "redux/messages/actions";
import { DeleteOutlined } from "@ant-design/icons";
function Message(props) {
  const { id, sender, text, created_at, deleteMessage, editable } = props;
  const { avatar, firstname, lastname } = sender;
  const actions = [
    editable && (
      <span key="comment-basic-dislike">
        <Popconfirm
          onConfirm={() => deleteMessage(id)}
          title="Are you sure delete this task?"
        >
          {React.createElement(DeleteOutlined, {})}
        </Popconfirm>
      </span>
    ),
  ];

  return (
    <Comment
      actions={actions}
      style={{ alignSelf: "left" }}
      author={`${firstname} ${lastname}`}
      avatar={<Avatar src={avatar} size="large" alt={firstname} />}
      content={<div dangerouslySetInnerHTML={{ __html: text }}></div>}
      datetime={
        <Tooltip title={moment(created_at).format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment(created_at).fromNow()}</span>
        </Tooltip>
      }
    />
  );
}

export default connect((state) => ({}), { deleteMessage })(Message);
