import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import usersReducer from './users/userReducer'
import groupsReducer from './groups/groupsReducer'

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  groups: groupsReducer,
})

export default reducer
