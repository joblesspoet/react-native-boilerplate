import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/index';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root:MAPON',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// let store = createStore(
//   persistedReducer,
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export default () => {
  let store = createStoreWithMiddleware(
    persistedReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  let persistoroBJ = persistStore(store);
  return {store, persistoroBJ};
};
