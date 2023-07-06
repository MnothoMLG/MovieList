import { createAction } from '@reduxjs/toolkit';
import { TokenFetchPayload } from './types';
import { DiscoveryDocument } from 'expo-auth-session';
import { BillingType, IOrderType } from '@constants/types';

export const flaggedUserLoggedIn = createAction<{ onBoarded: boolean }>(
  '@AUTH/SET_USER_SIGNED_IN'
);

export const logUserOut = createAction('@AUTH/LOG_USER_OUT');

export const setUserOrderType = createAction<{
  orderType: IOrderType;
}>('@AUTH/SET_ORDER_TYPE');

export const setBillingType = createAction<{
  billingType: BillingType;
}>('@AUTH/SET_BILLING_TYPE');

export const GET_ACCESS_TOKEN_LOADING_KEY = '@AUTH/GET_ACCESS_TOKEN';
export const getAccessTokenRequest = createAction<TokenFetchPayload>(
  '@AUTH/GET_ACCESS_TOKEN_API_REQUEST'
);
export const getAccessTokenSuccess = createAction(
  '@AUTH/GET_ACCESS_TOKEN_API_SUCCESS'
);
export const getAccessTokenError = createAction<{}>(
  '@AUTH/GET_ACCESS_TOKEN_API_ERROR'
);

export const storeDiscoveryDoc = createAction<{
  discoveryDoc: DiscoveryDocument;
}>('@AUTH/KEEP_REVOCATION_URL');
