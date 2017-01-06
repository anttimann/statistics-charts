import { RECEIVE_PROVIDERS_SUCCESS } from '../actions';


function reducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_PROVIDERS_SUCCESS:
      return action.providers;
    default:
      return state;
  }
}

export default reducer;