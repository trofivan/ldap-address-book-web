/**
 * Filter
 */
export const FILTER_SET = 'FILTER_SET';

export const actionSetFilter = (filter) => ({
  type: FILTER_SET,
  filter
});

/**
 *  Users fetching
 */
export const USERS_FETCH_REQUEST = 'USERS_FETCH_REQUEST';
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
export const USERS_FETCH_ERROR = 'USERS_FETCH_ERROR';
