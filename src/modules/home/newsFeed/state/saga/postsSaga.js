import {all, put, takeEvery} from 'redux-saga/effects';

import {
  GET_POSTS_REQUEST
} from '../action/actionTypes';

export function* getPosts (action){
  axios.get('localhost:3000/posts')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


export default function* rootSaga() {
  yield all([
    yield takeEvery(GET_ALL_DOCTORS, getAllDoctorsRequest),
  ]);
}
