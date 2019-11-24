import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { createUserRequest } from '../../redux/actions/users/usersActions'
import CreateUserFromContainer from './CreateUserForm.container'

const mapStateToProps = state => ({
  users: state.users.data
})

const mapDispatchToProps = dispatch => ({
  createUser: (payload) => dispatch(createUserRequest(payload)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateUserFromContainer))
