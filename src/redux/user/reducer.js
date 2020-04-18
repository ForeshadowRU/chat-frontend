import { LOGIN } from "./actionTypes";
import faker from "faker";
const initialState = {
  token: localStorage.getItem("auth_token"),
  data: {
    fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
    image: faker.image.avatar(),
  },
};

const UserHandler = {
  [LOGIN]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
};

export default (state = initialState, action) =>
  UserHandler[action.type] ? UserHandler[action.type](state, action) : state;
