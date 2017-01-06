import { asyncFetch } from './fetch';

const RECEIVE_PROVIDERS_SUCCESS = 'RECEIVE_PROVIDERS_SUCCESS';
const RECEIVE_PROVIDERS_FAILURE = 'RECEIVE_PROVIDERS_FAILURE';

function fetchProviders() {
  return async (dispatch) => {
    try {
      const response = await asyncFetch('http://localhost:3000/data');

      return dispatch({
        type: RECEIVE_PROVIDERS_SUCCESS,
        providers: response
      });
    }
    catch(err) {
      return dispatch({
        type: RECEIVE_PROVIDERS_FAILURE,
        error: err
      });
    }
  }
}

export {
  fetchProviders,
  RECEIVE_PROVIDERS_SUCCESS,
  RECEIVE_PROVIDERS_FAILURE
};
