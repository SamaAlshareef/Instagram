import { combineReducers } from 'redux';
import loginReducer from './modules/login/state/reducer/loginReducer';
import postsReducer from './modules/home/newsFeed/state/reducer/postsReducer';
import profileReducer from './modules/home/posts/state/reducer/profileReducer';

export const rootReducer = combineReducers({
  loginReducer,
  postsReducer,
  profileReducer
}
);