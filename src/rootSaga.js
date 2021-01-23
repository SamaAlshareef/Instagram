import { all } from 'redux-saga/effects';
import loginSaga from './modules/login/state/saga/loginSaga';

export default function* rootSaga(getState) {
	yield all([
    loginSaga()
	]);
}