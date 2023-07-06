import { createReducer } from '@reduxjs/toolkit';
import {
  getAccessTokenSuccess,
  logUserOut,
  setBillingType,
  setUserOrderType,
  storeDiscoveryDoc,
} from './actions';
import { AuthDataState } from './types';
import { BillingType, IOrderType } from '@constants/types';

const INITIAL_STATE: AuthDataState = {
  authenticated: false,
  orderType: IOrderType.COLLECTION,
  billingType: BillingType.ACCOUNT,
};

export const authReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(getAccessTokenSuccess, (state) => ({
      ...state,
      authenticated: true,
    }))
    .addCase(setUserOrderType, (state, action) => {
      if (action.payload) {
        const { payload } = action;
        return { ...state, ...payload };
      }
    })
    .addCase(setBillingType, (state, action) => {
      if (action.payload) {
        const { payload } = action;
        return { ...state, ...payload };
      }
    })
    .addCase(storeDiscoveryDoc, (state, action) => ({
      ...state,
      ...action.payload,
    }))
    .addCase(logUserOut, (state) => {
      return { ...state, ...INITIAL_STATE };
    });
});
