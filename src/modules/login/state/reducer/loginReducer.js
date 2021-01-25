import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS
}
from '../action/actionTypes';

const initialState = { 
  username: '',
  password: '',
  loggedIN:false,
  error: false, 
  laoding : false
}

const loginReducer = (state =initialState, action) => {
 switch(action.type){
   case LOGIN_REQUEST:
    let newState  = {...initialState};
    newState.username = action.payload.username;
    newState.password = action.payload.password;
    return { 
      ...state,
      newState,
      loading: true
    }
  case LOGIN_REQUEST_SUCCESS:
    const signedInState  = {...state};
    signedInState.loggedIN = true;
    return {
      ...state,
      signedInState, 
      loading:false
    }
  case LOGIN_REQUEST_FAIL:
    return {
      ...initialState,
      error:true,
      loading:false
    }
  default:
    return {...state};
 }
}

export default loginReducer;