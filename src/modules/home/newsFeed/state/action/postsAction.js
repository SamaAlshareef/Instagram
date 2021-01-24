import {
  GET_POSTS_REQUEST,
} from './actionTypes';

export const getPosts = () =>{
  console.log("action posts");
  return{
    type: GET_POSTS_REQUEST
  }
}