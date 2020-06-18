import React, { useState } from "react";
import { connect } from "react-redux";
import Channel from "./Channel";
import { getChannels, createChannel } from "redux/channels/actions";
import { Modal, Input, Collapse, Button, message } from "antd";
import { sendMessage } from "redux/messages/actions";
const Panel = Collapse.Panel;
function Channels(props) {
  const { values, createChannel } = props;
  const [showModal, isShowingModal] = useState(false);
  const [name, setName] = useState("");

  const sendRequest = () => {
    if (name.length > 3) {
      isShowingModal(false);
      createChannel(name);
      return;
    }
    message.error("Channel name must me more than 3 symbols");
  };

  if (!values.length) return null;
  return (
    <>
      <Collapse defaultActiveKey="1">
        <Panel
          header="Channels"
          key="1"
          extra={
            <Button
              type="ghost"
              onClick={(evt) => {
                evt.stopPropagation();
                isShowingModal(true);
              }}
            >
              +
            </Button>
          }
        >
          <ul className="homepage-channels">
            {values.map((channel, idx) => (
              <Channel {...channel} key={idx} />
            ))}
          </ul>
        </Panel>
      </Collapse>
      <Modal
        title="Create New Channel"
        visible={showModal}
        onOk={sendMessage}
        okButtonProps={{ disabled: !name.length }}
        onCancel={() => {
          isShowingModal(false);
          setName("");
        }}
      >
        <Input
          type="text"
          minLength={3}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Modal>
    </>
  );
}

export default connect((state) => ({ ...state.channels }), {
  getChannels: getChannels,
  createChannel: createChannel,
})(Channels);
