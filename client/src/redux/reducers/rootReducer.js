import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import usersReducer from './users/userReducer'

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer
})

export default reducer
