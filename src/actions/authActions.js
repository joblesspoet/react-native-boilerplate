import {API_INSTANCE, API_ROUTES} from '../config/connection';
import * as actionTypes from '../constants/index';

export const setUser = (userObj) => {
  return {
    type: actionTypes.AUTH_ACTIONS.SET_USER,
    payload: userObj,
  };
};

export const loginSuccess = (loginObj) => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_SUCCESS,
    payload: loginObj,
  };
};

export const loginRequest = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_REQUEST,
  };
};

export const loginError = (error) => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_FAILURE,
    payload: error,
  };
};

export const refreshToken = (token) => {
  return {
    type: actionTypes.AUTH_ACTIONS.REFRESH_TOKEN,
    payload: token,
  };
};

export const logOut = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGOUT_SUCCESS,
  };
};

export const logoutError = (error) => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGOUT_FAILURE,
    payload: error,
  };
};

export const resetAuthValues = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.RESET_AUTH_STATE,
  };
};

export const changeLocale = (locale) => {
  return {
    type: actionTypes.AUTH_ACTIONS.LANGUAGE_UPDATE,
    payload: locale,
  };
};

export const setInviteCode = (invite_code) => {
  return {
    type: actionTypes.AUTH_ACTIONS.VALIDATE_INVITECODE_REQUEST,
    payload: invite_code,
  };
};

export const onInviteSuccess = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.INVITECODE_SUCCESS,
  };
};

export const onInviteFail = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.INVITECODE_FAIL,
  };
};

export const setSMSCode = (sms_code) => {
  return {
    type: actionTypes.AUTH_ACTIONS.VALIDATE_SMSCODE_REQUEST,
    payload: sms_code,
  };
};

export const onSMSSuccess = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.SMSCODE_SUCCESS,
  };
};

/**
 * login user action.
 * @param {string} userEmail user email
 * @param {string} userPassword user password
 * @returns
 */
export const loginUser = (userEmail, userPassword) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    const obj = {
      method: 'POST',
      url: API_ROUTES.AUTH_ACTIONS.LOG,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: userEmail,
        password: userPassword,
      },
    };

    await API_INSTANCE(obj)
      .then((resp) => {
        console.log('login success: ');
        dispatch(loginSuccess(resp));
      })
      .catch((error) => {
        console.log('Error in login: ', error);
        dispatch(loginError(error.response));
      });
  };
};
