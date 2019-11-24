import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { logout, loginRequest } from '../../redux/actions/auth/authActions'
import LoginFormContainer from './LoginForm.container'

const mapStateToProps = state => ({
  // username: (state.auth.user) ? state.auth.user.username : 'Username',
  // accessToken: state.auth.tokens.accessToken,
  // refreshToken: state.auth.tokens.refreshToken
})

const mapDispatchToProps = dispatch => ({
  login: (payload) => dispatch(loginRequest(payload)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer))
