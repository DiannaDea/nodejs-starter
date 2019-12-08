import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { logout, loginRequest } from '../../redux/actions/auth/authActions'
import HeaderContainer from './Header.container'

const mapStateToProps = state => ({
  authorizedUsed: state.auth.user,
})

const mapDispatchToProps = dispatch => ({
  login: (payload) => dispatch(loginRequest(payload)),
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer))
