import faker from "faker";
export const getMockedData = (count = 25) => {
  return Array.apply(null, Array(count)).map((_item, index) => ({
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatar: faker.image.avatar(),
    username: faker.internet.userName()
  }));
};
