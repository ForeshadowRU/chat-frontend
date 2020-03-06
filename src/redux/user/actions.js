import axios from "helpers/axios";
import { LOGIN } from "./actionTypes";

export const login = payload => ({
  type: LOGIN,
  payload
});

export const register = values => async (dispatch, getStore) => {
  try {
    const response = await axios.post("auth/register", {
      ...values,
      isGoogleAccount: false
    });
    const { data } = response;

    dispatch(
      login({
        ...data,
        token: data.auth_token
      })
    );
  } catch (e) {
    console.log(e.message);
  }
};

