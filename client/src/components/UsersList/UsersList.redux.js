import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {
  getUsersRequest,
  setCurrentUser,
  deleteUserRequest,
  updateUserRequest
} from '../../redux/actions/users/usersActions'
import UsersListContainer from './UsersList.container'

const mapStateToProps = state => ({
  token: state.auth.token,
  users: state.users.data,
  curUser: state.users.curUser,
  authorizedUsed: state.auth.user,
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersRequest()),
  setCurrentUser: (payload) => dispatch(setCurrentUser(payload)),
  deleteUser: (payload) => dispatch(deleteUserRequest(payload)),
  updateUser: (payload) => dispatch(updateUserRequest(payload)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersListContainer))
