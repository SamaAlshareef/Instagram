import {
  GET_MY_POSTS_REQUEST,
  GET_PROFILE
} from './actionTypes';

export const getProfile = () =>{
  console.log("GETTING PROFILE")
  return{
    type:  GET_PROFILE
  }
}

export const getMyPosts = () =>{
  console.log("GETTING MY POSTSS")
  return{
    type:   GET_MY_POSTS_REQUEST
  }
}