import { SET_MEMBERS } from "./actionTypes";

const initialState = {
  values: [],
};

const MembersHandler = {
  [SET_MEMBERS]: (state, action) => {
    return { ...state, values: action.payload };
  },
};

export default (state = initialState, action) =>
  MembersHandler[action.type]
    ? MembersHandler[action.type](state, action)
    : state;
