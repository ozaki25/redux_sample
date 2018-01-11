import { CHANGE_MESSAGE } from '../actionTypes';

export const changeMessage = text => ({
  type: CHANGE_MESSAGE,
  text,
});
