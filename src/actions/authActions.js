import * as actionTypes from '../constants/index';

const setUser = (userObj) => {
  return {
    type: actionTypes.AUTH_ACTIONS.SET_USER,
    payload: userObj,
  };
};

const loginSuccess = (loginObj) => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_SUCCESS,
    payload: loginObj,
  };
};

const loginRequest = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_REQUEST,
  };
};

const loginError = (error) => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_FAILURE,
    payload: error,
  };
};

const logOut = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGOUT_SUCCESS,
  };
};

const resetAuthValues = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.RESET_AUTH_STATE,
  };
};

export default {
  setUser,
  loginRequest,
  logOut,
  loginError,
  loginSuccess,
  resetAuthValues,
};