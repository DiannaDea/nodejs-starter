import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
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