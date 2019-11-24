import { takeEvery } from 'redux-saga/effects'
import {
  GET_USERS_REQUEST
} from '../../actions/users/types'
import getUsersSaga from './getUsers'

export default function* spooler() {
  yield takeEvery(GET_USERS_REQUEST, getUsersSaga)
}
