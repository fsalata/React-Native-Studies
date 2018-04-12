import { SAVE_LOGGED_USER } from '../actions/user';

const initalState = {
  user: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SAVE_LOGGED_USER:
      return {
        user: action.user,
      };
    default:
      return state;
  }
};
