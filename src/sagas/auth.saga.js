import {call, put, select, take, takeEvery, takeLatest} from 'redux-saga/effects';
import {API_INSTANCE} from '../config/connection';
import * as actionTypes from '../constants/index';
import allActions from '../actions/index';

/**
 * Login user
 * @param {user email address} email
 * @param {string password} password
 */
function* login(params) {
  const {email, password} = params.payload;
  try {
    const response = yield API_INSTANCE.post('/auth/login', {
      email: email,
      password: password,
    }).then((resp) => resp);
    yield put(
      allActions.authActions.loginSuccessAction({
        user: response.data.user,
        access_token: response.data.access_token,
      }));
   console.log(response);
  } catch (error) {
    if (error.message === 'Network Error') {
      // eslint-disable-next-line no-alert
      alert('Network error detected.');
    } else if (error?.response?.status === 422) {
      yield put(
        allActions.authActions.authErrorAction(error?.response?.data.message),
      );
    } else {
      yield put(allActions.authActions.authErrorAction(error));
    }
  }
}

/**
 * Logout user from service
 */
function* logout() {
  console.log('called')
  try {
    const respData = yield API_INSTANCE.post('/logout').then((resp) => resp);
    console.log(respData)
    yield put(allActions.authActions.logoutSuccessAction());
  } catch (error) {
    console.log(error)
    if (error.message === 'Network Error') {
      // eslint-disable-next-line no-alert
      alert('Network error detected.');
    } else if (error?.response?.status === 422) {
      yield put(
        allActions.authActions.authErrorAction(error?.response?.data.message),
      );
    } else {
      yield put(allActions.authActions.logoutSuccessAction());
      yield put(allActions.authActions.authErrorAction(error));
    }
  }
}

function* authSagas() {
  yield takeLatest(actionTypes.AUTH_ACTIONS.LOGIN_REQUEST, login);
  yield takeLatest(actionTypes.AUTH_ACTIONS.LOGOUT_REQUEST, logout);
}
export default authSagas;
