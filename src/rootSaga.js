import { all } from 'redux-saga/effects';
import loginSaga from './modules/login/state/saga/loginSaga';
import postsSaga from './modules/home/newsFeed/state/saga/postsSaga';
import profileSaga from './modules/home/posts/state/saga/profileSaga';

export default function* rootSaga(getState) {
	yield all([
		loginSaga(),
		postsSaga(),
		profileSaga()
	]);
}