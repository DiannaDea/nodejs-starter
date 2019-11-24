import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  SET_CUR_USER
} from './types'

export const getUsersRequest = (payload = {}) => ({
  type: GET_USERS_REQUEST,
  payload
})

export const getUsersSuccess = (payload = {}) => ({
  type: GET_USERS_SUCCESS,
  payload
})

export const getUsersError = (payload = {}) => ({
  type: GET_USERS_ERROR,
  payload
})

export const createUserRequest = (payload = {}) => ({
  type: CREATE_USER_REQUEST,
  payload
})

export const createUserSuccess = (payload = {}) => ({
  type: CREATE_USER_SUCCESS,
  payload
})

export const createUserError = (payload = {}) => ({
  type: CREATE_USER_ERROR,
  payload
})

export const setCurrentUser = (payload = {}) => ({
  type: SET_CUR_USER,
  payload
})