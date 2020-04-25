import faker from "faker";

const persons = Array.apply(null, new Array(10)).map((person, id) => ({
  id,
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  image: faker.image.avatar(),
}));

const values = Array.apply(null, new Array(10)).map((channel, id) => {
  const sender = persons[Math.floor(Math.random() * persons.length)];
  return { id, sender, own: sender.id === 0, text: faker.lorem.text() };
});
const initialState = {
  values: values,
};

const MessagesHandler = {};

export default (state = initialState, action) =>
  MessagesHandler[action.type]
    ? MessagesHandler[action.type](state, action)
    : state;
