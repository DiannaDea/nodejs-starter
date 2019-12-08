import initialState from '../../store/initialState'
import {
  GET_GROUP_USERS_REQUEST,
  GET_GROUP_USERS_SUCCESS,
  GET_GROUP_USERS_ERROR
} from '../../actions/groups/types'

export default (state = initialState.groups, action = {}) => {
  const { type } = action

  const typeToFunc = {
    [GET_GROUP_USERS_REQUEST]: () => ({
      ...state,
      isFetching: true
    }),
    [GET_GROUP_USERS_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      groupUsers: action.payload.groupUsers,
      error: null
    }),
    [GET_GROUP_USERS_ERROR]: () => ({
      ...state,
      isFetching: false,
      error: action.payload
    }),
  }

  const actionHandler = typeToFunc[type] || (() => state)
  return actionHandler()
}
