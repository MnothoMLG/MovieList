import { takeLatest, put, delay } from 'redux-saga/effects';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  signUserUpError,
  signUserUpRequest,
  signUserUpSuccess,
} from './actions';
import { errorCodes } from '../../constants';
import { notify } from '../../util';

const auth = getAuth();
export function* signUp({
  payload,
}: {
  payload: { name: string; email: string };
  type: string;
}) {
  try {
    const { name, email } = payload;

    yield delay(3000); //for loader

    const userCredential: { user: any } = yield createUserWithEmailAndPassword(
      auth,
      email,
      name
    ); //use name as password :-|

    console.log('response from user creation', { userCredential });

    if (userCredential.user) {
      yield put(signUserUpSuccess({ onBoarded: true }));
      // notify({ type: 'success', message: 'Signed up successfully! 😊' });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('error here ==>', { error });
    yield put(signUserUpError({ error }));
    if (error?.code === errorCodes.EMAIL_IN_USE) {
      console.log('show toast');
      // notify({ type: 'error', message: 'That email is already signed up' });
    }
  }
}

export function* watchAuthSagas() {
  yield takeLatest(signUserUpRequest.type, signUp);
}
