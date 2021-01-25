import {
  ADD_POST_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS
} from '../action/actionTypes';
import {all, put, takeEvery} from 'redux-saga/effects';

import axios from 'axios';

export function* getPosts(action){

  let posts = '';
  let error = '';
  console.log("Hi from sagaa");
  let response =  axios.get('http://10.0.0.2:3000/news-feed');
  console.log("REsponsee ", response)
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

export function* addPost(action){

  let error = '';
  
  let response =  axios.post('http://10.0.0.2:3000/news-feed', action.payload)

  .then(function (response) {
    console.log("hello ")
    // handle success
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    error = error
  })
  .then(function () {
    // always executed
    
  });
  if(error){
    yield put({
      type: ADD_POST_FAIL,
      payload: error
    })
  }
  else {
    yield put({
      type: ADD_POST_SUCCESS,
    })
  }
 
}


export default function* rootSaga() {
  yield all([
    yield takeEvery(GET_POSTS_REQUEST, getPosts),
    yield takeEvery(ADD_POST_REQUEST, addPost),
  ]);
}
