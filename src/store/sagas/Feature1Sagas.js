import { call, put } from 'redux-saga/effects';
import api from '../../network/apis';
import * as ACTIONS from '../actions/Feature1';
import { takeEvery } from 'redux-saga/effects';
import * as types from '../types/Feature1Types';

export function* feature1Saga() {
  try {
    const response = yield call(api.apiExampleRequest);
    yield put(ACTIONS.feature1ActionReceive(response.data));
  } catch (err) {
    console.log(err.response.data);
  }
}

export function* saga1() {
  yield takeEvery(types.GET_DATA_REQUEST, feature1Saga);
}
