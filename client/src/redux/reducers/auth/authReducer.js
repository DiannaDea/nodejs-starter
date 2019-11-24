import initialState from '../../store/initialState'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from '../../actions/auth/types'
import { decodeUserFromToken } from '../../../utils/tokenManagement'

export default (state = initialState.auth, action = {}) => {
  const { type } = action

  const typeToFunc = {
    [LOGIN_REQUEST]: () => ({
      ...state,
      isFetching: true
    }),
    [LOGIN_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      user: decodeUserFromToken(action.payload.token),
      token: action.payload.token,
      error: null
    }),
    [LOGIN_ERROR]: () => ({
      ...state,
      isFetching: false,
      error: action.payload
    }),
    [LOGOUT]: () => ({
      ...state,
      user: null,
      token: null,
      error: null
    })
  }

  const actionHandler = typeToFunc[type] || (() => state)
  return actionHandler()
}
