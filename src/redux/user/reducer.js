import { LOGIN } from "./actionTypes";
import faker from "faker";

const firstname = faker.name.firstName();
const lastname = faker.name.lastName();
const initialState = {
  token: localStorage.getItem("auth_token"),
  data: {
    fullname: `${firstname} ${lastname}`,
    image: faker.image.avatar(),
    firstname,
    lastname,
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
