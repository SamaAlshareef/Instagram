import {
  ADD_POST_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "../action/actionTypes";
import { all, put, takeEvery } from "redux-saga/effects";

import axios from "axios";

export function* getPosts(action) {
  let posts = "";
  let error = "";
  console.log("Hi from sagaa");

  let response = yield axios
    .get("http://10.0.2.2:3000/news-feed")
    .catch((e) => {
      console.log(e);
      error = true;
    });

  // console.log("Responseeee: ", JSON.stringify(response.data));

  if (response) {
    if (response.status == 200) {
      posts = response.data;
      yield put({
        type: GET_POSTS_SUCCESS,
        payload: posts,
      });
    }
  } else {
    error = true;
    yield put({
      type: GET_POSTS_FAIL,
      payload: error,
    });
  }
}

export function* addPost(action) {
  let error = "";

  console.log("Action to add a post ", action.payload)
  let response = yield axios
    .post("http://10.0.2.2:3000/news-feed", action.payload)
    .catch((e) => {
      console.log(e.message);
      error = true;
    });

  if (response) {
    if (response.status == 200) {
      yield put({
        type: ADD_POST_SUCCESS,
      });
    } else {
      yield put({
        type: ADD_POST_FAIL,
        payload: error,
      });
    }
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(GET_POSTS_REQUEST, getPosts),
    takeEvery(ADD_POST_REQUEST, addPost),
  ]);
}
