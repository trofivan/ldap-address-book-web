import { combineReducers } from 'redux';
import filter from './filter';
import users from './users';

export default combineReducers({
  filter,
  users
});
