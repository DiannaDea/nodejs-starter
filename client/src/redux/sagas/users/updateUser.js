import { put, call } from 'redux-saga/effects'
import { updateUserSuccess, updateUserError } from '../../actions/users/usersActions'
import requestAPI from '../../../utils/requestAPI'

export default function* updateUser({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: `http://localhost:5000/api/users/${payload.userId}`,
      method: 'PATCH',
      data: payload.updateParams,
      isProtected: true
    })

    const {
      data: isUpdated
    } = response

    if (isUpdated) {
      yield put(updateUserSuccess({
        userId: payload.userId,
        user: payload
      }))
    }
  } catch (error) {
    yield put(updateUserError(error))
  }
}
