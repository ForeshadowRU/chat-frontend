import { SET_MESSAGES, NEW_MESSAGE } from "./actionTypes";
import { socket } from "webscokets";
import axios from "helpers/axios";
import { message } from "antd";

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const deleteMessage = (options) => async (dispatch, getStore) => {
  try {
    const response = await axios.delete(`messages/${options.id}`);

    message.success("Message has been removed");

    dispatch(setMessages(response.data));
  } catch (e) {
    console.error(e);
  }
};

export const sendMessage = (options) => async (dispatch, getStore) => {
  console.log(options.message.text);
  socket.emit("message", {
    text: options.message.text,
    channelId: getStore().channels.active.id,
  });
};

export const appendMessage = (message) => ({
  type: NEW_MESSAGE,
  payload: message,
});
