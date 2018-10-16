/**
 * Filter
 */
export const SET_FILTER = 'SET_FILTER';

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter
});

/**
 *  Users fetching
 */
// export const USERS_FETCH_REQUEST = 'USERS_FETCH_REQUEST';
// export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
// export const USERS_FETCH_ERROR = 'USERS_FETCH_ERROR';

export const SET_VISIBLE_USERS_COUNT = 'SET_VISIBLE_USERS_COUNT';

export const setVisibleUsersCount = (visibleCount) => ({
  type: SET_VISIBLE_USERS_COUNT,
  visibleCount
});
