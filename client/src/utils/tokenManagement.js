import jwt from 'jsonwebtoken'

export const setTokensToLocalstorage = (token) => {
  localStorage.setItem('token', token)
}

export const getTokensFromLocalStorage = () => {
  return localStorage.getItem('token')
}

export const removeTokensFromLocalstorage = () => {
  localStorage.removeItem('token')
}

export const decodeUserFromToken = token => jwt.decode(token)

export const getUserFromLocalstorage = () => {
  const token = getTokensFromLocalStorage()

  return (token)
    ? jwt.decode(token)
    : null
}
