import initialState from '../../store/initialState'
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  SET_CUR_USER
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
    }),
    [CREATE_USER_REQUEST]: () => ({
      ...state,
      isFetching: true
    }),
    [CREATE_USER_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: [...state.data, action.payload.user],
      error: null
    }),
    [CREATE_USER_ERROR]: () => ({
      ...state,
      isFetching: false,
      error: action.payload
    }),
    [SET_CUR_USER]: () => ({
      ...state,
      curUser: action.payload.curUser
    })
  }

  const actionHandler = typeToFunc[type] || (() => state)
  return actionHandler()
}
