import { UserActionTypes } from './Types';

export const setUser = user => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});
