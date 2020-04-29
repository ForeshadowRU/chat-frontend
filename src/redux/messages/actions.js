import { SET_MESSAGES, NEW_MESSAGE } from "./actionTypes";
import { socket } from "webscokets";

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const sendMessage = (options) => async (dispatch, getStore) => {
  socket.emit("message", {
    text: options.message.text,
    channelId: getStore().channels.active.id,
  });
};

export const appendMessage = (message) => ({
  type: NEW_MESSAGE,
  payload: message,
});
