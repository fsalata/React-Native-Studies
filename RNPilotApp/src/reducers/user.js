import { SAVE_LOGGED_USER, LOGGOUT_USER } from '../actions/user';

const initalState = {
  user: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SAVE_LOGGED_USER:
      return { ...action.user };
    case LOGGOUT_USER:
      return null;
    default:
      return state;
  }
};
