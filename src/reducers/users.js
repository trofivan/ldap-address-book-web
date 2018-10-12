// TODO: Add async fetching users
import MOCK_USERS from '../mockData/MOCK_USERS_2500';

// TODO: Change default state
const users = (state = MOCK_USERS, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default users;
