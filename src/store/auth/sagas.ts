import { AxiosResponse } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  signUserUpError,
  signUserUpRequest,
  signUserUpSuccess,
} from './actions';
import { errorCodes } from '../../constants';

const auth = getAuth();
export function* signUp({
  payload,
}: {
  payload: { name: string; email: string };
  type: string;
}) {
  try {
    const { name, email } = payload;

    const userCredential: { user: any } = yield createUserWithEmailAndPassword(
      auth,
      email,
      name
    ); //use name as password :-|
    console.log('response from user creation', { userCredential });

    if (userCredential.user) {
      yield put(signUserUpSuccess({ onBoarded: true }));
    }
  } catch (error: any) {
    yield put(signUserUpError({ error }));
    if (error?.code === errorCodes.EMAIL_IN_USE) {
      //show Flash
    }
  }
}

export function* watchAuthSagas() {
  yield takeLatest(signUserUpRequest.type, signUp);
}
