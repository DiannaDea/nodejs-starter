import { put, call } from 'redux-saga/effects'
import { updateUserSuccess, updateUserError } from '../../actions/users/usersActions'
import requestAPI from '../../../utils/requestAPI'

export default function* updateUser({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: `http://localhost:5000/api/users/${payload.userId}`,
      method: 'PUT',
      data: payload.updateParams,
      isProtected: true
    })

    const {
      data: updatedUser
    } = response

    yield put(updateUserSuccess({
      userId: payload.userId,
      updatedUser
    }))
  } catch (error) {
    yield put(updateUserError(error))
  }
}
