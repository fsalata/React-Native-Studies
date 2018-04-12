export const SAVE_LOGGED_USER = 'SAVE_LOGGED_USER';

export const saveLoggedUser = user => ({
  type: saveLoggedUser,
  user,
});
