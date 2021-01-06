import * as actionTypes from '../constants/index';

const setUser = (userObj) => {
  return {
    type: actionTypes.AUTH_ACTIONS.SET_USER,
    payload: userObj,
  };
};

const loginRequest = () => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_REQUEST,
  };
};

const loginSuccess = (loginObj) => {
  return {
    type: actionTypes.AUTH_ACTIONS.LOGIN_SUCCESS,
    payload: loginObj,
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

const doUserLogin = (email, password) => {  
  console.log(email, password)  
  return async (dispatch, getState) => {
    await console.log(getState())
  }
  // return async dispatch => {

  //     dispatch(loginSuccess({
  //       access_token: 'asdfasdf sdfasdf',
  //       user: {
  //         name: email,
  //         email: email
  //       }
  //     }));
  //     // try {
          
  //     // } catch (error) {
  //     //     dispatch(loginError(error));
  //     // }
  // }
}
export default {
  setUser,
  loginRequest,
  logOut,
  loginError,
  loginSuccess,
  resetAuthValues,
  doUserLogin
};