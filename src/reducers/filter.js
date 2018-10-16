import { SET_FILTER } from '../actions';

const defaultState = {
  name: '',
  phone: '',
  mail: '',
  title: '',
  company: '',
  department: ''
};

const filter = (state = defaultState, { type, filter }) => {
  switch (type) {
    case SET_FILTER:
      return { ...state, ...filter };
    default:
      return state;
  }
};

export default filter;
