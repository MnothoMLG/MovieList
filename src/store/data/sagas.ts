import { takeLatest, put, call, delay, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
  fetchAllDataSuccess,
  fetchAllDataRequest,
  fetchAllDataError,
} from './actions';
import { client } from 'src/api/api';
import { apiPaths } from 'src/config/api';
import { DataResult } from './types';
import { getCurrentPage } from './selectors';

export function* fetchAll() {
  try {
    const currentPage: string = yield select(getCurrentPage);

    console.log({ currentPage });
    const dataFetchResponse: AxiosResponse<DataResult> = yield call(() =>
      client.get(apiPaths.DATA.replace('{0}', currentPage ?? '1'))
    );

    yield delay(2000); //for loader
    yield put(fetchAllDataSuccess({ ...dataFetchResponse }));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put(fetchAllDataError({ error }));

    console.log('the error ', { error });
  }
}

export function* watchDataSagas() {
  yield takeLatest(fetchAllDataRequest.type, fetchAll);
}
