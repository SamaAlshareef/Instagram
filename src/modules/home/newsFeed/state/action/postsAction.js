import {
  ADD_POST_REQUEST,
  GET_POSTS_REQUEST
} from './actionTypes';

export const getPosts = () =>{
  console.log("helllloooo posts")
  return{
    type: GET_POSTS_REQUEST
  }
}

export const addPost = (payload) =>{
  console.log("helllloooo ADD  posts")
  return{
    type: ADD_POST_REQUEST,
    payload
  }
}