import axios from "helpers/axios";
import { LOGIN } from "./actionTypes";

const setLoginData = (payload) => ({
  type: LOGIN,
  payload,
});

export const login = (googleToken) => async (dispatch, getStore) => {
  try {
    const response = await axios.post("auth/login", {
      token: `Bearer ${googleToken}`,
    });
    const { data } = response;
    localStorage.setItem("auth_token", data.auth_token);
    dispatch(
      setLoginData({
        ...data,
        token: data.auth_token,
      })
    );
  } catch (e) {
    console.log(e.message);
  }
};
