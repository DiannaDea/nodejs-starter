import axios from 'axios'
import { getTokensFromLocalStorage } from './tokenManagement'

export default (requestParams) => {
  const {
    url,
    method,
    data,
    params,
    isProtected
  } = requestParams

  const token = getTokensFromLocalStorage()
  
  const headers = {
    'Content-Type': 'application/json',
    ...((isProtected) ? { Authorization: token } : null),
  }

  console.log('===headers', headers)

  return axios({
    method,
    url,
    headers,
    ...({ data } || null),
    ...({ params } || null)
  })
}
