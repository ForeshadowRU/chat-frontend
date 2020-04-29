import { SET_MESSAGES, NEW_MESSAGE } from "./actionTypes";

const values = [];
const initialState = {
  values: values,
};

const MessagesHandler = {
  [SET_MESSAGES]: (state, { payload }) => ({
    values: payload,
  }),
  [NEW_MESSAGE]: (state, { payload }) => {
    const values = [...state.values];
    values.push(payload);
    return {
      ...state,
      values: values,
    };
  },
};

export default (state = initialState, action) =>
  MessagesHandler[action.type]
    ? MessagesHandler[action.type](state, action)
    : state;
