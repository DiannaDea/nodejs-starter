import { put, call } from 'redux-saga/effects'
import { getUsersSuccess, getUsersError } from '../../actions/users/usersActions'
import requestAPI from '../../../utils/requestAPI'

export default function* getJobs({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: 'http://localhost:5000/api/users',
      method: 'GET',
      params: payload,
      isProtected: true
    })

    const {
      data: users
    } = response

    yield put(getUsersSuccess({users}))
  } catch (error) {
    yield put(getUsersError(error))
  }
}
