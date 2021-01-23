import { combineReducers } from 'redux';
import loginReducer from './modules/login/state/reducer/loginReducer';
import postsReducer from './modules/home/newsFeed/state/reducer/postsReducer';

console.log("Login  red ", loginReducer)

export const rootReducer = combineReducers({
  loginReducer,
  postsReducer
}
);