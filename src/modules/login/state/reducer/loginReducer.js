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
  error: false
}

const loginReducer = (state =initialState, action) => {
 switch(action.type){
   case LOGIN_REQUEST:
    let newState  = {...initialState};
    newState.username = action.payload.username;
    newState.password = action.payload.password;
    return { 
      ...state,
      newState
    }
  case LOGIN_REQUEST_SUCCESS:
    const signedInState  = {...state};
    signedInState.loggedIN = true;
    return {
      ...state,
      signedInState
    }
  case LOGIN_REQUEST_FAIL:
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

export default loginReducer;