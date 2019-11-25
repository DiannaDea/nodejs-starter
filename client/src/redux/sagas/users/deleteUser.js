import { put, call } from 'redux-saga/effects'
import { deleteUserSuccess, deleteUserError } from '../../actions/users/usersActions'
import requestAPI from '../../../utils/requestAPI'

export default function* deleteUser({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: `http://localhost:5000/api/users/${payload.userId}`,
      method: 'DELETE',
      isProtected: true
    })

    const {
      data: isDeleted
    } = response

    if (isDeleted) {
      yield put(deleteUserSuccess({userId: payload.userId}))
    }
  } catch (error) {
    yield put(deleteUserError(error))
  }
}
