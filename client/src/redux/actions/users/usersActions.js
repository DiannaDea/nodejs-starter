import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  SET_CUR_USER,
  UPDATE_USER_REQUEST,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
  DELETE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS
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

export const deleteUserRequest = (payload = {}) => ({
  type: DELETE_USER_REQUEST,
  payload
})

export const deleteUserSuccess = (payload = {}) => ({
  type: DELETE_USER_SUCCESS,
  payload
})

export const deleteUserError = (payload = {}) => ({
  type: DELETE_USER_ERROR,
  payload
})

export const updateUserRequest = (payload = {}) => ({
  type: UPDATE_USER_REQUEST,
  payload
})

export const updateUserSuccess = (payload = {}) => ({
  type: UPDATE_USER_SUCCESS,
  payload
})

export const updateUserError = (payload = {}) => ({
  type: UPDATE_USER_ERROR,
  payload
})