import axios from "helpers/axios";
import { SET_MEMBERS } from "./actionTypes";

export const getMembers = () => async (dispatch, getStore) => {
  try {
    const response = await axios.get("/members");
    dispatch(setMembers(response.data));
  } catch (e) {
    console.error(e);
  }
};

const setMembers = (members) => ({
  type: SET_MEMBERS,
  payload: members,
});
