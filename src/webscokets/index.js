import io from "socket.io-client";
import { store } from "../redux";
import { appendMessage } from "redux/messages/actions";
export let socket = null;

export const initSocket = (token) => {
  socket = io(`http://localhost:8080?token=${token}`);
  socket.on("message", (message) => {
    if (message.__channel__.id === store.getState().channels.active.id) {
      store.dispatch(appendMessage(message));
    }
  });
};
