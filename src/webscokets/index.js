import io from "socket.io-client";
export let socket = null;

export const initSocket = (token) => {
  socket = io(`http://localhost:8080?token=${token}`);
};
