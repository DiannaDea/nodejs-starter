import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getUsersRequest, setCurrentUser } from '../../redux/actions/users/usersActions'
import UsersListContainer from './UsersList.container'

const mapStateToProps = state => ({
  token: state.auth.token,
  users: state.users.data,
  curUser: state.users.curUser
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersRequest()),
  setCurrentUser: (payload) => dispatch(setCurrentUser(payload)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersListContainer))
