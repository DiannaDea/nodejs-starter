import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getUsersRequest } from '../../redux/actions/users/usersActions'
import UsersListContainer from './UsersList.container'

const mapStateToProps = state => ({
  token: state.auth.token,
  users: state.users.data
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersRequest()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersListContainer))
