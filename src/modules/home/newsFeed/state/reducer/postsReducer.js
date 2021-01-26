import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS
}
from '../action/actionTypes';

const initialState = { 
  posts:'',
  loading:true,
  error:false,
  postAdded:false
}

const postsReducer = (state =initialState, action) => {
 switch(action.type){
   case GET_POSTS_REQUEST:
    let newState  = {...initialState};
    newState.loading = true
    return { 
      ...newState
    }
  case GET_POSTS_SUCCESS:
    const postsState  = {...state};
    postsState.posts = action.payload;
    return {
      ...postsState
    }
  case GET_POSTS_FAIL:
    const errorState = {...initialState};
    errorState.error = true;
    return {
      ...errorState
    }
    case ADD_POST_SUCCESS:
      const postAddedState = {...state};
      postAddedState.postAdded = true;
      return {
        ...postAddedState
      }
  default:
    return {...state};
 }
}

export default postsReducer;