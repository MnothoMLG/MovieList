import { AxiosResponse } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { authClient } from '../../api/api';
import {
  getAccessTokenRequest,
  getAccessTokenError,
  getAccessTokenSuccess,
} from './actions';
import { TokenFetchPayload } from './types';
import { storeTokensInStorage } from '@util/auth';

export function* getAccessToken({
  payload,
}: {
  payload: TokenFetchPayload;
  type: string;
}) {
  try {
    const response: AxiosResponse<any> = yield call(() =>
      authClient.post('/customers/v1/token', payload)
    );
    if (response.data) {
      const { access_token, refresh_token, id_token } = response.data;
      yield call(() =>
        storeTokensInStorage({ access_token, refresh_token, id_token })
      );
      yield put(getAccessTokenSuccess());
    }
  } catch (err) {
    yield put(getAccessTokenError({ err }));
  }
}

export function* watchAuthSagas() {
  yield takeLatest(getAccessTokenRequest.type, getAccessToken);
}
