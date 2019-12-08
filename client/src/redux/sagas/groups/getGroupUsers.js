import { put, call } from 'redux-saga/effects'
import { getGroupUsersSuccess, getGroupUsersError } from '../../actions/groups/groupActions'
import requestAPI from '../../../utils/requestAPI'

export default function* getGroupUsers({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: `http://localhost:5000/api/groups/${payload.groupId}/users`,
      method: 'GET',
      isProtected: true
    })

    const {
      data: groupUsers
    } = response

    yield put(getGroupUsersSuccess({ groupUsers }))
  } catch (error) {
    const {
      response: {
        data: {
          errors
        }
      }
    } = error

    yield put(getGroupUsersError(errors))
  }
}
