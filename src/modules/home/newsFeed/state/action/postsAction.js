import {
  GET_POSTS_REQUEST,
} from './actionTypes';

export const getPosts = () =>{
  return{
    type: GET_POSTS_REQUEST
  }
}