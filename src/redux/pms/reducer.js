import faker from "faker";

const values = Array.apply(null, new Array(10)).map((channel, id) => ({
  fullname: faker.name.firstName() + " " + faker.name.lastName(),
  id,
}));
const initialState = {
  values: values,
};

const PmsHandler = {};

export default (state = initialState, action) =>
  PmsHandler[action.type] ? PmsHandler[action.type](state, action) : state;
