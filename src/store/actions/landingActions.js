import { ADD_COUNTER } from './types';

// add counter action for landing page
export const addCounter = () => dispatch => {
  dispatch({
    type: ADD_COUNTER,
  });
};
