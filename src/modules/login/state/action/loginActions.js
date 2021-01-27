import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS
}
from './actionTypes';

export const loginRequest = (payload) => {

  return{
    type:LOGIN_REQUEST,
    payload
  }
}