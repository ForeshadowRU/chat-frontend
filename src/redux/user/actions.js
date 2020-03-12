import axios from "helpers/axios";
import { LOGIN } from "./actionTypes";

const setLoginData = payload => ({
  type: LOGIN,
  payload
});

export const login = values => async (dispatch, getStore) => {
  try {
    const response = await axios.post("auth/login", values);
    const { data } = response;
    localStorage.setItem("auth_token", data.auth_token);
    dispatch(
      setLoginData({
        ...data,
        token: data.auth_token
      })
    );
  } catch (e) {
    console.log(e.message);
  }
};

export const register = values => async (dispatch, getStore) => {
  try {
    const response = await axios.post("auth/register", {
      ...values,
      isGoogleAccount: false
    });
    const { data } = response;

    dispatch(
      setLoginData({
        ...data,
        token: data.auth_token
      })
    );
  } catch (e) {
    console.log(e.message);
  }
};
