import faker from "faker";
import { SET_MESSAGES, NEW_MESSAGE } from "./actionTypes";

// const persons = Array.apply(null, new Array(10)).map((person, id) => ({
//   id,
//   firstname: faker.name.firstName(),
//   lastname: faker.name.lastName(),
//   image: faker.image.avatar(),
// }));
// Array.apply(null, new Array(10)).map((channel, id) => {
//   const sender = persons[Math.floor(Math.random() * persons.length)];
//   return { id, sender, own: sender.id === 0, text: faker.lorem.text() };
// });
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
