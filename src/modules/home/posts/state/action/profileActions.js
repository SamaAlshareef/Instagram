import {
  GET_MY_POSTS_REQUEST,
  GET_PROFILE
} from './actionTypes';

export const getProfile = () =>{
  return{
    type:  GET_PROFILE
  }
}

export const getMyPosts = () =>{
  return{
    type:   GET_MY_POSTS_REQUEST
  }
}