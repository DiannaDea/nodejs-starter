import { takeEvery } from 'redux-saga/effects'
import {
  GET_USERS_REQUEST,
  CREATE_USER_REQUEST
} from '../../actions/users/types'
import getUsersSaga from './getUsers'
import createUserSaga from './createUser'

export default function* spooler() {
  yield takeEvery(GET_USERS_REQUEST, getUsersSaga)
  yield takeEvery(CREATE_USER_REQUEST, createUserSaga)
}
