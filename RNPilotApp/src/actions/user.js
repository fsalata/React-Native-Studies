export const SAVE_LOGGED_USER = 'SAVE_LOGGED_USER';
export const LOGGOUT_USER = 'LOGGOUT_USER';

export const saveLoggedUser = user => ({
  type: SAVE_LOGGED_USER,
  user,
});

export const loggoutUser = () => ({
  type: LOGGOUT_USER,
});
