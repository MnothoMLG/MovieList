import { combineReducers } from '@reduxjs/toolkit';
import { loadingReducer } from './loading/reducer';
import { dataReducer } from './data/reducer';

export const reducers = combineReducers({
  dataReducer,
  loadingReducer,
});

export type AppState = ReturnType<typeof reducers>;
