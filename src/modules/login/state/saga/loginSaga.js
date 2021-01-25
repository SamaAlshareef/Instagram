import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS
} from '../action/actionTypes';
import {all, put, takeEvery} from 'redux-saga/effects';

import axios from 'axios';

export function* signInRequest (action){

  let errorMsg = '';

  let response = axios({
    method: 'post',
    url: '/localhost/login',
    data: {
      email: 'Fred',
      password: 'Flintstone'
    }
  })
  .then(function (response) {
    console.log("Response ", response.data);
  })
  .catch(function (error) {
    // handle error

    errorMsg = error
  })
  .then(function () {
   
    
  });
  if(errorMsg != ''){
    yield put({
      type: LOGIN_REQUEST_SUCCESS,
    })
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
