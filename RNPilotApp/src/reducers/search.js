import { TOGGLE_SEARCH } from '../actions/search';

const initalState = {
  showSearch: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return { ...state, showSearch: !state.showSearch };
    default:
      return state;
  }
};
