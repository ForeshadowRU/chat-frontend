import axios from "helpers/axios";
import { SET_CHANNELS, SET_ACTIVE } from "./actionTypes";
import { setMessages } from "redux/messages/actions";

export const setChannels = (channels) => ({
  type: SET_CHANNELS,
  payload: channels,
});
export const setActive = (active) => async (dispatch, getStore) => {
  dispatch({
    type: SET_ACTIVE,
    payload: active,
  });
};
export const getChannels = (options) => async (dispatch, getStore) => {
  try {
    const response = await axios.get("channels");
    dispatch(setChannels(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const getChannelMessages = (options = {}) => async (
  dispatch,
  getStore
) => {
  try {
    const id = options.id || getStore().user.data.last_used_channel;
    const response = await axios.get(`channels/${id}`);

    dispatch(setActive(options.active));
    dispatch(setMessages(response.data));
  } catch (e) {
    console.log(e);
  }
};
