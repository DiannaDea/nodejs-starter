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
  
  return axios({
    method,
    url,
    headers: {
      ...((isProtected) ? { Authorization: token } : null)
    },
    ...({ data } || null),
    ...({ params } || null)
  })
}
