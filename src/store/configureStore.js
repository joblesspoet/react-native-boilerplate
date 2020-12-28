import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import AsyncStorage from '@react-native-community/async-storage'
import FSStorage from 'redux-persist-fs-storage';

const persistConfig = {
  key: 'root',
  storage: FSStorage(),
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
