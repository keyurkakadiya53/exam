import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from './actionSaga';
// Define the initial state
const initialState = {
  isError: false,
  isLoading: false,
};

// Define the getUserReducer function
const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    // Start fetching user data
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    // Fetch user data successfully
    case GET_USER_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload,
      };
    // Failed to fetch user data
    case GET_USER_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
        error: action.payload,
      };
    // Return the current state for any other action types
    default:
      return state;
  }
};

export default getUserReducer;
