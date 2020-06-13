import { SET_CHANNELS, SET_ACTIVE } from "./actionTypes";

const initialState = {
  values: [],
  active: null,
};

const ChannelsHandler = {
  [SET_CHANNELS]: (state, { payload }) => ({
    ...state,
    values: payload,
    active: payload[0],
  }),
  [SET_ACTIVE]: (state, { payload }) => ({
    ...state,
    active: payload,
  }),
};

export default (state = initialState, action) =>
  ChannelsHandler[action.type]
    ? ChannelsHandler[action.type](state, action)
    : state;
