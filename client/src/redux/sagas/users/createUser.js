import { put, call } from 'redux-saga/effects'
import { createUserSuccess, createUserError } from '../../actions/users/usersActions'
import requestAPI from '../../../utils/requestAPI'

export default function* getJobs({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: 'http://localhost:5000/api/users',
      method: 'POST',
      data: payload,
      isProtected: true
    })

    const {
      data: user
    } = response

    yield put(createUserSuccess({user}))
  } catch (error) {
    yield put(createUserError(error))
  }
}
