import { FILTER_SET } from '../actions';

const filter = (state = {}, { type, filter }) => {
  switch (type) {
    case FILTER_SET:
      return { ...state, filter };
    default:
      return state;
  }
};

export default filter;
