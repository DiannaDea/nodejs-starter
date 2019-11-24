import { takeEvery } from 'redux-saga/effects'
import { LOGIN_REQUEST } from '../../actions/auth/types'
import loginSaga from './login'

export default function* auth() {
  yield takeEvery(LOGIN_REQUEST, loginSaga)
}
