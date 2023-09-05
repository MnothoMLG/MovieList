import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
  fetchAllDataSuccess,
  fetchAllDataRequest,
  fetchAllDataError,
} from './actions';
import { client } from 'src/api/api';
import { apiPaths } from 'src/config/api';
import { DataResult } from './types';

export function* fetchAll() {
  try {
    const dataFetchResponse: AxiosResponse<DataResult> = yield call(() =>
      client.get(apiPaths.DATA)
    ); //for loader

    yield delay(2000);
    const {
      page: {
        'content-items': { content },
        title,
        ...rest
      },
    } = dataFetchResponse.data;
    const page = rest['page-num-requested'];
    yield put(fetchAllDataSuccess({ data: dataFetchResponse.data }));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put(fetchAllDataError({ error }));

    console.log('the error ', { error });
  }
}

export function* watchDataSagas() {
  yield takeLatest(fetchAllDataRequest.type, fetchAll);
}
