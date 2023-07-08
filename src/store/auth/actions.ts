import { createAction } from '@reduxjs/toolkit';

export const SIGN_UP_LOADING_KEY = '@AUTH/SIGN_USER_UP';
export const signUserUpRequest = createAction<{ name: string; email: string }>(
  '@AUTH/SIGN_USER_UP_API_REQUEST'
);

export const signUserUpError = createAction<{ error: any }>(
  '@AUTH/SIGN_USER_UP_API_ERROR'
);

export const signUserUpSuccess = createAction<{ onBoarded: boolean }>(
  '@AUTH/SIGN_USER_UP_API_SUCCESS'
);
