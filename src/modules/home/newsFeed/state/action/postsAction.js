import {
  ADD_POST_REQUEST,
  GET_POSTS_REQUEST
} from './actionTypes';

export const getPosts = () =>{
  return{
    type: GET_POSTS_REQUEST
  }
}

export const addPost = (payload) =>{
  return{
    type: ADD_POST_REQUEST,
    payload
  }
}