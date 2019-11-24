import { put, call } from 'redux-saga/effects'
import { loginSuccess, loginError } from '../../actions/auth/authActions'
import requestAPI from '../../../utils/requestAPI'
import { setTokensToLocalstorage } from '../../../utils/tokenManagement'

export default function* login({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: 'http://localhost:5000/auth',
      method: 'POST',
      data: payload,
      isProtected: false
    })

    const {
      data: {
        token
      }
    } = response

    setTokensToLocalstorage(token)

    yield put(loginSuccess({ token }))
  } catch (error) {
    console.log('=====errr', error)
    const {
      response: {
        data: {
          errors
        }
      }
    } = error

    yield put(loginError(errors))
  }
}
