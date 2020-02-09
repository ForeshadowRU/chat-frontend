import axiosInstance from "./axios";

export const getMessages = async () => {
  const response = await axiosInstance.get("/chat");
  console.log(response.data);
  return response.data;
};
export const sendMessage = async message => {
  const response = await axiosInstance.post("/chat", message);
  console.log(response.data);
  return response.data;
};
