import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS
} from '../action/actionTypes';
import {all, put, takeEvery} from 'redux-saga/effects';

import axios from 'axios';

export function* signInRequest (action){

  let errorMsg = '';
console.log(action.payload)
  let response = yield axios.post('http://10.0.2.2:3000/login',{
      email: action.payload.username,
      password: action.payload.password})
      .catch((e) => {
    console.log(e.message);
    error = true;
  });

  if(response){
    if(response.status == 200){
      yield put({
        type: LOGIN_REQUEST_SUCCESS,
      })
    }
  }
  else {
    yield put({
      type: LOGIN_REQUEST_FAIL,
      payload: errorMsg
    })
  } 
}


export default function* rootSaga() {
  yield all([
    yield takeEvery(LOGIN_REQUEST, signInRequest),
  ]);
}
