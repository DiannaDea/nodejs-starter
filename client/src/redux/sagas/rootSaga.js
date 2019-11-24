import { fork } from 'redux-saga/effects'
import auth from './auth'
import users from './users'

export default function* rootSaga() {
  yield fork(auth)
  yield fork(users)
}
