import { LOGIN, LOGOUT } from "./actionTypes";

const initialState = {
  token: localStorage.getItem("auth_token"),
};

const UserHandler = {
  [LOGIN]: (state, { payload }) => ({
    ...state,
    ...payload,
    token: payload.token ? payload.token : state.token,
  }),
  [LOGOUT]: (state, { payload }) => ({
    token: null,
  }),
};

export default (state = initialState, action) =>
  UserHandler[action.type] ? UserHandler[action.type](state, action) : state;
