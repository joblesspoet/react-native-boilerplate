import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import API_INSTANCE from '../config/connection';
import * as actionTypes from '../constants/index';

/**
 * Login user
 * @param {user email address} email
 * @param {string password} password
 */
function* login() {
  // eslint-disable-next-line no-alert
  alert('called');
  // try {
  //   const response = yield API_INSTANCE.post('/auth/login', {
  //     email: email,
  //     password: password,
  //   }).then((resp) => resp);
  //   yield put(loginSuccessAction(response));
  // } catch (error) {
  //   yield put(authErrorAction(error));
  // }
}

/**
 * Logout user from service
 */
function* logout() {
  // try {
  //   const response = yield API_INSTANCE.post('/auth/logout').then(
  //     (resp) => resp,
  //   );
  //   yield put(logOutAction);
  // } catch (error) {
  //   yield put(authErrorAction(error));
  // }
}

function* authSagas() {
  yield takeEvery(actionTypes.AUTH_ACTIONS.LOGIN_REQUEST, login);
}
export default authSagas;
