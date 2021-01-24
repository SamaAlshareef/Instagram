import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS
} from '../action/actionTypes';
import {all, put, takeEvery} from 'redux-saga/effects';

import axios from 'axios';

export function* getPosts (action){

  let posts = '';
  let error = '';
  console.log("Hi from sagaa")
  let response = axios
  .get('http://192.168.1.7:3000/posts')
  .then(function (response) {
    console.log("hello ")
    // handle success
    posts = response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    error = error
  })
  .then(function () {
    // always executed
    console.log("What noww")
    
  });
  if(posts != ''){
    yield put({
      type: GET_POSTS_SUCCESS,
      payload: posts
    })
  }
  else {
    yield put({
      type: GET_POSTS_FAIL,
      payload: error
    })
  }
 
}


export default function* rootSaga() {
  yield all([
    yield takeEvery(GET_POSTS_REQUEST, getPosts),
  ]);
}
