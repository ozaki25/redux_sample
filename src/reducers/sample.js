import { SAMPLE_ACTION } from '../actionTypes';

const initialState = { message: 'Initial Message!' };

const sample = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return Object.assign({}, state, { message: 'Sample Message!' });
    default:
      return state;
  }
};

export default sample;
