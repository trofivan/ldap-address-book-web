// TODO: Add async fetching users
import MOCK_USERS from '../mockData/MOCK_USERS_2500';

const defaultState = {
  isFetching: false,
  items: [...MOCK_USERS]
};

// TODO: Change default state
const users = (state = defaultState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default users;
