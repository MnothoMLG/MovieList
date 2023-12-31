import { createAction } from '@reduxjs/toolkit';
import { DataResult } from './types';

export const FETCH_ALL_LOADING_KEY = '@DATA/FETCH_ALL_DATA';
export const fetchAllDataRequest = createAction<{ page?: number }>(
  '@DATA/FETCH_ALL_DATA_API_REQUEST'
);

export const fetchAllDataError = createAction<{ error: unknown }>(
  '@DATA/FETCH_ALL_DATA_API_ERROR'
);

export const fetchAllDataSuccess = createAction<{
  data: DataResult;
}>('@DATA/FETCH_ALL_DATA_API_SUCCESS');
