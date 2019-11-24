import { put, call } from 'redux-saga/effects'
import { getUsersSuccess, getUsersError } from '../../actions/users/usersActions'
import requestAPI from '../../../utils/requestAPI'

const { REACT_APP_MAPPING_REST_API_URL: MAPPING_REST_API_URL } = process.env

export default function* getJobs({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: `${MAPPING_REST_API_URL}/api/spooler/v1/jobs`,
      method: 'GET',
      params: payload,
      isProtected: true
    })

    const {
      data: {
        result: jobs
      }
    } = response

    yield put(getUsersSuccess(jobs))
  } catch (error) {
    yield put(getUsersError(error))
  }
}
