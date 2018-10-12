import { combineReducers } from 'redux';
import { ACTION_TEST } from '../actions';

const reducerTest = (state = 'stateTest', action) => {
  switch (action.type) {
    case ACTION_TEST:
      console.log(action);
      return 'newStateTest';
    default:
      return state;
  }
};

export default combineReducers({ reducerTest });
