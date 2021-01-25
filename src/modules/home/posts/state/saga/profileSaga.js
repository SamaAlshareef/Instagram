import {
  GET_MY_POSTS_FAIL,
  GET_MY_POSTS_REQUEST,
  GET_MY_POSTS_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS
} from '../action/actionTypes';
import {all, put, takeEvery} from 'redux-saga/effects';

import {GET_POSTS_FAIL} from '../../../newsFeed/state/action/actionTypes';
import axios from 'axios';

export function* getProfile (action){

  let profileDetails = '';
  let error = '';
  console.log("Hi from Profile sagaa")
  let response = axios
  ({
    method: 'get',
    url: 'http://192.168.1.121:3000/profile'})
  .then(function (response) {
    console.log("hello ")
    // handle success
    profileDetails = response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    error = error
  })
  
  if( response.success){
    yield put({
      type: GET_PROFILE_SUCCESS,
      payload: profileDetails
    })
  }
  else {
    yield put({
      type: GET_PROFILE_FAIL,
      payload: error
    })
  }
}

export function* getMyPosts (action){

  let myPosts = '';
  let error = '';
  console.log("Hi from My posts sagaa")
  let response = axios
  ({
    method: 'get',
    url: 'http://192.168.1.121:3000/posts'})
  .then(function (response) {
    console.log("hello ")
    // handle success
    myPosts = response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    error = error
  })
  
  if( response.success){
    yield put({
      type: GET_MY_POSTS_SUCCESS,
      payload: myPosts
    })
  }
  else {
    yield put({
      type: GET_MY_POSTS_FAIL,
      payload: error
    })
  }
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(GET_PROFILE, getProfile),
    yield takeEvery(GET_MY_POSTS_REQUEST, getMyPosts),
  ]);
}
