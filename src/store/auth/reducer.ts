import { createReducer } from '@reduxjs/toolkit';
import { signUserUpSuccess } from './actions';
import { AuthDataState } from './types';

const INITIAL_STATE: AuthDataState = {
  onBoarded: false,
};

export const authReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(signUserUpSuccess, (state, action) => ({
    ...state,
    ...action.payload,
  }));
});
