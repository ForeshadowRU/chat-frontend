import { LOGIN } from "./actionTypes";

const initialState = {
  token: null,
  user: null
};

const UserHandler = {
  [LOGIN]: (state, { payload }) => ({
    ...state,
    ...payload
  })
};

export default (state = initialState, action) =>
  UserHandler[action.type] ? UserHandler[action.type](state, action) : state;
