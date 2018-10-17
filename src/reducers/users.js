import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, SET_VISIBLE_USERS_COUNT } from '../actions';

// TODO: Hardcode visibleCount
const defaultState = {
  isFetching: false,
  error: null,
  visibleCount: 30,
  items: []
};

const users = (state = defaultState, { type, visibleCount, users, error }) => {
  switch (type) {
    case FETCH_USERS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, items: users };
    case FETCH_USERS_ERROR:
      return { ...state, error };
    case SET_VISIBLE_USERS_COUNT:
      return { ...state, visibleCount };
    default:
      return state;
  }
};

export default users;
