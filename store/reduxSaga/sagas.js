import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {GET_USER_REQUEST, getUserSuccess, getUserFailure} from './actionSaga';

const API_URL = 'https://jsonplaceholder.typicode.com/users/';

const fetchUser = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

function* getUser() {
  try {
    const user = yield call(fetchUser);
    console.log("usr......",user);
    yield put(getUserSuccess(user));
  } catch (error) {
    yield put(getUserFailure(error.message));
  }
}

function* watchGetUser() {
  yield takeEvery(GET_USER_REQUEST, getUser);
}

export default watchGetUser;
