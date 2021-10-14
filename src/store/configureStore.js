import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/index';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root:AppName',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);

  return {store, persistor};
};
