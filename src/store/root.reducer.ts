import { combineReducers } from '@reduxjs/toolkit';
import { loadingReducer } from './loading/reducer';
import { authReducer } from './auth/reducer';

export const reducers = combineReducers({
  authReducer,
  loadingReducer,
});

export type AppState = ReturnType<typeof reducers>;
