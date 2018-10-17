/**
 * Filter
 */
export const SET_FILTER = 'SET_FILTER';
export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter
});

/**
 * Visible users count
 */
export const SET_VISIBLE_USERS_COUNT = 'SET_VISIBLE_USERS_COUNT';
export const setVisibleUsersCount = (visibleCount) => ({
  type: SET_VISIBLE_USERS_COUNT,
  visibleCount
});

/**
 *  Fetching users from API
 */
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  users
});

export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
const fetchUsersError = (error) => ({
  type: FETCH_USERS_ERROR,
  error
});

export const fetchUsers = (url) => (dispatch) => {
  dispatch(fetchUsersRequest());

  return fetch(url)
    .then(response => response.json())
    .then(users => dispatch(fetchUsersSuccess(users)))
    .catch(err => dispatch(fetchUsersError(err.message)));
};
