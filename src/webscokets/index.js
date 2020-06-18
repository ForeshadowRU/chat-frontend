import io from "socket.io-client";
import { store } from "../redux";
import { appendMessage } from "redux/messages/actions";
export let socket = null;

export const initSocket = (token) => {
  try {
    socket = io(`http://localhost:3900?token=${token}`, {
      transports: ["websocket"],
    });
  } catch (e) {
    console.error(e);
  }
  socket.on("message", (message) => {
    if (message.channel.id === store.getState().channels.active.id) {
      store.dispatch(appendMessage(message));
    }
  });
};
