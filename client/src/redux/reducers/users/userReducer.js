import initialState from '../../store/initialState'
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from '../../actions/users/types'

export default (state = initialState.users, action = {}) => {
  const { type } = action

  const typeToFunc = {
    [GET_USERS_REQUEST]: () => ({
      ...state,
      isFetching: true
    }),
    [GET_USERS_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: action.payload.users,
      error: null
    }),
    [GET_USERS_ERROR]: () => ({
      ...state,
      isFetching: false,
      data: [],
      error: action.payload
    })
  }

  const actionHandler = typeToFunc[type] || (() => state)
  return actionHandler()
}
