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

export const sendMessage = (text) => async (dispatch, getStore) => {
  // if (!text.replace(/<(.|\n)*?>/g, "").trim().length) {
  //   return;
  // }
  console.log(text, {
    text: text,
    channelId: getStore().channels.active.id,
  });
  socket.emit("message", {
    text: text,
    channelId: getStore().channels.active.id,
  });
};

export const appendMessage = (message) => ({
  type: NEW_MESSAGE,
  payload: message,
});
