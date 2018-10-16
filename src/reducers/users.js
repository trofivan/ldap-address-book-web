// TODO: Add async fetching users
import MOCK_USERS from '../mockData/MOCK_USERS_2500';
import { SET_VISIBLE_USERS_COUNT } from '../actions';

// TODO: Hardcode visibleCount
const defaultState = {
  isFetching: false,
  visibleCount: 10,
  items: [...MOCK_USERS]
};

// TODO: Change default state
const users = (state = defaultState, { type, visibleCount }) => {
  switch (type) {
    case SET_VISIBLE_USERS_COUNT:
      return { ...state, visibleCount };
    default:
      return state;
  }
};

export default users;
