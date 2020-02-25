const initialState = {
  token: null,
  user: null
};

const UserHandler = {};

export default (state = initialState, action) =>
  UserHandler[action.type] ? UserHandler[action.type](state, action) : state;
