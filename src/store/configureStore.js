import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import AsyncStorage from '@react-native-community/async-storage'
import FSStorage from 'redux-persist-fs-storage';
import createSagaMiddleware from 'redux-saga';
import authSagas from '../sagas/auth.saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: FSStorage(),
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__(),
);
sagaMiddleware.run(authSagas);
export default () => {
  let persistor = persistStore(store);
  return {store, persistor};
};
