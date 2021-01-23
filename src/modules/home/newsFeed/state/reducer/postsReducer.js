import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS
}
from '../action/actionTypes';

const initialState = { 
  posts:'',
  loading:true,
  error:false,
}

const postsReducer = (state =initialState, action) => {
 switch(action.type){
   case GET_POSTS_REQUEST:
    let newState  = {...initialState};
    newState.loading = true
    return { 
      ...state,
      newState
    }
  case GET_POSTS_SUCCESS:
    const postsState  = {...state};
    postsState.posts = action.payload;
    return {
      ...state,
      postsState
    }
  case GET_POSTS_FAIL:
    const errorState = {...initialState};
    errorState.error = true;
    return {
      ...state,
      errorState
    }
  default:
    return {...state};
 }
}

export default postsReducer;