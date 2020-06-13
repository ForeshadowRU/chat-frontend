import axios from "helpers/axios";
import { LOGIN, LOGOUT } from "./actionTypes";

const setLoginData = (payload) => ({
  type: LOGIN,
  payload,
});
export const me = () => async (dispatch, getStore) => {
  try {
    const response = await axios.get("me");
    dispatch(setLoginData({ data: response.data }));
  } catch (e) {
    console.error(e);
  }
};
export const login = (googleToken) => async (dispatch, getStore) => {
  try {
    const response = await axios.get("google", {
      headers: { Authorization: googleToken },
    });
    const { data } = response;
    localStorage.setItem("auth_token", data.auth_token);
    dispatch(setLoginData({ token: data.auth_token, data: data.user }));
  } catch (e) {
    console.error(e.message);
  }
};

export const logout = () => {
  localStorage.clear("auth_token");
  return { type: LOGOUT };
};
