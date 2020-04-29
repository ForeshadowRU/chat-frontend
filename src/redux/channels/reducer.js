import { SET_CHANNELS, SET_ACTIVE } from "./actionTypes";

const values = [];
// Array.apply(null, new Array(10)).map((channel, id) => ({
//   name: faker.random.word(),
//   id,
// }));

const initialState = {
  values: values,
  active: values[Math.floor(Math.random() * values.length)],
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
