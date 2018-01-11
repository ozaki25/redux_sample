import { CHANGE_MESSAGE } from '../actionTypes';

const initialState = { text: 'Initial Message!' };

const message = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return Object.assign({}, state, { text: action.text });
    default:
      return state;
  }
};

export default message;
