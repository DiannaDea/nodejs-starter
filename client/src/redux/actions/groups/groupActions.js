import {
  GET_GROUP_USERS_REQUEST,
  GET_GROUP_USERS_SUCCESS,
  GET_GROUP_USERS_ERROR
} from './types'

export const getGroupUsersRequest = (payload = {}) => ({
  type: GET_GROUP_USERS_REQUEST,
  payload
})

export const getGroupUsersSuccess = (payload = {}) => ({
  type: GET_GROUP_USERS_SUCCESS,
  payload
})

export const getGroupUsersError = (payload = {}) => ({
  type: GET_GROUP_USERS_ERROR,
  payload
})