import * as actionTypes from '../constants/index';

const setUserAction = (userObj) => {
  return {
    type: actionTypes.AUTH_ACTIONS.SET_USER,
    payload: userObj,
  };
};

const loginSuccessAction = (loginObj) => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_SUCCESS,
    payload: loginObj,
  };
};

const loginRequestAction = (payload) => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_REQUEST,
    payload: payload,
  };
};

const loginErrorAction = (error) => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_FAILURE,
    payload: error,
  };
};

const logOutAction = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGOUT_SUCCESS,
  };
};

const resetAuthValuesAction = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.RESET_AUTH_STATE,
  };
};

export default {
  setUserAction,
  loginRequestAction,
  logOutAction,
  loginErrorAction,
  loginSuccessAction,
  resetAuthValuesAction,
};