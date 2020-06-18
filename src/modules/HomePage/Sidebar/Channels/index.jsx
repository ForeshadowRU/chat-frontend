import React, { useState } from "react";
import { connect } from "react-redux";
import Channel from "./Channel";
import Spoiler from "ui/Spoiler";
import { getChannels, createChannel } from "redux/channels/actions";
import { Modal, Input } from "antd";
function Channels(props) {
  const { values, createChannel } = props;
  const [showModal, isShowingModal] = useState(false);
  const [name, setName] = useState("");
  if (!values.length) return null;
  return (
    <Spoiler title="Channels">
      <ul className="homepage-channels">
        {values.map((channel, idx) => (
          <Channel {...channel} key={idx} />
        ))}
        <li className="homepage-channel" onClick={() => isShowingModal(true)}>
          + Create Channel
        </li>
      </ul>
      <Modal
        title="Create New Channel"
        visible={showModal}
        onOk={() => {
          isShowingModal(false);
          createChannel(name);
        }}
        onCancel={() => isShowingModal(false)}
      >
        <Input
          type="text"
          minLength={3}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Modal>
    </Spoiler>
  );
}

export default connect((state) => ({ ...state.channels }), {
  getChannels: getChannels,
  createChannel: createChannel,
})(Channels);
