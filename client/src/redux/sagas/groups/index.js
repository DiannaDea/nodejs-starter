import { takeEvery } from 'redux-saga/effects'
import { GET_GROUP_USERS_REQUEST } from '../../actions/groups/types'
import getGroupUsersSaga from './getGroupUsers'

export default function* groups() {
  yield takeEvery(GET_GROUP_USERS_REQUEST, getGroupUsersSaga)
}
