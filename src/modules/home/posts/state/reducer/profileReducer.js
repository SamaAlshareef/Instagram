import {
  GET_MY_POSTS_FAIL,
  GET_MY_POSTS_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS
}
from '../action/actionTypes';

import { act } from 'react-test-renderer';

const initialState = { 
  name:'',
  email:'',
  age:'',
  error:false,
  loading:true,
  myPosts:'',
  postsError:false
}

const profileReducer = (state =initialState, action) => {
 switch(action.type){
   case GET_PROFILE:
    let newState  = {...initialState};
    newState.loading = true
    return { 
      ...state,
      newState
    }
  case GET_PROFILE_SUCCESS:
    const {name,age,email}  = action.payload[0];
    const profile= {...initialState};
    profile["name"]= name;
    profile["age"]= age;
    profile["email"]= email;
    return {
      ...profile
    }
  case GET_PROFILE_FAIL:
    const errorState = {...initialState};
    errorState.error = true;
    return {
      ...errorState
    }
  case GET_MY_POSTS_SUCCESS:
    return {
    ...state,
    myPosts:action.payload
   }
   case GET_MY_POSTS_FAIL:
    return {
    ...state,
    postsError:action.payload
   }
  default:
    return {...state};
 }
}

export default profileReducer;