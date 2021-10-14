import React, {Node, useEffect} from 'react';
import Routes from './Routes';

import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {API_INTERCEPTOR} from './src/config/connection';

const {store, persistoroBJ} = configureStore();

const App: () => Node = () => {
  useEffect(() => {
    const applyInterceptors = async () => {
      await API_INTERCEPTOR(store);
    };

    applyInterceptors();
  }, []);

  return (
    <>
      <React.Suspense fallback="<div>Please Wait.....</div>">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistoroBJ}>
            <Routes />
          </PersistGate>
        </Provider>
      </React.Suspense>
    </>
  );
};

export default App;
