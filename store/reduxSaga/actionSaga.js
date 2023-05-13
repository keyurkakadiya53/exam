// export const GET_USERS_SAGA = 'GET_USERS_SAGA';
// export const SAVE_MOVIES_REDUCER = 'SAVE_MOVIES_REDUCER';
// Define action types
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

// Define action creators
export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure = error => ({
  type: GET_USER_FAILURE,
  payload: error,
});
