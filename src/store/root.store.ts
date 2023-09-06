import createSagaMiddleware from 'redux-saga';

import storage from 'redux-persist/lib/storage';

import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './root.reducer';
import sagas from './root.saga';

//persist only the onBoarded auth reducer field
const config = {
  key: 'root',
  storage,
  debug: true,
};

const persistedReducers = persistReducer(config, reducers);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: [sagaMiddleware],
});

const persistor = persistStore(store);
sagaMiddleware.run(sagas);

// persistor.purge();

export { persistor, store };
