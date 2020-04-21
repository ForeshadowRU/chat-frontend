import faker from "faker";

const values = Array.apply(null, new Array(10)).map((channel, id) => ({
  name: faker.random.word(),
  id,
}));
const initialState = {
  values: values,
  active: values[Math.floor(Math.random() * values.length)],
};

const ChannelsHandler = {};

export default (state = initialState, action) =>
  ChannelsHandler[action.type]
    ? ChannelsHandler[action.type](state, action)
    : state;
