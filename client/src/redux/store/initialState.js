import {
  getTokensFromLocalStorage,
  getUserFromLocalstorage
} from '../../utils/tokenManagement'

export default {
  auth: {
    user: getUserFromLocalstorage(),
    token: getTokensFromLocalStorage(),
    error: null
  },
  users: {
    data: [],
    error: null,
    curUser: null
  },
  groups: {
    groupUsers: [],
    error: null,
  }
}
