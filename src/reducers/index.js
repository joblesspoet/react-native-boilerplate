import {combineReducers} from 'redux';

import authReduicer from './authReducers';

const appReducer = combineReducers({
  auth: authReduicer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
