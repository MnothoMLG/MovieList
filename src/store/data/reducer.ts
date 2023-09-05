import { createReducer } from '@reduxjs/toolkit';
import { fetchAllDataSuccess } from './actions';
import { DataState } from './types';

const INITIAL_STATE: DataState = {
  data: {
    page: {
      'content-items': {
        content: [],
      },
      title: '',
      'total-content-items': 0,
      'page-num-requested': 1,
      'page-size-requested': 0,
      'page-size-returned': 0,
    },
  },
};

export const dataReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(fetchAllDataSuccess, (state, action) => ({
    ...state,
    ...action.payload,
  }));
});
