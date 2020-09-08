import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import api from '../../network/apis';
import { setToken } from '../actions/token';
import { loader } from '../actions/Loader';
import { GET_TOKEN, UNSET_TOKEN } from '../types';

export function* getToken() {
  try {
    yield put(loader(true));
    const response = yield call(api.getToken);
    yield put(loader(false));
    localStorage.setItem('token', response.value);
    yield put(setToken(response.value));
  } catch (err) {
    console.log(err.response.data);
    yield put(loader(false));
  }
}

export function* unsetToken() {
  localStorage.removeItem('token');
}

export function* tokenRootSaga() {
  yield takeEvery(GET_TOKEN, getToken);
  yield takeEvery(UNSET_TOKEN, unsetToken);
}
