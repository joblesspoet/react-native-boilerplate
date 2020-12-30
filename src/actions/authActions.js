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

const loginRequestAction = (data) => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_REQUEST,
    payload: data,
  };
};

const authErrorAction = (error) => {
  return {
    type: actionTypes.AUTH_ACTIONS.AUTH_FAILURE,
    payload: error,
  };
};

const logOutAction = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGOUT_REQUEST,
  };
};

const logoutSuccessAction = (loginObj) => {
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
  authErrorAction,
  loginSuccessAction,
  resetAuthValuesAction,
  logoutSuccessAction,
};