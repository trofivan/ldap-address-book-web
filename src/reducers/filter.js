import { FILTER_SET } from '../actions';

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
    case FILTER_SET:
      return { ...state, ...filter };
    default:
      return state;
  }
};

export default filter;
