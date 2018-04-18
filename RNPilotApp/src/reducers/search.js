import { TOGGLE_SEARCH, HIDE_SEARCH } from '../actions/search';

const initalState = {
  showSearch: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return {
        ...state,
        showSearch: !state.showSearch,
      };
    case HIDE_SEARCH:
      return {
        ...state,
        showSearch: false,
      };
    default:
      return state;
  }
};
